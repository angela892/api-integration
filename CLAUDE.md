# 遊戲商 API 對接資料專案

## 資料夾結構

```
claude/
  ├── api-integration/       ← 遊戲商 API 對接
  │   ├── api_integration.html
  │   ├── index.html
  │   └── docs/vendors/
  └── limited-offer/         ← 限量商品訂閱通知系統
      └── limited_offer_srs.md
```

## 檔案索引

| 檔案 | 用途 | 何時讀取 |
|------|------|---------|
| `api-integration/docs/vendors/vendor-kff.md` | 金發發（KFF）供應商資料 | 查詢或修改 KFF 資料時 |
| `api-integration/docs/vendors/vendor-kbb.md` | 金爸爸（KBB）供應商資料 | 查詢或修改 KBB 資料時 |
| `api-integration/docs/vendors/vendor-jp.md` | 日本站（JP）供應商資料 | 查詢或修改 JP 資料時 |
| `api-integration/api_integration.html` | 主網頁（Tailwind + 純 JS） | 修改網頁功能或樣式時才讀 |
| `limited-offer/limited_offer_srs.md` | 限量商品訂閱通知系統 SRS | 查詢或修改限時優惠需求時 |
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
