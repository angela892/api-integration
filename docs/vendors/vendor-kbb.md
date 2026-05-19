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
| 幣別支援 | 待補充 | TWD |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/ATG | https://intg.gibaba.com/3rdParty/diamond/Slot/ATG |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/ATG | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/ATG |
| IP白名單（正式站） | 43.198.180.83 / 18.163.82.39 | 43.198.180.83 / 18.163.82.39 |
| MerchID ⚠️（測試站） | KBB_P130_beta | KBBD_game_beta |
| MerchID ⚠️（正式站） | KBB_P130_prod | KBBD_game_prod |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

### BE（CQ9）

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | TWD | TWD |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/Cq9 | https://intg.gibaba.com/3rdParty/diamond/Slot/Cq9 |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/Cq9 | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/Cq9 |
| IP白名單（測試站） | 34.84.30.48 / 20.24.30.203 / 35.194.115.194 / 211.23.49.51 / 113.196.184.234 / 175.98.168.194 / 104.199.186.229 / 35.201.151.61 | 同左 |
| IP白名單（正式站） | 20.24.30.203 / 34.146.25.167 / 35.194.124.109 / 175.98.168.194 / 34.81.144.197 / 104.199.176.123 | 同左 |
| MerchID ⚠️（測試站） | kimbabadevenv | gbbdiamond |
| MerchID ⚠️（正式站） | kimbaba_prod | kbbdiamond |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

### BL

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | DALE | TWD |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Table/BL | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Table/BL | — |
| IP白名單（測試站） | 8.210.234.255 / 16.162.10.255 / 119.9.91.232 / 47.56.188.243 / 54.254.169.68 | 同左 |
| IP白名單（正式站） | 同測試站 | 同左 |
| MerchID ⚠️（測試站） | dale@test.com | kbbdiamond@test.com |
| MerchID ⚠️（正式站） | dale@admin.com | kbbdiamond@admin.com |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

### BLE

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | TWD | — |
| 錢包模式 | 單一錢包 | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/BLE | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/BLE | — |
| IP白名單（測試站） | 13.231.108.244 / 43.206.228.66 | — |
| IP白名單（正式站） | 34.97.69.142 / 35.79.242.74 / 34.97.243.245 / 54.248.77.40（共16個） | — |
| MerchID ⚠️（測試站） | kimbabaPRD@admin.com | — |
| MerchID ⚠️（正式站） | kimbabaPRD1 | — |
| 文件收集 | 待補充 | — |
| 測試環境 | 待補充 | — |
| 正式上線 | 待補充 | — |

---

### BNG

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | KBB | TWD |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/Bng | https://intg.gibaba.com/3rdParty/diamond/Slot/Bng |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/Bng | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/Bng |
| IP白名單（測試站） | 54.151.243.48 | 54.151.243.48 |
| IP白名單（正式站） | 54.255.99.233 | 54.255.99.233 |
| MerchID ⚠️（測試站） | gibaba | kbbdiamond-stage |
| MerchID ⚠️（正式站） | gibaba | kbbdiamond-stage |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

### BT

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | UGX | — |
| 錢包模式 | 單一錢包 | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Fish/BT | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Fish/BT | — |
| IP白名單（正式站） | 125.229.7.212 / 125.229.75.127 / 13.213.241.219 / 54.251.100.11 / 18.138.63.45 / 3.0.238.89 | — |
| MerchID ⚠️（測試站） | goldfa_UGX | — |
| MerchID ⚠️（正式站） | goldfa_UGX | — |
| 文件收集 | 待補充 | — |
| 測試環境 | 待補充 | — |
| 正式上線 | 待補充 | — |

---

### FC

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | KIM | KIMN |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/FC | 同左 |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/FC | 同左 |
| IP白名單（測試站） | 104.199.132.230 / 35.194.132.52 / 34.124.156.179 / 35.240.215.42 | 同左 |
| IP白名單（正式站） | 60.244.118.100 / 202.153.187.76 / 34.81.32.162 / 35.201.202.78（共18個） | 同左 |
| MerchID ⚠️（測試站） | FCPAPAKIM3002 | FCPAPAKIM3005 |
| MerchID ⚠️（正式站） | FCPAPAKIMNT3001 | FCPAPAKIMNT113002 |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

### 5G（FVG）

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 錢包模式 | 單一錢包 | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/5G | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/5G | — |
| IP白名單（測試站） | 18.167.114.0 / 18.167.238.54 | — |
| IP白名單（正式站） | 43.198.145.166 / 16.163.224.110 | — |
| MerchID ⚠️（測試站） | kbbadmin | — |
| MerchID ⚠️（正式站） | kbbadmin | — |
| 文件收集 | 待補充 | — |
| 測試環境 | 待補充 | — |
| 正式上線 | 待補充 | — |

---

### GIO

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 錢包模式 | 單一錢包 | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/Gio | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/Gio | — |
| IP 白名單 | 待補充 | — |
| API Key/Secret ⚠️（正式） | 待補充 | — |
| API Key/Secret ⚠️（測試） | gdd_admin | — |
| 文件收集 | 待補充 | — |
| 測試環境 | 待補充 | — |
| 正式上線 | 待補充 | — |

---

### I8

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 錢包模式 | 單一錢包 | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/I8 | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/I8 | — |
| IP白名單（測試站） | 34.80.225.248 | — |
| IP白名單（正式站） | 34.80.29.128 / 104.155.192.200 | — |
| MerchID ⚠️（正式站） | KIMBABA | — |
| 文件收集 | 待補充 | — |
| 測試環境 | 待補充 | — |
| 正式上線 | 待補充 | — |

---

### KBB（自家）

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | KBB | KBD |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/KBB | https://intg.gibaba.com/3rdParty/diamond/Slot/KBB |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/KBB | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/KBB |
| IP 白名單 | 待補充 | 待補充 |
| API Key/Secret ⚠️（測試） | devkbb_Admin | devkbd_Admin |
| API Key/Secret ⚠️（正式） | kbb_Admin | kbd_Admin |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

### OSEG（168game）

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | REX(130) | REX(1) |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/OSEG | https://intg.gibaba.com/3rdParty/diamond/Slot/OSEG |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/OSEG | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/OSEG |
| IP白名單（測試站） | 211.23.49.51 / 113.196.184.234 / 175.98.168.194 / 35.187.201.14 / 104.199.186.229 | 同左 |
| IP白名單（正式站） | 175.98.168.194 / 34.81.144.197 | 同左 |
| MerchID ⚠️（測試站） | kbbREX_sw | kbbREX1_sw |
| MerchID ⚠️（正式站） | kimbaba | KBBDiamond |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

### QT

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | COP | NT |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/QT | 同左 |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/QT | 同左 |
| IP白名單（測試站） | 3.1.243.244 / 202.175.253.62 | 同左 |
| IP白名單（正式站） | 52.77.32.26 / 34.241.71.150 / 18.162.217.103 / 18.184.243.189 / 34.243.156.16 / 52.79.203.127 / 52.76.231.168 / 202.175.253.62 | 同左 |
| MerchID ⚠️（測試站） | qa_kimbaba | KBBDiamond |
| MerchID ⚠️（正式站） | kimbaba | KBBDiamond |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

### RG

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | 待補充 | TWD |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/RG | https://intg.gibaba.com/3rdParty/diamond/Slot/RG |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/RG | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/RG |
| IP白名單（測試站） | 34.97.182.158 | 同左 |
| IP白名單（正式站） | 34.97.225.83 / 34.97.146.191 | 同左 |
| MerchID ⚠️（測試站） | kimbaba | kimbaba |
| MerchID ⚠️（正式站） | kimbaba | KBBDiamond |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

### RK5

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 錢包模式 | 單一錢包 | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/RK5 | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/RK5 | — |
| IP 白名單 | 待補充 | — |
| MerchID ⚠️ | gbb（正式） | — |
| 文件收集 | 待補充 | — |
| 測試環境 | 待補充 | — |
| 正式上線 | 待補充 | — |

---

### RSGSW

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/RSGSW | https://intg.gibaba.com/3rdParty/diamond/Slot/RSGSW |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/RSGSW | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/RSGSW |
| IP白名單（測試站） | 52.76.139.21 | 同左 |
| IP白名單（正式站） | 13.214.250.190 / 52.76.139.21 | 同左 |
| MerchID ⚠️（測試站） | gbbSys | gbbdiamond |
| MerchID ⚠️（正式站） | kbbswSys | KBBDiamond |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

### TAG

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | TWD130 | — |
| 錢包模式 | 單一錢包 | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/TAG | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/TAG | — |
| IP白名單（測試站） | 34.84.186.61 / 54.64.211.196 | — |
| IP白名單（正式站） | 34.146.58.253 / 54.64.211.196 | — |
| MerchID ⚠️（測試站） | kbb | — |
| MerchID ⚠️（正式站） | kbb | — |
| 文件收集 | 待補充 | — |
| 測試環境 | 待補充 | — |
| 正式上線 | 待補充 | — |

---

### VA（KBB）

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | SDTWD | — |
| 錢包模式 | 單一錢包 | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/VA | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/VA | — |
| IP白名單（測試站） | 210.242.228.200 / 54.255.119.181 / 18.143.87.64 | — |
| IP白名單（正式站） | 210.242.228.200 / 54.255.119.181 / 54.251.231.106 | — |
| MerchID ⚠️（測試站） | KBB | — |
| MerchID ⚠️（正式站） | KBB | — |
| 文件收集 | [VA 介接文件](https://drive.google.com/file/d/1_xo7DK6OzHVnL6iPVyv0DDoArsduPfxA/view?usp=sharing) | — |
| 測試環境 | 待補充 | — |
| 正式上線 | 待補充 | — |

---

### VPG

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | TWD | TWD |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/VPG/sw | https://intg.gibaba.com/3rdParty/diamond/Slot/VPG/sw |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/VPG/sw | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/VPG/sw |
| IP白名單（測試站） | 34.80.32.155 / 35.229.201.209 | 同左 |
| IP白名單（正式站） | 35.241.101.185 | 同左 |
| MerchID ⚠️（測試站） | JINBABA（Agent：60434） | gbbdiamond（Agent：60435） |
| MerchID ⚠️（正式站） | JINBABA | 待補充 |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

### YB

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 錢包模式 | 單一錢包 | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/YB | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/YB | — |
| IP白名單（測試站） | 35.221.189.164 | — |
| IP白名單（正式站） | 34.87.184.98 | — |
| MerchID ⚠️（正式站） | kbbskbbag | — |
| 文件收集 | 待補充 | — |
| 測試環境 | 待補充 | — |
| 正式上線 | 待補充 | — |

---

### ZG

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 錢包模式 | 單一錢包 | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/ZG | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/ZG | — |
| IP白名單（測試站） | 35.185.134.195 / 34.87.105.120 | — |
| IP白名單（正式站） | 34.85.125.127 / 35.247.133.37 / 34.87.180.25（共11個） | — |
| MerchID ⚠️（測試站） | DALE0001UAT | — |
| MerchID ⚠️（正式站） | DALE0001pTTT | — |
| 文件收集 | 待補充 | — |
| 測試環境 | 待補充 | — |
| 正式上線 | 待補充 | — |

---

### AMS

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | 100TWD | — |
| 錢包模式 | 單一錢包 | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/AMS | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/AMS | — |
| IP 白名單 | 待補充 | — |
| API Key/Secret ⚠️（測試） | kbb100twduataa | — |
| API Key/Secret ⚠️（正式） | kbb100twdaa | — |
| 文件收集 | 待補充 | — |
| 測試環境 | 待補充 | — |
| 正式上線 | 待補充 | — |

---

### AVX

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 錢包模式 | 單一錢包 | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Fish/AVX | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Fish/AVX | — |
| IP 白名單 | 待補充 | — |
| MerchID ⚠️（測試站） | kimbaba | — |
| MerchID ⚠️（正式站） | kimbaba | — |
| 文件收集 | 待補充 | — |
| 測試環境 | 待補充 | — |
| 正式上線 | 待補充 | — |

---

### BOD

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 錢包模式 | 單一錢包 | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/BOD | — |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/BOD | — |
| 備註 | 多項欄位待補充 | — |
| 文件收集 | 待補充 | — |
| 測試環境 | 待補充 | — |
| 正式上線 | 待補充 | — |

---

### DG（KBB）

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | TWD | TWD |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Table/DG | https://intg.gibaba.com/3rdParty/diamond/Table/DG |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Table/DG | https://intg.kimbaba.com.tw/3rdParty/diamond/Table/DG |
| IP 白名單 | 待補充 | 待補充 |
| API Key/Secret ⚠️（測試） | DGTE0105UI | GBBdiamond |
| API Key/Secret ⚠️（正式） | DG084201 | KBBdiamond |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

### EVOTW

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 錢包模式 | 單一錢包 | — |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Table/EVOTW | — |
| Callback（正式站） | ❓ 未提供（正式站） | — |
| IP 白名單 | 待補充 | — |
| 文件收集 | 待補充 | — |
| 測試環境 | 待補充 | — |
| 正式上線 | 待補充 | — |

---

### GM

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | KBB | TWD |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Fish/GM | https://intg.gibaba.com/3rdParty/diamond/Fish/GM |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Fish/GM | https://intg.kimbaba.com.tw/3rdParty/diamond/Fish/GM |
| IP 白名單 | 待補充 | 待補充 |
| API Key/Secret ⚠️（測試） | tfoqk001283 | kbb-diamond-keo |
| API Key/Secret ⚠️（正式） | kbb-j31p | kbb-diamond |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

## OpenAPI 規格

> 尚未提供。OpenAPI 規格檔案建置後將在此處提供下載連結。

`[預留位置] 待上傳 OpenAPI YAML/JSON 檔案`
