'use strict';
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  const apis = [];
  page.on('response', async resp => {
    const url = resp.url();
    if (!url.includes('gibaba.com') && !url.includes('gibaba')) return;
    if (url.includes('.js') || url.includes('.css') || url.includes('.png') || url.includes('.webp')) return;
    try {
      const text = await resp.text();
      apis.push({ url: url.replace('https://bo.gibaba.com', ''), status: resp.status(), preview: text.substring(0, 120) });
    } catch (_) {}
  });

  // 登入
  console.log('開啟 BO 登入頁...');
  await page.goto('https://bo.gibaba.com', { waitUntil: 'load', timeout: 30000 });
  await page.waitForTimeout(2000);

  // 填帳密
  try {
    await page.fill('input[type="text"], input[name*="account"], input[placeholder*="帳號"], input[placeholder*="account"]', 'angela');
    await page.fill('input[type="password"]', 'angela');
    await page.click('button[type="submit"], button:has-text("登入"), button:has-text("Login")');
    await page.waitForTimeout(3000);
    console.log('登入後 URL:', page.url());
  } catch (e) {
    console.log('登入步驟異常:', e.message);
  }

  // 前往注單報表頁
  console.log('前往 providerlist 頁...');
  await page.goto('https://bo.gibaba.com/dashboard/report/providerlist', { waitUntil: 'load', timeout: 20000 });
  await page.waitForTimeout(3000);

  // 填入會員帳號 test5555
  const inputSelectors = [
    'input[placeholder*="帳號"]',
    'input[placeholder*="會員"]',
    'input[placeholder*="Account"]',
    'input[placeholder*="member"]',
    'input[name*="account"]',
    'input[name*="member"]',
    'input[type="text"]',
  ];
  for (const sel of inputSelectors) {
    try {
      const inp = page.locator(sel).first();
      if (await inp.isVisible({ timeout: 1000 })) {
        await inp.fill('test5555');
        console.log(`填入帳號至：${sel}`);
        break;
      }
    } catch (_) {}
  }
  await page.waitForTimeout(500);

  // 找「查詢」按鈕並點擊
  const searchSelectors = [
    'button:has-text("查詢")',
    'button:has-text("搜尋")',
    'button:has-text("Search")',
    'button[type="submit"]',
    '.btn-primary',
    'button:has-text("確認")',
  ];
  for (const sel of searchSelectors) {
    try {
      const btn = page.locator(sel).first();
      if (await btn.isVisible({ timeout: 1000 })) {
        console.log(`點擊：${sel}`);
        await btn.click();
        await page.waitForTimeout(3000);
        break;
      }
    } catch (_) {}
  }

  // 也試試其他可能的報表頁
  const betApis = [
    '/api/report/providerlist',
    '/api/report/provider',
    '/api/bet/record',
    '/api/game/betRecord',
    '/api/member/betRecord',
  ];
  // 點擊 BOD 那列進入明細
  await page.waitForTimeout(2000);
  try {
    const bodRow = page.locator('td:has-text("BOD"), tr:has-text("BOD") a, tr:has-text("BOD") button').first();
    if (await bodRow.isVisible({ timeout: 3000 })) {
      console.log('點擊 BOD 列...');
      await bodRow.click();
      await page.waitForTimeout(3000);
    } else {
      // 試試直接點含 BOD 文字的連結
      await page.getByText('BOD').first().click();
      await page.waitForTimeout(3000);
    }
  } catch (e) {
    console.log('點 BOD 失敗：', e.message);
  }

  console.log('\n主動查詢可能的注單 API...');
  const loginToken = apis.find(a => a.url.includes('/loginAuth/login'))?.preview?.match(/"Content":"([^"]+)"/)?.[1] ?? '';

  for (const path of betApis) {
    try {
      const r = await page.evaluate(async (url) => {
        const resp = await fetch(url + '?PageIndex=1&PageSize=10', { credentials: 'include' });
        return { status: resp.status, body: await resp.text() };
      }, `https://bo.gibaba.com${path}`);
      console.log(`[${r.status}] ${path}: ${r.body.substring(0, 150)}`);
    } catch (_) {}
  }

  console.log('\n=== 攔截到的 API（去除靜態資源）===');
  apis
    .filter(a => !a.url.includes('wasm') && !a.url.includes('blob') && !a.url.includes('woff') && !a.url.includes('socket'))
    .forEach(a => console.log(`[${a.status}] ${a.url}\n    ${a.preview}\n`));

  console.log('\n按 Ctrl+C 結束，或等 30 秒自動關閉');
  await page.waitForTimeout(30000);
  await browser.close();
})();
