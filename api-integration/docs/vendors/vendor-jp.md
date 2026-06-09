# 日本站（JP）API 對接資料

## 基本資訊

| 項目 | 說明 |
|------|------|
| 站別代稱 | JP（日本站） |
| 錢包模式 | 單一錢包 |
| 代理架構 | 單一代理 |

## API IP 白名單

### 後台 IP（三站共用）
- `114.35.163.10`
- `114.34.170.104`
- `59.127.154.188`

### 日本站 API IP
**測試站**
- `54.199.128.155`
- `114.34.170.104`

**正式站**
- `114.34.170.104`
- `46.51.243.21`
- `13.231.51.46`
- `52.198.200.132`
- `13.112.158.110`
- `3.115.127.180`

---

## 遊戲商對接明細

### BNG

| 欄位 | 內容 |
|------|------|
| 對接類型 | API |
| 錢包模式 | 單一錢包 |
| 玩家帳號模式 | 待補 |
| 幣別支援 | 待補充 |
| 認證方式 | PROJECT_NAME + API_TOKEN + WL |
| Base URL（正式） | https://gate2.betsrv.com/op/panahama |
| Base URL（測試） | https://gate-stage.betsrv.com/op/panahama-stage |
| 後台環境網址 | https://booonker.betsrv.com/ |
| 後台帳號 | it@panahama.jp |
| 後台密碼 | 8895@Help |
| Callback（測試站） | https://intg.devpanahama.jp/3rdParty/Slot/BNG |
| Callback（正式站） | https://intg.panahama.jp/3rdParty/Slot/BNG |
| IP白名單（測試站） | 213.227.130.69 / 213.227.145.249 / 213.227.145.238 |
| IP白名單（正式站） | 64.120.111.88 / 23.106.126.6 |
| API Key/Secret ⚠️（正式） | PROJECT_NAME: panahama / API_TOKEN: WcS60jDD7g / WL: prod |
| API Key/Secret ⚠️（測試） | PROJECT_NAME: panahama-stage / API_TOKEN: jYrOUE8lTQ / WL: prod |
| 商戶代碼（正式）⚠️ | panahama |
| 商戶代碼（測試）⚠️ | panahama-stage |
| 文件收集 | 待補充 |
| 測試環境 | 待補充 |
| 正式上線 | 已上線 |

---

### CQ9-Slot

| 欄位 | 內容 |
|------|------|
| 對接類型 | API |
| 錢包模式 | 單一錢包 |
| 玩家帳號模式 | 待補 |
| 幣別支援 | JPY |
| 認證方式 | JWT Token + 錢包密鑰 |
| Base URL（正式） | https://apii.cqgame.cc |
| Base URL（測試） | https://api.cqgame.games |
| 後台網址（正式） | https://booi.cqgame.cc |
| 後台網址（測試） | https://bo.cqgame.games |
| 後台帳號（正式） | Panahama_8895 / Pnhm_8895 |
| 後台帳號（測試） | lhy_sw / qwer1234 |
| Callback（測試站） | https://intg.devpanahama.jp/3rdParty/Slot/CQ9 |
| Callback（正式站） | https://intg.panahama.jp/3rdParty/Slot/CQ9 |
| IP白名單（測試站） | 60.249.60.121 / 175.99.248.34 / 211.23.49.51 / 113.196.184.234 / 35.187.201.14 |
| IP白名單（正式站） | 60.249.60.121 / 175.99.248.34 / 34.80.150.142 / 34.81.68.167 / 104.199.254.127 |
| API Key/Secret ⚠️（正式） | JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2NGI1MDNkZmJjYThkMzYyNmRmNjI3MzQiLCJhY2NvdW50IjoiUGFuYWhhbWFfODg5NSIsIm93bmVyIjoiNjRiNTAzZGZiY2E4ZDM2MjZkZjYyNzM0IiwicGFyZW50Ijoic2VsZiIsImN1cnJlbmN5IjoiSlBZIiwianRpIjoiODI0OTIwOTY5IiwiaWF0IjoxNjg5NTg0NjA3LCJpc3MiOiJDeXByZXNzIiwic3ViIjoiU1NUb2tlbiJ9.QZZmvRM9lB2MA7smRo3l6ClLDBYoB4hj0FAD8Nr-vzY / 錢包密鑰: yb5r5mxed3rfxyd3xc348c2kcdgd8yt57mshk7a8 |
| API Key/Secret ⚠️（測試） | JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2NDUwYjIwYTk2MzIwNTM1MjkyNDEzOWMiLCJhY2NvdW50IjoibGh5X3N3Iiwib3duZXIiOiI2NDUwYjIwYTk2MzIwNTM1MjkyNDEzOWMiLCJwYXJlbnQiOiJzZWxmIiwiY3VycmVuY3kiOiJKUFkiLCJqdGkiOiI0NTczODg3MzAiLCJpYXQiOjE2ODMwMTAwNTgsImlzcyI6IkN5cHJlc3MiLCJzdWIiOiJTU1Rva2VuIn0.DA4G7VHYwiA9Ii9PFxm4d9v4xTBEQjiwpa9URS__bPo / 錢包密鑰: yb5r5mxed3rfxyd3xc348c2kcdgd8yt57mshk7a8 |
| 商戶代碼 ⚠️ | Panahama_8895 |
| 文件收集 | [Slot/Table] https://hackmd.io/juByNDpcQQytCFlDzYgK1Q?view / [Sport/Lotto] https://hackmd.io/lyROjTelQtG4sxpWtjJDag?view |
| 測試環境 | 待補充 |
| 正式上線 | 已上線 |

---

### CQ9-Motivation（真人）

| 欄位 | 內容 |
|------|------|
| 對接類型 | API |
| 錢包模式 | 單一錢包 |
| 玩家帳號模式 | 待補 |
| 幣別支援 | JPY |
| 認證方式 | JWT Token + 錢包密鑰 |
| Base URL（正式） | https://api.motivations.cc |
| Base URL（測試） | https://api.motivations.games |
| 後台網址（正式） | https://bo.motivations.cc |
| 後台網址（測試） | https://bo.motivations.games |
| 後台帳號（正式） | panahama / Pnhm8895 |
| 後台帳號（測試） | lhy_sw / qwer1234 |
| Callback（測試站） | https://intg.devpanahama.jp/3rdParty/Slot/CQ9 |
| Callback（正式站） | https://intg.panahama.jp/3rdParty/Slot/CQ9 |
| IP白名單（測試站） | 60.249.60.121 / 175.99.248.34 / 211.23.49.51 / 113.196.184.234 / 35.187.201.14 |
| IP白名單（正式站） | 60.249.60.121 / 175.99.248.34 / 34.80.150.142 / 34.81.68.167 / 104.199.254.127 |
| API Key/Secret ⚠️（正式） | JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2NGI2MGI0Y2M2ZDAzMmI3ODM3ZjNkNzAiLCJhY2NvdW50IjoicGFuYWhhbWEiLCJvd25lciI6IjY0YjYwYjRjYzZkMDMyYjc4MzdmM2Q3MCIsInBhcmVudCI6InNlbGYiLCJjdXJyZW5jeSI6IkpQWSIsImp0aSI6IjYxODg3OTQyMyIsImlhdCI6MTY4OTY1MjA0NCwiaXNzIjoiQ3lwcmVzcyIsInN1YiI6IlNTVG9rZW4ifQ.pbAIxcsFJ-PKP2Ow0n8asgkAqjfVIolwKdjuKb5aFlk / 錢包密鑰: yb5r5mxed3rfxyd3xc348c2kcdgd8yt57mshk7a8 |
| API Key/Secret ⚠️（測試） | JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2NDUwYjNmMjc3OGIyYjYyMTBmMDBkZGIiLCJhY2NvdW50IjoibGh5X3N3Iiwib3duZXIiOiI2NDUwYjNmMjc3OGIyYjYyMTBmMDBkZGIiLCJwYXJlbnQiOiJzZWxmIiwiY3VycmVuY3kiOiJKUFkiLCJqdGkiOiIyNzE4Mzg3NzQiLCJpYXQiOjE2ODMwMTA1NDYsImlzcyI6IkN5cHJlc3MiLCJzdWIiOiJTU1Rva2VuIn0.FXhmnpBDklu6OCWDUzZK8U_Nl3hDf0pSj9xSS8Wq-UA |
| 商戶代碼 ⚠️ | panahama |
| 文件收集 | [Live/真人視訊] https://hackmd.io/iiMmRrBURG6OkMDiT4nG3g?view |
| 測試環境 | 待補充 |
| 正式上線 | 已上線 |

---

### EVO（Evolution Gaming）

| 欄位 | 內容 |
|------|------|
| 對接類型 | API |
| 錢包模式 | 單一錢包 |
| 玩家帳號模式 | 待補 |
| 幣別支援 | JPY |
| 認證方式 | Merchant ID + Casino Key + Auth Token |
| Base URL（正式） | https://api.luckylivegames.com |
| Base URL（測試） | http://staging.evolution.asia-live.com |
| Game History API（正式） | https://admin.luckylivegames.com |
| Game History API（測試） | https://stage-admin.asia-live.com |
| 後台網址（正式） | https://bo.nimstad99.com/login |
| 後台網址（測試） | https://stage-admin.asia-live.com |
| 後台帳號（正式） | 573001 / 112233 |
| 後台帳號（測試） | 573001STA / 112233 |
| Callback（測試站） | https://intg.devpanahama.jp/3rdParty/Table/EVO |
| Callback（正式站） | https://intg.panahama.jp/3rdParty/Table/EVO |
| IP白名單（測試站） | 3.120.233.170 |
| IP白名單（正式站） | 3.120.107.58 / 3.120.216.199 / 3.73.86.249 |
| API Key/Secret ⚠️（正式） | Merchant ID: 573001 / Casino Key: o8ahxa1daxgyrmeq / Auth Token: 37e5534f4d633dbba1e1f1bb07e535f2 |
| API Key/Secret ⚠️（測試） | Merchant ID: 573001STA / Casino Key: aziq4g2whh2xinj3 / Auth Token: 99f5c9c321bc912362802130e9d24afd |
| 商戶代碼 ⚠️ | 573001（正式）/ 573001STA（測試） |
| 文件收集 | 待補充 |
| 測試環境 | 待補充 |
| 正式上線 | 已上線 |

---

### FC（Fortune City）

| 欄位 | 內容 |
|------|------|
| 對接類型 | API |
| 錢包模式 | 單一錢包 |
| 玩家帳號模式 | 待補 |
| 幣別支援 | JPY |
| 認證方式 | AgentCode + AgentKey |
| Base URL（正式） | https://ap1.fcg1688.net |
| Base URL（測試） | https://api.fcg666.net |
| 後台網址（正式） | https://agent.fcg1688.net |
| 後台網址（測試） | https://agent.fcg666.net |
| 後台帳號 House（正式） | FCPNHM1001 / dgisJQCXC8AI |
| 後台帳號 Manage（正式） | FCPNHM2001 / h53baB9TbGC |
| 後台帳號 Agent（正式） | FCPNHM3001 / UcvNzQDjAx0t |
| 後台帳號 House（測試） | FCPNHM1001 / CPAdgLDD |
| 後台帳號 Manage（測試） | FCPNHM2001 / zByfqGFkt |
| 後台帳號 Agent（測試） | FCPNHM3001 / W195XwAI2 |
| 時區 | UTC-4 |
| Callback（測試站） | https://intg.devpanahama.jp/3rdParty/Slot/FC |
| Callback（正式站） | https://intg.panahama.jp/3rdParty/Slot/FC |
| IP白名單（測試站） | 104.199.132.230 / 35.194.132.52 / 34.124.156.179 / 35.240.215.42 |
| IP白名單（正式站） | 60.244.118.100 / 202.153.187.76 / 34.81.32.162 / 35.201.202.78 / 34.81.220.98 / 35.221.177.184 / 35.229.232.56 / 35.201.195.88 / 202.55.239.2 / 202.153.187.74 |
| API Key/Secret ⚠️（正式） | AgentCode: PNHM / AgentKey: uk2EMjSgmyR4lfby（2025/3/13更新） |
| API Key/Secret ⚠️（測試） | AgentCode: PNHM / AgentKey: gDquLsdfOeFuvwbY |
| 商戶代碼 ⚠️ | PNHM |
| 文件收集 | https://drive.google.com/file/d/1Ug_ytvuYauMpk-EAspgusptGyr0YXA-w/view?usp=sharing |
| 測試環境 | 待補充 |
| 正式上線 | 已上線 |

---

### PG（PG Soft）

| 欄位 | 內容 |
|------|------|
| 對接類型 | API |
| 錢包模式 | 單一錢包 |
| 玩家帳號模式 | 待補 |
| 幣別支援 | JPY |
| 認證方式 | operator_token + secret_key + salt |
| Base URL | 待補充 |
| 後台網址 Master（正式） | https://www.pg-bo.net/#/login?code=ZFRT366 |
| 後台帳號 Master（正式） | zfrt366 / Pej{j8Bv |
| 後台網址 Agent（正式） | https://www.pg-bo.net/#/login?code=PANAHAMA |
| 後台帳號 Agent（正式） | panahama / x{m$q1b} |
| 後台網址 Master（測試） | https://www.pg-bo.me/#/login?code=zfrt366 |
| 後台帳號 Master（測試） | zfrt366 / dev@gibaba8895 |
| 後台網址 Agent（測試） | https://www.pg-bo.me/#/login?code=panahama |
| 後台帳號 Agent（測試） | panahama / dev@gibaba8895 |
| Callback（測試站） | https://intg.devpanahama.jp/3rdParty/Slot/PG |
| Callback（正式站） | https://intg.panahama.jp/3rdParty/Slot/PG |
| IP白名單（測試站） | 8.210.145.251 |
| IP白名單（正式站） | 47.56.146.87 |
| API Key/Secret ⚠️（正式） | operator_token: 03A31E02-F6F0-4167-8034-3E0F8F647B62 / secret_key: 1CAB7535A4FC4BE084F9BBF7C7083EC0 / salt: D5C80B9AB2EA43818F72B4A8A16AB502 |
| API Key/Secret ⚠️（測試） | operator_token: c70438de307743eb1ecb6e191f614656 / secret_key: 24c2a2714c6ee16b3bb687d69cf0e6eb / salt: 599adb0992d7a005963021d8d617a07b |
| 商戶代碼 ⚠️ | panahama |
| 文件收集 | https://docs.google.com/document/d/1Wo38lAwQQebhRHX0xG_oa7OranzE1lJL/edit |
| 測試環境 | 待補充 |
| 正式上線 | 已上線 |

---

### QT（JP）

| 欄位 | 內容 |
|------|------|
| 對接類型 | API |
| 錢包模式 | 單一錢包 |
| 玩家帳號模式 | 待補 |
| 幣別支援 | JPY |
| 認證方式 | Username + Password |
| Base URL（正式） | https://api.qtplatform.com |
| Base URL（測試） | https://api-int.qtplatform.com |
| 後台網址（正式） | https://bo.qtplatform.com |
| 後台網址（測試） | https://bo-int.qtplatform.com |
| 後台帳號（正式） | manager_panahama / jvby@eG9 |
| 後台帳號（測試） | qa_panahama / rubXm$j8 |
| Callback（測試站） | https://intg.devpanahama.jp/3rdParty/Slot/QT |
| Callback（正式站） | https://intg.panahama.jp/3rdParty/Slot/QT |
| IP白名單（測試站） | 3.1.243.244 / 202.175.253.62 |
| IP白名單（正式站） | 52.77.32.26 / 34.241.71.150 / 18.162.217.103 / 18.184.243.189 / 34.243.156.16 / 52.79.203.127 / 52.76.231.168 / 202.175.253.62 |
| API Key/Secret ⚠️（正式） | api_panahama / ptodOtk9 |
| API Key/Secret ⚠️（測試） | api_panahama / aipu)za4 |
| 商戶代碼 ⚠️ | panahama |
| 文件收集 | 待補充 |
| 測試環境 | 待補充 |
| 正式上線 | 已上線 |

---

### RG（JP）

| 欄位 | 內容 |
|------|------|
| 對接類型 | API |
| 錢包模式 | 單一錢包 |
| 玩家帳號模式 | 待補 |
| 幣別支援 | JPY |
| 認證方式 | appkey + appSecret + wtoken |
| Base URL（正式） | https://openapi.rgslotgame.com/ |
| Base URL（測試） | https://hall-openapi.rg888.dev/ |
| 後台網址（正式） | https://agent.rgslotgame.com/ |
| 後台網址（測試） | https://hall-agent.rg888.dev/ |
| 後台帳號 總代理（兩站） | KBB / a123456 |
| 後台帳號 日本代理（兩站） | panahama / a123456 |
| Callback（測試站） | https://intg.devpanahama.jp/3rdParty/Slot/RG |
| Callback（正式站） | https://intg.panahama.jp/3rdParty/Slot/RG |
| IP白名單（測試站） | 34.97.182.158 |
| IP白名單（正式站） | 34.97.225.83 / 34.97.146.191 |
| API Key/Secret ⚠️（正式） | appkey: nHWPTTMH58QA / appSecret: dk2w6GFbg5h9h8iShYCwxgtwjdjUKKvS / wtoken: c2pA7p7cekT52AOcIrSh3TQsR_ZFzi |
| API Key/Secret ⚠️（測試） | appkey: vktk5yFrU8ZA / appSecret: B4v2PkxM9zNy7U9wNdiGg4m9VAPVa7Sb / wtoken: gGGQ7QuBNA13eNwWtMpcvK43vuQ1Us |
| 商戶代碼 ⚠️ | panahama |
| 文件收集 | 待補充 |
| 測試環境 | 待補充 |
| 正式上線 | 已上線 |

---

## OpenAPI 規格

> 尚未提供。OpenAPI 規格檔案建置後將在此處提供下載連結。

`[預留位置] 待上傳 OpenAPI YAML/JSON 檔案`
