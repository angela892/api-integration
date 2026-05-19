# 遊戲商對接資訊整理

整理各平台遊戲商（Game Provider）的對接技術資訊，統一格式輸出，方便開發人員快速掌握對接細節。

---

## 平台 IP 資訊

### 後台 IP（三站共用）

適用平台：金發發、金爸爸、日本站
適用環境：測試站、正式站

| IP |
|----|
| 114.35.163.10 |
| 114.34.170.104 |
| 59.127.154.188 |

### API IP

#### 金爸爸（KBB）
| 環境 | IP |
|------|----|
| 測試站 | 52.68.122.107 |
| 測試站 | 114.34.170.104 |
| 正式站 | 13.113.21.229 |
| 正式站 | 52.199.237.173 |
| 正式站 | 52.198.231.19 |
| 正式站 | 35.76.145.207 |
| 正式站 | 114.34.170.104 |

#### 金發發（KFF）
| 環境 | IP |
|------|----|
| 測試站 | 43.207.251.161 |
| 測試站 | 114.34.170.104 |
| 正式站 | 13.159.207.83 |
| 正式站 | 54.250.232.230 |
| 正式站 | 54.65.135.32 |
| 正式站 | 114.34.170.104 |

#### 日本站（JP）
| 環境 | IP |
|------|----|
| 測試站 | 54.199.128.155 |
| 測試站 | 114.34.170.104 |
| 正式站 | 114.34.170.104 |
| 正式站 | 46.51.243.21 |
| 正式站 | 13.231.51.46 |
| 正式站 | 52.198.200.132 |
| 正式站 | 13.112.158.110 |
| 正式站 | 3.115.127.180 |

---

## 跨平台遊戲商總覽

| 遊戲商 | 金發發 | 金爸爸 | 日本站 |
|--------|:------:|:------:|:------:|
| ATG    | ✅ | ✅ | — |
| BE/BE(CQ9) | ✅ | ✅ | — |
| BNG    | ✅ | ✅ | ✅ |
| DG     | ✅ | — | — |
| L9     | ✅ | — | — |
| MT     | ✅ | — | — |
| OKGO   | ✅ | — | — |
| OSEG   | ✅ | ✅ | — |
| QT     | ✅ | ✅ | ✅ |
| RSGSW  | ✅ | ✅ | — |
| VA     | ✅ | ✅ | — |
| 5G(FVG)| — | ✅ | — |
| BL     | — | ✅ | — |
| BLE    | — | ✅ | — |
| BT     | — | ✅ | — |
| FC     | — | ✅ | ✅ |
| GIO    | — | ✅ | — |
| I8     | — | ✅ | — |
| KBB    | — | ✅ | — |
| RG     | — | ✅ | ✅ |
| RK5    | — | ✅ | — |
| TAG    | — | ✅ | — |
| VPG    | — | ✅ | — |
| YB     | — | ✅ | — |
| ZG     | — | ✅ | — |
| CQ9    | — | — | ✅ |
| EVO    | — | — | ✅ |
| PG     | — | — | ✅ |

**共 28 家遊戲商｜三站共用：BNG、QT｜兩站共用：ATG、BE、OSEG、RSGSW、VA、FC、RG**

---

---

# 金爸爸（KBB）

> 金爸爸每家遊戲商分**爸幣模式**與**鑽石模式**兩套設定。
> 共 27 家：5G(FVG)、AMS、ATG、AVX、BE(CQ9)、BL、BLE、BNG、BOD、BT、DG、EVOTW、FC、GIO、GM、I8、KBB、OSEG、QT、RG、RK5、RSGSW、TAG、VA、VPG、YB、ZG

---

## ATG ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | 待補充 | TWD |
| 語言支援 | 待補充 | 待補充 |
| 測試環境網址 | 待補充 | 待補充 |
| 正式環境網址 | 待補充 | 待補充 |
| 認證方式 | 待補充 | 待補充 |
| Base URL | 待補充 | 待補充 |
| 登入端點 | 待補充 | 待補充 |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/ATG | https://intg.gibaba.com/3rdParty/diamond/Slot/ATG |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/ATG | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/ATG |
| IP 白名單（測試站） | 待補充 | 待補充 |
| IP 白名單（正式站） | 43.198.180.83<br>18.163.82.39 | 43.198.180.83<br>18.163.82.39 |
| 測試帳號 | 待補充 | 待補充 |
| API Key / Secret ⚠️ | 待補充 | 待補充 |
| Merchant ID ⚠️（測試站） | KBB_P130_beta | KBBD_game_beta |
| Merchant ID ⚠️（正式站） | KBB_P130_prod | KBBD_game_prod |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

## BE(CQ9) ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | TWD | TWD |
| 語言支援 | 待補充 | 待補充 |
| 測試環境網址 | 待補充 | 待補充 |
| 正式環境網址 | 待補充 | 待補充 |
| 認證方式 | 待補充 | 待補充 |
| Base URL | 待補充 | 待補充 |
| 登入端點 | 待補充 | 待補充 |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/Cq9 | https://intg.gibaba.com/3rdParty/diamond/Slot/Cq9 |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/Cq9 | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/Cq9 |
| IP 白名單（測試站） | 34.84.30.48<br>20.24.30.203<br>35.194.115.194<br>211.23.49.51<br>113.196.184.234<br>175.98.168.194<br>104.199.186.229<br>35.201.151.61 | 34.84.30.48<br>20.24.30.203<br>35.194.115.194<br>211.23.49.51<br>113.196.184.234<br>175.98.168.194<br>104.199.186.229<br>35.201.151.61 |
| IP 白名單（正式站） | 20.24.30.203<br>34.146.25.167<br>35.194.124.109<br>175.98.168.194<br>34.81.144.197<br>104.199.176.123 | 20.24.30.203<br>34.146.25.167<br>35.194.124.109<br>175.98.168.194<br>34.81.144.197<br>104.199.176.123 |
| 測試帳號 | 待補充 | 待補充 |
| API Key / Secret ⚠️ | 待補充 | 待補充 |
| Merchant ID ⚠️（測試站） | kimbabadevenv | gbbdiamond |
| Merchant ID ⚠️（正式站） | kimbaba_prod | kbbdiamond |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

## BL ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | DALE | TWD |
| 語言支援 | 待補充 | 待補充 |
| 測試環境網址 | 待補充 | 待補充 |
| 正式環境網址 | 待補充 | 待補充 |
| 認證方式 | 待補充 | 待補充 |
| Base URL | 待補充 | 待補充 |
| 登入端點 | 待補充 | 待補充 |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Table/BL | https://intg.gibaba.com/3rdParty/diamond/Table/BL |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Table/BL | https://intg.kimbaba.com.tw/3rdParty/diamond/Table/BL |
| IP 白名單（測試站） | 8.210.234.255<br>16.162.10.255<br>119.9.91.232<br>47.56.188.243<br>54.254.169.68 | 8.210.234.255<br>16.162.10.255<br>119.9.91.232<br>47.56.188.243<br>54.254.169.68 |
| IP 白名單（正式站） | 8.210.234.255<br>16.162.10.255<br>119.9.91.232<br>47.56.188.243<br>54.254.169.68 | 8.210.234.255<br>16.162.10.255<br>119.9.91.232<br>47.56.188.243<br>54.254.169.68 |
| 測試帳號 | 待補充 | 待補充 |
| API Key / Secret ⚠️ | 待補充 | 待補充 |
| Merchant ID ⚠️（測試站） | dale@test.com | kbbdiamond@test.com |
| Merchant ID ⚠️（正式站） | dale@admin.com | kbbdiamond@admin.com |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

## BLE ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | TWD | 不支援 |
| 語言支援 | 待補充 | 不支援 |
| 測試環境網址 | 待補充 | 不支援 |
| 正式環境網址 | 待補充 | 不支援 |
| 認證方式 | 待補充 | 不支援 |
| Base URL | 待補充 | 不支援 |
| 登入端點 | 待補充 | 不支援 |
| 錢包模式 | 單一錢包 | 不支援 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/BLE | 不支援 |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/BLE | 不支援 |
| IP 白名單（測試站） | 13.231.108.244<br>43.206.228.66 | 不支援 |
| IP 白名單（正式站） | 34.97.69.142<br>35.79.242.74<br>34.97.243.245<br>54.248.77.40<br>54.248.152.18<br>54.168.46.193<br>57.181.120.54<br>57.182.29.206<br>18.177.207.72<br>52.194.26.76<br>52.196.69.118<br>56.124.0.32<br>56.125.113.89<br>34.95.252.236<br>34.151.208.37<br>35.198.61.70 | 不支援 |
| 測試帳號 | 待補充 | 不支援 |
| API Key / Secret ⚠️ | 待補充 | 不支援 |
| Merchant ID ⚠️（測試站） | kimbabaPRD@admin.com | 不支援 |
| Merchant ID ⚠️（正式站） | kimbabaPRD1 | 不支援 |
| 文件收集 | 待補充 | 不支援 |
| 測試環境 | 待補充 | 不支援 |
| 正式上線 | 待補充 | 不支援 |

---

## BNG ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | KBB | TWD |
| 語言支援 | 待補充 | 待補充 |
| 測試環境網址 | 待補充 | 待補充 |
| 正式環境網址 | 待補充 | 待補充 |
| 認證方式 | 待補充 | 待補充 |
| Base URL | 待補充 | 待補充 |
| 登入端點 | 待補充 | 待補充 |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/Bng | https://intg.gibaba.com/3rdParty/diamond/Slot/Bng |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/Bng | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/Bng |
| IP 白名單（測試站） | 54.151.243.48 | 54.151.243.48 |
| IP 白名單（正式站） | 54.255.99.233 | 54.255.99.233 |
| 測試帳號 | 待補充 | 待補充 |
| API Key / Secret ⚠️ | 待補充 | 待補充 |
| Merchant ID ⚠️（測試站） | gibaba | kbbdiamond-stage |
| Merchant ID ⚠️（正式站） | gibaba | kbbdiamond-stage |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

## BT ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | UGX | 不支援 |
| 語言支援 | 待補充 | 不支援 |
| 測試環境網址 | 待補充 | 不支援 |
| 正式環境網址 | 待補充 | 不支援 |
| 認證方式 | 待補充 | 不支援 |
| Base URL | 待補充 | 不支援 |
| 登入端點 | 待補充 | 不支援 |
| 錢包模式 | 單一錢包 | 不支援 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Fish/BT | 不支援 |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Fish/BT | 不支援 |
| IP 白名單（測試站） | 待補充 | 不支援 |
| IP 白名單（正式站） | 125.229.7.212<br>125.229.75.127<br>13.213.241.219<br>54.251.100.11<br>18.138.63.45<br>3.0.238.89 | 不支援 |
| 測試帳號 | 待補充 | 不支援 |
| API Key / Secret ⚠️ | 待補充 | 不支援 |
| Merchant ID ⚠️（測試站） | goldfa_UGX | 不支援 |
| Merchant ID ⚠️（正式站） | goldfa_UGX | 不支援 |
| 文件收集 | 待補充 | 不支援 |
| 測試環境 | 待補充 | 不支援 |
| 正式上線 | 待補充 | 不支援 |

---

## FC ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | KIM | KIMN |
| 語言支援 | 待補充 | 待補充 |
| 測試環境網址 | 待補充 | 待補充 |
| 正式環境網址 | 待補充 | 待補充 |
| 認證方式 | 待補充 | 待補充 |
| Base URL | 待補充 | 待補充 |
| 登入端點 | 待補充 | 待補充 |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/FC | https://intg.gibaba.com/3rdParty/diamond/Slot/FC |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/FC | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/FC |
| IP 白名單（測試站） | 104.199.132.230<br>35.194.132.52<br>34.124.156.179<br>35.240.215.42 | 104.199.132.230<br>35.194.132.52<br>34.124.156.179<br>35.240.215.42 |
| IP 白名單（正式站） | 60.244.118.100<br>202.153.187.76<br>34.81.32.162<br>35.201.202.78<br>34.81.220.98<br>35.221.177.184<br>35.229.232.56<br>35.201.195.88<br>202.55.239.2<br>202.153.187.74<br>34.87.102.31<br>35.240.203.135<br>52.74.90.151<br>47.131.40.226<br>54.254.23.15<br>52.77.75.110<br>52.220.77.167<br>13.215.111.8 | 60.244.118.100<br>202.153.187.76<br>34.81.32.162<br>35.201.202.78<br>34.81.220.98<br>35.221.177.184<br>35.229.232.56<br>35.201.195.88<br>202.55.239.2<br>202.153.187.74<br>34.87.102.31<br>35.240.203.135<br>52.74.90.151<br>47.131.40.226<br>54.254.23.15<br>52.77.75.110<br>52.220.77.167<br>13.215.111.8 |
| 測試帳號 | 待補充 | 待補充 |
| API Key / Secret ⚠️ | 待補充 | 待補充 |
| Merchant ID ⚠️（測試站） | FCPAPAKIM3002 | FCPAPAKIM3005 |
| Merchant ID ⚠️（正式站） | FCPAPAKIMNT3001 | FCPAPAKIMNT113002 |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

## 5G(FVG) ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | 待補充 | 不支援 |
| 語言支援 | 待補充 | 不支援 |
| 測試環境網址 | 待補充 | 不支援 |
| 正式環境網址 | 待補充 | 不支援 |
| 認證方式 | 待補充 | 不支援 |
| Base URL | 待補充 | 不支援 |
| 登入端點 | 待補充 | 不支援 |
| 錢包模式 | 單一錢包 | 不支援 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/5G | 不支援 |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/5G | 不支援 |
| IP 白名單（測試站） | 18.167.114.0<br>18.167.238.54 | 不支援 |
| IP 白名單（正式站） | 43.198.145.166<br>16.163.224.110 | 不支援 |
| 測試帳號 | 待補充 | 不支援 |
| API Key / Secret ⚠️ | 待補充 | 不支援 |
| Merchant ID ⚠️（測試站） | kbbadmin | 不支援 |
| Merchant ID ⚠️（正式站） | kbbadmin | 不支援 |
| 文件收集 | 待補充 | 不支援 |
| 測試環境 | 待補充 | 不支援 |
| 正式上線 | 待補充 | 不支援 |

---

## GIO ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | 待補充 | 不支援 |
| 語言支援 | 待補充 | 不支援 |
| 測試環境網址 | 待補充 | 不支援 |
| 正式環境網址 | 待補充 | 不支援 |
| 認證方式 | 待補充 | 不支援 |
| Base URL | 待補充 | 不支援 |
| 登入端點 | 待補充 | 不支援 |
| 錢包模式 | 單一錢包 | 不支援 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/Gio | 不支援 |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/Gio | 不支援 |
| IP 白名單 | 待補充 | 不支援 |
| 測試帳號 | 待補充 | 不支援 |
| API Key / Secret ⚠️ | 待補充 | 不支援 |
| Merchant ID ⚠️（測試站） | 待補充 | 不支援 |
| Merchant ID ⚠️（正式站） | gdd_admin | 不支援 |
| 文件收集 | 待補充 | 不支援 |
| 測試環境 | 待補充 | 不支援 |
| 正式上線 | 待補充 | 不支援 |

---

## I8 ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | 待補充 | 不支援 |
| 語言支援 | 待補充 | 不支援 |
| 測試環境網址 | 待補充 | 不支援 |
| 正式環境網址 | 待補充 | 不支援 |
| 認證方式 | 待補充 | 不支援 |
| Base URL | 待補充 | 不支援 |
| 登入端點 | 待補充 | 不支援 |
| 錢包模式 | 單一錢包 | 不支援 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/I8 | 不支援 |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/I8 | 不支援 |
| IP 白名單（測試站） | 34.80.225.248 | 不支援 |
| IP 白名單（正式站） | 34.80.29.128<br>104.155.192.200 | 不支援 |
| 測試帳號 | 待補充 | 不支援 |
| API Key / Secret ⚠️ | 待補充 | 不支援 |
| Merchant ID ⚠️（測試站） | 待補充 | 不支援 |
| Merchant ID ⚠️（正式站） | KIMBABA | 不支援 |
| 文件收集 | 待補充 | 不支援 |
| 測試環境 | 待補充 | 不支援 |
| 正式上線 | 待補充 | 不支援 |

---

## KBB ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | KBB | KBD |
| 語言支援 | 待補充 | 待補充 |
| 測試環境網址 | 待補充 | 待補充 |
| 正式環境網址 | 待補充 | 待補充 |
| 認證方式 | 待補充 | 待補充 |
| Base URL | 待補充 | 待補充 |
| 登入端點 | 待補充 | 待補充 |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/KBB | https://intg.gibaba.com/3rdParty/diamond/Slot/KBB |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/KBB | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/KBB |
| IP 白名單 | 待補充 | 待補充 |
| 測試帳號 | 待補充 | 待補充 |
| API Key / Secret ⚠️ | 待補充 | 待補充 |
| Merchant ID ⚠️（測試站） | devkbb_Admin | devkbd_Admin |
| Merchant ID ⚠️（正式站） | kbb_Admin | kbd_Admin |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

## OSEG（168game）｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | REX(130) | REX(1) |
| 語言支援 | 待補充 | 待補充 |
| 測試環境網址 | 待補充 | 待補充 |
| 正式環境網址 | 待補充 | 待補充 |
| 認證方式 | 待補充 | 待補充 |
| Base URL | 待補充 | 待補充 |
| 登入端點 | 待補充 | 待補充 |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/OSEG | https://intg.gibaba.com/3rdParty/diamond/Slot/OSEG |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/OSEG | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/OSEG |
| IP 白名單（測試站） | 211.23.49.51<br>113.196.184.234<br>175.98.168.194<br>35.187.201.14<br>104.199.186.229 | 211.23.49.51<br>113.196.184.234<br>175.98.168.194<br>35.187.201.14<br>104.199.186.229 |
| IP 白名單（正式站） | 175.98.168.194<br>34.81.144.197 | 175.98.168.194<br>34.81.144.197 |
| 測試帳號 | 待補充 | 待補充 |
| API Key / Secret ⚠️ | 待補充 | 待補充 |
| Merchant ID ⚠️（測試站） | kbbREX_sw | kbbREX1_sw |
| Merchant ID ⚠️（正式站） | kimbaba | KBBDiamond |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

## QT ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | COP | NT |
| 語言支援 | 待補充 | 待補充 |
| 測試環境網址 | 待補充 | 待補充 |
| 正式環境網址 | 待補充 | 待補充 |
| 認證方式 | 待補充 | 待補充 |
| Base URL | 待補充 | 待補充 |
| 登入端點 | 待補充 | 待補充 |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/QT | https://intg.gibaba.com/3rdParty/diamond/Slot/QT |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/QT | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/QT |
| IP 白名單（測試站） | 3.1.243.244<br>202.175.253.62 | 3.1.243.244<br>202.175.253.62 |
| IP 白名單（正式站） | 52.77.32.26<br>34.241.71.150<br>18.162.217.103<br>18.184.243.189<br>34.243.156.16<br>52.79.203.127<br>52.76.231.168<br>202.175.253.62 | 52.77.32.26<br>34.241.71.150<br>18.162.217.103<br>18.184.243.189<br>34.243.156.16<br>52.79.203.127<br>52.76.231.168<br>202.175.253.62 |
| 測試帳號 | 待補充 | 待補充 |
| API Key / Secret ⚠️ | 待補充 | 待補充 |
| Merchant ID ⚠️（測試站） | qa_kimbaba | KBBDiamond |
| Merchant ID ⚠️（正式站） | kimbaba | KBBDiamond |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

## RG ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | 待補充 | TWD |
| 語言支援 | 待補充 | 待補充 |
| 測試環境網址 | 待補充 | 待補充 |
| 正式環境網址 | 待補充 | 待補充 |
| 認證方式 | 待補充 | 待補充 |
| Base URL | 待補充 | 待補充 |
| 登入端點 | 待補充 | 待補充 |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/RG | https://intg.gibaba.com/3rdParty/diamond/Slot/RG |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/RG | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/RG |
| IP 白名單（測試站） | 34.97.182.158 | 34.97.182.158 |
| IP 白名單（正式站） | 34.97.225.83<br>34.97.146.191 | 34.97.225.83<br>34.97.146.191 |
| 測試帳號 | 待補充 | 待補充 |
| API Key / Secret ⚠️ | 待補充 | 待補充 |
| Merchant ID ⚠️（測試站） | kimbaba | KBBDiamond |
| Merchant ID ⚠️（正式站） | kimbaba | KBBDiamond |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

## RK5 ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | 待補充 | 不支援 |
| 語言支援 | 待補充 | 不支援 |
| 測試環境網址 | 待補充 | 不支援 |
| 正式環境網址 | 待補充 | 不支援 |
| 認證方式 | 待補充 | 不支援 |
| Base URL | 待補充 | 不支援 |
| 登入端點 | 待補充 | 不支援 |
| 錢包模式 | 單一錢包 | 不支援 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/RK5 | 不支援 |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/RK5 | 不支援 |
| IP 白名單 | 待補充 | 不支援 |
| 測試帳號 | 待補充 | 不支援 |
| API Key / Secret ⚠️ | 待補充 | 不支援 |
| Merchant ID ⚠️（測試站） | 待補充 | 不支援 |
| Merchant ID ⚠️（正式站） | gbb | 不支援 |
| 文件收集 | 待補充 | 不支援 |
| 測試環境 | 待補充 | 不支援 |
| 正式上線 | 待補充 | 不支援 |

---

## RSGSW ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | 待補充 | NT |
| 語言支援 | 待補充 | 待補充 |
| 測試環境網址 | 待補充 | 待補充 |
| 正式環境網址 | 待補充 | 待補充 |
| 認證方式 | 待補充 | 待補充 |
| Base URL | 待補充 | 待補充 |
| 登入端點 | 待補充 | 待補充 |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/RSGSW | https://intg.gibaba.com/3rdParty/diamond/Slot/RSGSW |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/RSGSW | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/RSGSW |
| IP 白名單（測試站） | 52.76.139.21 | 52.76.139.21 |
| IP 白名單（正式站） | 13.214.250.190<br>52.76.139.21 | 13.214.250.190<br>52.76.139.21 |
| 測試帳號 | 待補充 | 待補充 |
| API Key / Secret ⚠️ | 待補充 | 待補充 |
| Merchant ID ⚠️（測試站） | gbbSys | gbbdiamond |
| Merchant ID ⚠️（正式站） | kbbswSys | KBBDiamond |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

## TAG ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | TWD130 | 不支援 |
| 語言支援 | 待補充 | 不支援 |
| 測試環境網址 | 待補充 | 不支援 |
| 正式環境網址 | 待補充 | 不支援 |
| 認證方式 | 待補充 | 不支援 |
| Base URL | 待補充 | 不支援 |
| 登入端點 | 待補充 | 不支援 |
| 錢包模式 | 單一錢包 | 不支援 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/TAG | 不支援 |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/TAG | 不支援 |
| IP 白名單（測試站） | 34.84.186.61<br>54.64.211.196 | 不支援 |
| IP 白名單（正式站） | 34.146.58.253<br>54.64.211.196 | 不支援 |
| 測試帳號 | 待補充 | 不支援 |
| API Key / Secret ⚠️ | 待補充 | 不支援 |
| Merchant ID ⚠️（測試站） | kbb | 不支援 |
| Merchant ID ⚠️（正式站） | kbb | 不支援 |
| 文件收集 | 待補充 | 不支援 |
| 測試環境 | 待補充 | 不支援 |
| 正式上線 | 待補充 | 不支援 |

---

## VA ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | SDTWD | 不支援 |
| 語言支援 | 待補充 | 不支援 |
| 測試環境網址 | 待補充 | 不支援 |
| 正式環境網址 | 待補充 | 不支援 |
| 認證方式 | 待補充 | 不支援 |
| Base URL | 待補充 | 不支援 |
| 登入端點 | 待補充 | 不支援 |
| 錢包模式 | 單一錢包 | 不支援 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/VA | 不支援 |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/VA | 不支援 |
| IP 白名單（測試站） | 210.242.228.200<br>54.255.119.181<br>18.143.87.64 | 不支援 |
| IP 白名單（正式站） | 210.242.228.200<br>54.255.119.181<br>54.251.231.106 | 不支援 |
| 測試帳號 | 待補充 | 不支援 |
| API Key / Secret ⚠️ | 待補充 | 不支援 |
| Merchant ID ⚠️（測試站） | KBB | 不支援 |
| Merchant ID ⚠️（正式站） | KBB | 不支援 |
| 文件收集 | 待補充 | 不支援 |
| 測試環境 | 待補充 | 不支援 |
| 正式上線 | 待補充 | 不支援 |

---

## VPG ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | TWD | TWD |
| 語言支援 | 待補充 | 待補充 |
| 測試環境網址 | 待補充 | 待補充 |
| 正式環境網址 | 待補充 | 待補充 |
| 認證方式 | 待補充 | 待補充 |
| Base URL | 待補充 | 待補充 |
| 登入端點 | 待補充 | 待補充 |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/VPG/sw | https://intg.gibaba.com/3rdParty/diamond/Slot/VPG/sw |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/VPG/sw | https://intg.kimbaba.com.tw/3rdParty/diamond/Slot/VPG/sw |
| IP 白名單（測試站） | 34.80.32.155<br>35.229.201.209 | 34.80.32.155<br>35.229.201.209 |
| IP 白名單（正式站） | 35.241.101.185 | 35.241.101.185 |
| 測試帳號 | 待補充 | 待補充 |
| API Key / Secret ⚠️ | 待補充 | 待補充 |
| Merchant ID ⚠️（測試站） | JINBABA（Agent：60434） | gbbdiamond（Agent：60435） |
| Merchant ID ⚠️（正式站） | JINBABA | 待補充 |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

## YB ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | 待補充 | 不支援 |
| 語言支援 | 待補充 | 不支援 |
| 測試環境網址 | 待補充 | 不支援 |
| 正式環境網址 | 待補充 | 不支援 |
| 認證方式 | 待補充 | 不支援 |
| Base URL | 待補充 | 不支援 |
| 登入端點 | 待補充 | 不支援 |
| 錢包模式 | 單一錢包 | 不支援 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/YB | 不支援 |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/YB | 不支援 |
| IP 白名單（測試站） | 35.221.189.164 | 不支援 |
| IP 白名單（正式站） | 34.87.184.98 | 不支援 |
| 測試帳號 | 待補充 | 不支援 |
| API Key / Secret ⚠️ | 待補充 | 不支援 |
| Merchant ID ⚠️（測試站） | 待補充 | 不支援 |
| Merchant ID ⚠️（正式站） | kbbskbbag | 不支援 |
| 文件收集 | 待補充 | 不支援 |
| 測試環境 | 待補充 | 不支援 |
| 正式上線 | 待補充 | 不支援 |

---

## ZG ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | 待補充 | 不支援 |
| 語言支援 | 待補充 | 不支援 |
| 測試環境網址 | 待補充 | 不支援 |
| 正式環境網址 | 待補充 | 不支援 |
| 認證方式 | 待補充 | 不支援 |
| Base URL | 待補充 | 不支援 |
| 登入端點 | 待補充 | 不支援 |
| 錢包模式 | 單一錢包 | 不支援 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/ZG | 不支援 |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/ZG | 不支援 |
| IP 白名單（測試站） | 35.185.134.195<br>34.87.105.120 | 不支援 |
| IP 白名單（正式站） | 34.85.125.127<br>35.247.133.37<br>34.87.180.25<br>34.87.153.224<br>34.87.43.0<br>34.87.181.9<br>35.247.186.149<br>34.87.151.215<br>35.187.235.134<br>34.87.5.235<br>34.87.28.166 | 不支援 |
| 測試帳號 | 待補充 | 不支援 |
| API Key / Secret ⚠️ | 待補充 | 不支援 |
| Merchant ID ⚠️（測試站） | DALE0001UAT | 不支援 |
| Merchant ID ⚠️（正式站） | DALE0001pTTT | 不支援 |
| 文件收集 | 待補充 | 不支援 |
| 測試環境 | 待補充 | 不支援 |
| 正式上線 | 待補充 | 不支援 |

---

## AMS ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | 100TWD | 不支援 |
| 語言支援 | 待補充 | 不支援 |
| 測試環境網址 | 待補充 | 不支援 |
| 正式環境網址 | 待補充 | 不支援 |
| 認證方式 | 待補充 | 不支援 |
| Base URL | 待補充 | 不支援 |
| 登入端點 | 待補充 | 不支援 |
| 錢包模式 | 單一錢包 | 不支援 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/AMS | 不支援 |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/AMS | 不支援 |
| IP 白名單 | 待補充 | 不支援 |
| 測試帳號 | 待補充 | 不支援 |
| API Key / Secret ⚠️ | 待補充 | 不支援 |
| Merchant ID ⚠️（測試站） | kbb100twduataa | 不支援 |
| Merchant ID ⚠️（正式站） | kbb100twdaa | 不支援 |
| 文件收集 | 待補充 | 不支援 |
| 測試環境 | 待補充 | 不支援 |
| 正式上線 | 待補充 | 不支援 |

---

## AVX ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | 待補充 | 不支援 |
| 語言支援 | 待補充 | 不支援 |
| 測試環境網址 | 待補充 | 不支援 |
| 正式環境網址 | 待補充 | 不支援 |
| 認證方式 | 待補充 | 不支援 |
| Base URL | 待補充 | 不支援 |
| 登入端點 | 待補充 | 不支援 |
| 錢包模式 | 單一錢包 | 不支援 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Fish/AVX | 不支援 |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Fish/AVX | 不支援 |
| IP 白名單 | 待補充 | 不支援 |
| 測試帳號 | 待補充 | 不支援 |
| API Key / Secret ⚠️ | 待補充 | 不支援 |
| Merchant ID ⚠️（測試站） | kimbaba | 不支援 |
| Merchant ID ⚠️（正式站） | kimbaba | 不支援 |
| 文件收集 | 待補充 | 不支援 |
| 測試環境 | 待補充 | 不支援 |
| 正式上線 | 待補充 | 不支援 |

---

## BOD ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | 待補充 | 不支援 |
| 語言支援 | 待補充 | 不支援 |
| 測試環境網址 | 待補充 | 不支援 |
| 正式環境網址 | 待補充 | 不支援 |
| 認證方式 | 待補充 | 不支援 |
| Base URL | 待補充 | 不支援 |
| 登入端點 | 待補充 | 不支援 |
| 錢包模式 | 單一錢包 | 不支援 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Slot/BOD | 不支援 |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Slot/BOD | 不支援 |
| IP 白名單 | 待補充 | 不支援 |
| 測試帳號 | 待補充 | 不支援 |
| API Key / Secret ⚠️ | 待補充 | 不支援 |
| Merchant ID ⚠️ | 待補充 | 不支援 |
| 文件收集 | 待補充 | 不支援 |
| 測試環境 | 待補充 | 不支援 |
| 正式上線 | 待補充 | 不支援 |

---

## DG ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | TWD | TWD |
| 語言支援 | 待補充 | 待補充 |
| 測試環境網址 | 待補充 | 待補充 |
| 正式環境網址 | 待補充 | 待補充 |
| 認證方式 | 待補充 | 待補充 |
| Base URL | 待補充 | 待補充 |
| 登入端點 | 待補充 | 待補充 |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Table/DG | https://intg.gibaba.com/3rdParty/diamond/Table/DG |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Table/DG | https://intg.kimbaba.com.tw/3rdParty/diamond/Table/DG |
| IP 白名單 | 待補充 | 待補充 |
| 測試帳號 | 待補充 | 待補充 |
| API Key / Secret ⚠️ | 待補充 | 待補充 |
| Merchant ID ⚠️（測試站） | DGTE0105UI | GBBdiamond |
| Merchant ID ⚠️（正式站） | DG084201 | KBBdiamond |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

## EVOTW ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | 不支援 |
| 幣別支援 | 待補充 | 不支援 |
| 語言支援 | 待補充 | 不支援 |
| 測試環境網址 | 待補充 | 不支援 |
| 正式環境網址 | 待補充 | 不支援 |
| 認證方式 | 待補充 | 不支援 |
| Base URL | 待補充 | 不支援 |
| 登入端點 | 待補充 | 不支援 |
| 錢包模式 | 單一錢包 | 不支援 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Table/EVOTW | 不支援 |
| Callback（正式站） | ❓ 未提供 | 不支援 |
| IP 白名單 | 待補充 | 不支援 |
| 測試帳號 | 待補充 | 不支援 |
| API Key / Secret ⚠️ | 待補充 | 不支援 |
| Merchant ID ⚠️ | 待補充 | 不支援 |
| 文件收集 | 待補充 | 不支援 |
| 測試環境 | 待補充 | 不支援 |
| 正式上線 | 待補充 | 不支援 |

---

## GM ｜ 金爸爸

| 欄位 | 爸幣模式 | 鑽石模式 |
|------|---------|---------|
| 對接類型 | API | API |
| 幣別支援 | KBB | TWD |
| 語言支援 | 待補充 | 待補充 |
| 測試環境網址 | 待補充 | 待補充 |
| 正式環境網址 | 待補充 | 待補充 |
| 認證方式 | 待補充 | 待補充 |
| Base URL | 待補充 | 待補充 |
| 登入端點 | 待補充 | 待補充 |
| 錢包模式 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.gibaba.com/3rdParty/Fish/GM | https://intg.gibaba.com/3rdParty/diamond/Fish/GM |
| Callback（正式站） | https://intg.kimbaba.com.tw/3rdParty/Fish/GM | https://intg.kimbaba.com.tw/3rdParty/diamond/Fish/GM |
| IP 白名單 | 待補充 | 待補充 |
| 測試帳號 | 待補充 | 待補充 |
| API Key / Secret ⚠️ | 待補充 | 待補充 |
| Merchant ID ⚠️（測試站） | tfoqk001283 | kbb-diamond-keo |
| Merchant ID ⚠️（正式站） | kbb-j31p | kbb-diamond |
| 文件收集 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 |

---

---

# 金發發（KFF）

> 金發發每家遊戲商分 **3代理**、**6代理**、**10代理** 三種模式。
> - 3代理：注金 3–400
> - 6代理：注金 6–400
> - 10代理：注金 10–400
> 共 11 家：ATG、BE、BNG、DG、L9、MT、OKGO、OSEG、QT、RSGSW、VA
> 僅支援 3代理：QT、VA、MT、DG、L9

---

## ATG ｜ 金發發

#### 基本資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | API | API |
| 幣別支援 | TWD | TWD | TWD |
| 語言支援 | 待補充 | 待補充 | 待補充 |
| 測試環境網址 | https://admin.godeebxp.com | https://admin.godeebxp.com | https://admin.godeebxp.com |
| 正式環境網址 | https://admin.godeebxp.com | https://admin.godeebxp.com | https://admin.godeebxp.com |

#### API 對接資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 認證方式 | X-Operator + X-Key（HTTP Header） | X-Operator + X-Key（HTTP Header） | X-Operator + X-Key（HTTP Header） |
| Base URL | https://api.godeebxp.com/ | https://api.godeebxp.com/ | https://api.godeebxp.com/ |
| 錢包模式 | 單一錢包 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Slot/ATG/ATG1 | https://intg.devkimfafa.com/v2/3rdParty/Slot/ATG/ATG2 | https://intg.devkimfafa.com/v2/3rdParty/Slot/ATG/ATG3 |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/ATG/ATG1 | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/ATG/ATG2 | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/ATG/ATG3 |
| IP 白名單需求 | 43.198.180.83 | 43.198.180.83 | 43.198.180.83 |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 後台帳號（正式站） | KFF_game_prod | KFFB_prd | KFFC_prd |
| 後台密碼（正式站） | No?b}^G}UW4. | Qwer_@1234 | Qwer_@1234 |
| API Key / Secret（正式站） | X-Operator：KFF_game_prod / X-Key：500228a7a01a4ad9a39dbe51cd81581b（備註：Provider ID 固定為 4，Slot/Poker 共用） | X-Operator：KFFB / X-Key：b477ba6e236e4d64a21ac06278282b56 | X-Operator：KFFC / X-Key：4be921e4ad8f431d9bed201d82c18513 |
| 商戶代碼（Merchant ID）（正式站） | KFF_game_prod | KFFB_prd | KFFC_prd |
| 後台帳號（測試站） | KFF_beta | KFFB6_dev | KFFC10_dev |
| 後台密碼（測試站） | Qwer_##12345 | Qwer_@1234 | Qwer_@1234 |
| API Key / Secret（測試站） | X-Operator：KFF2 / X-Key：98f99e54742b49199d35bbd9c6dbedd5（備註：Provider ID 固定為 4，Slot/Poker 共用） | X-Operator：KFFB6_dev / X-Key：05e33eb7cb26444982cc20e6ef58eb98 | X-Operator：KFFC10_dev / X-Key：eeea6ee187094a989bf876d2361b7e0f |
| 商戶代碼（Merchant ID）（測試站） | KFF_beta | KFFB6_dev | KFFC10_dev |

#### 對接狀態
| 階段 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 文件收集 | 待補充 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 | 待補充 |

---

## BE ｜ 金發發

#### 基本資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | API | API |
| 幣別支援 | TWD | TWD | TWD |
| 語言支援 | 待補充 | 待補充 | 待補充 |
| 測試環境網址 | https://int-bo.rebirth.games | https://int-bo.rebirth.games | https://int-bo.rebirth.games |
| 正式環境網址 | https://bo.rebirth.games | https://bo.rebirth.games | https://bo.rebirth.games |

#### API 對接資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 認證方式 | JWT Bearer Token | JWT Bearer Token | JWT Bearer Token |
| Base URL（正式站） | https://api.rebirth.games | https://api.rebirth.games | https://api.rebirth.games |
| Base URL（測試站） | https://int-api.rebirth.games | https://int-api.rebirth.games | https://int-api.rebirth.games |
| 錢包模式 | 單一錢包 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Slot/BE/BE1 | https://intg.devkimfafa.com/v2/3rdParty/Slot/BE/BE2 | https://intg.devkimfafa.com/v2/3rdParty/Slot/BE/BE3 |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/BE/BE1 | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/BE/BE2 | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/BE/BE3 |
| IP 白名單需求 | 35.194.124.109 | 35.194.124.109 | 35.194.124.109 |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 後台帳號（正式站） | KimfafaPRD | KFFBPrd | KFFCPrd |
| 後台密碼（正式站） | qwer1234 | qwer1234 | qwer1234 |
| API Key / Secret（正式站） | API Token：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2OTQxMGM1YmE4YmQwNjFjZTNhYjQ0YmQiLCJhY2NvdW50IjoiS2ltZmFmYVBSRCIsIm93bmVyIjoiNjk0MTBjNWJhOGJkMDYxY2UzYWI0NGJkIiwicGFyZW50Ijoic2VsZiIsImN1cnJlbmN5IjoiVFdEIiwiYnJhbmQiOiIxNjhhcGkiLCJqdGkiOiI3OTM4OTU1NjciLCJpYXQiOjE3NjU4NzA2ODMsImlzcyI6IkN5cHJlc3MiLCJzdWIiOiJTU1Rva2VuIn0.zgN6ClwFWOCGaRh5bmtIVRHJSbhEBna15H1cSm-GeD / Wallet Token：1509e64ff9534360bf7f-ff4e1869c66c | API Token：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2OTgyZjM2ZTA1ODY5N2Q1M2I4ZDU0MTUiLCJhY2NvdW50IjoiS0ZGQlByZCIsIm93bmVyIjoiNjk0MTBjNWJhOGJkMDYxY2UzYWI0NGJkIiwicGFyZW50IjoiNjk0MTBjNWJhOGJkMDYxY2UzYWI0NGJkIiwiY3VycmVuY3kiOiJUV0QiLCJicmFuZCI6IjE2OGFwaSIsImp0aSI6IjQ4NzI0ODEzNSIsImlhdCI6MTc3MDE4OTY3OCwiaXNzIjoiQ3lwcmVzcyIsInN1YiI6IlNTVG9rZW4ifQ.KXOV5BNb4lepb-X8orLrqcADvVNQVbWlkvygi9vhNxM / Wallet Token：1509e64ff9534360bf7f-ff4e1869c66c | API Token：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2OTgyZjNhMTA1ODY5N2Q1M2I4ZDU0MWIiLCJhY2NvdW50IjoiS0ZGQ1ByZCIsIm93bmVyIjoiNjk0MTBjNWJhOGJkMDYxY2UzYWI0NGJkIiwicGFyZW50IjoiNjk0MTBjNWJhOGJkMDYxY2UzYWI0NGJkIiwiY3VycmVuY3kiOiJUV0QiLCJicmFuZCI6IjE2OGFwaSIsImp0aSI6Ijk3NzU5Mzc2MSIsImlhdCI6MTc3MDE4OTcyOSwiaXNzIjoiQ3lwcmVzcyIsInN1YiI6IlNTVG9rZW4ifQ.8TLuPYm6ABJxpuAzfRaVIfcJ6JC4yhMmUBZkLc7Y-Vs / Wallet Token：1509e64ff9534360bf7f-ff4e1869c66c |
| 商戶代碼（Merchant ID）（正式站） | KimfafaPRD | KFFBPrd | KFFCPrd |
| 後台帳號（測試站） | kimfafa1v1 | KFFB | KFFC |
| 後台密碼（測試站） | qwer1234 | qwer1234 | qwer1234 |
| API Key / Secret（測試站） | API Token：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2OTQwZjNkNjdmMjg0NGNiOGE2OGQyMDIiLCJhY2NvdW50Ijoia2ltZmFmYTF2MSIsIm93bmVyIjoiNjk0MGYzZDY3ZjI4NDRjYjhhNjhkMjAyIiwicGFyZW50Ijoic2VsZiIsImN1cnJlbmN5IjoiVFdEIiwiYnJhbmQiOiIxNjhhcGkiLCJqdGkiOiI0NTE5MjAxMDUiLCJpYXQiOjE3NjU4NjQ0MDYsImlzcyI6IkN5cHJlc3MiLCJzdWIiOiJTU1Rva2VuIn0.LQ1Dd6PIulOuDg6NHKYxyZLLHytx2m0bM6cHFM-A9pw / Wallet Token：6512888b217a439b9ae132737a8cbc47 | API Token：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2OTgyYWVkOWZiYmFlZWU0OWQzYjM5NTciLCJhY2NvdW50IjoiS0ZGQiIsIm93bmVyIjoiNjk0MGYzZDY3ZjI4NDRjYjhhNjhkMjAyIiwicGFyZW50IjoiNjk0MGYzZDY3ZjI4NDRjYjhhNjhkMjAyIiwiY3VycmVuY3kiOiJUV0QiLCJicmFuZCI6IjE2OGFwaSIsImp0aSI6IjIzMjQyNDY2IiwiaWF0IjoxNzcwMTcyMTIxLCJpc3MiOiJDeXByZXNzIiwic3ViIjoiU1NUb2tlbiJ9.aAnKpSXAK7UxjoCnlXHgFXYHOp8QZGDfa4i44Z4iTVE / Wallet Token：6512888b217a439b9ae132737a8cbc47 | API Token：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2OTgyYmEyYWZiYmFlZWU0OWQzYjM5NWIiLCJhY2NvdW50IjoiS0ZGQyIsIm93bmVyIjoiNjk0MGYzZDY3ZjI4NDRjYjhhNjhkMjAyIiwicGFyZW50IjoiNjk0MGYzZDY3ZjI4NDRjYjhhNjhkMjAyIiwiY3VycmVuY3kiOiJUV0QiLCJicmFuZCI6IjE2OGFwaSIsImp0aSI6IjU3OTI2NTg1NCIsImlhdCI6MTc3MDE3NTAxOCwiaXNzIjoiQ3lwcmVzcyIsInN1YiI6IlNTVG9rZW4ifQ.yjv2nuY48pT7SIuNiSoYx6bihifdS3qSZtZEYs-7zoU / Wallet Token：6512888b217a439b9ae132737a8cbc47 |
| 商戶代碼（Merchant ID）（測試站） | kimfafa1v1 | KFFB | KFFC |

#### 對接狀態
| 階段 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 文件收集 | 待補充 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 | 待補充 |

---

## BNG ｜ 金發發

#### 基本資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | API | API |
| 幣別支援 | TWD | TWD | TWD |
| 語言支援 | 待補充 | 待補充 | 待補充 |
| 測試環境網址 | https://booonker.bng.games | https://booonker.bng.games | https://booonker.bng.games |
| 正式環境網址 | https://booonker.bng.games | https://booonker.bng.games | https://booonker.bng.games |

#### API 對接資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 認證方式 | PROJECT_NAME + API_TOKEN + WL | PROJECT_NAME + API_TOKEN + WL | PROJECT_NAME + API_TOKEN + WL |
| Base URL（正式站） | https://gate.c4.bng.games/op/ | https://gate.c4.bng.games/op/ | https://gate.c4.bng.games/op/ |
| Base URL（測試站） | https://gate.stage1.bng.games/op | https://gate.stage1.bng.games/op | https://gate.stage1.bng.games/op |
| 錢包模式 | 單一錢包 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Slot/BNG/BNG1 | https://intg.devkimfafa.com/v2/3rdParty/Slot/BNG/BNG2 | https://intg.devkimfafa.com/v2/3rdParty/Slot/BNG/BNG3 |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/BNG/BNG1 | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/BNG/BNG2 | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/BNG/BNG3 |
| IP 白名單需求 | 正式：54.179.221.90<br>52.74.143.243<br>52.221.122.77 / 測試：54.151.243.48<br>3.0.152.5<br>18.142.75.213<br>13.214.254.26 | 正式：54.179.221.90<br>52.74.143.243<br>52.221.122.77 / 測試：54.151.243.48<br>3.0.152.5<br>18.142.75.213<br>13.214.254.26 | 正式：54.179.221.90<br>52.74.143.243<br>52.221.122.77 / 測試：54.151.243.48<br>3.0.152.5<br>18.142.75.213<br>13.214.254.26 |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 後台帳號（正式站） | angela@idollar.com.tw | ariel.chan@idollar.com.tw | briangong@idollar.com.tw |
| 後台密碼（正式站） | qwer1234 | qwer1234 | qwer1234 |
| API Key / Secret（正式站） | PROJECT_NAME：kimfafa / API_TOKEN：oSyuCK+m;*e_4iT5O!R7 / WL：prod | PROJECT_NAME：kff6 / API_TOKEN：HP%g];7AY21WhFs_w[^a / WL：prod | PROJECT_NAME：kff10 / API_TOKEN：T_.ADL,kuv4)2M#ImV78 / WL：prod |
| 商戶代碼（Merchant ID）（正式站） | kimfafa | kff6 | kff10 |
| 後台帳號（測試站） | angela@idollar.com.tw | ariel.chan@idollar.com.tw | briangong@idollar.com.tw |
| 後台密碼（測試站） | qwer1234 | qwer1234 | qwer1234 |
| API Key / Secret（測試站） | PROJECT_NAME：kimfafa-stage / API_TOKEN：L;EhX#Alm>ie%5*:F2Nk / WL：prod | PROJECT_NAME：kff6-stage / API_TOKEN：L9D4y@zGMtr&IPO$*s+| / WL：prod | PROJECT_NAME：kff10-stage / API_TOKEN：g?pJcNu1wWvhnsSq_9*: / WL：prod |
| 商戶代碼（Merchant ID）（測試站） | kimfafa-stage | kff6-stage | kff10-stage |

#### 對接狀態
| 階段 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 文件收集 | 待補充 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 | 待補充 |

---

## DG ｜ 金發發

#### 基本資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | 不支援 | 不支援 |
| 幣別支援 | TWD | 不支援 | 不支援 |
| 語言支援 | 待補充 | 不支援 | 不支援 |
| 測試環境網址 | https://jj14t5com.com | 不支援 | 不支援 |
| 正式環境網址 | https://jj14t5com.com | 不支援 | 不支援 |

#### API 對接資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 認證方式 | API账號 + API密钥 | 不支援 | 不支援 |
| Base URL | 待補充 | 不支援 | 不支援 |
| 錢包模式 | 單一錢包 | 不支援 | 不支援 |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Table/DG/DG1 | 不支援 | 不支援 |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Table/DG/DG1 | 不支援 | 不支援 |
| IP 白名單需求 | 43.245.200.161<br>43.245.201.147<br>61.238.69.58<br>203.117.159.50<br>47.57.244.198<br>47.57.240.252<br>18.163.221.20<br>18.166.169.112<br>18.166.38.61<br>18.166.240.231<br>13.251.76.169<br>52.77.182.223<br>136.228.135.114<br>136.228.134.85<br>136.228.134.86<br>136.228.134.32<br>52.76.78.2<br>103.12.154.211<br>18.140.143.43 | 不支援 | 不支援 |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 後台帳號（正式站） | DG08420201 | 不支援 | 不支援 |
| 後台密碼（正式站） | 9u4g5c | 不支援 | 不支援 |
| API Key / Secret（正式站） | API账號：DG08420201 / 密钥：17de9a075c6843c691d85c9d2563b76e / AgentFix：28576 / APP后缀：TBL | 不支援 | 不支援 |
| 商戶代碼（Merchant ID）（正式站） | DG08420201 | 不支援 | 不支援 |
| 後台帳號（測試站） | DGTE01075R | 不支援 | 不支援 |
| 後台密碼（測試站） | dgw1rz | 不支援 | 不支援 |
| API Key / Secret（測試站） | API账號：DGTE01075R / 密钥：03f5bc9cacda4a918e5eee55adafe491 / AgentFix：3213 / APP后缀：YWO | 不支援 | 不支援 |
| 商戶代碼（Merchant ID）（測試站） | DGTE01075R | 不支援 | 不支援 |

#### 對接狀態
| 階段 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 文件收集 | 待補充 | 不支援 | 不支援 |
| 測試環境 | 待補充 | 不支援 | 不支援 |
| 正式上線 | 待補充 | 不支援 | 不支援 |

---

## L9 ｜ 金發發

#### 基本資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | 不支援 | 不支援 |
| 幣別支援 | 待補充 | 不支援 | 不支援 |
| 語言支援 | 待補充 | 不支援 | 不支援 |
| 測試環境網址 | 待補充 | 不支援 | 不支援 |
| 正式環境網址 | 待補充 | 不支援 | 不支援 |

#### API 對接資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 認證方式 | 待補充 | 不支援 | 不支援 |
| Base URL | 待補充 | 不支援 | 不支援 |
| 錢包模式 | 單一錢包 | 不支援 | 不支援 |
| Callback（測試站） | 待補充 | 不支援 | 不支援 |
| Callback（正式站） | 待補充 | 不支援 | 不支援 |
| IP 白名單需求 | 待補充 | 不支援 | 不支援 |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 測試帳號 | 待補充 | 不支援 | 不支援 |
| API Key / Secret | 待補充 | 不支援 | 不支援 |
| 商戶代碼（Merchant ID）（正式站） | 待補充 | 不支援 | 不支援 |
| 商戶代碼（Merchant ID）（測試站） | 待補充 | 不支援 | 不支援 |

#### 對接狀態
| 階段 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 文件收集 | 待補充 | 不支援 | 不支援 |
| 測試環境 | 待補充 | 不支援 | 不支援 |
| 正式上線 | 待補充 | 不支援 | 不支援 |

---

## MT ｜ 金發發

#### 基本資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | 不支援 | 不支援 |
| 幣別支援 | TW2 | 不支援 | 不支援 |
| 語言支援 | 待補充 | 不支援 | 不支援 |
| 測試環境網址 | https://ag30.ofa16899.net | 不支援 | 不支援 |
| 正式環境網址 | http://uag533.ofalive99.net | 不支援 | 不支援 |

#### API 對接資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 認證方式 | Client ID + Client Secret + DesKey + DesIV | 不支援 | 不支援 |
| Base URL（正式站） | https://goomen.ofapi168.net/api/sapphire/ | 不支援 | 不支援 |
| Base URL（測試站） | https://zone10.ofa16899.net/api/sapphire/ | 不支援 | 不支援 |
| 錢包模式 | 單一錢包 | 不支援 | 不支援 |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Table/MT/MT1 | 不支援 | 不支援 |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Table/MT/MT1 | 不支援 | 不支援 |
| IP 白名單需求 | 待補充 | 不支援 | 不支援 |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 後台帳號（正式站） | KFFPRD0180355 | 不支援 | 不支援 |
| 後台密碼（正式站） | KFFPRD0180355666 | 不支援 | 不支援 |
| API Key / Secret（正式站） | ClientID：NvSWunVENX / Secret：7rG93SGa4E / DesKey：AcvvuZmF / DesIV：3NBkdNsV / system_code：KFF / web_id：KFFPRD01 | 不支援 | 不支援 |
| 商戶代碼（Merchant ID）（正式站） | KFFPRD01 | 不支援 | 不支援 |
| 後台帳號（測試站） | KFF01 | 不支援 | 不支援 |
| 後台密碼（測試站） | KFF01555 | 不支援 | 不支援 |
| API Key / Secret（測試站） | ClientID：r7yfVHxpW9 / Secret：3fukFLNyZU / DesKey：ReaYuvde / DesIV：ZZ1Jr6ah / system_code：KFF / web_id：KFF01 | 不支援 | 不支援 |
| 商戶代碼（Merchant ID）（測試站） | KFF01 | 不支援 | 不支援 |

#### 對接狀態
| 階段 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 文件收集 | 待補充 | 不支援 | 不支援 |
| 測試環境 | 待補充 | 不支援 | 不支援 |
| 正式上線 | 待補充 | 不支援 | 不支援 |

---

## OKGO ｜ 金發發

#### 基本資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | API | API |
| 幣別支援 | TWD | TWD | TWD |
| 語言支援 | 待補充 | 待補充 | 待補充 |
| 測試環境網址 | 待補充 | 待補充 | 待補充 |
| 正式環境網址 | 待補充 | 待補充 | 待補充 |

#### API 對接資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 認證方式 | JWT Bearer Token | JWT Bearer Token | JWT Bearer Token |
| Base URL | 待補充 | 待補充 | 待補充 |
| 錢包模式 | 單一錢包 | 單一錢包 | 單一錢包 |
| Callback（測試站） | 待補充 | 待補充 | 待補充 |
| Callback（正式站） | 待補充 | 待補充 | 待補充 |
| IP 白名單需求 | 待補充 | 待補充 | 待補充 |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 後台帳號（正式站） | 待補充 | 待補充 | 待補充 |
| 後台密碼（正式站） | 待補充 | 待補充 | 待補充 |
| API Key / Secret（正式站） | JWT：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6MywiQWNjb3VudCI6ImtpbWZhZmEiLCJpYXQiOjE3NjU5NTMyMTB9.ZuGdhczgn5qreQlycNYwoaDsLb_wryuQEvYCoUWTuyA | JWT：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6NCwiQWNjb3VudCI6ImdWZTJ4Q0tkNXczVWgxZkhqb1BRIiwiaWF0IjoxNzcwMTA0NDA4fQ.cNIpLpFrDqrS4Jhx9tTJ3R3VCFtXrxoYMQIFrUP6nOw | JWT：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6NSwiQWNjb3VudCI6Inp3MVNhYVM0bmtJRjR3cUx5ZGh0IiwiaWF0IjoxNzcwMTA0NDA4fQ.mXpX7H6HY61RdAtve0pdNUqG1T-sECWYZ7oQVMA7HHY |
| 商戶代碼（Merchant ID）（正式站） | KFF | KFFB | KFFC |
| 後台帳號（測試站） | KFFA3dev | KFFB6dev | KFFC10dev |
| 後台密碼（測試站） | qwer1234 | qwer1234 | qwer1234 |
| API Key / Secret（測試站） | JWT：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6MTksIkFjY291bnQiOiJraW1mYWZhIiwiaWF0IjoxNzU5ODI5MzQ3fQ.0Hs_6ZDvALtmDYQsriofvq_xcbMjr3RJqonfCNy6WfU | JWT：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6MjcsIkFjY291bnQiOiJnVmUyeENLZDV3M1VoMWZIam9QUSIsImlhdCI6MTc3MDEwMzY2MH0.U2cUbZr2oFVww8-BcQgLd0x_P3fBQAQe-CaQSvRXXNA | JWT：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6MjgsIkFjY291bnQiOiJ6dzFTYWFTNG5rSUY0d3FMeWRodCIsImlhdCI6MTc3MDEwMzY3M30.yAqTurzngB_igplqvB-A08FYzknFoWrd3GjTfBUPRBg |
| 商戶代碼（Merchant ID）（測試站） | KFF | KFFB | KFFC |

#### 對接狀態
| 階段 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 文件收集 | 待補充 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 | 待補充 |

---

## OSEG ｜ 金發發

#### 基本資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | API | API |
| 幣別支援 | REX1 | REX1 | REX1 |
| 語言支援 | 待補充 | 待補充 | 待補充 |
| 測試環境網址 | https://bo.cqgame.games | https://bo.cqgame.games | https://bo.cqgame.games |
| 正式環境網址 | https://booi.cqgame.cc | https://booi.cqgame.cc | https://booi.cqgame.cc |

#### API 對接資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 認證方式 | JWT Bearer Token | JWT Bearer Token | JWT Bearer Token |
| Base URL（正式站） | https://apii.cqgame.cc | https://apii.cqgame.cc | https://apii.cqgame.cc |
| Base URL（測試站） | https://api.cqgame.games | https://api.cqgame.games | https://api.cqgame.games |
| 錢包模式 | 單一錢包 | 單一錢包 | 單一錢包 |
| Callback（測試站） | 待補充 | 待補充 | 待補充 |
| Callback（正式站） | 待補充 | 待補充 | 待補充 |
| IP 白名單需求 | 待補充 | 待補充 | 待補充 |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 後台帳號（正式站） | kimfafa | KFFBPrd | KFFCPrd |
| 後台密碼（正式站） | kimfafa01 | qwer1234 | qwer1234 |
| API Key / Secret（正式站） | API Token：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2OTM2OWI2NTU2ZmQ4MzdjYWNhYzVkZmQiLCJhY2NvdW50Ijoia2ltZmFmYSIsIm93bmVyIjoiNjkzNjliNjU1NmZkODM3Y2FjYWM1ZGZkIiwicGFyZW50Ijoic2VsZiIsImN1cnJlbmN5IjoiUkVYKDEpIiwiYnJhbmQiOiIxNjhnYW1lIiwianRpIjoiNDM0MzA2Njk5IiwiaWF0IjoxNzY1MTg2NDA1LCJpc3MiOiJDeXByZXNzIiwic3ViIjoiU1NUb2tlbiJ9.qwQbJjnP7lOiswaq_8EHDvhzEe0QOgBXT5FbWZUQrag / Wallet Token：ab13837f-d408-41a3-85bd-e3050be06aa3 | API Token：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2OTgzMDYwNjQwZmM2OTcxNTkxMTMwZTYiLCJhY2NvdW50IjoiS0ZGQlByZCIsIm93bmVyIjoiNjkzNjliNjU1NmZkODM3Y2FjYWM1ZGZkIiwicGFyZW50IjoiNjkzNjliNjU1NmZkODM3Y2FjYWM1ZGZkIiwiY3VycmVuY3kiOiJSRVgoMSkiLCJicmFuZCI6IjE2OGdhbWUiLCJqdGkiOiI3ODc5NjA4NjEiLCJpYXQiOjE3NzAxOTQ0MzgsImlzcyI6IkN5cHJlc3MiLCJzdWIiOiJTU1Rva2VuIn0.VsbaX8_y2dB8IiOTM2Ax-2aje9bJ4upqnf58kNZD2B8 | API Token：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2OTgzMDY1ODkzZjQ1NDk5Y2NhODMxZGMiLCJhY2NvdW50IjoiS0ZGQ1ByZCIsIm93bmVyIjoiNjkzNjliNjU1NmZkODM3Y2FjYWM1ZGZkIiwicGFyZW50IjoiNjkzNjliNjU1NmZkODM3Y2FjYWM1ZGZkIiwiY3VycmVuY3kiOiJSRVgoMSkiLCJicmFuZCI6IjE2OGdhbWUiLCJqdGkiOiI0MjgwNzA1NDUiLCJpYXQiOjE3NzAxOTQ1MjAsImlzcyI6IkN5cHJlc3MiLCJzdWIiOiJTU1Rva2VuIn0.AUO9G4FLzyQ8AoDj9RNDyaqvxNIm8bR8qHhemZvNbtk |
| 商戶代碼（Merchant ID）（正式站） | kimfafa | KFFBPrd | KFFCPrd |
| 後台帳號（測試站） | devKimfafa | KFFB | KFFC |
| 後台密碼（測試站） | Kimfafa01 | qwer1234 | qwer1234 |
| API Key / Secret（測試站） | API Token：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2OGU0OGQyMWExZWY5M2M2NDg4NjNlZjciLCJhY2NvdW50IjoiZGV2S2ltZmFmYSIsIm93bmVyIjoiNjg2NTAxZmQ3MWI3MzU3MjJkNzVmOGFmIiwicGFyZW50IjoiNjg2NTAxZmQ3MWI3MzU3MjJkNzVmOGFmIiwiY3VycmVuY3kiOiJSRVgoMSkiLCJicmFuZCI6IjE2OGdhbWUiLCJqdGkiOiI2MzczODQ3NTYiLCJpYXQiOjE3NTk4MDg4MDEsImlzcyI6IkN5cHJlc3MiLCJzdWIiOiJTU1Rva2VuIn0.CbDZAINyZt6b1OVQZNrBGn53OBgkAKv2EH9bHcTC778 | API Token：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2OTgzMDEzOGUwMGJiYmRkOGM0NzA4NjciLCJhY2NvdW50IjoiS0ZGQiIsIm93bmVyIjoiNjg2NTAxZmQ3MWI3MzU3MjJkNzVmOGFmIiwicGFyZW50IjoiNjg2NTAxZmQ3MWI3MzU3MjJkNzVmOGFmIiwiY3VycmVuY3kiOiJSRVgoMSkiLCJicmFuZCI6IjE2OGdhbWUiLCJqdGkiOiIzNjgzNTgwOTQiLCJpYXQiOjE3NzAxOTMyMDgsImlzcyI6IkN5cHJlc3MiLCJzdWIiOiJTU1Rva2VuIn0.l1yFWgJ0at-zUaGkTDWjPzRnstsb2pLI8ULOuTytylc | API Token：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2OTgzMDE1N2UwMGJiYmRkOGM0NzA4NmMiLCJhY2NvdW50IjoiS0ZGQyIsIm93bmVyIjoiNjg2NTAxZmQ3MWI3MzU3MjJkNzVmOGFmIiwicGFyZW50IjoiNjg2NTAxZmQ3MWI3MzU3MjJkNzVmOGFmIiwiY3VycmVuY3kiOiJSRVgoMSkiLCJicmFuZCI6IjE2OGdhbWUiLCJqdGkiOiIzNDA5NjAxMzYiLCJpYXQiOjE3NzAxOTMyMzksImlzcyI6IkN5cHJlc3MiLCJzdWIiOiJTU1Rva2VuIn0.qGoFMafGLrr4O3Mb5xNDSWO7_IdT50DowY-3monMwgM |
| 商戶代碼（Merchant ID）（測試站） | devKimfafa | KFFB | KFFC |

#### 對接狀態
| 階段 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 文件收集 | 待補充 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 | 待補充 |

---

## QT ｜ 金發發

#### 基本資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | 不支援 | 不支援 |
| 幣別支援 | TWD | 不支援 | 不支援 |
| 語言支援 | 待補充 | 不支援 | 不支援 |
| 測試環境網址 | https://api-int.qtplatform.com | 不支援 | 不支援 |
| 正式環境網址 | https://api.qtplatform.com | 不支援 | 不支援 |

#### API 對接資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 認證方式 | Username / Password + Passkey | 不支援 | 不支援 |
| Base URL | https://api.qtplatform.com | 不支援 | 不支援 |
| 錢包模式 | 單一錢包 | 不支援 | 不支援 |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Slot/QT/QT1 | 不支援 | 不支援 |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/QT/QT1 | 不支援 | 不支援 |
| IP 白名單需求 | 待補充 | 不支援 | 不支援 |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 後台帳號（正式站） | manager_kimfafa | 不支援 | 不支援 |
| 後台密碼（正式站） | ddzebPp6 | 不支援 | 不支援 |
| 後台帳號（測試站） | qa_kimfafa | 不支援 | 不支援 |
| 後台密碼（測試站） | cR(fhop2 | 不支援 | 不支援 |
| API Key / Secret | qWMyiFiU3BpCiEgF | 不支援 | 不支援 |
| 商戶代碼（Merchant ID）（正式站） | manager_kimfafa | 不支援 | 不支援 |
| 商戶代碼（Merchant ID）（測試站） | qa_kimfafa | 不支援 | 不支援 |

#### 對接狀態
| 階段 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 文件收集 | 待補充 | 不支援 | 不支援 |
| 測試環境 | 待補充 | 不支援 | 不支援 |
| 正式上線 | 待補充 | 不支援 | 不支援 |

---

## RSGSW ｜ 金發發

#### 基本資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | API | API |
| 幣別支援 | NT | NT | NT |
| 語言支援 | 待補充 | 待補充 | 待補充 |
| 測試環境網址 | https://tsgamectrl.royalgaming777.com/ | https://tsgamectrl.royalgaming777.com/ | https://tsgamectrl.royalgaming777.com/ |
| 正式環境網址 | https://gamectrl.rsgaming888.com/ | https://gamectrl.rsgaming888.com/ | https://gamectrl.rsgaming888.com/ |

#### API 對接資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 認證方式 | Client ID + Client Secret + DesKey + DesIV | Client ID + Client Secret + DesKey + DesIV | Client ID + Client Secret + DesKey + DesIV |
| Base URL（正式站） | http://kff-api.rsgaming888.com/SingleWallet | http://kff-api.rsgaming888.com/SingleWallet | http://kff-api.rsgaming888.com/SingleWallet |
| Base URL（測試站） | http://tskff-api.royalgaming777.com/SingleWallet | http://tskff-api.royalgaming777.com/SingleWallet | http://tskff-api.royalgaming777.com/SingleWallet |
| 錢包模式 | 單一錢包 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Slot/RSGSW | https://intg.devkimfafa.com/v2/3rdParty/Slot/RSGSW | https://intg.devkimfafa.com/v2/3rdParty/Slot/RSGSW |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/RSGSW | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/RSGSW | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/RSGSW |
| IP 白名單需求 | 正式：13.214.250.190<br>測試：52.76.139.21 | 正式：13.214.250.190<br>測試：52.76.139.21 | 正式：13.214.250.190<br>測試：52.76.139.21 |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 後台帳號（正式站） | KFFSys | 與3代理相同 | 與3代理相同 |
| 後台密碼（正式站） | E77BB033 | 與3代理相同 | 與3代理相同 |
| API Key / Secret（正式站） | ClientID：g04uxz2dbzan / Secret：IU14A8AK / DesKey：ZO56T6NU / DesIV：CKNNXF11 | 與3代理相同 | 與3代理相同 |
| 商戶代碼（Merchant ID）（正式站） | prd | kimfafa6 | kimfafa10 |
| 後台帳號（測試站） | KFFSys | 與3代理相同 | 與3代理相同 |
| 後台密碼（測試站） | L1VFB8EP | 與3代理相同 | 與3代理相同 |
| API Key / Secret（測試站） | ClientID：90t0rqkgaybo / Secret：LE2ZJFQM / DesKey：93D5VPRZ / DesIV：8XDKYP5R | 與3代理相同 | 與3代理相同 |
| 商戶代碼（Merchant ID）（測試站） | dev | kimfafa6 | kimfafa10 |

#### 對接狀態
| 階段 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 文件收集 | 待補充 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 | 待補充 |

---

## VA ｜ 金發發

#### 基本資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | 不支援 | 不支援 |
| 幣別支援 | VTW1 | 不支援 | 不支援 |
| 語言支援 | 待補充 | 不支援 | 不支援 |
| 測試環境網址 | https://vtw.victory-art.com/agent_manage/login | 不支援 | 不支援 |
| 正式環境網址 | 待補充 | 不支援 | 不支援 |

#### API 對接資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 認證方式 | Authorization + APIKey | 不支援 | 不支援 |
| Base URL（正式站） | 待補充 | 不支援 | 不支援 |
| Base URL（測試站） | https://api.victory-art.com/ | 不支援 | 不支援 |
| 錢包模式 | 單一錢包 | 不支援 | 不支援 |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Slot/VA | 不支援 | 不支援 |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/VA | 不支援 | 不支援 |
| IP 白名單需求 | 待補充 | 不支援 | 不支援 |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 後台帳號（正式站） | 待補充 | 不支援 | 不支援 |
| 後台密碼（正式站） | 待補充 | 不支援 | 不支援 |
| API Key / Secret（正式站） | 待補充 | 不支援 | 不支援 |
| 商戶代碼（Merchant ID）（正式站） | 待補充 | 不支援 | 不支援 |
| 後台帳號（測試站） | kimfafa_3 | 不支援 | 不支援 |
| 後台密碼（測試站） | W+6Q)$jf_N | 不支援 | 不支援 |
| API Key / Secret（測試站） | Authorization：d787afc0a2b54e9a8739e00b1140b940 / APIKey：0a2b54 | 不支援 | 不支援 |
| 商戶代碼（Merchant ID）（測試站） | 待補充 | 不支援 | 不支援 |

#### 對接狀態
| 階段 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 文件收集 | 待補充 | 不支援 | 不支援 |
| 測試環境 | 待補充 | 不支援 | 不支援 |
| 正式上線 | 待補充 | 不支援 | 不支援 |

---

## DG ｜ 金發發

#### 基本資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | — | — |
| 幣別支援 | TWD | — | — |
| 語言支援 | 待補充 | — | — |
| 測試環境網址 | https://jj14t5com.com | — | — |
| 正式環境網址 | https://jj14t5com.com | — | — |

#### API 對接資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 認證方式 | API账號 + API密钥 | — | — |
| Base URL | 待補充 | — | — |
| 錢包模式 | 單一錢包 | — | — |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Table/DG/DG1 | — | — |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Table/DG/DG1 | — | — |
| IP 白名單需求 | 43.245.200.161<br>43.245.201.147<br>61.238.69.58<br>203.117.159.50<br>47.57.244.198<br>47.57.240.252<br>18.163.221.20<br>18.166.169.112<br>18.166.38.61<br>18.166.240.231<br>13.251.76.169<br>52.77.182.223<br>136.228.135.114<br>136.228.134.85<br>136.228.134.86<br>136.228.134.32<br>52.76.78.2<br>103.12.154.211<br>18.140.143.43 | — | — |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 測試帳號 | DGTE01075R（測試密碼：dgw1rz / 正式密碼：9u4g5c） | — | — |
| API Key / Secret（正式站） | API账號：DG08420201 / 密钥：17de9a075c6843c691d85c9d2563b76e / AgentFix：28576 / APP后缀：TBL | — | — |
| API Key / Secret（測試站） | API账號：DGTE01075R / 密钥：03f5bc9cacda4a918e5eee55adafe491 / AgentFix：3213 / APP后缀：YWO | — | — |
| 商戶代碼（Merchant ID） | DGTE01075R（測試）/ DG08420201（正式） | — | — |

#### 對接狀態
| 階段 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 文件收集 | 待補充 | — | — |
| 測試環境 | 待補充 | — | — |
| 正式上線 | 待補充 | — | — |

---

## MT ｜ 金發發

#### 基本資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | — | — |
| 幣別支援 | TW2 | — | — |
| 語言支援 | 待補充 | — | — |
| 測試環境網址 | https://ag30.ofa16899.net | — | — |
| 正式環境網址 | http://uag533.ofalive99.net | — | — |

#### API 對接資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 認證方式 | Client ID + Client Secret + DesKey + DesIV | — | — |
| Base URL（正式站） | https://goomen.ofapi168.net/api/sapphire/ | — | — |
| Base URL（測試站） | https://zone10.ofa16899.net/api/sapphire/ | — | — |
| 錢包模式 | 單一錢包 | — | — |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Table/MT/MT1 | — | — |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Table/MT/MT1 | — | — |
| IP 白名單需求 | 待補充 | — | — |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 測試帳號 | KFF01（測試密碼：KFF01555 / 正式密碼：KFFPRD0180355666） | — | — |
| API Key / Secret（正式站） | ClientID：NvSWunVENX / Secret：7rG93SGa4E / DesKey：AcvvuZmF / DesIV：3NBkdNsV / system_code：KFF / web_id：KFFPRD01 | — | — |
| API Key / Secret（測試站） | ClientID：r7yfVHxpW9 / Secret：3fukFLNyZU / DesKey：ReaYuvde / DesIV：ZZ1Jr6ah / system_code：KFF / web_id：KFF01 | — | — |
| 商戶代碼（Merchant ID） | KFF01（測試）/ KFFPRD01（正式） | — | — |

#### 對接狀態
| 階段 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 文件收集 | 待補充 | — | — |
| 測試環境 | 待補充 | — | — |
| 正式上線 | 待補充 | — | — |

---

## OKGO ｜ 金發發

#### 基本資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | API | API |
| 幣別支援 | TWD | TWD | TWD |
| 語言支援 | 待補充 | 待補充 | 待補充 |
| 測試環境網址 | 待補充 | 待補充 | 待補充 |
| 正式環境網址 | 待補充 | 待補充 | 待補充 |

#### API 對接資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 認證方式 | JWT Bearer Token | JWT Bearer Token | JWT Bearer Token |
| Base URL | 待補充 | 待補充 | 待補充 |
| 錢包模式 | 單一錢包 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Slot/OKGO/OKGO1 | https://intg.devkimfafa.com/v2/3rdParty/Slot/OKGO/OKGO2 | https://intg.devkimfafa.com/v2/3rdParty/Slot/OKGO/OKGO3 |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/OKGO/OKGO1 | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/OKGO/OKGO2 | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/OKGO/OKGO3 |
| IP 白名單需求 | 待補充 | 待補充 | 待補充 |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 測試帳號 | KFFA3dev（測試密碼：qwer1234 / 正式帳號：待補充） | 待補充 | 待補充 |
| API Key / Secret（正式站） | JWT：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6MywiQWNjb3VudCI6ImtpbWZhZmEiLCJpYXQiOjE3NjU5NTMyMTB9.ZuGdhczgn5qreQlycNYwoaDsLb_wryuQEvYCoUWTuyA | JWT：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6NCwiQWNjb3VudCI6ImdWZTJ4Q0tkNXczVWgxZkhqb1BRIiwiaWF0IjoxNzcwMTA0NDA4fQ.cNIpLpFrDqrS4Jhx9tTJ3R3VCFtXrxoYMQIFrUP6nOw | JWT：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6NSwiQWNjb3VudCI6Inp3MVNhYVM0bmtJRjR3cUx5ZGh0IiwiaWF0IjoxNzcwMTA0NDA4fQ.mXpX7H6HY61RdAtve0pdNUqG1T-sECWYZ7oQVMA7HHY |
| API Key / Secret（測試站） | JWT：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6MTksIkFjY291bnQiOiJraW1mYWZhIiwiaWF0IjoxNzU5ODI5MzQ3fQ.0Hs_6ZDvALtmDYQsriofvq_xcbMjr3RJqonfCNy6WfU | JWT：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6MjcsIkFjY291bnQiOiJnVmUyeENLZDV3M1VoMWZIam9QUSIsImlhdCI6MTc3MDEwMzY2MH0.U2cUbZr2oFVww8-BcQgLd0x_P3fBQAQe-CaQSvRXXNA | JWT：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6MjgsIkFjY291bnQiOiJ6dzFTYWFTNG5rSUY0d3FMeWRodCIsImlhdCI6MTc3MDEwMzY3M30.yAqTurzngB_igplqvB-A08FYzknFoWrd3GjTfBUPRBg |
| 商戶代碼（Merchant ID） | KFF | KFFB | KFFC |

#### 對接狀態
| 階段 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 文件收集 | 待補充 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 | 待補充 |

---

## OSEG ｜ 金發發

#### 基本資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | API | API |
| 幣別支援 | REX1 | REX1 | REX1 |
| 語言支援 | 待補充 | 待補充 | 待補充 |
| 測試環境網址 | https://bo.cqgame.games | https://bo.cqgame.games | https://bo.cqgame.games |
| 正式環境網址 | https://booi.cqgame.cc | https://booi.cqgame.cc | https://booi.cqgame.cc |

#### API 對接資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 認證方式 | JWT Bearer Token | JWT Bearer Token | JWT Bearer Token |
| Base URL（正式站） | https://apii.cqgame.cc | https://apii.cqgame.cc | https://apii.cqgame.cc |
| Base URL（測試站） | https://api.cqgame.games | https://api.cqgame.games | https://api.cqgame.games |
| 錢包模式 | 單一錢包 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Slot/OSEG/OSEG1 | https://intg.devkimfafa.com/v2/3rdParty/Slot/OSEG/OSEG2 | https://intg.devkimfafa.com/v2/3rdParty/Slot/OSEG/OSEG3 |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/OSEG/OSEG1 | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/OSEG/OSEG2 | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/OSEG/OSEG3 |
| IP 白名單需求 | 34.80.150.142<br>104.199.254.127<br>175.98.168.194 | 34.80.150.142<br>104.199.254.127<br>175.98.168.194 | 34.80.150.142<br>104.199.254.127<br>175.98.168.194 |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 測試帳號 | devKimfafa（測試密碼：Kimfafa01 / 正式密碼：kimfafa01） | 待補充 | 待補充 |
| API Key / Secret（正式站） | API Token：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2OTM2OWI2NTU2ZmQ4MzdjYWNhYzVkZmQiLCJhY2NvdW50Ijoia2ltZmFmYSIsIm93bmVyIjoiNjkzNjliNjU1NmZkODM3Y2FjYWM1ZGZkIiwicGFyZW50Ijoic2VsZiIsImN1cnJlbmN5IjoiUkVYKDEpIiwiYnJhbmQiOiIxNjhnYW1lIiwianRpIjoiNDM0MzA2Njk5IiwiaWF0IjoxNzY1MTg2NDA1LCJpc3MiOiJDeXByZXNzIiwic3ViIjoiU1NUb2tlbiJ9.qwQbJjnP7lOiswaq_8EHDvhzEe0QOgBXT5FbWZUQrag / Wallet Token：ab13837f-d408-41a3-85bd-e3050be06aa3 | API Token：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2OTgzMDYwNjQwZmM2OTcxNTkxMTMwZTYiLCJhY2NvdW50IjoiS0ZGQlByZCIsIm93bmVyIjoiNjkzNjliNjU1NmZkODM3Y2FjYWM1ZGZkIiwicGFyZW50IjoiNjkzNjliNjU1NmZkODM3Y2FjYWM1ZGZkIiwiY3VycmVuY3kiOiJSRVgoMSkiLCJicmFuZCI6IjE2OGdhbWUiLCJqdGkiOiI3ODc5NjA4NjEiLCJpYXQiOjE3NzAxOTQ0MzgsImlzcyI6IkN5cHJlc3MiLCJzdWIiOiJTU1Rva2VuIn0.VsbaX8_y2dB8IiOTM2Ax-2aje9bJ4upqnf58kNZD2B8 | API Token：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2OTgzMDY1ODkzZjQ1NDk5Y2NhODMxZGMiLCJhY2NvdW50IjoiS0ZGQ1ByZCIsIm93bmVyIjoiNjkzNjliNjU1NmZkODM3Y2FjYWM1ZGZkIiwicGFyZW50IjoiNjkzNjliNjU1NmZkODM3Y2FjYWM1ZGZkIiwiY3VycmVuY3kiOiJSRVgoMSkiLCJicmFuZCI6IjE2OGdhbWUiLCJqdGkiOiI0MjgwNzA1NDUiLCJpYXQiOjE3NzAxOTQ1MjAsImlzcyI6IkN5cHJlc3MiLCJzdWIiOiJTU1Rva2VuIn0.AUO9G4FLzyQ8AoDj9RNDyaqvxNIm8bR8qHhemZvNbtk |
| API Key / Secret（測試站） | API Token：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2OGU0OGQyMWExZWY5M2M2NDg4NjNlZjciLCJhY2NvdW50IjoiZGV2S2ltZmFmYSIsIm93bmVyIjoiNjg2NTAxZmQ3MWI3MzU3MjJkNzVmOGFmIiwicGFyZW50IjoiNjg2NTAxZmQ3MWI3MzU3MjJkNzVmOGFmIiwiY3VycmVuY3kiOiJSRVgoMSkiLCJicmFuZCI6IjE2OGdhbWUiLCJqdGkiOiI2MzczODQ3NTYiLCJpYXQiOjE3NTk4MDg4MDEsImlzcyI6IkN5cHJlc3MiLCJzdWIiOiJTU1Rva2VuIn0.CbDZAINyZt6b1OVQZNrBGn53OBgkAKv2EH9bHcTC778 | API Token：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2OTgzMDEzOGUwMGJiYmRkOGM0NzA4NjciLCJhY2NvdW50IjoiS0ZGQiIsIm93bmVyIjoiNjg2NTAxZmQ3MWI3MzU3MjJkNzVmOGFmIiwicGFyZW50IjoiNjg2NTAxZmQ3MWI3MzU3MjJkNzVmOGFmIiwiY3VycmVuY3kiOiJSRVgoMSkiLCJicmFuZCI6IjE2OGdhbWUiLCJqdGkiOiIzNjgzNTgwOTQiLCJpYXQiOjE3NzAxOTMyMDgsImlzcyI6IkN5cHJlc3MiLCJzdWIiOiJTU1Rva2VuIn0.l1yFWgJ0at-zUaGkTDWjPzRnstsb2pLI8ULOuTytylc | API Token：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2OTgzMDE1N2UwMGJiYmRkOGM0NzA4NmMiLCJhY2NvdW50IjoiS0ZGQyIsIm93bmVyIjoiNjg2NTAxZmQ3MWI3MzU3MjJkNzVmOGFmIiwicGFyZW50IjoiNjg2NTAxZmQ3MWI3MzU3MjJkNzVmOGFmIiwiY3VycmVuY3kiOiJSRVgoMSkiLCJicmFuZCI6IjE2OGdhbWUiLCJqdGkiOiIzNDA5NjAxMzYiLCJpYXQiOjE3NzAxOTMyMzksImlzcyI6IkN5cHJlc3MiLCJzdWIiOiJTU1Rva2VuIn0.qGoFMafGLrr4O3Mb5xNDSWO7_IdT50DowY-3monMwgM |
| 商戶代碼（Merchant ID） | devKimfafa（測試）/ kimfafa（正式） | KFFB（測試）/ KFFBPrd（正式） | KFFC（測試）/ KFFCPrd（正式） |

#### 對接狀態
| 階段 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 文件收集 | 待補充 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 | 待補充 |

---

## QT ｜ 金發發

#### 基本資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | — | — |
| 幣別支援 | TWD | — | — |
| 語言支援 | 待補充 | — | — |
| 測試環境網址 | https://api-int.qtplatform.com | — | — |
| 正式環境網址 | https://api.qtplatform.com | — | — |

#### API 對接資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 認證方式 | Username / Password + Passkey | — | — |
| Base URL | https://api.qtplatform.com | — | — |
| 錢包模式 | 單一錢包 | — | — |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Slot/QT/QT1 | — | — |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/QT/QT1 | — | — |
| IP 白名單需求 | 52.77.32.26<br>54.169.140.105<br>34.241.71.150<br>18.162.217.103<br>18.184.243.189<br>34.243.156.16<br>52.79.203.127<br>52.76.231.168<br>2.136.53.153 | — | — |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 測試帳號 | api_kimfafa（測試密碼：Snoexs10 / 正式密碼：nvtbrUz4） | — | — |
| API Key / Secret | qWMyiFiU3BpCiEgF | — | — |
| 商戶代碼（Merchant ID） | qa_kimfafa（測試）/ manager_kimfafa（正式） | — | — |

#### 對接狀態
| 階段 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 文件收集 | 待補充 | — | — |
| 測試環境 | 待補充 | — | — |
| 正式上線 | 待補充 | — | — |

---

## RSGSW ｜ 金發發

#### 基本資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | API | API |
| 幣別支援 | NT | NT | NT |
| 語言支援 | 待補充 | 待補充 | 待補充 |
| 測試環境網址 | https://tsgamectrl.royalgaming777.com/ | https://tsgamectrl.royalgaming777.com/ | https://tsgamectrl.royalgaming777.com/ |
| 正式環境網址 | https://gamectrl.rsgaming888.com/ | https://gamectrl.rsgaming888.com/ | https://gamectrl.rsgaming888.com/ |

#### API 對接資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 認證方式 | Client ID + Client Secret + DesKey + DesIV | Client ID + Client Secret + DesKey + DesIV | Client ID + Client Secret + DesKey + DesIV |
| Base URL（正式站） | http://kff-api.rsgaming888.com/SingleWallet | http://kff-api.rsgaming888.com/SingleWallet | http://kff-api.rsgaming888.com/SingleWallet |
| Base URL（測試站） | http://tskff-api.royalgaming777.com/SingleWallet | http://tskff-api.royalgaming777.com/SingleWallet | http://tskff-api.royalgaming777.com/SingleWallet |
| 錢包模式 | 單一錢包 | 單一錢包 | 單一錢包 |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Slot/RSGSW | https://intg.devkimfafa.com/v2/3rdParty/Slot/RSGSW | https://intg.devkimfafa.com/v2/3rdParty/Slot/RSGSW |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/RSGSW | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/RSGSW | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/RSGSW |
| IP 白名單需求 | 正式：13.214.250.190<br>測試：52.76.139.21 | 正式：13.214.250.190<br>測試：52.76.139.21 | 正式：13.214.250.190<br>測試：52.76.139.21 |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 測試帳號 | KFFSys（測試密碼：L1VFB8EP / 正式密碼：E77BB033） | 與3代理相同 | 與3代理相同 |
| API Key / Secret（正式站） | ClientID：g04uxz2dbzan / Secret：IU14A8AK / DesKey：ZO56T6NU / DesIV：CKNNXF11 | 與3代理相同 | 與3代理相同 |
| API Key / Secret（測試站） | ClientID：90t0rqkgaybo / Secret：LE2ZJFQM / DesKey：93D5VPRZ / DesIV：8XDKYP5R | 與3代理相同 | 與3代理相同 |
| 商戶代碼（Merchant ID） | dev（測試）/ prd（正式） | kimfafa6 | kimfafa10 |

#### 對接狀態
| 階段 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 文件收集 | 待補充 | 待補充 | 待補充 |
| 測試環境 | 待補充 | 待補充 | 待補充 |
| 正式上線 | 待補充 | 待補充 | 待補充 |

---

## VA ｜ 金發發

#### 基本資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | — | — |
| 幣別支援 | VTW1 | — | — |
| 語言支援 | 待補充 | — | — |
| 測試環境網址 | https://vtw.victory-art.com/agent_manage/login | — | — |
| 正式環境網址 | 待補充 | — | — |

#### API 對接資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 認證方式 | Authorization + APIKey | — | — |
| Base URL（正式站） | 待補充 | — | — |
| Base URL（測試站） | https://api.victory-art.com/ | — | — |
| 錢包模式 | 單一錢包 | — | — |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Slot/VA | — | — |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Slot/VA | — | — |
| IP 白名單需求 | 待補充 | — | — |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 測試帳號 | kimfafa_3（測試密碼：W+6Q)$jf_N / 正式帳號：待補充） | — | — |
| API Key / Secret（正式站） | 待補充 | — | — |
| API Key / Secret（測試站） | Authorization：d787afc0a2b54e9a8739e00b1140b940 / APIKey：0a2b54 | — | — |
| 商戶代碼（Merchant ID） | 待補充 | — | — |

#### 對接狀態
| 階段 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 文件收集 | 待補充 | — | — |
| 測試環境 | 待補充 | — | — |
| 正式上線 | 待補充 | — | — |

---

## L9 ｜ 金發發

#### 基本資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 對接類型 | API | — | — |
| 幣別支援 | 待補充 | — | — |
| 語言支援 | 待補充 | — | — |
| 測試環境網址 | 待補充 | — | — |
| 正式環境網址 | 待補充 | — | — |

#### API 對接資訊
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 認證方式 | 待補充 | — | — |
| Base URL | 待補充 | — | — |
| 錢包模式 | 單一錢包 | — | — |
| Callback（測試站） | https://intg.devkimfafa.com/v2/3rdParty/Table/L9/L91 | — | — |
| Callback（正式站） | https://intg.kimfafa.com.tw/v2/3rdParty/Table/L9/L91 | — | — |
| IP 白名單需求 | 待補充 | — | — |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 測試帳號 | 待補充 | — | — |
| API Key / Secret | 待補充 | — | — |
| 商戶代碼（Merchant ID） | 待補充 | — | — |

#### 對接狀態
| 階段 | 3代理 | 6代理 | 10代理 |
|------|-------|-------|--------|
| 文件收集 | 待補充 | — | — |
| 測試環境 | 待補充 | — | — |
| 正式上線 | 待補充 | — | — |

---

---

# 日本站（JP）

---

## BNG ｜ 日本站

#### 基本資訊
| 欄位 | 內容 |
|------|------|
| 對接類型 | API |
| 幣別支援 | 待補充 |
| 語言支援 | 待補充 |
| 測試環境網址 | 待補充 |
| 正式環境網址 | 待補充 |

#### API 對接資訊
| 欄位 | 內容 |
|------|------|
| 認證方式 | 待補充 |
| Base URL | 待補充 |
| 錢包模式 | 單一錢包 |
| Callback / Webhook URL | 待補充 |
| IP 白名單需求（測試站） | 54.151.243.48 |
| IP 白名單需求（正式站） | 54.255.99.233 |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 內容 |
|------|------|
| 測試帳號 | 待補充 |
| API Key / Secret | 待補充 |
| 商戶代碼（Merchant ID） | 待補充 |

#### 對接狀態
| 階段 | 狀態 |
|------|------|
| 文件收集 | 待補充 |
| 測試環境 | 待補充 |
| 正式上線 | 待補充 |

---

## CQ9 ｜ 日本站

#### 基本資訊
| 欄位 | 內容 |
|------|------|
| 對接類型 | API |
| 幣別支援 | 待補充 |
| 語言支援 | 待補充 |
| 測試環境網址 | 待補充 |
| 正式環境網址 | 待補充 |

#### API 對接資訊
| 欄位 | 內容 |
|------|------|
| 認證方式 | 待補充 |
| Base URL | 待補充 |
| 錢包模式 | 單一錢包 |
| Callback / Webhook URL | 待補充 |
| IP 白名單需求（測試站） | 60.249.60.121<br>175.99.248.34<br>211.23.49.51<br>113.196.184.234<br>35.187.201.14 |
| IP 白名單需求（正式站） | 60.249.60.121<br>175.99.248.34<br>34.80.150.142<br>34.81.68.167<br>104.199.254.127 |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 內容 |
|------|------|
| 測試帳號 | 待補充 |
| API Key / Secret | 待補充 |
| 商戶代碼（Merchant ID） | 待補充 |

#### 對接狀態
| 階段 | 狀態 |
|------|------|
| 文件收集 | 待補充 |
| 測試環境 | 待補充 |
| 正式上線 | 待補充 |

---

## EVO ｜ 日本站

#### 基本資訊
| 欄位 | 內容 |
|------|------|
| 對接類型 | API |
| 幣別支援 | 待補充 |
| 語言支援 | 待補充 |
| 測試環境網址 | 待補充 |
| 正式環境網址 | 待補充 |

#### API 對接資訊
| 欄位 | 內容 |
|------|------|
| 認證方式 | 待補充 |
| Base URL | 待補充 |
| 錢包模式 | 單一錢包 |
| Callback / Webhook URL | 待補充 |
| IP 白名單需求（測試站） | 3.120.233.170 |
| IP 白名單需求（正式站） | 3.120.107.58<br>3.120.216.199<br>3.73.86.249 |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 內容 |
|------|------|
| 測試帳號 | 待補充 |
| API Key / Secret | 待補充 |
| 商戶代碼（Merchant ID） | 待補充 |

#### 對接狀態
| 階段 | 狀態 |
|------|------|
| 文件收集 | 待補充 |
| 測試環境 | 待補充 |
| 正式上線 | 待補充 |

---

## FC ｜ 日本站

#### 基本資訊
| 欄位 | 內容 |
|------|------|
| 對接類型 | API |
| 幣別支援 | 待補充 |
| 語言支援 | 待補充 |
| 測試環境網址 | 待補充 |
| 正式環境網址 | 待補充 |

#### API 對接資訊
| 欄位 | 內容 |
|------|------|
| 認證方式 | 待補充 |
| Base URL | 待補充 |
| 錢包模式 | 單一錢包 |
| Callback / Webhook URL | 待補充 |
| IP 白名單需求（測試站） | 104.199.132.230<br>35.194.132.52<br>34.124.156.179<br>35.240.215.42 |
| IP 白名單需求（正式站） | 60.244.118.100<br>202.153.187.76<br>34.81.32.162<br>35.201.202.78<br>34.81.220.98<br>35.221.177.184<br>35.229.232.56<br>35.201.195.88<br>202.55.239.2<br>202.153.187.74 |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 內容 |
|------|------|
| 測試帳號 | 待補充 |
| API Key / Secret | 待補充 |
| 商戶代碼（Merchant ID） | 待補充 |

#### 對接狀態
| 階段 | 狀態 |
|------|------|
| 文件收集 | 待補充 |
| 測試環境 | 待補充 |
| 正式上線 | 待補充 |

---

## PG ｜ 日本站

#### 基本資訊
| 欄位 | 內容 |
|------|------|
| 對接類型 | API |
| 幣別支援 | 待補充 |
| 語言支援 | 待補充 |
| 測試環境網址 | 待補充 |
| 正式環境網址 | 待補充 |

#### API 對接資訊
| 欄位 | 內容 |
|------|------|
| 認證方式 | 待補充 |
| Base URL | 待補充 |
| 錢包模式 | 單一錢包 |
| Callback / Webhook URL | 待補充 |
| IP 白名單需求（測試站） | 8.210.145.251 |
| IP 白名單需求（正式站） | 47.56.146.87 |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 內容 |
|------|------|
| 測試帳號 | 待補充 |
| API Key / Secret | 待補充 |
| 商戶代碼（Merchant ID） | 待補充 |

#### 對接狀態
| 階段 | 狀態 |
|------|------|
| 文件收集 | 待補充 |
| 測試環境 | 待補充 |
| 正式上線 | 待補充 |

---

## QT ｜ 日本站

#### 基本資訊
| 欄位 | 內容 |
|------|------|
| 對接類型 | API |
| 幣別支援 | 待補充 |
| 語言支援 | 待補充 |
| 測試環境網址 | 待補充 |
| 正式環境網址 | 待補充 |

#### API 對接資訊
| 欄位 | 內容 |
|------|------|
| 認證方式 | 待補充 |
| Base URL | 待補充 |
| 錢包模式 | 單一錢包 |
| Callback / Webhook URL | 待補充 |
| IP 白名單需求（測試站） | 3.1.243.244<br>202.175.253.62 |
| IP 白名單需求（正式站） | 52.77.32.26<br>34.241.71.150<br>18.162.217.103<br>18.184.243.189<br>34.243.156.16<br>52.79.203.127<br>52.76.231.168<br>202.175.253.62 |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 內容 |
|------|------|
| 測試帳號 | 待補充 |
| API Key / Secret | 待補充 |
| 商戶代碼（Merchant ID） | 待補充 |

#### 對接狀態
| 階段 | 狀態 |
|------|------|
| 文件收集 | 待補充 |
| 測試環境 | 待補充 |
| 正式上線 | 待補充 |

---

## RG ｜ 日本站

#### 基本資訊
| 欄位 | 內容 |
|------|------|
| 對接類型 | API |
| 幣別支援 | 待補充 |
| 語言支援 | 待補充 |
| 測試環境網址 | 待補充 |
| 正式環境網址 | 待補充 |

#### API 對接資訊
| 欄位 | 內容 |
|------|------|
| 認證方式 | 待補充 |
| Base URL | 待補充 |
| 錢包模式 | 單一錢包 |
| Callback / Webhook URL | 待補充 |
| IP 白名單需求 | 待補充 |

#### 帳號與憑證 ⚠️ 請妥善保存，勿公開
| 欄位 | 內容 |
|------|------|
| 測試帳號 | 待補充 |
| API Key / Secret | 待補充 |
| 商戶代碼（Merchant ID） | 待補充 |

#### 對接狀態
| 階段 | 狀態 |
|------|------|
| 文件收集 | 待補充 |
| 測試環境 | 待補充 |
| 正式上線 | 待補充 |

---

## 行為規範

- 不同平台的憑證**分開存放**，不混用。
- 金爸爸的爸幣模式與鑽石模式各自獨立，不互相覆蓋。
- 金發發的 3代理、6代理、10代理 各自獨立記錄。
- 保留原始資訊完整性，不臆測或捏造未提供的數值。
- 資訊有矛盾或不清楚時，標記 `❓ 待確認` 並說明疑問點。
- 若未指定平台或模式，主動詢問後再整理。
