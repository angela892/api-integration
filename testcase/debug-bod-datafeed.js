'use strict';
const { request } = require('playwright');
const crypto = require('crypto');

const API_KEY = 'goldpapa';
const SECRET = 's2okCuDSyagLvRODX4Xh';
const BASE = 'https://rgsservice-stage.ob.games';

function makeSig(body) {
  const ts = Math.floor(Date.now() / 1000);
  const sorted = Object.keys(body).sort().map(k => `${k}=${body[k]}`).join('&');
  const msg = (sorted ? `${sorted}:` : ':') + SECRET + ts;
  const hmacHex = crypto.createHmac('sha256', SECRET).update(msg).digest('hex');
  const sign = Buffer.from(hmacHex).toString('base64url');
  return { sig: `${API_KEY}:${sign}`, ts };
}

(async () => {
  const ctx = await request.newContext({ ignoreHTTPSErrors: true });

  // 查過去 2 小時的所有注單（不過濾 status，不過濾 player）
  const now = Math.floor(Date.now() / 1000);
  const body = {
    date_from: now - 7200,  // 2 小時前
    date_to: now,
    count: 50,
  };
  const { sig, ts } = makeSig(body);

  console.log('查詢時間範圍：', new Date((now - 7200) * 1000).toLocaleString('zh-TW'), '~', new Date(now * 1000).toLocaleString('zh-TW'));
  console.log('Signature:', sig.substring(0, 40) + '...');

  const r = await ctx.post(`${BASE}/datafeed/round`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Signature': sig,
      'Timestamp': String(ts),
    },
    data: body,
  });

  const text = await r.text();
  console.log(`\nHTTP ${r.status()}`);
  console.log('回應：', text.substring(0, 2000));

  try {
    const json = JSON.parse(text);
    const rounds = json?.content ?? [];
    console.log(`\n共 ${rounds.length} 筆注單`);
    rounds.forEach(r => {
      console.log(`  player=${r.player} game=${r.game} wager=${r.wager} payout=${r.payout} status=${r.status} create_at=${new Date(r.create_at * 1000).toLocaleString('zh-TW')}`);
    });
  } catch (_) {}

  await ctx.dispose();
})();
