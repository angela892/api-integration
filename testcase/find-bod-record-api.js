'use strict';
const { request } = require('playwright');
const crypto = require('crypto');

const API_KEY = 'goldpapa';
const SECRET = 's2okCuDSyagLvRODX4Xh';
const BASE = 'https://rgsservice-stage.ob.games';

function makeSig(body) {
  const ts = Math.floor(Date.now() / 1000);
  const sorted = Object.keys(body).sort().map(k => `${k}=${body[k]}`).join('&');
  const msg = sorted ? `${sorted}:${SECRET}${ts}` : `:${SECRET}${ts}`;
  const sign = crypto.createHmac('sha256', SECRET).update(msg).digest('base64url');
  return { sig: `${API_KEY}:${sign}`, ts };
}

async function probe(ctx, method, path, body = {}) {
  const { sig, ts } = makeSig(body);
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Signature': sig,
    'Timestamp': String(ts),
  };
  try {
    const r = method === 'GET'
      ? await ctx.get(`${BASE}${path}`, { headers })
      : await ctx.put(`${BASE}${path}`, { headers, data: body });
    const text = await r.text();
    console.log(`[${r.status()}] ${method} ${path}`);
    console.log(`  ${text.substring(0, 150)}\n`);
  } catch (e) {
    console.log(`[ERR] ${path}: ${e.message}\n`);
  }
}

(async () => {
  const ctx = await request.newContext({ ignoreHTTPSErrors: true });

  console.log('=== 探查 BOD 查詢注單相關端點 ===\n');

  // 常見的廠商查詢 API 路徑
  const paths = [
    '/seamless/record',
    '/seamless/records',
    '/seamless/transaction',
    '/seamless/transactions',
    '/seamless/history',
    '/api/record',
    '/api/records',
    '/api/transaction',
    '/api/transactions',
    '/api/bet/record',
    '/api/bet/records',
    '/api/game/record',
    '/record',
    '/records',
    '/transaction',
    '/transactions',
  ];

  // GET 探查
  for (const p of paths) {
    await probe(ctx, 'GET', p);
  }

  // 用 player 參數試 POST/PUT
  const body = { player: 'test5555', currency: 'FAYF' };
  for (const p of ['/seamless/record', '/seamless/transaction', '/api/record']) {
    await probe(ctx, 'PUT', p, body);
  }

  await ctx.dispose();
  console.log('探查完畢');
})();
