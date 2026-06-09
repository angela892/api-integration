'use strict';
const { chromium } = require('playwright');
const path = require('path');

// ← 貼最新 token
const JWT = 'PUT_FRESH_JWT_HERE';
const URL = `https://gc.gibaba.com/Lobby?Web=LINE&loginType=1&Promotion=zYnr8Ng&jwtAccessToken=${JWT}`;

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log('開啟平台...');
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);

  // 關閉常見彈窗
  for (const sel of ['button:has-text("關閉")', 'button:has-text("確定")', '[class*="close"]']) {
    try {
      const btn = page.locator(sel).first();
      if (await btn.isVisible({ timeout: 800 })) await btn.click();
    } catch (_) {}
  }

  // 截圖整個頁面
  const shot = path.join(__dirname, 'screenshots', `lobby-${Date.now()}.png`);
  require('fs').mkdirSync(path.dirname(shot), { recursive: true });
  await page.screenshot({ path: shot, fullPage: true });
  console.log('截圖存在：', shot);

  // 印出所有圖片的 src / alt（遊戲通常用 img）
  const imgs = await page.$$eval('img', els =>
    els.map(e => ({ src: e.src, alt: e.alt, cls: e.className })).filter(e => e.src)
  );
  console.log('\n=== 頁面上的圖片元素（前 30 個）===');
  imgs.slice(0, 30).forEach((img, i) => console.log(`[${i}]`, img));

  // 印出所有含「BOD」文字的元素
  const bodEls = await page.$$eval('*', els =>
    els
      .filter(e => e.textContent.includes('BOD') || e.className.toString().includes('BOD'))
      .map(e => ({ tag: e.tagName, class: e.className, text: e.textContent.trim().slice(0, 50) }))
  );
  console.log('\n=== 含 BOD 字樣的元素 ===');
  console.log(bodEls.length ? bodEls : '（無）');

  console.log('\n瀏覽器保持開啟，請手動找到 BOD 遊戲後按 Ctrl+C 結束');
  await page.waitForTimeout(60000);
  await browser.close();
})();
