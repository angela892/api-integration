# 遊戲商 API 對接資料專案

## 檔案結構

| 檔案 | 用途 | 何時讀取 |
|------|------|---------|
| `docs/vendors/vendor-kff.md` | 金發發（KFF）供應商資料 | 查詢或修改 KFF 資料時 |
| `docs/vendors/vendor-kbb.md` | 金爸爸（KBB）供應商資料 | 查詢或修改 KBB 資料時 |
| `docs/vendors/vendor-jp.md` | 日本站（JP）供應商資料 | 查詢或修改 JP 資料時 |
| `api_integration.html` | 主網頁（Tailwind + 純 JS） | 修改網頁功能或樣式時才讀 |
| `skill.md` | 不相關，勿讀取 | — |

## HTML 結構重點（修改網頁時參考）

- 資料層：`kbbProviders` / `kffProviders` / `jpProviders` 陣列（在 `<script>` 區）
- 渲染：`buildKBBSection()` / `buildKFFSection()` / `buildJPSection()` 自動產生卡片
- 新增供應商：只需在對應 providers 陣列新增物件，渲染函式自動處理
- 複製功能：`copyToClipboard(text, btn)`
- OpenAPI 按鈕：`buildProviderCard()` 底部已預留，路徑格式 `docs/openapi/{slug}.yaml`

## 資料同步原則

MD 檔是人類可讀的參考文件，HTML 內的 JS 陣列是實際渲染資料來源。  
兩者若有異動，需同步更新。
