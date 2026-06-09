'use strict';
const { chromium } = require('playwright');

const URL = 'https://gc.gibaba.com/Lobby?Web=LINE&loginType=0&jwtAccessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3RMaW5lSWQyIiwiaWF0IjoxNzU3MzE3MDE1fQ.fOPg0Ljltbla5N8lfLr_pEXMZDHBr8si1QL_TsE1mHE';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ permissions: ['microphone', 'camera'] });
  const page = await context.newPage();

  const captured = [];

  // 攔截所有 API 回應，尋找含有 player/member/account ID 的欄位
  page.on('response', async resp => {
    const url = resp.url();
    if (!url.includes('gibaba.com') && !url.includes('ob.games')) return;
    try {
      const text = await resp.text();
      if (text.includes('"Id"') || text.includes('"MemberId"') || text.includes('"PlayerId"')
        || text.includes('"player"') || text.includes('"Account"') || text.includes('"account"')) {
        captured.push({ url: url.substring(0, 80), body: text.substring(0, 300) });
      }
    } catch (_) {}
  });

  await page.goto(URL, { waitUntil: 'load', timeout: 30000 });
  await page.waitForTimeout(5000);

  // 主動打 member info API
  const memberApis = [
    'https://gcapi.gibaba.com/gc/member/info',
    'https://gcapi.gibaba.com/gc/member/profile',
    'https://gcapi.gibaba.com/gc/member',
  ];
  for (const api of memberApis) {
    try {
      const json = await page.evaluate(async (url) => {
        const r = await fetch(url, { credentials: 'include' });
        return { status: r.status, body: await r.text() };
      }, api);
      console.log(`\n[${api}] ${json.status}`);
      console.log(json.body.substring(0, 300));
    } catch (_) {}
  }

  console.log('\n=== 攔截到含 ID 的 API 回應 ===');
  captured.forEach(c => {
    console.log(`\n[${c.url}]`);
    console.log(c.body);
  });

  console.log('\n=== 掃描完畢，按 Ctrl+C 結束 ===');
  await page.waitForTimeout(30000);
  await browser.close();
})();
