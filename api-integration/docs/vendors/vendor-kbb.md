# 金爸爸（KBB）API 對接資料

## 基本資訊

| 項目 | 說明 |
|------|------|
| 站別代稱 | KBB（金爸爸） |
| 錢包模式 | 單一錢包 |
| 代理架構 | 爸幣模式（babei）/ 鑽石模式（diamond） |
| 整合端點前綴 | 測試：https://intg.gibaba.com / 正式：https://intg.kimbaba.com.tw |

## API IP 白名單

### 後台 IP（三站共用）
- `114.35.163.10`
- `114.34.170.104`
- `59.127.154.188`

### 金爸爸 API IP
**測試站**
- `52.68.122.107`
- `114.34.170.104`

**正式站**
- `13.113.21.229`
- `52.199.237.173`
- `52.198.231.19`
- `35.76.145.207`
- `114.34.170.104`

## Callback 端點格式
- 測試站：`https://intg.gibaba.com/3rdParty/{類型}/{供應商}`
- 正式站：`https://intg.kimbaba.com.tw/3rdParty/{類型}/{供應商}`
- 鑽石模式：`https://intg.gibaba.com/3rdParty/diamond/{類型}/{供應商}`

---

## 遊戲商對接明細

### ATG

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | 點數（1:130） | TWD |
| 錢包模式 | 單一錢包 | 單一錢包 |
| 玩家帳號模式 | 待補 | 待補 |
| 認證方式 | X-Operator + X-Key（HTTP Header） | 同左 |
| Base URL（兩站同） | https://api.godeebxp.com/ | 同左 |
| 後台網址（兩站同） | https://admin.godeebxp.com | 同左 |
| 後台帳號（正式） | KBB_P130_prod / GZc8T4s7#U | KBBD_game_prod / T5n&EH3D58 |
| 後台帳號（測試） | KBB_P130_beta / CjZ^3Gtg4W | KBBD_game_beta / Pw%GsS6Y96 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/ATG | https://intg.gibaba.com/3rdParty/diamond/Slot/ATG |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/ATG | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/ATG |
| IP白名單（正式站） | 43.198.180.83 / 18.163.82.39 | 43.198.180.83 / 18.163.82.39 |
| API Key/Secret ⚠️（正式） | X-Operator: KBB_P130_prod / X-Key: d3c463f8629d4f9daf094f601393569f | X-Operator: KBBD_game_prod / X-Key: 6953ed5e71314386b6846b0bf5691260 |
| API Key/Secret ⚠️（測試） | X-Operator: KBB_P130_beta / X-Key: 1c13c5c3770b414185e1209db7d8df31 | X-Operator: KBBD_game_beta / X-Key: 5db839b2a0094734864ed8e3c390d092 |
| MerchID ⚠️（測試站） | KBB_P130_beta | KBBD_game_beta |
| MerchID ⚠️（正式站） | KBB_P130_prod | KBBD_game_prod |
| 文件收集 | [API文件](https://hackmd.io/GExmbK-TRfejmexd-_X7Pw#%E5%96%AE%E4%B8%80%E9%8C%A2%E5%8C%85-V2) / [遊戲清單](https://docs.google.com/spreadsheets/d/1Vivj0a3958Zl8MgLucC8OXYmyqhB64Q8kPPOl-gQfXE/edit?gid=0#gid=0) | — |
| 備註 | 對接群在 TG / 測試站目前僅支援「戰神賽特」 | — |
| 測試環境 | 已上線 | 已上線 |
| 正式上線 | 已上線 | 已上線 |

---

### BE（CQ9）

> 平台同時承載 BE / CQ9（OSEG / 168game），後台帳號共用，MerchID 各不同。

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | TWD | TWD |
| 錢包模式 | 單一錢包 | 單一錢包 |
| 玩家帳號模式 | 待補 | 待補 |
| 認證方式 | JWT Token | 同左 |
| Base URL（正式） | https://api.rebirth.games | 同左 |
| Base URL（測試） | https://int-api.rebirth.games | 同左 |
| 後台網址（正式） | https://bo.rebirth.games | 同左 |
| 後台網址（測試） | https://int-bo.rebirth.games | 同左 |
| 後台帳號（正式） | kimbaba_prod / dbdb8899 | kbbdiamond / kbbdiamond01 |
| 後台帳號（測試） | kimbabadevenv / qwer1234 | gbbdiamond / gbbdiamond01 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/Cq9 | https://intg.gibaba.com/3rdParty/diamond/Slot/Cq9 |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/Cq9 | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/Cq9 |
| IP白名單（測試站） | 34.84.30.48 / 20.24.30.203 / 35.194.115.194 / 211.23.49.51 / 113.196.184.234 / 175.98.168.194 / 104.199.186.229 / 35.201.151.61 | 同左 |
| IP白名單（正式站） | 20.24.30.203 / 34.146.25.167 / 35.194.124.109 / 175.98.168.194 / 34.81.144.197 / 104.199.176.123 | 同左 |
| API Token ⚠️（正式） | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MWU4ZjIxYjNiYjMwNzAwMDFjMGU1MzEiLCJhY2NvdW50Ijoia2ltYmFiYV9wcm9kIiwib3duZXIiOiI2MWU4ZjIxYjNiYjMwNzAwMDFjMGU1MzEiLCJwYXJlbnQiOiJzZWxmIiwiY3VycmVuY3kiOiJUV0QiLCJqdGkiOiI5MzEwMzExMzMiLCJpYXQiOjE2NDI2NTYyODMsImlzcyI6IkN5cHJlc3MiLCJzdWIiOiJTU1Rva2VuIn0.ZPLYapg2TziQTZoEDBEKmxmnLTZO3fd3MKltljFGkVw | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2N2Y3NWQwZmFiZWM4ZjZkNzEyMjYxNTYiLCJhY2NvdW50Ijoia2JiZGlhbW9uZCIsIm93bmVyIjoiNjFlOGYyMWIzYmIzMDcwMDAxYzBlNTMxIiwicGFyZW50IjoiNjFlOGYyMWIzYmIzMDcwMDAxYzBlNTMxIiwiY3VycmVuY3kiOiJUV0QiLCJicmFuZCI6IjE2OGFwaSIsImp0aSI6IjYxMjY2NDE5NyIsImlhdCI6MTc0NDI2NDQ2MywiaXNzIjoiQ3lwcmVzcyIsInN1YiI6IlNTVG9rZW4ifQ.AsIUgCetIaWhZE4QASEkqUoTCMXv_JyxHjrO5uqqepY |
| API Token ⚠️（測試） | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MjRmZDg1YTJlM2IxYjAwMDE5YTczYjUiLCJhY2NvdW50Ijoia2ltYmFiYWRldmVudiIsIm93bmVyIjoiNjI0ZmQ4NWEyZTNiMWIwMDAxOWE3M2I1IiwicGFyZW50Ijoic2VsZiIsImN1cnJlbmN5IjoiVFdEIiwianRpIjoiNDU2MjY2MDk2IiwiaWF0IjoxNjQ5Mzk5ODk4LCJpc3MiOiJDeXByZXNzIiwic3ViIjoiU1NUb2tlbiJ9.WWeiPY31qjknH6xv2PRUrQMulwooSYgJ8QQxMzWP3kk | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2N2Y3Mzc1Yjk3MGZlZWNlYTNkNzA1ZmYiLCJhY2NvdW50IjoiZ2JiZGlhbW9uZCIsIm93bmVyIjoiNjI0ZmQ4NWEyZTNiMWIwMDAxOWE3M2I1IiwicGFyZW50IjoiNjI0ZmQ4NWEyZTNiMWIwMDAxOWE3M2I1IiwiY3VycmVuY3kiOiJUV0QiLCJicmFuZCI6IjE2OGFwaSIsImp0aSI6IjkwNTk2MjkyNyIsImlhdCI6MTc0NDI1NDgxMSwiaXNzIjoiQ3lwcmVzcyIsInN1YiI6IlNTVG9rZW4ifQ.7_i0zW58Shfr3SQeZcGX9n7aykvj2-ux1vm87USjnvY |
| MerchID ⚠️（測試站） | kimbabadevenv | gbbdiamond |
| MerchID ⚠️（正式站） | kimbaba_prod | kbbdiamond |
| 文件收集 | [申請表單](https://docs.google.com/document/d/1Jg_ZTLWYvr5ZJMfZP6dM39VAiWqnFbT6/edit?rtpof=true) / [遊戲列表](https://docs.google.com/spreadsheets/d/1TuDb08jJ53sQ7ogavh-FgUEolqdWm6cnSPd_LHWQL3Y/edit) / [icon素材](https://drive.google.com/drive/u/0/folders/1ia67Y2q3oc4yHSETeOtKnpzczPOXHyZi) | 同左 |
| 測試環境 | 已上線 | 已上線 |
| 正式上線 | 已上線 | 已上線 |

---

### BL

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | DALE | TWD |
| 錢包模式 | 單一錢包 | 單一錢包 |
| 玩家帳號模式 | 待補 | 待補 |
| 認證方式 | AccessKeyId + AccessKeySecret | 同左 |
| Base URL（兩站同） | https://api.bole-game.com:16800 | https://api2.bole-game.com |
| 後台網址（兩站同） | https://int-agency.bolegaming.net/user/auth/login | 同左 |
| 後台帳號（正式） | dale@admin.com / dbdb8899 | kbbdiamond@admin.com / kbb168!^* |
| 後台帳號（測試） | dale@test.com / dale168!^* | kbbdiamond@test.com / kbb168!^* |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Table/BL | https://intg.gibaba.com/3rdParty/diamond/Table/BL |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Table/BL | https://intg.kimbaba.com.tw/3rdParty/diamond/Table/BL |
| IP白名單（測試站） | 8.210.234.255 / 16.162.10.255 / 119.9.91.232 / 47.56.188.243 / 54.254.169.68 | 同左 |
| IP白名單（正式站） | 同測試站 | 同左 |
| API Key/Secret ⚠️（正式） | AccessKeyId: 954c4f2d-63cb-4c0e-97b9-a8cf23f46e19 / AccessKeySecret: F024012AEDADC09E0972D928BD1EE40B40F1D746 | AccessKeyId: 9e77d783-4337-4930-b930-f42f6fa3d179 / AccessKeySecret: A41761F1056D3386E3C651684597F359AA92E3DE / 授權ID: bl3sfg81ulttqgd9burryl287 / 授權KEY: sq2kxkd5rx62wj5243qdi01th7p2w5 |
| API Key/Secret ⚠️（測試） | AccessKeyId: 954edbf9-474b-4553-a0e5-a7686191bda0 / AccessKeySecret: 41C7779803E81D7A968D82FDB6FA1F4B20CD8CB1 | AccessKeyId: 9e77d6a1-c03e-4bef-a57c-18bb4b404ffb / AccessKeySecret: 67CF3A24A6A2AA86CF91EAB5CB58167AEEF98D7F / 授權ID: bl3sfg81ulttqgd9burryl888 / 授權KEY: sq2kxkd5rx62wj5243qdi01th7p789 |
| 文件收集 | [API文件](https://www.eolink.com/share/index?shareCode=lW9LXp)（密碼：ABCD） | 同左 |
| 備註 | 對接群在 SK / INTG IP 需在後台白名單加入：3.114.118.21 | — |
| 測試環境 | 已上線 | 已上線 |
| 正式上線 | 已上線 | 已上線 |

---

### BLE

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | TWD / TWDx130 | — |
| 錢包模式 | 無縫錢包 | — |
| 玩家帳號模式 | 待補 | — |
| 認證方式 | AccessKeyId + AccessKeySecret | — |
| Base URL（正式） | https://brgoapi.juan365.games | — |
| Base URL（測試） | https://goslo-publish-api.yxjgux.com | — |
| 後台網址（正式） | https://agentbz.slotmal.xyz | — |
| 後台網址（正式，備用） | https://agency.slo666.com（cs@idollar.com.tw / Kbb168!^*） | — |
| 後台網址（測試） | https://goslo-publish-agency.yxjgux.com | — |
| 後台帳號（正式） | kimbabaPRD@admin.com / 759Gaming@ | — |
| 後台帳號（測試） | kimbaba / kimbabaG7@ | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/BLE | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/BLE | — |
| IP白名單（測試站） | 13.231.108.244 / 43.206.228.66 | — |
| IP白名單（正式站） | 34.97.69.142 / 35.79.242.74 / 34.97.243.245 / 54.248.77.40 / 54.248.152.18 / 54.168.46.193 / 57.181.120.54 / 57.182.29.206 / 18.177.207.72 / 52.194.26.76 / 52.196.69.118 / 56.124.0.32 / 56.125.113.89 / 34.95.252.236 / 34.151.208.37 / 35.198.61.70 | — |
| API Key/Secret ⚠️（正式） | AccessKeyId: cd698da9-af0e-4e04-ab5f-b5ebd636ebc6 / AccessKeySecret: 1B93B12AD940A4BA768EC90AC6F061539078B53A | — |
| API Key/Secret ⚠️（測試） | AccessKeyId: 1de42415-0cb5-43e4-bc76-5745c22046fd / AccessKeySecret: C5FB91B3467CE2E1B4F917F3FB1AE9A98BB0C98A | — |
| 文件收集 | [正式API](https://apifox.com/apidoc/shared-3c74fd05-6817-401b-ad14-9d8aad8366f6?pwd=MKmXneSR) / [測試API](https://apifox.com/apidoc/shared-2488ecd4-a304-4319-a106-382b6d97ea89) / [遊戲列表](https://docs.google.com/spreadsheets/d/1sjSedYoSHCTtvT389cttXvVrrzawogcNyfN-5SDgrM4/edit?gid=0#gid=0) | — |
| 備註 | 正式 2026/2/11 更新；測試 2025/8/11 重新對接 | — |
| 測試環境 | 已上線 | — |
| 正式上線 | 已上線 | — |

---

### BNG

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | KBB | NT（TWD） |
| 錢包模式 | 單一錢包 | 單一錢包 |
| 玩家帳號模式 | 待補 | 待補 |
| 認證方式 | PROJECT_NAME + API_TOKEN + WL | 同左 |
| Base URL（正式） | https://gate2.betsrv.com/op/ | https://gate.c3.bng.games/op/ |
| Base URL（測試） | https://gate2.betsrv.com/op/ | https://gate.stage1.bng.games/op/ |
| 後台網址（兩站同） | https://booonker.bng.games/ | 同左 |
| 後台帳號（兩站） | service@idollar.com.tw（密碼待補） | service-dev@idollar.com.tw / KBBDiamond |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/Bng | https://intg.gibaba.com/3rdParty/diamond/Slot/Bng |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/Bng | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/Bng |
| IP白名單（測試站） | 54.151.243.48 | 54.151.243.48 / 3.0.152.5 / 18.142.75.213 / 13.214.254.26 |
| IP白名單（正式站） | 54.255.99.233 | 54.254.71.39 / 52.221.84.83 / 54.179.217.26 / 47.130.85.176 |
| API Key/Secret ⚠️（正式） | PROJECT_NAME: gibaba / API_TOKEN: wolRH1O2ck / WL: prod | PROJECT_NAME: kbbdiamond / API_TOKEN: bdLYSDD8Ew / WL: prod |
| API Key/Secret ⚠️（測試） | 待補充 | PROJECT_NAME: kbbdiamond-stage / API_TOKEN: 2Hp9OALrDW / WL: prod |
| REQUESTOR_IP（爸幣正式） | 64.120.111.88 / 23.106.126.6（我方IP，BNG側白名單） | — |
| 備註（爸幣） | 對方不需我方設IP白名單 | — |
| MerchID ⚠️（測試站） | gibaba | kbbdiamond-stage |
| MerchID ⚠️（正式站） | gibaba | kbbdiamond |
| 文件收集 | 待補充 | 待補充 |
| 備註 | — | 對接群在 SK |
| 測試環境 | 已上線 | 已上線 |
| 正式上線 | 已上線 | 已上線 |

---

### BT

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | UGX（1:130） | — |
| 錢包模式 | 單一錢包 | — |
| 玩家帳號模式 | 待補 | — |
| 認證方式 | account_id + md5_key + security_code | — |
| Base URL（正式） | https://btapi.g8game.net/v2 | — |
| Base URL（測試） | http://game.stgkg.btgame777.com/v2 | — |
| 後台網址（正式） | https://btagent.g8game.net/ | — |
| 後台網址（測試） | http://agent.stgkg.btgame777.com/ | — |
| 後台帳號（兩站） | goldfa_UGX / 88888888 | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Fish/BT | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Fish/BT | — |
| IP白名單（正式站） | 125.229.7.212 / 125.229.75.127 / 13.213.241.219 / 54.251.100.11 / 18.138.63.45 / 3.0.238.89 | — |
| API Key/Secret ⚠️（正式） | account_id: 758245611340107 / md5_key: fc1ee8543665543c13d0ddd81b3e753fefd22d45 / security_code: e256f428363ec98b0ee56c825e899891 | — |
| API Key/Secret ⚠️（測試） | account_id: 345232281813185 / md5_key: be5fa976fc48b67923651047207425d40c53c6cd / security_code: d0df703f873aa2bee287a3263cd417c9 | — |
| 文件收集 | https://drive.google.com/drive/folders/1AInR3VELTS5PocJQys3yyDXpE-OIi7lG?usp=sharing | — |
| 備註 | 對接群在 TG | — |
| 測試環境 | 已上線 | — |
| 正式上線 | 已上線 | — |

---

### FC

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | KIM | KIMN |
| 錢包模式 | 單一錢包 | 單一錢包 |
| 玩家帳號模式 | 待補 | 待補 |
| Base URL（正式） | https://ap9.fhloston-paradise.net/ | 同左 |
| Base URL（測試） | https://api.fcg666.net/ | 同左 |
| 後台網址（正式） | https://gk9xz5df-agent.fhloston-paradise.net/login | 同左 |
| 後台網址（測試） | https://agent.fcg666.net/login | 同左 |
| 後台 House（正式） | FCPAPAKIMNT1001 / Xwuec80gTV0Q | — |
| 後台 Manage（正式） | FCPAPAKIMNT2001 / BbOCA5Nk9 | FCPAPAKIMNT2002 / 6IU0t9mYW |
| 後台 Agent（正式） | FCPAPAKIMNT3001 / xqQh4r0O | FCPAPAKIMNT113002 / jRjZyrZI |
| 後台 Manage（測試） | FCPAPAKIM2002 / Aa1D0QwNHuxD | FCPAPAKIM2005 / AKh0hylrsMvG |
| 後台 Agent（測試） | FCPAPAKIM3002 / mHlQ8lsJiy | FCPAPAKIM3005 / BeHEW5ksvv |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/FC | https://intg.gibaba.com/3rdParty/diamond/Slot/FC |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/FC | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/FC |
| IP白名單（測試站） | 104.199.132.230 / 35.194.132.52 / 34.124.156.179 / 35.240.215.42 | 同左 |
| IP白名單（正式站） | 60.244.118.100 / 202.153.187.76 / 34.81.32.162 / 35.201.202.78 / 34.81.220.98 / 35.221.177.184 / 35.229.232.56 / 35.201.195.88 / 202.55.239.2 / 202.153.187.74 / 34.87.102.31 / 35.240.203.135 / 52.74.90.151 / 47.131.40.226 / 54.254.23.15 / 52.77.75.110 / 52.220.77.167 / 13.215.111.8 | 同左 |
| API Key/Secret ⚠️（正式） | 商戶代碼: PPKN / 金鑰: 4Z8DgASLBHp55M3t | 商戶代碼: PPKN1 / 金鑰: eBpi2ydkzNVuySkF |
| API Key/Secret ⚠️（測試） | 商戶代碼: PPKN / 金鑰: Fv6S3Bs9wPqaNyK4 | 商戶代碼: GBBD / 金鑰: 0ZLofgvxKHtubnC0 |
| MerchID ⚠️（測試站） | FCPAPAKIM3002 | FCPAPAKIM3005 |
| MerchID ⚠️（正式站） | FCPAPAKIMNT3001 | FCPAPAKIMNT113002 |
| 備註 | 對接群在 TG | — |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 已上線 | 已上線 |
| 正式上線 | 已上線 | 已上線 |

---

### 5G（FVG）

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 錢包模式 | 單一錢包 | — |
| 玩家帳號模式 | 待補 | — |
| Base URL（正式，香港） | https://api-hk01.figoogoo.com | — |
| 後台網址（正式） | https://backstage-agent.figoogoo.com | — |
| 後台帳號（正式） | kbbadmin / 0000 | — |
| 後台網址（測試） | https://backstage-agent-stage.5gg.dev | — |
| 後台帳號（測試） | kbbadmin / Gibaba01 | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/5G | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/5G | — |
| IP白名單（測試站） | 43.199.82.158 | — |
| IP白名單（正式站） | 43.199.82.158 / 13.251.22.117 / 18.230.80.189 / 34.201.202.214 / 54.232.124.207 / 54.94.100.200 / 56.126.92.186 / 16.163.16.115 / 18.167.232.184 / 43.198.158.140 / 3.211.82.8 / 98.80.29.24 / 98.95.190.37 / 52.77.174.16 / 3.1.169.136 / 13.251.252.130 | — |
| MerchID ⚠️（測試站） | kbbadmin | — |
| MerchID ⚠️（正式站） | kbbadmin | — |
| 文件收集 | [單一錢包API文件](https://reurl.cc/xNL3ve) / [遊戲清單](https://docs.google.com/spreadsheets/d/1DTpLBQxh2HVMNSpPcClU4IlHzBGa5-O7/edit#gid=464863830) | — |
| 備註 | 對接群在 TG | — |
| 測試環境 | 已上線 | — |
| 正式上線 | 已上線 | — |

---

### GIO

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 錢包模式 | 單一錢包 | — |
| 玩家帳號模式 | 待補 | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/Gio | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/Gio | — |
| IP白名單（測試站） | 154.222.0.143 / 49.128.65.4 | — |
| IP白名單（正式站） | 45.200.132.252 / 45.65.70.4 / 49.128.65.4 / 49.128.73.4 / 45.200.132.99 | — |
| 後台網址（正式） | https://bo.giocoplus.vip | — |
| 後台帳號（正式） | c（待確認是否完整）/ qwe123 | — |
| API Key/Secret ⚠️（正式） | 待補充 | — |
| API Key/Secret ⚠️（測試） | gdd_admin | — |
| 文件收集 | 待補充 | — |
| 備註 | 測試環境資料未取得 | — |
| 測試環境 | 已上線 | — |
| 正式上線 | 已上線 | — |

---

### I8

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 錢包模式 | 單一錢包 | — |
| 玩家帳號模式 | 待補 | — |
| 認證方式 | 安全密鑰 | — |
| Base URL（正式） | https://api.i8-gaming.net | — |
| 後台網址（正式） | https://agent.vcg88.com | — |
| DC（域名） | KIMBABA | — |
| 後台帳號（正式） | KIMBABA_HALL / 6Sc8zqqS | — |
| 主代理帳號（正式） | KIMBABA_AgentS（ID：tmUI8N4OKUk3） | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/I8 | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/I8 | — |
| IP白名單（測試站） | 34.80.225.248 | — |
| IP白名單（正式站） | 34.80.29.128 / 104.155.192.200 | — |
| API Key/Secret ⚠️（正式） | 安全密鑰：8d74cc13f94314cb5d216dff8129ffd6daca42225a951511e39c73501ea2eb91 / RSA Public Key：`-----BEGIN PUBLIC KEY----- MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzetmbU7StgrFmKdoRb+h vVgbuS8jRCIG2diOgZKM/QtlQnQgzJfuYkyw90rK/Fw6CuZ/aKX/g7F4Yq/azwqw Y/60gPgBtYOFzn/FnBY8ryzzGxcAFY84tWHaIQVnisbWXHEm88e6DYyNs4I9Nzx6 NVJ/iZpQEcDvz+V8AXwOrh33m4WpeKmMj92S+L8MAeg3BxtjYMJIEASL+lfzuNsD V69QXLiGxmROLcLT1SLYqhSYLu/MWfLP8R8ygJ6mo6jiE6BqbBI3nrxy1o73jV3o 6HOZylIa/93igiR6K7buEt+J52fk7iMvK1MiCuO2KMeaU3hZDSeS1Ck6d2O1Ud45 SwIDAQAB -----END PUBLIC KEY-----` | — |
| MerchID ⚠️（正式站） | KIMBABA | — |
| API Key/Secret ⚠️（測試） | RSA Public Key：`-----BEGIN PUBLIC KEY----- MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAlaPakd/eJALrYt5YtBKZ dxQ6LahFQG/fblPnNGCTs70fflFVaHRzB5UH7/aMntpwGjiDHOw8NS3vmkhHRtZO JB0A65HO1lb/GJ5S0fz1vytOg6j143U53aZ3MDDItAGHwXlB/n6i24Oo1H+tmdF0 fUu0Rsqeg8ll4bd02cOwB3nw2fQm9UTPCWkNUs25hbe1De4awlUnHsoU0cZDMzuR QGxteiHlAWyCJ+eI+HrjohDqxGKyzDGSudy+XV/EpJcZprZzNCoYCDFy8mWO9Ivn ctggbcDC4bowmJkLQ6vJt/sH+YCG7tZ3MFwmx8rlZ1/yTcIIg1HVEszk/cy96g/4 LwIDAQAB -----END PUBLIC KEY-----` | — |
| 文件收集 | https://drive.google.com/drive/folders/1PU5E3WZjG0trZ3THdm7YbkSJur3MK7qF | — |
| 備註 | 對接群在 TG | — |
| 測試環境 | 已上線 | — |
| 正式上線 | 已上線 | — |

---

### KBB（自家）

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | KBB | KBD |
| 錢包模式 | 單一錢包 | 單一錢包 |
| 玩家帳號模式 | 待補 | 待補 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/KBB | https://intg.gibaba.com/3rdParty/diamond/Slot/KBB |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/KBB | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/KBB |
| IP 白名單 | 待補充 | 待補充 |
| API Key/Secret ⚠️（測試） | devkbb_Admin | devkbd_Admin |
| API Key/Secret ⚠️（正式） | kbb_Admin | kbd_Admin |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 已上線 | 已上線 |
| 正式上線 | 已上線 | 已上線 |

---

### OSEG（168game）

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | REX(130) | REX(1) |
| 錢包模式 | 單一錢包 | 單一錢包 |
| 玩家帳號模式 | 待補 | 待補 |
| 認證方式 | JWT Token | 同左 |
| Base URL（正式） | https://apii.cqgame.cc | 同左 |
| Base URL（測試） | https://api.cqgame.games | 同左 |
| 後台網址（正式） | https://booi.cqgame.cc | 同左 |
| 後台帳號（正式） | kimbaba / qwer1234 | KBBDiamond / a123456 |
| 後台網址（測試） | https://bo.cqgame.games | 同左 |
| 後台帳號（測試） | kbbREX_sw / n1oWMmCK | kbbREX1_sw / OhYAPtTz |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/OSEG | https://intg.gibaba.com/3rdParty/diamond/Slot/OSEG |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/OSEG | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/OSEG |
| IP白名單（測試站） | 211.23.49.51 / 113.196.184.234 / 175.98.168.194 / 35.187.201.14 / 104.199.186.229 | 同左 |
| IP白名單（正式站） | 175.98.168.194 / 34.81.144.197 | 同左 |
| API Token ⚠️（正式） | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2ODc4Y2NlYjJlMzc2YzNjOTUwNDZhMjEiLCJhY2NvdW50Ijoia2ltYmFiYSIsIm93bmVyIjoiNjg3OGNjZWIyZTM3NmMzYzk1MDQ2YTIxIiwicGFyZW50Ijoic2VsZiIsImN1cnJlbmN5IjoiUkVYKDEzMCkiLCJicmFuZCI6IjE2OGdhbWUiLCJqdGkiOiIxMDk5NjM2NDgiLCJpYXQiOjE3NTI3NDcyNDMsImlzcyI6IkN5cHJlc3MiLCJzdWIiOiJTU1Rva2VuIn0.qfgJDJUzSwPSggCSImYIIWqh72X3S14b60gx-Au5Nig | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2ODc4ZDU0MTJlMzc2YzNjOTUwNDZhMjkiLCJhY2NvdW50IjoiS0JCRGlhbW9uZCIsIm93bmVyIjoiNjg3OGQ1NDEyZTM3NmMzYzk1MDQ2YTI5IiwicGFyZW50Ijoic2VsZiIsImN1cnJlbmN5IjoiUkVYKDEpIiwiYnJhbmQiOiJjcTkiLCJqdGkiOiI4OTAxMzIzMjciLCJpYXQiOjE3NTI3NDkzNzcsImlzcyI6IkN5cHJlc3MiLCJzdWIiOiJTU1Rva2VuIn0.uPpjNdmoI68q_YrlJscSRPx0X85meVwFQlgSD4eYKP8 |
| API Token ⚠️（測試） | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2ODY0YWFkYTcxYjczNTcyMmQ3NWVlNjIiLCJhY2NvdW50Ijoia2JiUkVYX3N3Iiwib3duZXIiOiI2ODY0YWFkYTcxYjczNTcyMmQ3NWVlNjIiLCJwYXJlbnQiOiJzZWxmIiwiY3VycmVuY3kiOiJSRVgoMTMwKSIsImJyYW5kIjoiMTY4Z2FtZSIsImp0aSI6Ijc2Mzk1MTQ0MCIsImlhdCI6MTc1MTQyNzgwMiwiaXNzIjoiQ3lwcmVzcyIsInN1YiI6IlNTVG9rZW4ifQ.RQM_kBQQ70n8fTxfudnHgLB_ZtWCxY11yJjtvltj_GM | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2ODY1MDFmZDcxYjczNTcyMmQ3NWY4YWYiLCJhY2NvdW50Ijoia2JiUkVYMV9zdyIsIm93bmVyIjoiNjg2NTAxZmQ3MWI3MzU3MjJkNzVmOGFmIiwicGFyZW50Ijoic2VsZiIsImN1cnJlbmN5IjoiUkVYKDEpIiwiYnJhbmQiOiIxNjhnYW1lIiwianRpIjoiNTE4NzY2ODM1IiwiaWF0IjoxNzUxNDUwMTA5LCJpc3MiOiJDeXByZXNzIiwic3ViIjoiU1NUb2tlbiJ9.XMksP8uNDT-cg-IPP1r9C80jEO_i-1KY-rsR7szm1lA |
| MerchID ⚠️（測試站） | kbbREX_sw | kbbREX1_sw |
| MerchID ⚠️（正式站） | kimbaba | KBBDiamond |
| 備註 | 對接群在 TG | — |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 已上線 | 已上線 |
| 正式上線 | 已上線 | 已上線 |

---

### QT

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | COP（2025/3/12） | NT |
| 錢包模式 | 單一錢包 | 單一錢包 |
| 玩家帳號模式 | 待補 | 待補 |
| 後台網址（正式） | https://bo.qtplatform.com | 同左 |
| 後台帳號（正式） | manager_kimbaba / db | — |
| 後台網址（測試） | https://bo-int.qtplatform.com | 同左 |
| 後台帳號（測試） | qa_kimbaba / ggJfiha9 | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/QT | 同左 |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/QT | 同左 |
| IP白名單（測試站） | 3.1.243.244 / 202.175.253.62 | 同左 |
| IP白名單（正式站） | 52.77.32.26 / 34.241.71.150 / 18.162.217.103 / 18.184.243.189 / 34.243.156.16 / 52.79.203.127 / 52.76.231.168 / 202.175.253.62 | 同左 |
| MerchID ⚠️（測試站） | qa_kimbaba | KBBDiamond |
| MerchID ⚠️（正式站） | kimbaba | KBBDiamond |
| Passkey ⚠️（正式） | zGXbvMRHpPw4dEQM | 3eKudE4dX7jEkd50 |
| Reward URL（正式） | — | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/QT/bonus/rewards |
| Passkey ⚠️（測試） | BfLP4ktG8Hn7giFk | K2qfiqN9SGeQ6IpW |
| 文件收集 | https://drive.google.com/drive/folders/1iMs4i8RB1B_Kgf-K-RlzWBhpLrkCcx3c?usp=sharing | [正式環境資訊](https://drive.google.com/file/d/1bht4Inzf-at71vrE-5AUsFYDI4DfpR5l/view?usp=sharing) / [測試環境資訊](https://drive.google.com/file/d/1Y3iFnVb4doRtN_oDwYX9rk3wL90UDEOj/view?usp=sharing) |
| 測試環境 | 已上線 | 已上線 |
| 正式上線 | 已上線 | 已上線 |

---

### RG

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | TWD130 | TWD |
| 錢包模式 | 單一錢包 | 單一錢包 |
| 玩家帳號模式 | 待補 | 待補 |
| 認證方式 | appkey + appSecret + wtoken | 同左 |
| Base URL（正式） | https://openapi.rgslotgame.com/ | 同左 |
| Base URL（測試） | https://hall-openapi.rg888.dev/ | 同左 |
| 後台網址（正式） | https://agent.rgslotgame.com/ | 同左 |
| 後台網址（測試） | https://hall-agent.rg888.dev/ | 同左 |
| 後台帳號 總代理（兩站） | KBB / a123456 | 同左 |
| 後台帳號 台灣代理（兩站） | kimbaba / a123456 | KBBDiamond / a123456 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/RG | https://intg.gibaba.com/3rdParty/diamond/Slot/RG |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/RG | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/RG |
| IP白名單（測試站） | 34.97.182.158 | 同左 |
| IP白名單（正式站） | 34.97.225.83 / 34.97.146.191 | 同左 |
| API Key/Secret ⚠️（正式） | appkey: TrjbzZ86MfE4 / appSecret: X3TtB5mbHCp5pfm5DetTSVNhsKpgPqLb / wtoken: 7W7y5D2KSrf6TXdeHL2ZXyen-cgZ1t | appkey: Z9nNCmLQes8z / appSecret: 2HDtUpP9LqSjmBztefJkd7zrSvyMeRNm / wtoken: GSBbevHR_vLtBiCnVIGi4HzVmNH8WB-cgZ1t |
| API Key/Secret ⚠️（測試） | appkey: BsxzUGm6yaKF / appSecret: ePCn2qmBcJgzuzd9LVFTGD4qvTdvLzGA / wtoken: xJwsjf2X78-YzkB4yDEoEQ_hL_3NfL | appkey: cC5xMZ5kCcMc / appSecret: 5Vy7LQaizJDVQzcghVHuFSS35pAJwKLN / wtoken: KdG06d9GWYuGrzzzmbctJtb942Kl5b |
| MerchID ⚠️（測試站） | kimbaba | kimbaba |
| MerchID ⚠️（正式站） | kimbaba | KBBDiamond |
| 文件收集 | https://hall-openapi.rg888.dev/zh_TW/wallet-api-docs | 同左 |
| 備註 | 對接群在 TG | — |
| 測試環境 | 已上線 | 已上線 |
| 正式上線 | 已上線 | 已上線 |

---

### RK5

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 錢包模式 | 單一錢包 | — |
| 玩家帳號模式 | 待補 | — |
| Base URL（兩站同） | https://gbb-api.rk5.online | — |
| 後台網址（兩站同） | https://gbb-admin.rk5.online | — |
| 後台帳號 管理者 | gbbadmin / 0000 | — |
| 後台帳號 客服 | gbbcs01 / 0000、gbbcs02 / 0000、gbbcs03 / 0000 | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/RK5 | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/RK5 | — |
| IP白名單（測試站） | 15.165.183.199 | — |
| IP白名單（正式站） | 13.125.172.105 | — |
| API Key/Secret ⚠️ | Host ID: 811ab975152764afff0ba26496878b17 | — |
| MerchID ⚠️ | gbb | — |
| 文件收集 | 待補充 | — |
| 備註 | 測試與正式同一環境，串接完成後通知廠商開通 | — |
| 測試環境 | 已上線 | — |
| 正式上線 | 已上線 | — |

---

### RSGSW

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 錢包模式 | 單一錢包 | 單一錢包 |
| 玩家帳號模式 | 待補 | 待補 |
| 認證方式 | Client ID + Client Secret + DesKey + DesIV | 同左 |
| Base URL（測試） | http://tsgbb-api.royalgaming777.com/WithBalance | — |
| 後台網址（正式） | https://gamectrl.rsgaming888.com/ | 同左 |
| 後台帳號（正式） | kbbswSys / 8VYU9SNF | — |
| 後台網址（測試） | https://tsgamectrl.royalgaming777.com/ | 同左 |
| 後台帳號（測試） | gbbSys / 8J7Y49FH | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/RSGSW | https://intg.gibaba.com/3rdParty/diamond/Slot/RSGSW |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/RSGSW | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/RSGSW |
| IP白名單（測試站） | 52.76.139.21 | 同左 |
| IP白名單（正式站） | 13.214.250.190 / 52.76.139.21 | 同左 |
| API Key/Secret ⚠️（正式） | ClientID: cxr3if266fs5 / Secret: 3DUW8SGL / DesKey: 6T8GJ3SE / DesIV: KTZCS584 / SystemCode: kbbsw | — |
| API Key/Secret ⚠️（測試） | ClientID: 8rv28fsq5tad / Secret: 2V6VWEMG / DesKey: EK8LWF8X / DesIV: DVJLM7EL / SystemCode: gbb | — |
| MerchID ⚠️（測試站） | gbbSys | gbbdiamond |
| MerchID ⚠️（正式站） | kbbswSys | KBBDiamond |
| 帳務 FTP（正式） | ftp://46.137.226.200（帳號：kbbsw / 密碼：CTVJZCTK） | — |
| 帳務 FTP（測試） | ftp://52.74.25.11（帳號：gbb / 密碼：SEWTLFT4） | — |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 已上線 | 已上線 |
| 正式上線 | 已上線 | 已上線 |

---

### TAG

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | TWD130 | — |
| 錢包模式 | 單一錢包 | — |
| 玩家帳號模式 | 待補 | — |
| 後台網址（正式） | https://bp-office.taggamerun.com | — |
| 後台帳號（正式） | kbb_001 / FWAw88DRTJmP | — |
| 後台網址（測試） | https://bp-office.taggame.online | — |
| 後台帳號（測試） | kbb_001 / Ww8aFvVsrMuW | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/TAG | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/TAG | — |
| IP白名單（測試站） | 34.84.186.61 / 54.64.211.196 | — |
| IP白名單（正式站） | 34.146.58.253 / 54.64.211.196 | — |
| MerchID ⚠️（測試站） | kbb | — |
| MerchID ⚠️（正式站） | kbb | — |
| 文件收集 | [正式環境資料](https://docs.google.com/spreadsheets/d/17MvxxAzawmXFVhPJDcinMrcK1t6yWuRm/edit?gid=1523953999) / [測試環境資料](https://docs.google.com/spreadsheets/d/17MvxxAzawmXFVhPJDcinMrcK1t6yWuRm/edit?gid=2128247454) / [API文件](https://api-doc.taggame.online/) | — |
| 備註 | 對接群在 TG | — |
| 測試環境 | 已上線 | — |
| 正式上線 | 已上線 | — |

---

### VA（KBB）

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | SDTWD | — |
| 錢包模式 | 單一錢包 | — |
| 玩家帳號模式 | 待補 | — |
| 認證方式 | Authorization + APIKey | 同左 |
| Base URL（正式） | https://api.victory-art.tw/vendor | — |
| Base URL（測試） | https://api.victory-art.com | — |
| 後台網址（正式） | https://vtw.victory-art.tw/agent_manage/login | — |
| 後台帳號（正式） | KBB / QecDz66YQ# | — |
| 後台網址（測試） | https://vtw.victory-art.com/agent_manage/login | — |
| 後台帳號（測試） | KBB / Gibaba01@ | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/VA | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/VA | — |
| IP白名單（測試站） | 43.213.9.12 / 18.138.181.203 / 18.141.122.251 | — |
| IP白名單（正式站） | 18.138.181.203 / 18.141.122.251 / 43.212.146.187 | — |
| API Key/Secret ⚠️（正式） | Authorization: aa241dd80da3400faaf6fa6086fda3a9 / APIKey: 80da34 | — |
| API Key/Secret ⚠️（測試） | Token: c05bccd4cdfe45e7acc6b86121b6a12b / APIKey: 4cdfe4 | — |
| MerchID ⚠️（兩站） | KBB | — |
| 文件收集 | [VA 介接文件](https://drive.google.com/file/d/1_xo7DK6OzHVnL6iPVyv0DDoArsduPfxA/view?usp=sharing) / [遊戲清單](https://docs.google.com/spreadsheets/d/1B4A0UPXR4KgcTJTjoXfzaFne72H4bmB8/edit?gid=1840019975) / [遊戲素材](https://drive.google.com/drive/folders/1bLNFzwfjQLmwzuaHawjuahV13DDP07Hp) | — |
| 備註 | 對接群在 TG / 測試站 2025/12/16 更新新域名 | — |
| 測試環境 | 已上線 | — |
| 正式上線 | 已上線 | — |

---

### VPG ⚠️ 已下架

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | TWD（1:1） | TWD |
| 錢包模式 | 單一錢包 | 單一錢包 |
| 玩家帳號模式 | 待補 | 待補 |
| 認證方式 | Agent + AESKey + MD5key | 同左 |
| Base URL（正式） | https://api.smfhd436.com/channelHandle | — |
| 拉單接口（正式） | https://record.smfhd436.com/getRecordHandle | — |
| Base URL（測試） | https://wc-api.orz16.com/channelHandle | — |
| 拉單接口（測試） | https://wc-record.orz16.com/getRecordHandle | — |
| 後台網址（正式） | https://ht.smfhd436.com/#/login | — |
| 後台帳號（正式） | JINBABA / Kimbaba01@ | — |
| 後台網址（測試） | https://wc-ht.orz16.com/#/proxyAccount | — |
| 後台帳號（正式） | JINBABA / Kimbaba01@ | kbbdiamond / Kbbdiamond01@1 |
| 後台帳號（測試） | JINBABA / Kimbaba01@ | gbbdiamond / Gbbdiamond01@ |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/VPG/sw | https://intg.gibaba.com/3rdParty/diamond/Slot/VPG/sw |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/VPG/sw | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/VPG/sw |
| IP白名單（測試站） | 34.80.32.155 / 35.229.201.209 | 同左 |
| IP白名單（正式站） | 35.241.101.185 | 35.241.101.185 |
| API Key/Secret ⚠️（正式） | Agent: 60235 / AESKey: 0D5D3C917A5E6B28 / MD5key: 2206C78A8B79B5BA | Agent: 60248 / AESKey: C51778AC3C6EB456 / MD5key: BBE9BF2FEA05CA5C |
| API Key/Secret ⚠️（測試） | Agent: 60434 / AESKey: 4B3F5F717CF01C8A / MD5key: 234A07C332C5B653 | Agent: 60435 / AESKey: EC9FC4E37E86DD4C / MD5key: A842026F30E1DE0E |
| MerchID ⚠️（正式站） | JINBABA | — |
| MerchID ⚠️（測試站） | JINBABA（Agent：60434） | gbbdiamond（Agent：60435） |
| 文件收集 | [API文件 & 美術素材](https://drive.google.com/drive/folders/13Pt_p6K6XKDzkdysRvaEyLdLuwHiUYaS?usp=sharing) | — |
| 備註 | 對接群在 TG / 爸幣結算1:130（財務自行與廠商結算），鑽石1:1 | — |
| 測試環境 | 已下架 | 已下架 |
| 正式上線 | 已下架 | 已下架 |

---

### YB

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 錢包模式 | 單一錢包 | — |
| 玩家帳號模式 | 待補 | — |
| Base URL（正式） | https://api.jupiter-neptunus.net/apiRequest.do | — |
| Base URL（測試） | https://api.imperial-minerva.net/apiRequest.do | — |
| 後台網址（正式） | https://agent.venus-diana.net | — |
| 後台網址（測試） | https://agent.odyssey-cyclopes.net | — |
| 後台帳號（正式） | kbbskbbag / db | — |
| 安全碼（正式） | KBBS | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/YB | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/YB | — |
| IP白名單（測試站） | 35.221.189.164 | — |
| IP白名單（正式站） | 34.87.184.98 | — |
| MerchID ⚠️（正式站） | kbbskbbag | — |
| 文件收集 | [API文件](https://docs.ybgaming777.net) / [遊戲列表](https://docs.ybgaming777.net/zh/game-list-all/slot) / [遊戲素材](https://drive.google.com/drive/u/0/folders/1_kSdz04JMnoZ2oa1tHP2eXHv08tDPsVP) | — |
| 備註 | 對接群在 TG | — |
| 測試環境 | 已上線 | — |
| 正式上線 | 已上線 | — |

---

### ZG

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 錢包模式 | 單一錢包 | — |
| 玩家帳號模式 | 待補 | — |
| 後台網址（正式） | https://ag.kbbfatsai.com/ | — |
| 後台帳號（正式） | DALE0001pTTT / Us864zQc9vFA | — |
| 後台網址（測試） | https://fud.ds1kx.fun/login | — |
| 後台帳號（測試） | DALE0001UAT / 3KHSfjCbU264 | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/ZG | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/ZG | — |
| IP白名單（測試站） | 35.185.134.195 / 34.87.105.120 | — |
| IP白名單（正式站） | 34.85.125.127 / 35.247.133.37 / 34.87.180.25 / 34.87.153.224 / 34.87.43.0 / 34.87.181.9 / 35.247.186.149 / 34.87.151.215 / 35.187.235.134 / 34.87.5.235 / 34.87.28.166 | — |
| MerchID ⚠️（測試站） | DALE0001UAT | — |
| MerchID ⚠️（正式站） | DALE0001pTTT | — |
| 文件收集 | [API文件](https://sapi.zgdoc1668.com)（帳號：zebra / 密碼：4cvHBoOD3O6d） | — |
| 備註 | 對接群在 TG | — |
| 測試環境 | 已上線 | — |
| 正式上線 | 已上線 | — |

---

### AMS ⚠️ 已下架

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | 100TWD | — |
| 錢包模式 | 單一錢包 | — |
| 玩家帳號模式 | 待補 | — |
| Base URL（正式） | https://api.askmeslot.io/ | — |
| Base URL（測試） | https://api-uat.askmeslot.io/ | — |
| 後台網址（正式） | https://ag.askmeslot.io/ | — |
| 後台網址（測試） | https://ag-uat.askmeslot.io/ | — |
| 後台帳號（正式） Master | kbb100twd / Je7Kef4Ho7 | — |
| 後台帳號（正式） Agent | kbb100twdaa / Bux3Pis7Xun3 | — |
| 後台帳號（測試） Master | kbb100twduat / Ra1Xu6Ko9（驗證碼：889588） | — |
| 後台帳號（測試） Agent | kbb100twduataa / Ry5By8Ru3（驗證碼：889588） | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/AMS | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/AMS | — |
| IP白名單（正式站） | 54.255.98.164 / 18.142.99.49 / 13.213.115.59 | — |
| API Key/Secret ⚠️（正式） | Partner: KBB / Agent: kbb100twdaa / Secret: 32d996cb6b1a5786045a94dadffa412e | — |
| API Key/Secret ⚠️（測試） | Partner: GBB / Agent: kbb100twduataa / Secret: ccc09db33692c53a0c9c19e68632bc2f | — |
| 文件收集 | [API文件](https://api-document.gitbook.io/askmeslot-api-document) | — |
| 備註 | 對接群在 TG | — |
| 測試環境 | 已下架 | — |
| 正式上線 | 已下架 | — |

---

### AVX ⚠️ 已下架

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 錢包模式 | 單一錢包 | — |
| 玩家帳號模式 | 待補 | — |
| Base URL（正式） | https://game.aviatrix.bet | — |
| Base URL（測試） | https://game-preprod.aviatrix.work | — |
| 後台（正式） | https://backoffice.aviatrix.bet（marklin@idollar.com.tw） | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Fish/AVX | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Fish/AVX | — |
| IP白名單（測試站） | 167.71.59.12 / 167.172.162.8 / 167.71.52.117 / 167.71.53.112 | — |
| IP白名單（正式站） | 164.92.237.70 / 46.101.119.140 / 164.92.133.157 / 164.92.201.169 / 178.128.202.30 / 209.38.204.54 / 64.226.78.210 / 209.38.212.196 / 178.128.206.191 / 139.59.133.86 | — |
| API Key/Secret ⚠️（正式） | cid: kimbaba / key: 532d02be-0a8f-4562-8187-08e84b1de52d | — |
| API Key/Secret ⚠️（測試） | cid: kimbaba / key: 9edfac1d-e30e-4bb5-857e-3f8d66e8bd36 | — |
| MerchID ⚠️（兩站） | kimbaba | — |
| 文件收集 | [英文API](https://docs.aviatrix.bet/en/integration/) / [中文API](https://docs.google.com/document/d/13z8dZAlwgKadNidvSrq8QQ6r7r7OXoiZ/edit) / [資訊填寫](https://docs.google.com/spreadsheets/d/16f5pUjheED4BPZqf7JgCxxIA-tO3U73wpZaEUh31EDM/edit?gid=0#gid=0) | — |
| 備註 | 對接群在 TG / 測試站目前幣別為 KWD，KBB 幣別待設定 | — |
| 測試環境 | 已下架 | — |
| 正式上線 | 已下架 | — |

---

### BOD

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | FAYF（台幣 1:130）| — |
| 備註幣別 | 啟動遊戲時帶入 `currency=FAYF` 參數 | — |
| 錢包模式 | 單一錢包 | — |
| 玩家帳號模式 | memberid_Account (18835_CXu4576) | — |
| Base URL（正式） | https://rgsservice-ky.ob.games | — |
| Base URL（測試） | https://rgsservice-stage.ob.games | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/BOD | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/BOD | — |
| IP白名單（測試站） | 54.199.149.205 / 3.114.1.148 / 35.74.155.112 / 23.27.219.46 | — |
| IP白名單（正式站） | 3.113.138.249 / 57.181.86.201 / 54.249.76.122 / 13.114.133.67 / 23.27.219.46 | — |
| API Key/Secret ⚠️（測試，由 KYG 提供） | Secret: s2okCuDSyagLvRODX4Xh / API_key: goldpapa | — |
| API Key/Secret ⚠️（正式） | 待補充 | — |
| 後台網址（正式） | https://opsnext-ky.ob.games/en/login | — |
| 後台網址（測試） | https://opsnext-stage.ob.games/en/login | — |
| 後台帳號（測試） | goldpapa@ops.com / zcl8i0q1cd)! | — |
| 後台帳號（正式） | 待補充 | — |
| 文件收集 | [API文件（無縫/單一錢包 CN）](https://drive.google.com/file/d/1Xi8C0OCDo9DZZlNkENqyQlNdPQdT_U6r/view?usp=sharing) | — |
| 測試環境 | 已上線 | — |
| 正式上線 | 已上線 | — |

---

### DG（KBB）⚠️ 已下架

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | TWD | TWD |
| 錢包模式 | 單一錢包 | 單一錢包 |
| 玩家帳號模式 | 待補 | 待補 |
| 後台網址（兩站同） | https://jj14t5com.com/ag/login.html | 同左 |
| 後台帳號 總代理（正式） | DG084201 / dbdb | — |
| 後台帳號 代理（正式） | DG0842 / dbdb | — |
| 後台帳號（測試） | DGTE0105UI / 88958895 | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Table/DG | https://intg.gibaba.com/3rdParty/diamond/Table/DG |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Table/DG | https://intg.kimbaba.com.tw/3rdParty/diamond/Table/DG |
| API Key/Secret ⚠️（正式） | DG084201 | KBBdiamond |
| API Key/Secret ⚠️（測試） | DGTE0105UI / API key: 51c472a6a4fd459a90bd6163cc71d538 | GBBdiamond |
| 文件收集 | [API文件](https://static.dg012.com/dgnew/doc/cn/api.html) / [錢包文件](https://static.dg012.com/dgnew/doc/cn/wallet.html) | — |
| 備註 | 對接群在 TG | — |
| 測試環境 | 已下架 | 已下架 |
| 正式上線 | 已下架 | 已下架 |

---

### EVOTW ⚠️ 已下架

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 錢包模式 | 單一錢包 | — |
| 玩家帳號模式 | 待補 | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Table/EVOTW | — |
| Callback（正式站） | ❓ 未提供（正式站） | — |
| IP白名單（測試站） | 35.194.204.27 / 87.246.163.0/24 / 16.170.3.91 / 13.48.39.224 / 13.51.126.234 / 91.213.212.38 / 3.120.57.172 / 18.159.27.247 / 52.29.167.211 | — |
| 測試環境 | 已下架 | — |
| 正式上線 | 已下架 | — |

---

### GM ⚠️ 已下架

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | KBB | TWD |
| 錢包模式 | 單一錢包 | 單一錢包 |
| 玩家帳號模式 | 待補 | 待補 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Fish/GM | https://intg.gibaba.com/3rdParty/diamond/Fish/GM |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Fish/GM | https://intg.kimbaba.com.tw/3rdParty/diamond/Fish/GM |
| IP 白名單 | 54.95.238.176 / 13.112.140.6 | 待補充 |
| API Key/Secret ⚠️（測試） | tfoqk001283 | kbb-diamond-keo |
| API Key/Secret ⚠️（正式） | kbb-j31p | kbb-diamond |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 已下架 | 已下架 |
| 正式上線 | 已下架 | 已下架 |

---

## OpenAPI 規格

> 尚未提供。OpenAPI 規格檔案建置後將在此處提供下載連結。

`[預留位置] 待上傳 OpenAPI YAML/JSON 檔案`
