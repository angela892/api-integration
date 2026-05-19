# 金發發（KFF）API 對接資料

## 基本資訊

| 項目 | 說明 |
|------|------|
| 站別代稱 | KFF（金發發） |
| 錢包模式 | 單一錢包 |
| 代理架構 | 三層（3代理 / 6代理 / 10代理） |
| 認證主要方式 | 依遊戲商而異（JWT Bearer Token / X-Operator+X-Key / 其他） |

## API IP 白名單

### 後台 IP（三站共用）
- `114.35.163.10`
- `114.34.170.104`
- `59.127.154.188`

### 金發發 API IP
**測試站**
- `43.207.251.161`
- `114.34.170.104`

**正式站**
- `13.159.207.83`
- `54.250.232.230`
- `54.65.135.32`
- `114.34.170.104`

## Callback 端點格式
- 測試站：`https://intg.devkimfafa.com/v2/3rdParty/{類型}/{供應商}/{供應商}{代理層}`
- 正式站：`https://intg.kimfafa.com.tw/v2/3rdParty/{類型}/{供應商}/{供應商}{代理層}`

---

## 遊戲商對接明細

### ATG

| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | API | API |
| 幣別支援 | TWD | TWD | TWD |
| 測試環境網址 | https://admin.godeebxp.com | https://admin.godeebxp.com | https://admin.godeebxp.com |
| 正式環境網址 | https://admin.godeebxp.com | https://admin.godeebxp.com | https://admin.godeebxp.com |
| 認證方式 | X-Operator + X-Key（HTTP Header） | X-Operator + X-Key（HTTP Header） | X-Operator + X-Key（HTTP Header） |
| Base URL | https://api.godeebxp.com/ | https://api.godeebxp.com/ | https://api.godeebxp.com/ |
| 錢包模式 | 單一錢包 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Slot/ATG/ATG1 | https://intg.devkimfafa.com/v2/3rdParty/Slot/ATG/ATG2 | https://intg.devkimfafa.com/v2/3rdParty/Slot/ATG/ATG3 |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/ATG/ATG1 | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/ATG/ATG2 | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/ATG/ATG3 |
| IP白名單需求 | 43.198.180.83 | 43.198.180.83 | 43.198.180.83 |
| 後台帳號（測試站） | KFF_beta | KFFB6_dev | KFFC10_dev |
| 後台密碼（測試站） | Qwer_##12345 | Qwer_@1234 | Qwer_@1234 |
| 後台帳號（正式站） | KFF_game_prod | KFFB_prd | KFFC_prd |
| 後台密碼（正式站） | No?b}^G}UW4. | Qwer_@1234 | Qwer_@1234 |
| API Key/Secret ⚠️（正式） | X-Operator：KFF_game_prod / X-Key：500228a7a01a4ad9a39dbe51cd81581b | X-Operator：KFFB / X-Key：b477ba6e236e4d64a21ac06278282b56 | X-Operator：KFFC / X-Key：4be921e4ad8f431d9bed201d82c18513 |
| API Key/Secret ⚠️（測試） | X-Operator：KFF2 / X-Key：98f99e54742b49199d35bbd9c6dbedd5 | X-Operator：KFFB6_dev / X-Key：05e33eb7cb26444982cc20e6ef58eb98 | X-Operator：KFFC10_dev / X-Key：eeea6ee187094a989bf876d2361b7e0f |
| 商戶代碼（測試站）⚠️ | KFF_beta | KFFB6_dev | KFFC10_dev |
| 商戶代碼（正式站）⚠️ | KFF_game_prod | KFFB_prd | KFFC_prd |
| 文件收集 | 待補充 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 | 待補充 |

---

### BE（Rebirth Entertainment）

| 欄位 | 3代理（BE1） | 6代理（BE2） | 10代理（BE3） |
|------|------------|------------|-------------|
| 對接類型 | API | API | API |
| 幣別支援 | TWD | TWD | TWD |
| 測試環境網址 | https://int-bo.rebirth.games | https://int-bo.rebirth.games | https://int-bo.rebirth.games |
| 正式環境網址 | https://bo.rebirth.games | https://bo.rebirth.games | https://bo.rebirth.games |
| 認證方式 | JWT Bearer Token | JWT Bearer Token | JWT Bearer Token |
| Base URL | 正式：https://api.rebirth.games / 測試：https://int-api.rebirth.games | 同左 | 同左 |
| 錢包模式 | 單一錢包 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Slot/BE/BE1 | https://intg.devkimfafa.com/v2/3rdParty/Slot/BE/BE2 | https://intg.devkimfafa.com/v2/3rdParty/Slot/BE/BE3 |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/BE/BE1 | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/BE/BE2 | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/BE/BE3 |
| IP白名單需求 | 35.194.124.109 | 35.194.124.109 | 35.194.124.109 |
| 後台帳號（測試站） | kimfafa1v1 | KFFB | KFFC |
| 後台密碼（測試站） | qwer1234 | qwer1234 | qwer1234 |
| 後台帳號（正式站） | KimfafaPRD | KFFBPrd | KFFCPrd |
| 後台密碼（正式站） | qwer1234 | qwer1234 | qwer1234 |
| Wallet Token（測試） | 6512888b217a439b9ae132737a8cbc47 | 6512888b217a439b9ae132737a8cbc47 | 6512888b217a439b9ae132737a8cbc47 |
| Wallet Token（正式） | 1509e64ff9534360bf7f-ff4e1869c66c | 1509e64ff9534360bf7f-ff4e1869c66c | 1509e64ff9534360bf7f-ff4e1869c66c |
| 商戶代碼（測試站）⚠️ | kimfafa1v1 | KFFB | KFFC |
| 商戶代碼（正式站）⚠️ | KimfafaPRD | KFFBPrd | KFFCPrd |
| 文件收集 | 待補充 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 | 待補充 |

---

### BNG

| 欄位 | 3代理（BNG1） | 6代理（BNG2） | 10代理（BNG3） |
|------|-------------|-------------|--------------|
| 對接類型 | API | API | API |
| 幣別支援 | TWD | TWD | TWD |
| 測試環境網址 | https://booonker.bng.games | https://booonker.bng.games | https://booonker.bng.games |
| 正式環境網址 | https://booonker.bng.games | https://booonker.bng.games | https://booonker.bng.games |
| 認證方式 | PROJECT_NAME + API_TOKEN + WL | 同左 | 同左 |
| Base URL | 正式：https://gate.c4.bng.games/op/ / 測試：https://gate.stage1.bng.games/op | 同左 | 同左 |
| 錢包模式 | 單一錢包 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Slot/BNG/BNG1 | https://intg.devkimfafa.com/v2/3rdParty/Slot/BNG/BNG2 | https://intg.devkimfafa.com/v2/3rdParty/Slot/BNG/BNG3 |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/BNG/BNG1 | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/BNG/BNG2 | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/BNG/BNG3 |
| IP白名單需求 | 54.179.221.90 / 52.74.143.243 / 52.221.122.77 | 同左 | 同左 |
| 後台帳號（測試站） | angela@idollar.com.tw | ariel.chan@idollar.com.tw | briangong@idollar.com.tw |
| 後台密碼（測試站） | qwer1234 | qwer1234 | qwer1234 |
| 後台帳號（正式站） | angela@idollar.com.tw | ariel.chan@idollar.com.tw | briangong@idollar.com.tw |
| 後台密碼（正式站） | qwer1234 | qwer1234 | qwer1234 |
| API Key/Secret ⚠️（正式） | PROJECT_NAME：kimfafa / API_TOKEN：oSyuCK+m;*e_4iT5O!R7 | PROJECT_NAME：kff6 / API_TOKEN：HP%g];7AY21WhFs_w[^a | PROJECT_NAME：kff10 / API_TOKEN：T_.ADL,kuv4)2M#ImV78 |
| API Key/Secret ⚠️（測試） | PROJECT_NAME：kimfafa-stage / API_TOKEN：L;EhX#Alm>ie%5*:F2Nk | PROJECT_NAME：kff6-stage / API_TOKEN：L9D4y@zGMtr&IPO$*s+\| | PROJECT_NAME：kff10-stage / API_TOKEN：g?pJcNu1wWvhnsSq_9*: |
| 商戶代碼（測試站）⚠️ | kimfafa-stage | kff6-stage | kff10-stage |
| 商戶代碼（正式站）⚠️ | kimfafa | kff6 | kff10 |
| 文件收集 | 待補充 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 | 待補充 |

---

### DG（Dream Gaming）

| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | — | — |
| 幣別支援 | TWD | — | — |
| 測試環境網址 | https://jj14t5com.com | — | — |
| 正式環境網址 | https://jj14t5com.com | — | — |
| 認證方式 | API账號 + API密钥 | — | — |
| 錢包模式 | 單一錢包 | — | — |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Table/DG/DG1 | — | — |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Table/DG/DG1 | — | — |
| 後台帳號（測試站） | DGTE01075R | — | — |
| 後台密碼（測試站） | dgw1rz | — | — |
| 後台帳號（正式站） | DG08420201 | — | — |
| 後台密碼（正式站） | 9u4g5c | — | — |
| API Key/Secret ⚠️（正式） | API账號：DG08420201 / 密钥：17de9a075c6843c691d85c9d2563b76e / AgentFix：28576 | — | — |
| API Key/Secret ⚠️（測試） | API账號：DGTE01075R / 密钥：03f5bc9cacda4a918e5eee55adafe491 / AgentFix：3213 | — | — |
| 商戶代碼（測試站）⚠️ | DGTE01075R | — | — |
| 商戶代碼（正式站）⚠️ | DG08420201 | — | — |
| 文件收集 | 待補充 | — | — |
| 測試環境 | 待補充 | — | — |
| 正式上線 | 待補充 | — | — |

---

### L9

> ⚠️ 尚未對接，暫無資料。Callback 端點預留備用。

| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API（未對接） | — | — |
| 錢包模式 | 單一錢包 | — | — |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Table/L9/L91 | — | — |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Table/L9/L91 | — | — |
| 文件收集 | — | — | — |
| 測試環境 | — | — | — |
| 正式上線 | — | — | — |

---

### MT

| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | — | — |
| 幣別支援 | TW2 | — | — |
| 測試環境網址 | https://ag30.ofa16899.net | — | — |
| 正式環境網址 | http://uag533.ofalive99.net | — | — |
| 認證方式 | Client ID + Client Secret + DesKey + DesIV | — | — |
| Base URL | 正式：https://goomen.ofapi168.net/api/sapphire/ / 測試：https://zone10.ofa16899.net/api/sapphire/ | — | — |
| 錢包模式 | 單一錢包 | — | — |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Table/MT/MT1 | — | — |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Table/MT/MT1 | — | — |
| 後台帳號（測試站） | KFF01 | — | — |
| 後台密碼（測試站） | KFF01555 | — | — |
| 後台帳號（正式站） | KFFPRD0180355 | — | — |
| 後台密碼（正式站） | KFFPRD0180355666 | — | — |
| API Key/Secret ⚠️（正式） | ClientID：NvSWunVENX / Secret：7rG93SGa4E / DesKey：AcvvuZmF / DesIV：3NBkdNsV | — | — |
| API Key/Secret ⚠️（測試） | ClientID：r7yfVHxpW9 / Secret：3fukFLNyZU / DesKey：ReaYuvde / DesIV：ZZ1Jr6ah | — | — |
| 商戶代碼（測試站）⚠️ | KFF01 | — | — |
| 商戶代碼（正式站）⚠️ | KFFPRD0180355 | — | — |
| 文件收集 | 待補充 | — | — |
| 測試環境 | 待補充 | — | — |
| 正式上線 | 待補充 | — | — |

---

### OKGO

> ⚠️ 以下欄位資料待取得：測試/正式環境網址、Base URL、IP 白名單需求、後台密碼（正式站）。

| 欄位 | 3代理（OKGO1） | 6代理（OKGO2） | 10代理（OKGO3） |
|------|--------------|--------------|---------------|
| 對接類型 | API | API | API |
| 幣別支援 | TWD（1:1） | TWD（1:1） | TWD（1:1） |
| 認證方式 | JWT Bearer Token | JWT Bearer Token | JWT Bearer Token |
| 錢包模式 | 單一錢包 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Slot/OKGO/OKGO1 | https://intg.devkimfafa.com/v2/3rdParty/Slot/OKGO/OKGO2 | https://intg.devkimfafa.com/v2/3rdParty/Slot/OKGO/OKGO3 |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/OKGO/OKGO1 | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/OKGO/OKGO2 | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/OKGO/OKGO3 |
| 後台帳號（測試站） | KFFA3dev | KFFB6dev | KFFC10dev |
| 後台密碼（測試站） | qwer1234 | qwer1234 | qwer1234 |
| JWT（正式） | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6MywiQWNjb3VudCI6ImtpbWZhZmEiLCJpYXQiOjE3NjU5NTMyMTB9.ZuGdhczgn5qreQlycNYwoaDsLb_wryuQEvYCoUWTuyA | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6NCwiQWNjb3VudCI6ImdWUyeENLZDV3M1VoMWZIam9QUSIsImlhdCI6MTc3MDEwNDQwOH0.cNIpLpFrDqrS4Jhx9tTJ3R3VCFtXrxoYMQIFrUP6nOw | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6NSwiQWNjb3VudCI6Inp3MVNhYVM0bmtJRjR3cUx5ZGh0IiwiaWF0IjoxNzcwMTA0NDA4fQ.mXpX7H6HY61RdAtve0pdNUqG1T-sECWYZ7oQVMA7HHY |
| JWT（測試） | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6MTksIkFjY291bnQiOiJraW1mYWZhIiwiaWF0IjoxNzU5ODI5MzQ3fQ.0Hs_6ZDvALtmDYQsriofvq_xcbMjr3RJqonfCNy6WfU | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6MjcsIkFjY291bnQiOiJnVmUyeENLZDV3M1VoMWZIam9QUSIsImlhdCI6MTc3MDEwMzY2MH0.U2cUbZr2oFVww8-BcQgLd0x_P3fBQAQe-CaQSvRXXNA | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6MjgsIkFjY291bnQiOiJ6dzFTYWFTNG5rSUY0d3FMeWRodCIsImlhdCI6MTc3MDEwMzY3M30.yAqTurzngB_igplqvB-A08FYzknFoWrd3GjTfBUPRBg |
| 商戶代碼（測試站）⚠️ | KFF | KFFB | KFFC |
| 商戶代碼（正式站）⚠️ | KFF | KFFB | KFFC |
| 文件收集 | 待補充 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 | 待補充 |

---

### OSEG（168game）

| 欄位 | 3代理（OSEG1） | 6代理（OSEG2） | 10代理（OSEG3） |
|------|--------------|--------------|---------------|
| 對接類型 | API | API | API |
| 幣別支援 | REX1 | REX1 | REX1 |
| 測試環境網址 | https://bo.cqgame.games | https://bo.cqgame.games | https://bo.cqgame.games |
| 正式環境網址 | https://booi.cqgame.cc | https://booi.cqgame.cc | https://booi.cqgame.cc |
| 認證方式 | JWT Bearer Token | JWT Bearer Token | JWT Bearer Token |
| Base URL | 正式：https://apii.cqgame.cc / 測試：https://api.cqgame.games | 同左 | 同左 |
| 錢包模式 | 單一錢包 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Slot/OSEG/OSEG1 | https://intg.devkimfafa.com/v2/3rdParty/Slot/OSEG/OSEG2 | https://intg.devkimfafa.com/v2/3rdParty/Slot/OSEG/OSEG3 |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/OSEG/OSEG1 | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/OSEG/OSEG2 | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/OSEG/OSEG3 |
| IP白名單需求 | 34.80.150.142 / 104.199.254.127 / 175.98.168.194 | 同左 | 同左 |
| 後台帳號（測試站） | devKimfafa | KFFB | KFFC |
| 後台密碼（測試站） | Kimfafa01 | qwer1234 | qwer1234 |
| 後台帳號（正式站） | kimfafa | KFFBPrd | KFFCPrd |
| 後台密碼（正式站） | kimfafa01 | qwer1234 | qwer1234 |
| 商戶代碼（測試站）⚠️ | devKimfafa | KFFB | KFFC |
| 商戶代碼（正式站）⚠️ | kimfafa | KFFBPrd | KFFCPrd |
| 文件收集 | 待補充 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 | 待補充 |

---

### QT

| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | — | — |
| 幣別支援 | TWD | — | — |
| 測試環境網址 | https://api-int.qtplatform.com | — | — |
| 正式環境網址 | https://api.qtplatform.com | — | — |
| 認證方式 | Username / Password + Passkey | — | — |
| Base URL | 正式：https://api.qtplatform.com / 測試：https://api-int.qtplatform.com | — | — |
| 錢包模式 | 單一錢包 | — | — |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Slot/QT/QT1 | — | — |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/QT/QT1 | — | — |
| IP白名單需求 | 52.77.32.26 / 54.169.140.105 / 34.241.71.150 / 18.162.217.103 / 18.184.243.189 / 34.243.156.16 / 52.79.203.127 / 52.76.231.168 / 2.136.53.153 | — | — |
| 後台帳號（測試站） | api_kimfafa | — | — |
| 後台密碼（測試站） | Snoexs10 | — | — |
| 後台帳號（正式站） | api_kimfafa | — | — |
| 後台密碼（正式站） | nvtbrUz4 | — | — |
| API Key/Secret ⚠️（正式） | qWMyiFiU3BpCiEgF（Passkey） | — | — |
| API Key/Secret ⚠️（測試） | qWMyiFiU3BpCiEgF（Passkey） | — | — |
| 商戶代碼（測試站）⚠️ | qa_kimfafa | — | — |
| 商戶代碼（正式站）⚠️ | manager_kimfafa | — | — |
| 文件收集 | 待補充 | — | — |
| 測試環境 | 待補充 | — | — |
| 正式上線 | 待補充 | — | — |

---

### RSGSW

| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | API | API |
| 幣別支援 | NT | NT | NT |
| 測試環境網址 | https://tsgamectrl.royalgaming777.com/ | 同左 | 同左 |
| 正式環境網址 | https://gamectrl.rsgaming888.com/ | 同左 | 同左 |
| 認證方式 | Client ID + Client Secret + DesKey + DesIV | 同左 | 同左 |
| Base URL | 正式：http://kff-api.rsgaming888.com/SingleWallet / 測試：http://tskff-api.royalgaming777.com/SingleWallet | 同左 | 同左 |
| 錢包模式 | 單一錢包 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Slot/RSGSW | 同左 | 同左 |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/RSGSW | 同左 | 同左 |
| IP白名單需求 | 正式：13.214.250.190 / 測試：52.76.139.21 | 同左 | 同左 |
| 後台帳號（測試站） | KFFSys | 與3代理相同 | 與3代理相同 |
| 後台密碼（測試站） | L1VFB8EP | 與3代理相同 | 與3代理相同 |
| 後台帳號（正式站） | KFFSys | 與3代理相同 | 與3代理相同 |
| 後台密碼（正式站） | E77BB033 | 與3代理相同 | 與3代理相同 |
| API Key/Secret ⚠️（正式） | ClientID：g04uxz2dbzan / Secret：IU14A8AK / DesKey：ZO56T6NU / DesIV：CKNNXF11 | 與3代理相同 | 與3代理相同 |
| API Key/Secret ⚠️（測試） | ClientID：90t0rqkgaybo / Secret：LE2ZJFQM / DesKey：93D5VPRZ / DesIV：8XDKYP5R | 與3代理相同 | 與3代理相同 |
| 商戶代碼（測試站）⚠️ | dev | kimfafa6 | kimfafa10 |
| 商戶代碼（正式站）⚠️ | prd | kimfafa6 | kimfafa10 |
| 文件收集 | 待補充 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 | 待補充 |

---

### VA（Victory Art）

> ⚠️ 正式站尚未申請，以下僅有測試站資料。6代理、10代理 暫無對接計畫。

| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | — | — |
| 幣別支援 | VTW1 | — | — |
| 測試環境網址 | https://vtw.victory-art.com/agent_manage/login | — | — |
| 正式環境網址 | 尚未申請 | — | — |
| 認證方式 | Authorization + APIKey | — | — |
| Base URL | 測試：https://api.victory-art.com/ | — | — |
| 錢包模式 | 單一錢包 | — | — |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Slot/VA | — | — |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/VA | — | — |
| 後台帳號（測試站） | kimfafa_3 | — | — |
| 後台密碼（測試站） | W+6Q)$jf_N | — | — |
| 後台帳號（正式站） | 尚未申請 | — | — |
| 後台密碼（正式站） | 尚未申請 | — | — |
| API Key/Secret ⚠️（正式） | 尚未申請 | — | — |
| API Key/Secret ⚠️（測試） | Authorization：d787afc0a2b54e9a8739e00b1140b940 / APIKey：0a2b54 | — | — |
| 文件收集 | [VA 介接文件](https://drive.google.com/file/d/1_xo7DK6OzHVnL6iPVyv0DDoArsduPfxA/view?usp=sharing) | — | — |
| 測試環境 | 待補充 | — | — |
| 正式上線 | 待補充 | — | — |

---

## OpenAPI 規格

> 尚未提供。OpenAPI 規格檔案建置後將在此處提供下載連結。

`[預留位置] 待上傳 OpenAPI YAML/JSON 檔案`
