'use strict';
// 測試能否用鍵盤或滑鼠自動觸發 BOD 遊戲旋轉
const { chromium } = require('playwright');

const PLATFORM_URL = 'https://gc.gibaba.com/Lobby?Web=LINE&loginType=0&jwtAccessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3RMaW5lSWQyIiwiaWF0IjoxNzU3MzE3MDE1fQ.fOPg0Ljltbla5N8lfLr_pEXMZDHBr8si1QL_TsE1mHE';

async function closePopups(page) {
  for (let i = 0; i < 6; i++) {
    let closed = false;
    for (const sel of ['.btn-cancel', '.btn-close', '.close-footer', 'button:has-text("關閉")']) {
      try {
        const btn = page.locator(sel).first();
        if (await btn.isVisible({ timeout: 600 })) { await btn.click({ force: true }); await page.waitForTimeout(400); closed = true; break; }
      } catch (_) {}
    }
    if (!closed) break;
  }
}

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ permissions: ['microphone', 'camera'] });
  const page = await context.newPage();

  await page.goto(PLATFORM_URL, { waitUntil: 'load', timeout: 30000 });
  await page.waitForTimeout(2000);
  await closePopups(page);

  // 開啟 BOD 遊戲
  await page.waitForSelector('[aria-label="Game-Card 矮人礦坑"]', { timeout: 15000 });
  await closePopups(page);
  await page.evaluate(() => {
    const el = document.querySelector('[aria-label="Game-Card 矮人礦坑"]');
    if (el) el.click();
  });
  await page.waitForTimeout(2000);
  await closePopups(page);
  await page.waitForTimeout(5000); // 等遊戲載入

  console.log('遊戲應已開啟，開始嘗試自動旋轉...');

  // 方法一：在 iframe 內按空白鍵
  const gameFrame = page.frameLocator('iframe[title="game"]');
  try {
    await gameFrame.locator('body').click({ timeout: 3000 });
    console.log('點擊 iframe body 成功');
    await page.waitForTimeout(500);

    for (let i = 0; i < 3; i++) {
      await page.keyboard.press('Space');
      console.log(`按 Space ${i+1} 次`);
      await page.waitForTimeout(3000); // 等旋轉結果
    }
  } catch (e) {
    console.log('Space 方式失敗：', e.message);
  }

  // 方法二：截圖確認遊戲狀態，再嘗試點擊旋轉按鈕位置
  await page.screenshot({ path: 'testcase/screenshots/kbb-bod/auto-spin-test.png', fullPage: false });
  console.log('截圖已存：testcase/screenshots/kbb-bod/auto-spin-test.png');

  console.log('\n請看截圖，告訴我 Spin 按鈕大約在畫面的哪個位置（例：正中間偏下、右下角等）');
  await page.waitForTimeout(30000);
  await browser.close();
})();
