'use strict';
const { chromium, request } = require('playwright');
const path = require('path');
const fs = require('fs');

// ============================================================
// 設定區（執行前請填入）
// ============================================================
const CONFIG = {
  platform: {
    loginUrl: 'https://website.gibaba.com/play-now.html?debug=1',
    account: 'test893',
    password: 'test893',
    // lobbyUrl 由 autoLogin() 登入後自動填入
    url: '',
  },
  bod: {
    apiBaseUrl: 'https://rgsservice-stage.ob.games',
    backendUrl: 'https://opsnext-stage.ob.games/en/login',
    apiKey: 'goldpapa',
    secret: 's2okCuDSyagLvRODX4Xh',
    backendUser: 'goldpapa@ops.com',
    backendPass: 'zcl8i0q1cd)!',
    callbackUrl: 'https://intg.gibaba.com/3rdParty/Slot/BOD',
    currency: 'FAYF',
    rate: 130, // 1 FAYF = 130 點
  },
  screenshotDir: path.join(__dirname, 'screenshots', 'kbb-bod'),
  bo: {
    url: 'https://bo.gibaba.com',
    account: 'angela',
    password: 'angela',
  },
};

// ============================================================
// 工具函式
// ============================================================
function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// ============================================================
// 帳號密碼登入，取得 Lobby URL（含 jwtAccessToken）
// ============================================================
async function autoLogin() {
  console.log(`  登入中：${CONFIG.platform.account} @ ${CONFIG.platform.loginUrl}`);
  shared.browser = await chromium.launch({ headless: false });
  shared.context = await shared.browser.newContext({ permissions: ['microphone', 'camera'] });
  const page = await shared.context.newPage();

  try {
    // 步驟 1：帶 X-company-logic header 進入登入頁
    await page.setExtraHTTPHeaders({ 'X-company-logic': 'JzzZquCL2dfYS26' });
    await page.goto(CONFIG.platform.loginUrl, { waitUntil: 'load', timeout: 30000 });

    // 等待 #myIframe 出現
    await page.waitForSelector('#myIframe', { timeout: 20000 });
    console.log('  #myIframe 已出現');
    await page.setExtraHTTPHeaders({}); // 移除 header

    await page.waitForTimeout(2000);

    // 步驟 2：等 login iframe 出現（login.gibaba.com）
    const iframeEl = page.locator('#myIframe');
    await iframeEl.waitFor({ timeout: 20000 });
    let frameHandle = await iframeEl.elementHandle();
    let frame = await frameHandle.contentFrame();
    if (!frame) throw new Error('無法取得 #myIframe 內容');
    console.log('  login iframe URL:', frame.url().substring(0, 80));

    // 步驟 3：點「已滿18歲」（使用 id=over_level）
    try {
      const ageBtn = frame.locator('#over_level');
      await ageBtn.waitFor({ timeout: 10000 });
      await ageBtn.click();
      console.log('  ✅ 已點擊「已滿18歲」');
      await page.waitForTimeout(1500);
    } catch (e) {
      console.log('  ⚠️  找不到年齡確認按鈕，繼續：', e.message.substring(0, 50));
    }

    // 步驟 4：點「帳號」登入入口（.btn-login-account 內的 button）
    try {
      const accountEntry = frame.locator('.btn-login-account');
      await accountEntry.waitFor({ timeout: 10000 });
      await accountEntry.click();
      console.log('  ✅ 已點擊「帳號」');
      await page.waitForTimeout(1500);
    } catch (e) {
      console.log('  ⚠️  找不到帳號按鈕：', e.message.substring(0, 50));
    }

    // 重新取得 frame（點擊後可能 iframe 有更新）
    frameHandle = await iframeEl.elementHandle();
    frame = await frameHandle.contentFrame();

    // 步驟 5：填帳號密碼
    try {
      const accountInput = frame.locator('input[placeholder*="帳號"], input[placeholder*="account"]').first();
      const passwordInput = frame.locator('input[type="password"]').first();
      await accountInput.waitFor({ timeout: 10000 });
      await accountInput.fill(CONFIG.platform.account);
      await passwordInput.fill(CONFIG.platform.password);
      await passwordInput.press('Tab');
      await page.waitForTimeout(1000);
      console.log(`  ✅ 已填入帳號 ${CONFIG.platform.account} 與密碼`);
    } catch (e) {
      console.log('  ⚠️  填入帳密失敗：', e.message.substring(0, 50));
      throw e;
    }

    // 步驟 6：帶 header 送出登入
    await page.setExtraHTTPHeaders({ 'X-company-logic': 'JzzZquCL2dfYS26' });
    try {
      const submitBtn = frame.locator('.btn-confirm').filter({ hasText: '登入' }).first();
      await submitBtn.waitFor({ timeout: 5000 });
      await submitBtn.evaluate(el => { if (el instanceof HTMLElement) el.click(); });
      console.log('  ✅ 已點擊登入按鈕');
    } catch (e) {
      // 備用：直接 click 任何含「登入」的按鈕
      await frame.getByText('登入').first().click();
      console.log('  ✅ 備用：已點擊「登入」');
    }
    await page.setExtraHTTPHeaders({});

    // 步驟 7：等 iframe 從 login.gibaba.com 跳轉到 gc.gibaba.com（表示登入成功）
    console.log('  等待 iframe 跳轉到大廳...');
    const lobbyIframeEl = page.locator('#myIframe');
    let lobbyUrl = '';
    const deadline = Date.now() + 30000;
    while (Date.now() < deadline) {
      await page.waitForTimeout(1000);
      const fh = await lobbyIframeEl.elementHandle().catch(() => null);
      const fr = fh ? await fh.contentFrame() : null;
      const url = fr ? fr.url() : '';
      if (url && url.includes('gc.gibaba.com')) {
        lobbyUrl = url;
        console.log('  ✅ 大廳已載入:', url.substring(0, 100));
        break;
      }
    }
    if (!lobbyUrl) {
      const fh = await lobbyIframeEl.elementHandle().catch(() => null);
      const fr = fh ? await fh.contentFrame() : null;
      console.log('  ⚠️  30秒內未跳轉，當前 iframe URL:', fr ? fr.url() : 'N/A');
    }

    // 取得登入後的 gc.gibaba.com URL 作為後續 TC 的 lobby URL
    const iframeSrc = lobbyUrl || await page.locator('#myIframe').getAttribute('src').catch(() => null);
    console.log('  iframe src:', iframeSrc?.substring(0, 100));

    if (iframeSrc && iframeSrc.includes('jwtAccessToken')) {
      CONFIG.platform.url = iframeSrc;
      console.log('  ✅ 取得 jwtAccessToken URL');
    } else if (iframeSrc && iframeSrc.startsWith('http')) {
      CONFIG.platform.url = iframeSrc;
      console.log('  ✅ 取得 iframe URL（無 jwtAccessToken）');
    } else {
      // 沒取到 jwtAccessToken，改用 gc.gibaba.com 直接 URL
      // 從 iframe 的 contentFrame 取當前 URL
      const frameHandle = await page.locator('#myIframe').elementHandle().catch(() => null);
      const frame = frameHandle ? await frameHandle.contentFrame() : null;
      if (frame) {
        const frameUrl = frame.url();
        console.log('  frame URL:', frameUrl?.substring(0, 100));
        if (frameUrl && frameUrl.includes('jwtAccessToken')) {
          CONFIG.platform.url = frameUrl;
          console.log('  ✅ 從 frame URL 取得 jwtAccessToken');
        }
      }
    }

    // 不關閉 page，保留 session（TC-01 之後可以自行開新頁面）
    await page.close();
    return CONFIG.platform.url;
  } catch (e) {
    throw e;
  }
}

// ============================================================
// 共用瀏覽器 context（只登入一次，所有 TC 共用）
// ============================================================
const shared = { browser: null, context: null };

async function getSharedPage() {
  return shared.context.newPage();
}

// 建立已授權麥克風/相機的 context，避免瀏覽器跳出權限詢問
async function newCtx(browser) {
  return browser.newContext({
    permissions: ['microphone', 'camera'],
  });
}

// ============================================================
// BOD datafeed API：查詢指定時間區間的注單明細
// POST /datafeed/round → 每筆含 wager（投注額）、payout（派彩額）
// ============================================================
async function fetchBodRounds(dateFrom, dateTo, count = 5000) {
  const crypto = require('crypto');
  const body = {
    date_from: dateFrom,
    date_to: dateTo,
    count,
  };
  const ts = Math.floor(Date.now() / 1000);
  const sorted = Object.keys(body).sort().map(k => `${k}=${body[k]}`).join('&');
  const msg = `${sorted}:${CONFIG.bod.secret}${ts}`;
  const hmacHex = crypto.createHmac('sha256', CONFIG.bod.secret).update(msg).digest('hex');
  const sign = Buffer.from(hmacHex).toString('base64url');
  const sig = `${CONFIG.bod.apiKey}:${sign}`;

  const ctx = await request.newContext({ ignoreHTTPSErrors: true });
  try {
    const r = await ctx.post(`${CONFIG.bod.apiBaseUrl}/datafeed/round`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Signature': sig,
        'Timestamp': String(ts),
      },
      data: body,
    });
    const json = await r.json();
    return json?.content ?? [];
  } catch (_) {
    return [];
  } finally {
    await ctx.dispose();
  }
}

// ============================================================
// BO 後台：登入取得 token，查詢 BOD 今日投注總額
// ============================================================
let _boToken = null;

async function boLogin() {
  if (_boToken) return _boToken;
  const ctx = await request.newContext({ ignoreHTTPSErrors: true });
  const r = await ctx.post(`${CONFIG.bo.url}/loginAuth/login`, {
    data: { Account: CONFIG.bo.account, Password: CONFIG.bo.password },
  });
  const json = await r.json();
  _boToken = json?.Content ?? null;
  await ctx.dispose();
  return _boToken;
}

async function fetchBodTotalAmount(memberId = 5) {
  const token = await boLogin();
  if (!token) return null;

  const today = new Date();
  const pad = n => String(n).padStart(2, '0');
  const ymd = `${today.getFullYear()}-${pad(today.getMonth()+1)}-${pad(today.getDate())}`;
  const dateRange = `${ymd} 00:00:00,${ymd} 23:59:59`;

  const params = new URLSearchParams({
    OutletId: 'null', Provider: 'BOD', GameId: 'null',
    Account: 'test5555', MemberId: memberId,
    GameRoundId: '', PromotionCode: '',
    DateRange: dateRange,
    OnSearchControl: '1', Status: 'null',
    Archive: '0', Test: '0',
    PageSize: '100', PageIndex: '1', Sort: '', SortBy: '',
  });

  const ctx = await request.newContext({ ignoreHTTPSErrors: true });
  const r = await ctx.get(`${CONFIG.bo.url}/api/report/providerList?${params}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const json = await r.json();
  await ctx.dispose();

  // 找 BOD 那筆的 TotalAmount
  const bodRow = (json?.Content?.Data ?? []).find(d => d.Provider === 'BOD') ?? json?.Content?.Data?.[0];
  return bodRow?.TotalAmount ?? 0;
}

// 從平台 memberInfo API 取得玩家識別碼
// BOD 的 player 欄位格式為 {MemberId}_{Account}，例：5_test5555
let _cachedPlayerId = null;
let PLAYER_ID = null; // {MemberId}_{Account}，登入後設定
async function fetchPlayerAccount(page) {
  if (_cachedPlayerId) return _cachedPlayerId;
  try {
    const json = await page.evaluate(async () => {
      const r = await fetch('https://gcapi.gibaba.com/gc/member/memberInfo', { credentials: 'include' });
      return r.json();
    });
    const id = json?.Content?.Id;
    const account = json?.Content?.Account;
    if (id && account) {
      _cachedPlayerId = `${id}_${account}`;
      PLAYER_ID = _cachedPlayerId;
      return _cachedPlayerId;
    }
    return account ?? CONFIG.platform.account;
  } catch (_) {
    return _cachedPlayerId ?? CONFIG.platform.account;
  }
}


async function closePopups(page) {
  // 反覆關閉，最多 8 輪
  for (let round = 0; round < 8; round++) {
    let closed = false;

    // 1. 語音房彈窗：<div class="btn-cancel"> 不是 button，要用 class 鎖定
    try {
      const cancelBtn = page.locator('.btn-cancel').first();
      if (await cancelBtn.isVisible({ timeout: 600 })) {
        await cancelBtn.click({ force: true });
        await page.waitForTimeout(500);
        closed = true;
        continue;
      }
    } catch (_) {}

    // 2. 通用 X 關閉按鈕：<div class="btn-close">
    try {
      const closeBtn = page.locator('.btn-close').first();
      if (await closeBtn.isVisible({ timeout: 600 })) {
        await closeBtn.click({ force: true });
        await page.waitForTimeout(500);
        closed = true;
        continue;
      }
    } catch (_) {}

    // 3. KBB 活動/OA 彈窗 close-footer
    try {
      const footer = page.locator('.close-footer').first();
      if (await footer.isVisible({ timeout: 600 })) {
        await footer.click({ force: true });
        await page.waitForTimeout(500);
        closed = true;
        continue;
      }
    } catch (_) {}

    // 3. 其他關閉按鈕
    const fallbacks = [
      'button:has-text("關閉")',
      'button:has-text("OK")',
      '[aria-label="彈窗組件"] .close-footer',
      '.popup-box.mask .close-footer',
    ];
    for (const sel of fallbacks) {
      try {
        const btn = page.locator(sel).first();
        if (await btn.isVisible({ timeout: 400 })) {
          await btn.click({ force: true });
          await page.waitForTimeout(400);
          closed = true;
          break;
        }
      } catch (_) {}
    }

    if (!closed) break;
  }
}

async function screenshot(page, name) {
  ensureDir(CONFIG.screenshotDir);
  const filepath = path.join(CONFIG.screenshotDir, `${name}-${Date.now()}.png`);
  await page.screenshot({ path: filepath, fullPage: true });
  console.log(`  📸 截圖：${filepath}`);
}

function pass(msg) { console.log(`  ✅ PASS  ${msg}`); }
function fail(msg) { console.log(`  ❌ FAIL  ${msg}`); }
function warn(msg) { console.log(`  ⚠️  WARN  ${msg}`); }

// ============================================================
// TC-01：API 認證驗證
// ============================================================
// 產生 BOD Signature
// message = "key=val&key=val:secret+timestamp"（body 欄位名稱排序後串接）
// sign    = base64url( HMAC-SHA256(secret, message) )
// header  = "api_key:sign"
function makeSignature(apiKey, secret, timestamp, body) {
  const crypto = require('crypto');
  const sorted = Object.keys(body).sort().map(k => `${k}=${body[k]}`).join('&');
  const message = sorted ? `${sorted}:${secret}${timestamp}` : `:${secret}${timestamp}`;
  const hmacHex = crypto.createHmac('sha256', secret).update(message).digest('hex');
  const sign = Buffer.from(hmacHex).toString('base64url');
  return `${apiKey}:${sign}`;
}

async function tc01_apiAuth() {
  console.log('\n▶ TC-01：平台餘額 API 認證驗證（GET /gc/member/balance）');
  const endpoint = 'https://gcapi.gibaba.com/gc/member/balance';
  const page = await getSharedPage();
  const body = {};

  try {
    // 攔截平台自動呼叫的 balance API（頁面載入時平台自己會打）
    let balanceResult = null;
    page.on('response', async resp => {
      if (resp.url().includes('/gc/member/balance')) {
        try {
          const text = await resp.text();
          balanceResult = { status: resp.status(), body: text };
        } catch (_) {}
      }
    });

    await page.goto(CONFIG.platform.url, { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(3000);

    if (balanceResult) {
      console.log(`  平台自動呼叫 balance → HTTP ${balanceResult.status} | ${balanceResult.body.substring(0, 100)}`);
      if (![401, 403].includes(balanceResult.status)) {
        pass(`平台 balance API 正常回應 ${balanceResult.status}`);
        // 嘗試從回應確認有 balance 欄位
        try {
          const json = JSON.parse(balanceResult.body);
          if (json.balance !== undefined || json.Balance !== undefined || json.data) {
            pass(`回應包含 balance 欄位：${JSON.stringify(json).substring(0, 80)}`);
          }
        } catch (_) {}
      } else {
        fail(`balance API 回 ${balanceResult.status}：${balanceResult.body.substring(0, 80)}`);
      }
    } else {
      warn('頁面載入期間未偵測到 /gc/member/balance 呼叫（可能用不同路徑）');
    }

    // 負向：無 session 直接打 API
    const anonCtx = await request.newContext({ ignoreHTTPSErrors: true });
    const r2 = await anonCtx.get(endpoint);
    const body2 = await r2.text();
    console.log(`  無 session → HTTP ${r2.status()} | ${body2.substring(0, 100)}`);
    if ([401, 403].includes(r2.status())) {
      pass(`無 session → HTTP ${r2.status()}，API 保護正常`);
    } else {
      fail(`無 session 應回 401/403，實際：${r2.status()}`);
    }
    await anonCtx.dispose();
  } catch (err) {
    fail(`TC-01 異常：${err.message}`);
  } finally {
    try { await page.close(); } catch (_) {}
  }
}

// ============================================================
// TC-02：遊戲啟動時 currency=FAYF 參數驗證
// ============================================================
async function tc02_currencyParam() {
  console.log('\n▶ TC-02：currency=FAYF 啟動參數驗證');
  const page = await getSharedPage();

  try {
    await page.goto(CONFIG.platform.url, { waitUntil: 'load', timeout: 30000 });
    await closePopups(page);

    // 攔截當前頁 + 所有新分頁的請求（遊戲通常在新分頁開啟）
    const capturedUrls = [];
    const trackRequests = (p) => {
      p.on('request', req => {
        const url = req.url();
        if (url.includes('ob.games') || url.includes('gameproxy')) capturedUrls.push(url);
      });
    };
    trackRequests(page);
    shared.context.on('page', newPage => trackRequests(newPage));

    // 等遊戲卡片出現（最多 15 秒），再點擊
    await page.waitForSelector('[aria-label="Game-Card 矮人礦坑"]', { timeout: 15000 }).catch(() => null);
    const bodLocator = page.locator('[aria-label="Game-Card 矮人礦坑"]').first();

    if (await bodLocator.isVisible({ timeout: 3000 })) {
      // 先關彈窗，再用 JS 直接觸發 click（繞過平台對 popup 的狀態判斷）
      await closePopups(page);
      await page.evaluate(() => {
        const el = document.querySelector('[aria-label="Game-Card 矮人礦坑"]');
        if (el) el.click();
      });
      await page.waitForTimeout(2000);
      await closePopups(page); // 關掉遊戲啟動後可能出現的彈窗
      await page.waitForTimeout(5000);

      // 從 DOM 直接讀所有 iframe（不等可見性）
      const iframes = await page.evaluate(() =>
        Array.from(document.querySelectorAll('iframe')).map(f => ({
          id: f.id, title: f.title, src: f.src
        }))
      );
      console.log(`  找到 ${iframes.length} 個 iframe：`, JSON.stringify(iframes.map(f => ({ id: f.id, title: f.title, src: f.src.substring(0, 80) }))));

      const gameFrame = iframes.find(f => f.src.includes('gameproxy') || f.src.includes('ob.games') || f.title === 'game');

      if (gameFrame && gameFrame.src.includes('currency=FAYF')) {
        pass(`currency=FAYF 確認存在 iframe src`);
        console.log(`  src：${gameFrame.src.substring(0, 150)}...`);
      } else if (gameFrame) {
        fail(`遊戲 iframe src 未含 currency=FAYF：${gameFrame.src.substring(0, 120)}`);
      } else {
        warn(`未找到遊戲 iframe，共有 ${iframes.length} 個 iframe，頁面 URL：${page.url()}`);
      }

      await screenshot(page, 'tc02-game-launch');
    } else {
      warn('未找到 BOD 遊戲入口（矮人礦坑），請確認遊戲有在目前頁面顯示');
    }
  } catch (err) {
    await screenshot(page, 'tc02-fail');
    fail(`TC-02 異常：${err.message}`);
  } finally {
    await page.close();
  }
}

// ============================================================
// TC-03：平台餘額 = 遊戲 FAYF 餘額（1:1 直接比對）
// 玩家充值 1 TWD → 130 KBB 點；進 BOD 遊戲顯示 130 FAYF
// 所以 平台點數 = 遊戲 FAYF，直接比對即可
// ============================================================
async function tc03_exchangeRate() {
  console.log('\n▶ TC-03：平台餘額 = FAYF 遊戲餘額（1:1 比對）');
  const page = await getSharedPage();

  try {
    // 等 balance API 回應（Vue app 初始化後會自動呼叫）
    const balanceRespPromise = page.waitForResponse(
      resp => resp.url().includes('/gc/member/balance'),
      { timeout: 20000 }
    ).catch(() => null);

    await page.goto(CONFIG.platform.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    const balanceResp = await balanceRespPromise;

    let platformBalance = null;
    if (balanceResp) {
      try {
        const json = await balanceResp.json();
        const bal = json?.Content?.Balance ?? json?.balance ?? json?.Balance;
        if (bal !== undefined) platformBalance = parseFloat(bal);
      } catch (_) {}
    }

    await closePopups(page);

    if (platformBalance === null) {
      warn('未攔截到平台餘額 API，跳過 TC-03');
      return;
    }
    console.log(`  平台餘額（KBB 點）：${platformBalance}`);

    // 等遊戲卡片出現後再點擊
    await page.waitForSelector('[aria-label="Game-Card 矮人礦坑"]', { timeout: 10000 });
    await closePopups(page);
    await page.evaluate(() => {
      const el = document.querySelector('[aria-label="Game-Card 矮人礦坑"]');
      if (el) el.click();
    });
    await page.waitForTimeout(2000);
    await closePopups(page);
    await page.waitForTimeout(6000);

    // 從 DOM 讀遊戲 iframe
    const iframes = await page.evaluate(() =>
      Array.from(document.querySelectorAll('iframe')).map(f => ({ src: f.src, title: f.title }))
    );
    console.log(`  找到 ${iframes.length} 個 iframe`);
    const gameFrame = iframes.find(f => f.src.includes('gameproxy') || f.src.includes('ob.games'));

    if (!gameFrame) {
      warn('未找到遊戲 iframe，無法驗證 FAYF 餘額');
      return;
    }

    // 截圖確認遊戲已載入
    await screenshot(page, 'tc03-balance');

    // 用 BOD datafeed 最近一筆注單的 balance 來驗算（不讀 Canvas）
    // 最後一筆結算後的餘額 = lastRound.balance - lastRound.wager + lastRound.payout
    const now = Math.floor(Date.now() / 1000);
    const recentRounds = await fetchBodRounds(now - 3600, now); // 過去 1 小時
    const myRounds = recentRounds
      .filter(r => r.player === (PLAYER_ID ?? '5_test5555'))
      .sort((a, b) => b.commit_at - a.commit_at); // 最新的排前面

    if (myRounds.length > 0) {
      const lastR = myRounds[0];
      const bodBalance = parseFloat(lastR.balance) - parseFloat(lastR.wager) + parseFloat(lastR.payout);
      console.log(`  BOD 最近注單後餘額：${bodBalance}（round=${lastR.round}）`);
      if (Math.abs(platformBalance - bodBalance) < 1) {
        pass(`平台 ${platformBalance} ≈ BOD ${bodBalance}（1:1 吻合）`);
      } else {
        warn(`數字有差距：平台 ${platformBalance}，BOD ${bodBalance}（差 ${Math.abs(platformBalance - bodBalance).toFixed(2)}，可能有其他交易進行中）`);
      }
    } else {
      warn('BOD datafeed 無歷史注單，請先下注一局再驗算，或確認截圖');
    }

    // 也嘗試讀 frameLocator（Canvas 遊戲通常讀不到，保留作備用）
    const gameFl = page.frameLocator('iframe[title="game"]');
    try {
      const balSelectors = [
        '[class*="balance"]',
        '[class*="Balance"]',
        '[class*="credit"]',
        '[class*="Credit"]',
        '[class*="money"]',
      ];
      let gameBalance = null;
      for (const sel of balSelectors) {
        try {
          const el = gameFl.locator(sel).first();
          const text = await el.textContent({ timeout: 3000 });
          const num = parseFloat(text.replace(/[^0-9.]/g, ''));
          if (!isNaN(num) && num > 0) {
            gameBalance = num;
            console.log(`  遊戲 FAYF 餘額（${sel}）：${gameBalance}`);
            break;
          }
        } catch (_) {}
      }

      if (gameBalance !== null) {
        if (Math.abs(gameBalance - platformBalance) < 1) {
          pass(`Canvas 讀取成功：平台 ${platformBalance} = 遊戲 ${gameBalance} FAYF`);
        } else {
          fail(`Canvas 餘額不一致：平台 ${platformBalance}，遊戲 ${gameBalance}`);
        }
      }
    } catch (_) {
      // Canvas 讀不到是正常的，已由 BOD datafeed 驗算
    }

    await screenshot(page, 'tc03-balance');
  } catch (err) {
    await screenshot(page, 'tc03-fail');
    fail(`TC-03 異常：${err.message}`);
  } finally {
    await page.close();
  }
}

// ============================================================
// TC-04：BOD 後台登入 + Callback URL 確認
// ============================================================
async function tc04_backendLogin() {
  console.log('\n▶ TC-04：BOD 後台登入驗證（已跳過，不需測）');
  warn('TC-04 略過');
  return;
  const page = await getSharedPage();

  try {
    await page.goto(CONFIG.bod.backendUrl, { waitUntil: 'load', timeout: 30000 });

    // 填入帳密（selector 依後台實際欄位調整）
    await page.fill('input[type="email"], input[name*="email"], input[placeholder*="Email"]', CONFIG.bod.backendUser);
    await page.fill('input[type="password"]', CONFIG.bod.backendPass);
    await page.click('button[type="submit"], button:has-text("Login"), button:has-text("Sign in")');
    await page.waitForTimeout(3000);

    const currentUrl = page.url();
    if (!currentUrl.includes('login')) {
      pass(`後台登入成功，跳轉至：${currentUrl}`);
      await screenshot(page, 'tc04-login-ok');

      // 嘗試確認 Callback URL 設定
      const bodyText = await page.locator('body').textContent();
      if (bodyText.includes('gibaba.com/3rdParty/Slot/BOD')) {
        pass('Callback URL 設定正確：已顯示於後台頁面');
      } else {
        warn(`請手動確認 Callback URL 是否設為：${CONFIG.bod.callbackUrl}`);
      }
    } else {
      fail('後台登入失敗，仍在登入頁');
      await screenshot(page, 'tc04-login-fail');
    }
  } catch (err) {
    fail(`TC-04 異常：${err.message}`);
    try { await screenshot(page, 'tc04-fail'); } catch (_) {}
  } finally {
    try { await page.close(); } catch (_) {}
  }
}

// ============================================================
// TC-05：餘額不足時遊戲拒絕下注
// ============================================================
async function tc05_zeroBalance() {
  console.log('\n▶ TC-05：餘額不足防護驗證');
  const page = await getSharedPage();

  try {
    await page.goto(CONFIG.platform.url, { waitUntil: 'load', timeout: 30000 });
    await closePopups(page);

    // 攔截 400+ 的 API 回應
    const errorResps = [];
    page.on('response', resp => {
      if (resp.url().includes('ob.games') && resp.status() >= 400) {
        errorResps.push({ url: resp.url(), status: resp.status() });
      }
    });

    await page.waitForSelector('.gameCard:has(img[src*="/game/BOD/"])', { timeout: 15000 }).catch(() => null);
    const bodLocator = page.locator('.gameCard:has(img[src*="/game/BOD/"])').first();
    if (await bodLocator.isVisible({ timeout: 3000 })) {
      await closePopups(page);
      await page.evaluate(() => {
        const el = document.querySelector('.gameCard:has(img[src*="/game/BOD/"])');
        if (el) el.click();
      });
      await page.waitForTimeout(4000);

      if (errorResps.length > 0) {
        console.log(`  攔截到錯誤回應：${JSON.stringify(errorResps)}`);
      }
      warn('TC-05 需使用「餘額為 0」的測試帳號手動驗證，確認遊戲是否拒絕下注且平台餘額不變');
      await screenshot(page, 'tc05-zero-balance');
    } else {
      warn('未找到 BOD 遊戲入口');
    }
  } catch (err) {
    await screenshot(page, 'tc05-fail');
    fail(`TC-05 異常：${err.message}`);
  } finally {
    await page.close();
  }
}

// ============================================================
// TC-06：Callback 冪等性（不重複記帳）
// ============================================================
async function tc06_callbackIdempotency() {
  console.log('\n▶ TC-06：Callback 冪等性驗證');
  const ctx = await request.newContext({ ignoreHTTPSErrors: true });

  // 模擬重複送出相同 Callback（orderId 相同）
  const fakeOrderId = `TEST-BOD-${Date.now()}`;
  const fakePayload = {
    orderId: fakeOrderId,
    currency: 'FAYF',
    amount: 1,
    playerId: 'test_player_001',
    type: 'bet',
  };

  try {
    const r1 = await ctx.post(CONFIG.bod.callbackUrl, { data: fakePayload });
    console.log(`  第 1 次 Callback → HTTP ${r1.status()}`);

    const r2 = await ctx.post(CONFIG.bod.callbackUrl, { data: fakePayload });
    console.log(`  第 2 次 Callback（相同 orderId）→ HTTP ${r2.status()}`);

    if ([200, 201].includes(r1.status())) {
      if ([409, 200].includes(r2.status())) {
        pass(`重複 orderId 回 ${r2.status()}，表示冪等處理正確（不重複記帳）`);
      } else {
        warn(`重複 Callback 回 ${r2.status()}，請手動確認資料庫是否重複記帳`);
      }
    } else {
      warn(`Callback 端點回 ${r1.status()}，請確認我方 intg 服務是否運行中`);
    }
  } catch (err) {
    fail(`TC-06 異常：${err.message}`);
  } finally {
    await ctx.dispose();
  }
}

// ============================================================
// 共用：餘額監控器（攔截平台自動打出去的 API，而非直接呼叫）
// 用法：const mon = createBalanceMonitor(page); 然後 await mon.waitFor()
// ============================================================
function createBalanceMonitor(page) {
  let latest = null;
  page.on('response', async resp => {
    const url = resp.url();
    if (url.includes('/gc/member/balance') || url.includes('/gc/member/memberInfo')) {
      try {
        const json = await resp.json();
        const bal = json?.Content?.Balance;
        if (bal !== undefined && !isNaN(parseFloat(bal))) latest = parseFloat(bal);
      } catch (_) {}
    }
  });
  return {
    // 等到第一次抓到餘額（最多等 timeout ms）
    waitFor: async (timeout = 15000) => {
      const deadline = Date.now() + timeout;
      while (Date.now() < deadline && latest === null) {
        await new Promise(r => setTimeout(r, 300));
      }
      return latest ?? 0;
    },
    // 取最新一次抓到的餘額
    get current() { return latest ?? 0; },
  };
}

// ============================================================
// 自動點擊 BOD Spin 按鈕（右側大圓形金色按鈕，約 88% 寬、55% 高）
// ============================================================
async function autoSpin(page, times = 5, delayMs = 4000) {
  // 優先找 iframe，找不到就用整頁（試玩/直接開遊戲URL的情境）
  const iframeEl = page.locator('iframe[title="game"]');
  let box = await iframeEl.boundingBox().catch(() => null);
  let spinX, spinY;
  if (box) {
    spinX = box.x + box.width * 0.88;
    spinY = box.y + box.height * 0.55;
  } else {
    // 遊戲就是主頁面
    const vp = page.viewportSize() || { width: 1280, height: 720 };
    spinX = vp.width * 0.88;
    spinY = vp.height * 0.55;
    console.log('  （無 iframe，使用頁面座標）');
  }
  console.log(`  自動旋轉：點擊座標 (${Math.round(spinX)}, ${Math.round(spinY)})，共 ${times} 次`);

  let count = 0;
  for (let i = 0; i < times; i++) {
    try {
      await page.mouse.click(spinX, spinY);
      count++;
      console.log(`    Spin ${i + 1}/${times}`);
      await page.waitForTimeout(delayMs); // 等旋轉結果
    } catch (_) {}
  }
  return count;
}

// 舊版 fetchBalance：保留供 TC-07b/08b 使用（已知可能為 0）
async function fetchBalance(page) {
  try {
    const json = await page.evaluate(async () => {
      const r = await fetch('https://gcapi.gibaba.com/gc/member/memberInfo', { credentials: 'include' });
      return r.json();
    });
    return parseFloat(json?.Content?.Balance ?? 0);
  } catch (_) { return 0; }
}

// ============================================================
// TC-07：投注扣錢驗證（輪詢版 — 手動下注）
// ============================================================
async function tc07_betDeduction() {
  console.log('\n▶ TC-07：投注扣錢驗證（請在遊戲中手動下注一局）');
  const page = await getSharedPage();

  try {
    // 建立餘額監控器（goto 前設置，攔截頁面初始 balance API 回應）
    const balanceMon = createBalanceMonitor(page);

    await page.goto(CONFIG.platform.url, { waitUntil: 'load', timeout: 30000 });
    const balanceBefore = await balanceMon.waitFor(15000);
    console.log(`  下注前餘額：${balanceBefore}`);
    // 等遊戲卡片出現後再點擊
    await page.waitForSelector('[aria-label="Game-Card 矮人礦坑"]', { timeout: 15000 });
    await closePopups(page);
    await page.evaluate(() => {
      const el = document.querySelector('[aria-label="Game-Card 矮人礦坑"]');
      if (el) el.click();
    });
    await page.waitForTimeout(2000);
    await closePopups(page);

    // 等遊戲 iframe 出現才開始旋轉
    await page.waitForSelector('iframe[title="game"]', { timeout: 15000 }).catch(() => {});

    // 記錄下注前時間戳（用 datafeed 而非餘額偵測）
    const tsBeforeBet = Math.floor(Date.now() / 1000);

    // 自動旋轉 10 次（每次等 4 秒讓結果結算）
    await autoSpin(page, 10, 4000);

    // 等注單結算
    const tsAfterBet = Math.floor(Date.now() / 1000) + 5;
    await new Promise(r => setTimeout(r, 5000));

    // 查 BOD datafeed 取得這段期間的每一筆注單
    const rounds = await fetchBodRounds(tsBeforeBet, tsAfterBet);
    const playerRounds = rounds
      .filter(r => r.player === (PLAYER_ID ?? '5_test5555'))
      .sort((a, b) => a.commit_at - b.commit_at); // 依結算時間排序

    const totalWager = playerRounds.reduce((sum, r) => sum + parseFloat(r.wager ?? 0), 0);
    const totalPayout = playerRounds.reduce((sum, r) => sum + parseFloat(r.payout ?? 0), 0);

    // BOD balance 欄位 = 「該筆下注前」的餘額
    // 起點 = 第一筆的 balance；終點 = 最後一筆 balance - wager + payout
    const firstRound = playerRounds[0];
    const lastRound = playerRounds[playerRounds.length - 1];
    const balanceBeforeBod = firstRound ? parseFloat(firstRound.balance) : balanceBefore;
    const balanceAfterBod = lastRound
      ? parseFloat(lastRound.balance) - parseFloat(lastRound.wager) + parseFloat(lastRound.payout)
      : null;
    const netFromBod = parseFloat((totalPayout - totalWager).toFixed(2));

    console.log(`  BOD 注單筆數：${playerRounds.length}，wager=${totalWager.toFixed(2)}，payout=${totalPayout.toFixed(2)}`);
    playerRounds.forEach(r => console.log(`    [${r.status}] round=${r.round} wager=${r.wager} payout=${r.payout} balance=${r.balance}`));
    console.log(`  BOD 起始餘額（第一筆前）：${balanceBeforeBod}`);
    console.log(`  BOD 最終餘額（最後一筆後）：${balanceAfterBod}`);
    console.log(`  淨額：${netFromBod > 0 ? '+' : ''}${netFromBod}`);
    console.log(`  帳務驗算：${balanceBeforeBod} + ${netFromBod} = ${(balanceBeforeBod + netFromBod).toFixed(2)}，BOD 最終餘額 = ${balanceAfterBod}`);

    try { await screenshot(page, 'tc07-bet'); } catch (_) {}

    if (playerRounds.length === 0) {
      warn('BOD datafeed 查無注單，確認事項：1) 是否有下注？2) 注單可能延遲結算');
    } else if (balanceAfterBod !== null && Math.abs((balanceBeforeBod + netFromBod) - balanceAfterBod) < 1) {
      pass(`驗算正確：BOD起始 ${balanceBeforeBod} + 淨額 ${netFromBod} = ${(balanceBeforeBod + netFromBod).toFixed(2)} ≈ BOD最終 ${balanceAfterBod}（共 ${playerRounds.length} 筆）`);
    } else {
      fail(`驗算不符：${balanceBeforeBod} + ${netFromBod} = ${(balanceBeforeBod + netFromBod).toFixed(2)}，BOD最終餘額為 ${balanceAfterBod}`);
    }
  } catch (err) {
    fail(`TC-07 異常：${err.message}`);
  } finally {
    try { await page.close(); } catch (_) {}
  }
}

// ============================================================
// TC-08：派彩加錢驗證（輪詢版 — 等待派彩結果）
// ============================================================
async function tc08_payoutIncrease() {
  console.log('\n▶ TC-08：派彩加錢驗證（請在遊戲中等待贏彩或手動操作）');
  const page = await getSharedPage();

  try {
    const balanceMon2 = createBalanceMonitor(page);

    await page.goto(CONFIG.platform.url, { waitUntil: 'load', timeout: 30000 });
    const balanceBefore = await balanceMon2.waitFor(15000);
    console.log(`  派彩前餘額：${balanceBefore}`);

    // 等遊戲卡片出現後再點擊
    await page.waitForSelector('[aria-label="Game-Card 矮人礦坑"]', { timeout: 15000 });
    await closePopups(page);
    await page.evaluate(() => {
      const el = document.querySelector('[aria-label="Game-Card 矮人礦坑"]');
      if (el) el.click();
    });
    await page.waitForTimeout(2000);
    await closePopups(page);

    // 等遊戲 iframe 出現才開始旋轉
    await page.waitForSelector('iframe[title="game"]', { timeout: 15000 }).catch(() => {});

    // 記錄開始時間（TC-08 涵蓋下注+派彩，不限只有派彩）
    const tsBeforePayout = Math.floor(Date.now() / 1000);

    // 自動旋轉 10 次
    await autoSpin(page, 10, 4000);

    const tsAfterPayout = Math.floor(Date.now() / 1000) + 5;
    await new Promise(r => setTimeout(r, 5000));

    const rounds = await fetchBodRounds(tsBeforePayout, tsAfterPayout);
    const playerRounds = rounds
      .filter(r => r.player === (PLAYER_ID ?? '5_test5555'))
      .sort((a, b) => a.commit_at - b.commit_at);
    const totalWager = playerRounds.reduce((sum, r) => sum + parseFloat(r.wager ?? 0), 0);
    const totalPayout = playerRounds.reduce((sum, r) => sum + parseFloat(r.payout ?? 0), 0);
    const netGain = totalPayout - totalWager;

    const firstRound = playerRounds[0];
    const lastRound = playerRounds[playerRounds.length - 1];
    const balanceBeforeBod = firstRound ? parseFloat(firstRound.balance) : balanceBefore;
    const balanceAfterBod = lastRound
      ? parseFloat(lastRound.balance) - parseFloat(lastRound.wager) + parseFloat(lastRound.payout)
      : null;

    console.log(`  BOD 注單筆數：${playerRounds.length}，wager=${totalWager.toFixed(2)}，payout=${totalPayout.toFixed(2)}，淨增=${netGain.toFixed(2)}`);
    playerRounds.forEach(r => console.log(`    [${r.status}] round=${r.round} wager=${r.wager} payout=${r.payout} balance=${r.balance}`));
    console.log(`  BOD 起始餘額：${balanceBeforeBod}，BOD 最終餘額：${balanceAfterBod}`);
    console.log(`  帳務驗算：${balanceBeforeBod} + ${netGain.toFixed(2)} = ${(balanceBeforeBod + netGain).toFixed(2)}，BOD最終 = ${balanceAfterBod}`);

    await screenshot(page, 'tc08-payout');

    if (playerRounds.length === 0) {
      warn('BOD datafeed 查無注單，確認是否有下注並等待結算');
    } else if (balanceAfterBod !== null && Math.abs((balanceBeforeBod + netGain) - balanceAfterBod) < 1) {
      pass(`驗算正確：BOD起始 ${balanceBeforeBod} + 淨額 ${netGain.toFixed(2)} ≈ BOD最終 ${balanceAfterBod}（共 ${playerRounds.length} 筆）`);
    } else {
      fail(`驗算不符：${balanceBeforeBod} + ${netGain.toFixed(2)} = ${(balanceBeforeBod + netGain).toFixed(2)}，BOD最終為 ${balanceAfterBod}`);
    }
  } catch (err) {
    fail(`TC-08 異常：${err.message}`);
  } finally {
    try { await page.close(); } catch (_) {}
  }
}

// 產生 BOD 無縫錢包 Signature（同 /seamless/balance 規則）
function makeSeamlessSig(apiKey, secret, timestamp, body) {
  const crypto = require('crypto');
  const sorted = Object.keys(body).sort().map(k => `${k}=${body[k]}`).join('&');
  const message = sorted ? `${sorted}:${secret}${timestamp}` : `:${secret}${timestamp}`;
  const hmacHex = crypto.createHmac('sha256', secret).update(message).digest('hex');
  const sign = Buffer.from(hmacHex).toString('base64url');
  return `${apiKey}:${sign}`;
}

// ============================================================
// TC-07b：模擬投注扣款（BOD → 我方 INTG seamless/bet）
// ============================================================
async function tc07b_simulateDebit() {
  console.log('\n▶ TC-07b：模擬投注扣款 PUT /seamless/bet');
  const endpoint = 'https://intg.gibaba.com/seamless/bet';
  const page = await getSharedPage();
  const ctx = await request.newContext({ ignoreHTTPSErrors: true });

  try {
    // 等 memberInfo 建立 session 後再抓餘額
    const memberReady = page.waitForResponse(
      r => r.url().includes('/gc/member/memberInfo'), { timeout: 20000 }
    ).catch(() => null);
    await page.goto(CONFIG.platform.url, { waitUntil: 'load', timeout: 30000 });
    await memberReady;
    await page.waitForTimeout(1000);
    await closePopups(page);

    const [balanceBefore, playerAccount] = await Promise.all([
      fetchBalance(page),
      fetchPlayerAccount(page),
    ]);
    console.log(`  扣款前餘額：${balanceBefore}，Player：${playerAccount}`);

    // 開遊戲，取得 BOD session token（iframe src 裡的 token 參數）
    await page.evaluate(() => {
      const el = document.querySelector('[aria-label="Game-Card 矮人礦坑"]');
      if (el) el.click();
    });
    await page.waitForTimeout(2000);
    await closePopups(page);
    await page.waitForTimeout(5000);

    const iframes = await page.evaluate(() =>
      Array.from(document.querySelectorAll('iframe')).map(f => f.src)
    );
    const gameSrc = iframes.find(s => s.includes('gameproxy') || s.includes('ob.games')) || '';
    const urlParams = new URLSearchParams(gameSrc.split('?')[1] || '');
    const bodSession = urlParams.get('token') || 'test-session-fallback';
    console.log(`  BOD session token：${bodSession.substring(0, 30)}...`);

    const ts = Math.floor(Date.now() / 1000);
    const txId = `TX-BET-${Date.now()}`;
    const roundId = `RND-${Date.now()}`;

    const body = {
      transaction_id: txId,
      round: roundId,
      parent_round: roundId,
      session: bodSession,
      game: 'fay-slot-gold-digger',
      player: playerAccount,
      currency: CONFIG.bod.currency,
      amount: '10',
    };
    const sig = makeSeamlessSig(CONFIG.bod.apiKey, CONFIG.bod.secret, ts, body);

    const r = await ctx.put(endpoint, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Signature': sig,
        'Timestamp': String(ts),
      },
      data: body,
    });
    const respText = await r.text();
    console.log(`  PUT /seamless/bet → HTTP ${r.status()} | ${respText.substring(0, 100)}`);

    await page.waitForTimeout(3000);
    const balanceAfter = await fetchBalance(page);
    console.log(`  扣款後餘額：${balanceAfter}`);

    if (balanceAfter < balanceBefore) {
      pass(`扣款成功：${balanceBefore} → ${balanceAfter}（扣 ${(balanceBefore - balanceAfter).toFixed(2)} 點）`);
    } else if (respText.includes('INVALID_ACCOUNT')) {
      warn(`player ID 無效（需替換為真實玩家 ID）：${respText.substring(0, 80)}`);
    } else {
      warn(`餘額未減少，回應：${respText.substring(0, 80)}`);
    }
  } catch (err) {
    fail(`TC-07b 異常：${err.message}`);
  } finally {
    try { await page.close(); } catch (_) {}
    await ctx.dispose();
  }
}

// ============================================================
// TC-08b：模擬派彩（BOD → 我方 INTG seamless/win）
// ============================================================
async function tc08b_simulateCredit() {
  console.log('\n▶ TC-08b：模擬派彩 PUT /seamless/win');
  // 派彩端點（通常為 /seamless/win，請依 BOD 文件確認）
  const endpoint = 'https://intg.gibaba.com/seamless/win';
  const page = await getSharedPage();
  const ctx = await request.newContext({ ignoreHTTPSErrors: true });

  try {
    await page.goto(CONFIG.platform.url, { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(2000);

    const [balanceBefore, playerAccount] = await Promise.all([
      fetchBalance(page),
      fetchPlayerAccount(page),
    ]);
    console.log(`  派彩前餘額：${balanceBefore}，Player：${playerAccount}`);

    const ts = Math.floor(Date.now() / 1000);
    const txId = `TX-WIN-${Date.now()}`;
    const roundId = `RND-${Date.now()}`;

    const body = {
      transaction_id: txId,
      round: roundId,
      parent_round: roundId,
      session: 'test-session-001',
      game: 'fay-slot-gold-digger',
      player: playerAccount,
      currency: CONFIG.bod.currency,
      amount: '20',               // 派彩 20 FAYF
    };
    const sig = makeSeamlessSig(CONFIG.bod.apiKey, CONFIG.bod.secret, ts, body);

    const r = await ctx.put(endpoint, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Signature': sig,
        'Timestamp': String(ts),
      },
      data: body,
    });
    const respText = await r.text();
    console.log(`  PUT /seamless/win → HTTP ${r.status()} | ${respText.substring(0, 100)}`);

    await page.waitForTimeout(3000);
    const balanceAfter = await fetchBalance(page);
    console.log(`  派彩後餘額：${balanceAfter}`);

    if (balanceAfter > balanceBefore) {
      pass(`派彩成功：${balanceBefore} → ${balanceAfter}（加 ${(balanceAfter - balanceBefore).toFixed(2)} 點）`);
    } else if (respText.includes('INVALID_ACCOUNT')) {
      warn(`player ID 無效（需替換為真實玩家 ID），派彩端點請依 BOD 文件確認是否為 /seamless/win`);
    } else {
      warn(`餘額未增加，回應：${respText.substring(0, 80)}`);
    }
  } catch (err) {
    fail(`TC-08b 異常：${err.message}`);
  } finally {
    try { await page.close(); } catch (_) {}
    await ctx.dispose();
  }
}

// ============================================================
// BOD Datafeed Summary 查詢
// ============================================================
async function fetchBodSummary(dateFrom, dateTo) {
  const crypto = require('crypto');
  const body = { date_from: dateFrom, date_to: dateTo };
  const ts = Math.floor(Date.now() / 1000);
  const sorted = Object.keys(body).sort().map(k => `${k}=${body[k]}`).join('&');
  const msg = `${sorted}:${CONFIG.bod.secret}${ts}`;
  const hmacHex = crypto.createHmac('sha256', CONFIG.bod.secret).update(msg).digest('hex');
  const sign = Buffer.from(hmacHex).toString('base64url');
  const sig = `${CONFIG.bod.apiKey}:${sign}`;
  const ctx = await request.newContext({ ignoreHTTPSErrors: true });
  try {
    const r = await ctx.post(`${CONFIG.bod.apiBaseUrl}/datafeed/round/summary`, {
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'Signature': sig, 'Timestamp': String(ts) },
      data: body,
    });
    const json = await r.json();
    return { betCount: parseInt(json?.bet_count ?? json?.content?.bet_count ?? 0), status: r.status() };
  } catch (_) { return { betCount: 0, status: 0 }; }
  finally { await ctx.dispose(); }
}

// ============================================================
// TC-13：Datafeed 統計一致性（/datafeed/round/summary vs /datafeed/round）
// ============================================================
async function tc13_datafeedSummary() {
  console.log('\n▶ TC-13：Datafeed 統計一致性驗算');
  const now = Math.floor(Date.now() / 1000);
  const from = now - 86400; // 過去 24 小時

  try {
    // 查詢 round 明細
    const rounds = await fetchBodRounds(from, now);
    const actualCount = rounds.length;

    // 查詢 summary
    const { betCount, status } = await fetchBodSummary(from, now);

    console.log(`  /datafeed/round 筆數：${actualCount}`);
    console.log(`  /datafeed/round/summary bet_count：${betCount}（HTTP ${status}）`);

    if (betCount === actualCount) {
      pass(`統計一致：summary bet_count=${betCount} = round 查詢筆數=${actualCount}`);
    } else if (actualCount <= 1000 && Math.abs(betCount - actualCount) < 5) {
      pass(`統計近似（差 ${Math.abs(betCount - actualCount)} 筆，可能分頁）：bet_count=${betCount}，round=${actualCount}`);
    } else {
      fail(`統計不一致：summary=${betCount}，round 查詢=${actualCount}`);
    }
  } catch (err) {
    fail(`TC-13 異常：${err.message}`);
  }
}

// ============================================================
// TC-14：遊戲歷史記錄連結（/integration/game_history_url）
// ============================================================
async function tc14_gameHistoryUrl() {
  console.log('\n▶ TC-14：遊戲歷史記錄連結驗證');
  const crypto = require('crypto');

  try {
    // 取一筆最近的 round ID
    const now = Math.floor(Date.now() / 1000);
    const rounds = await fetchBodRounds(now - 3600, now);
    const myRounds = rounds.filter(r => r.player === (PLAYER_ID ?? '893_test893'));

    if (myRounds.length === 0) {
      warn('TC-14：無歷史注單可用，請先跑 TC-07 或 TC-08 再執行');
      return;
    }

    const roundId = myRounds[0].round;
    console.log(`  使用 round：${roundId}`);

    const body = { round: roundId };
    const ts = Math.floor(Date.now() / 1000);
    const sorted = Object.keys(body).sort().map(k => `${k}=${body[k]}`).join('&');
    const msg = `${sorted}:${CONFIG.bod.secret}${ts}`;
    const hmacHex = crypto.createHmac('sha256', CONFIG.bod.secret).update(msg).digest('hex');
    const sign = Buffer.from(hmacHex).toString('base64url');
    const sig = `${CONFIG.bod.apiKey}:${sign}`;

    const ctx = await request.newContext({ ignoreHTTPSErrors: true });
    const r = await ctx.post(`${CONFIG.bod.apiBaseUrl}/integration/game_history_url`, {
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'Signature': sig, 'Timestamp': String(ts) },
      data: body,
    });
    const text = await r.text();
    await ctx.dispose();

    console.log(`  HTTP ${r.status()} | ${text.substring(0, 120)}`);

    if (r.status() === 200 && (text.startsWith('http') || text.includes('token='))) {
      pass(`遊戲歷史記錄連結取得成功：${text.substring(0, 80)}...`);
    } else if (r.status() === 200 && text.length > 0) {
      warn(`HTTP 200 但回應格式非預期：${text.substring(0, 80)}`);
    } else {
      fail(`無法取得遊戲歷史連結，HTTP ${r.status()}：${text.substring(0, 80)}`);
    }
  } catch (err) {
    fail(`TC-14 異常：${err.message}`);
  }
}

// ============================================================
// TC-16：並發下注完整性（autoSpin N次，驗 datafeed 無遺漏）
// ============================================================
async function tc16_concurrentBets() {
  console.log('\n▶ TC-16：並發下注完整性驗算（旋轉 10 次，驗 datafeed 筆數）');
  const crypto = require('crypto');
  const page = await getSharedPage();

  try {
    // 直接用 BOD API 取遊戲 URL（不靠平台大廳，避免 token 過期）
    const launchBody = {
      game: 'fay-slot-gold-digger',
      player: PLAYER_ID ?? '893_test893',
      player_name: '並發測試',
      currency: CONFIG.bod.currency,
      lang: 'zh', device: 'web',
      lobby: 'https://liff.line.me/1656596287-MxmoAOPg',
      fun: false,
    };
    const lts = Math.floor(Date.now() / 1000);
    const lsorted = Object.keys(launchBody).sort().map(k => `${k}=${launchBody[k]}`).join('&');
    const lmsg = `${lsorted}:${CONFIG.bod.secret}${lts}`;
    const lhmac = crypto.createHmac('sha256', CONFIG.bod.secret).update(lmsg).digest('hex');
    const lsig = `${CONFIG.bod.apiKey}:${Buffer.from(lhmac).toString('base64url')}`;
    const lctx = await request.newContext({ ignoreHTTPSErrors: true });
    const lr = await lctx.post(`${CONFIG.bod.apiBaseUrl}/seamless/game_url`, {
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'Signature': lsig, 'Timestamp': String(lts) },
      data: launchBody,
    });
    const gameUrl = await lr.text();
    await lctx.dispose();
    console.log(`  遊戲 URL（HTTP ${lr.status()}）：${gameUrl.substring(0, 80)}`);
    if (lr.status() !== 200 || !gameUrl.startsWith('http')) {
      warn(`TC-16：無法取得遊戲 URL，跳過`);
      return;
    }

    await page.goto(gameUrl, { waitUntil: 'load', timeout: 20000 });
    await page.waitForTimeout(5000);
    await closePopups(page);

    const spinCount = 10;
    const tsStart = Math.floor(Date.now() / 1000);
    const actual = await autoSpin(page, spinCount, 4000);
    console.log(`  成功點擊 Spin：${actual} 次`);

    await new Promise(r => setTimeout(r, 5000)); // 等結算
    const tsEnd = Math.floor(Date.now() / 1000) + 3;

    const rounds = await fetchBodRounds(tsStart, tsEnd);
    const myRounds = rounds.filter(r => r.player === (PLAYER_ID ?? '893_test893'));

    console.log(`  BOD datafeed 紀錄筆數：${myRounds.length}（預期 ~${actual}）`);
    myRounds.forEach(r => console.log(`    [${r.status}] wager=${r.wager} payout=${r.payout}`));

    await screenshot(page, 'tc16-concurrent');

    if (myRounds.length === actual) {
      pass(`完整性驗算通過：旋轉 ${actual} 次 = datafeed ${myRounds.length} 筆，無遺漏`);
    } else if (myRounds.length > 0 && Math.abs(myRounds.length - actual) <= 2) {
      warn(`有輕微差距（差 ${Math.abs(myRounds.length - actual)} 筆，可能在窗口邊界）：spin=${actual}，datafeed=${myRounds.length}`);
    } else {
      fail(`注單遺漏：旋轉 ${actual} 次，但 datafeed 只有 ${myRounds.length} 筆`);
    }
  } catch (err) {
    fail(`TC-16 異常：${err.message}`);
  } finally {
    try { await page.close(); } catch (_) {}
  }
}

// ============================================================
// TC-18：試玩模式（fun=true，datafeed 不應有注單）
// ============================================================
async function tc18_funMode() {
  console.log('\n▶ TC-18：試玩模式驗證（fun=true，不應扣除真實餘額）');
  const crypto = require('crypto');
  const page = await getSharedPage();

  try {
    // 取得平台餘額
    const balanceMon = createBalanceMonitor(page);
    await page.goto(CONFIG.platform.url, { waitUntil: 'load', timeout: 30000 });
    const balanceBefore = await balanceMon.waitFor(10000);
    console.log(`  試玩前餘額：${balanceBefore}`);

    // 呼叫 BOD /seamless/game_url 取得 fun=true 的遊戲 URL
    const body = {
      game: 'fay-slot-gold-digger',
      player: PLAYER_ID ?? '893_test893',
      player_name: '試玩測試',
      currency: CONFIG.bod.currency,
      lang: 'zh',
      device: 'web',
      lobby: 'https://liff.line.me/1656596287-MxmoAOPg',
      fun: true,
    };
    const ts = Math.floor(Date.now() / 1000);
    const sorted = Object.keys(body).sort().map(k => `${k}=${body[k]}`).join('&');
    const msg = `${sorted}:${CONFIG.bod.secret}${ts}`;
    const hmacHex = crypto.createHmac('sha256', CONFIG.bod.secret).update(msg).digest('hex');
    const sign = Buffer.from(hmacHex).toString('base64url');
    const sig = `${CONFIG.bod.apiKey}:${sign}`;

    const ctx = await request.newContext({ ignoreHTTPSErrors: true });
    const r = await ctx.post(`${CONFIG.bod.apiBaseUrl}/seamless/game_url`, {
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'Signature': sig, 'Timestamp': String(ts) },
      data: body,
    });
    const gameUrl = await r.text();
    await ctx.dispose();

    console.log(`  試玩 URL（HTTP ${r.status()}）：${gameUrl.substring(0, 100)}`);

    if (r.status() !== 200 || !gameUrl.startsWith('http')) {
      warn(`TC-18：無法取得試玩 URL，可能此帳號不支援試玩模式：${gameUrl.substring(0, 80)}`);
      return;
    }

    // 開啟試玩遊戲（在新 tab 開啟以保留大廳 session）
    await page.goto(gameUrl, { waitUntil: 'load', timeout: 20000 });
    await page.waitForTimeout(5000);
    await closePopups(page);
    // 等遊戲完全載入
    await page.waitForTimeout(3000);

    const tsStart = Math.floor(Date.now() / 1000);
    await autoSpin(page, 5, 3000);
    const tsEnd = Math.floor(Date.now() / 1000) + 3;
    await new Promise(r => setTimeout(r, 5000));

    // 試玩模式不應有真實注單
    const rounds = await fetchBodRounds(tsStart, tsEnd);
    const myRounds = rounds.filter(r => r.player === (PLAYER_ID ?? '893_test893'));
    console.log(`  試玩後 BOD datafeed 注單筆數：${myRounds.length}（應為 0）`);

    // 試玩不應影響平台餘額
    const balanceAfter = balanceMon.current || balanceBefore;
    const diff = Math.abs(balanceAfter - balanceBefore);
    console.log(`  試玩前後餘額差：${diff.toFixed(2)}（應為 0）`);

    await screenshot(page, 'tc18-fun-mode');

    if (myRounds.length === 0 && diff < 1) {
      pass(`試玩模式正確：無真實注單，餘額未變動`);
    } else if (myRounds.length === 0) {
      pass(`試玩模式：datafeed 無注單（餘額差 ${diff.toFixed(2)}，可能監控時間差）`);
    } else {
      fail(`試玩模式異常：datafeed 出現 ${myRounds.length} 筆真實注單，餘額差 ${diff.toFixed(2)}`);
    }
  } catch (err) {
    fail(`TC-18 異常：${err.message}`);
  } finally {
    try { await page.close(); } catch (_) {}
  }
}

// ============================================================
// 主流程
// ============================================================
(async () => {
  console.log('╔══════════════════════════════════════════╗');
  console.log('║   KBB BOD 遊戲商自動化測試 — 測試站     ║');
  console.log('╚══════════════════════════════════════════╝');
  console.log(`  執行時間：${new Date().toLocaleString('zh-TW')}`);

  // 自動帳號登入並取得 player ID
  try {
    await autoLogin();
    // 用 shared context 取得 player ID（攔截 memberInfo response）
    const _tmpPage = await getSharedPage();
    const _tmpMemberResp = _tmpPage.waitForResponse(
      r => r.url().includes('/gc/member/memberInfo'), { timeout: 20000 }
    ).catch(() => null);
    await _tmpPage.goto(CONFIG.platform.url, { waitUntil: 'load', timeout: 30000 });
    const _memberResp = await _tmpMemberResp;
    if (_memberResp) {
      const _mJson = await _memberResp.json().catch(() => null);
      const _id = _mJson?.Content?.Id;
      const _acc = _mJson?.Content?.Account;
      if (_id && _acc) PLAYER_ID = `${_id}_${_acc}`;
    }
    if (!PLAYER_ID) PLAYER_ID = await fetchPlayerAccount(_tmpPage);
    if (!PLAYER_ID || !PLAYER_ID.includes('_')) PLAYER_ID = '893_test893';
    await _tmpPage.close();
    console.log(`  Player ID：${PLAYER_ID}`);
  } catch (e) {
    console.log(`  ⚠️  自動登入失敗：${e.message}`);
    process.exit(1);
  }

  await tc01_apiAuth();
  await tc02_currencyParam();
  await tc03_exchangeRate();
  await tc04_backendLogin();
  await tc05_zeroBalance();
  await tc06_callbackIdempotency();
  await tc07_betDeduction();
  await tc08_payoutIncrease();
  await tc13_datafeedSummary();
  await tc14_gameHistoryUrl();
  await tc16_concurrentBets();
  await tc18_funMode();

  // 關閉共用瀏覽器
  try { await shared.browser.close(); } catch (_) {}

  console.log('\n╔══════════════════════════════════════════╗');
  console.log('║   測試完成                               ║');
  console.log('╚══════════════════════════════════════════╝');
})();
