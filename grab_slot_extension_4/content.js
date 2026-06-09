// ============================================================
//  個人資料（修改這裡）
// ============================================================
const MY_NAME  = "周冠諭";
const MY_PHONE = "0920688970";
const MY_EMAIL = "service-dev@idollar.com.tw";
const PEOPLE   = 1;

const EXTENSION_NAME = "搶位助手4_監控日期";
const CHECK_INTERVAL = 6000;
const TARGET_TIME    = null;        // null=任何時段，或填 "19:00"
const TARGET_DATES   = ["6/5"];     // 指定要搶的日期，可多個，例如 ["6/7", "6/14"]
                                    // 空陣列 [] = 不限日期
// ============================================================

// 防止 SPA 路由切換時 content script 被重複注入
if (window._grabSlotStarted) { /* 已執行過，跳出 */ }
else {
window._grabSlotStarted = true;

let booked   = false;
let checking = false;
let paused   = false;
let _reloadTimer = null;

// ── 頁面狀態提示框 ──────────────────────────────────────────
let _statusBox = null;
function getStatusBox() {
  if (_statusBox) return _statusBox;
  _statusBox = document.createElement("div");
  Object.assign(_statusBox.style, {
    position: "fixed", bottom: "16px", right: "16px", zIndex: "999999",
    padding: "10px 16px", borderRadius: "8px", fontSize: "14px",
    fontWeight: "bold", color: "#fff", background: "#555",
    boxShadow: "0 2px 8px rgba(0,0,0,.4)", maxWidth: "320px",
    lineHeight: "1.5", transition: "background .3s",
  });
  document.body.appendChild(_statusBox);
  return _statusBox;
}
function setStatus(msg, type) {
  const box = getStatusBox();
  box.textContent = msg;
  box.style.background = type === "success" ? "#22a06b"
                       : type === "error"   ? "#e5484d"
                       : type === "warn"    ? "#f59f00"
                       : "#555";
}
// ────────────────────────────────────────────────────────────

// ── 持久化 log（存 localStorage，重整不消失）────────────────
const LOG_KEY = "grabSlotLog";
const MAX_LOGS = 50;

function saveLog(msg) {
  const t = new Date().toLocaleTimeString("zh-TW", { hour12: false });
  const entry = `${t}　${msg}`;
  try {
    const arr = JSON.parse(localStorage.getItem(LOG_KEY) || "[]");
    arr.push(entry);
    if (arr.length > MAX_LOGS) arr.splice(0, arr.length - MAX_LOGS);
    localStorage.setItem(LOG_KEY, JSON.stringify(arr));
  } catch(e) {}
  return entry;
}

let _logPanel = null;
let _logCollapsed = false;
function getLogPanel() {
  if (_logPanel) return _logPanel;

  // 收合切換按鈕（永遠可見）
  const toggle = document.createElement("button");
  toggle.textContent = "📋";
  Object.assign(toggle.style, {
    position: "fixed", bottom: "60px", right: "16px", zIndex: "999999",
    width: "32px", height: "32px", borderRadius: "50%",
    background: "rgba(0,0,0,.7)", color: "#fff", border: "none",
    cursor: "pointer", fontSize: "14px", lineHeight: "1",
  });

  _logPanel = document.createElement("div");
  Object.assign(_logPanel.style, {
    position: "fixed", bottom: "100px", right: "16px", zIndex: "999998",
    width: "340px", maxHeight: "220px", overflowY: "auto",
    background: "rgba(0,0,0,.82)", color: "#ccc", fontSize: "11px",
    borderRadius: "8px", padding: "8px 10px", fontFamily: "monospace",
    lineHeight: "1.6", boxShadow: "0 2px 8px rgba(0,0,0,.5)",
  });

  toggle.onclick = () => {
    _logCollapsed = !_logCollapsed;
    _logPanel.style.display = _logCollapsed ? "none" : "block";
    toggle.textContent = _logCollapsed ? "📋" : "✕";
  };

  // 暫停按鈕
  const stopBtn = document.createElement("button");
  stopBtn.textContent = "⏹";
  stopBtn.title = "暫停搶位助手";
  Object.assign(stopBtn.style, {
    position: "fixed", bottom: "100px", right: "16px", zIndex: "999999",
    width: "32px", height: "32px", borderRadius: "50%",
    background: "rgba(220,50,50,.85)", color: "#fff", border: "none",
    cursor: "pointer", fontSize: "14px", lineHeight: "1",
  });
  stopBtn.onclick = () => {
    paused = true;
    booked = true;
    if (_reloadTimer) { clearTimeout(_reloadTimer); _reloadTimer = null; }
    stopBtn.textContent = "✓";
    stopBtn.style.background = "rgba(80,80,80,.85)";
    stopBtn.title = "已暫停";
    setStatus("⏹ 搶位助手已暫停", "error");
    log("⏹ 使用者手動暫停，所有自動動作已停止");
  };

  document.body.appendChild(toggle);
  document.body.appendChild(stopBtn);
  document.body.appendChild(_logPanel);
  return _logPanel;
}

function renderLogs() {
  const panel = getLogPanel();
  try {
    const arr = JSON.parse(localStorage.getItem(LOG_KEY) || "[]");
    panel.innerHTML = "";
    // 重建清除按鈕
    const clr = document.createElement("button");
    clr.textContent = "清除";
    Object.assign(clr.style, {
      position: "sticky", top: "0", float: "right",
      fontSize: "10px", color: "#888", background: "none",
      border: "none", cursor: "pointer",
    });
    clr.onclick = () => { localStorage.removeItem(LOG_KEY); renderLogs(); };
    panel.appendChild(clr);
    arr.forEach(entry => {
      const line = document.createElement("div");
      line.textContent = entry;
      if (entry.includes("找到") || entry.includes("✓")) line.style.color = "#6ee7b7";
      if (entry.includes("⚠"))  line.style.color = "#fbbf24";
      if (entry.includes("🎉")) line.style.color = "#34d399";
      panel.appendChild(line);
    });
    panel.scrollTop = panel.scrollHeight;
  } catch(e) {}
}

function log(msg) {
  const entry = saveLog(msg);
  console.log(`[搶位v3] ${entry}`);
  renderLogs();
}
// ─────────────────────────────────────────────────────────────


function fillInput(el, value) {
  const setter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype, "value"
  ).set;
  setter.call(el, value);
  el.dispatchEvent(new Event("input",  { bubbles: true }));
  el.dispatchEvent(new Event("change", { bubbles: true }));
}

const TIME_PATTERN = /^\d{1,2}:\d{2}$/;

function getSlotTime(btn) {
  const lines = (btn.innerText || btn.textContent || "").split(/[\n\r]+/);
  for (const line of lines) {
    const t = line.trim();
    if (TIME_PATTERN.test(t)) return t;
  }
  return null;
}

// rgba(0,0,0,0) = 透明=白底=有位；rgba(0,0,0,0.04) = 灰底=沒位
function isAvailableToday(btn) {
  const bg = window.getComputedStyle(btn).backgroundColor;
  // rgba 格式：取第 4 個值（alpha）
  const rgba = bg.match(/rgba\(\s*[\d.]+,\s*[\d.]+,\s*[\d.]+,\s*([\d.]+)\s*\)/);
  if (rgba) return parseFloat(rgba[1]) === 0;
  // rgb 格式（沒有 alpha）：白色才算有位
  const rgb = bg.match(/rgb\(\s*(\d+),\s*(\d+),\s*(\d+)\s*\)/);
  if (rgb) return parseInt(rgb[1]) >= 250 && parseInt(rgb[2]) >= 250 && parseInt(rgb[3]) >= 250;
  return true;
}

function findAvailableSlot() {
  const buttons = document.querySelectorAll("button:not([disabled])");
  for (const btn of buttons) {
    if (btn.offsetParent === null) continue;
    const time = getSlotTime(btn);
    if (!time) continue;
    if (!isAvailableToday(btn)) continue;
    if (TARGET_TIME && !time.includes(TARGET_TIME)) continue;
    return btn;
  }
  return null;
}

function isOurUI(el) {
  return el.closest && (el.closest("#_grabLogPanel") !== null
    || el === _logPanel || (_logPanel && _logPanel.contains(el)));
}

function debugButtons() {
  const all = document.querySelectorAll("button:not([disabled])");
  const visible = [...all].filter(b => b.offsetParent !== null && !isOurUI(b));
  log(`=== 按鈕掃描（共 ${visible.length} 個）===`);
  visible.forEach(b => {
    const t  = (b.innerText || "").trim().replace(/\n/g, "↵");
    const bg = window.getComputedStyle(b).backgroundColor;
    const ok = isAvailableToday(b);
    log(`  "${t}" bg=${bg} 可用=${ok}`);
  });
}

function realClick(el) {
  el.scrollIntoView({ block: "center" });
  const rect = el.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const opts = { bubbles: true, cancelable: true, view: window, clientX: x, clientY: y };
  ["mouseover", "mouseenter", "mousemove", "mousedown", "mouseup", "click"].forEach(type => {
    el.dispatchEvent(new MouseEvent(type, opts));
  });
}

function clickButtonWithText(texts) {
  for (const text of texts) {
    const btn = [...document.querySelectorAll("button")]
      .find(b => b.textContent.includes(text) && b.offsetParent !== null && !b.disabled);
    if (btn) {
      realClick(btn);
      log(`✓ 點擊「${btn.textContent.trim().replace(/\n/g, " ")}」`);
      return true;
    }
  }
  return false;
}

function tryFillForm() {
  let filled = false;

  // 姓名：先判斷是否分開填
  const MY_LAST  = MY_NAME.slice(0, 1);      // 顏
  const MY_FIRST = MY_NAME.slice(1);         // 淑如

  const lastEl = document.querySelector(
    'input[name*="last"], input[name*="family"], input[name*="surname"], ' +
    'input[placeholder*="姓"], input[id*="last"], input[id*="surname"]'
  );
  const firstEl = document.querySelector(
    'input[name*="first"], input[name*="given"], ' +
    'input[placeholder*="名"], input[id*="first"], input[id*="given"]'
  );

  if (lastEl && firstEl) {
    fillInput(lastEl, MY_LAST);
    fillInput(firstEl, MY_FIRST);
    log("✓ 姓＋名（分開）");
    filled = true;
  } else {
    // 合併填
    const nameEl = (
      document.querySelector('input[name*="name"]') ||
      document.querySelector('input[placeholder*="姓名"]') ||
      document.querySelector('input[placeholder*="Name"]') ||
      document.querySelector('input[id*="name"], input[id*="Name"]') ||
      [...document.querySelectorAll('input[type="text"], input:not([type])')].find(
        el => el.offsetParent !== null && el.type !== "tel" && el.type !== "email"
      )
    );
    if (nameEl) { fillInput(nameEl, MY_NAME); log("✓ 姓名（合併）"); filled = true; }
    else { log("⚠ 找不到姓名欄位"); }
  }

  // 電話
  const phoneEl = document.querySelector(
    'input[type="tel"], input[name*="phone"], input[placeholder*="電話"], input[placeholder*="手機"]'
  );
  if (phoneEl) { fillInput(phoneEl, MY_PHONE); log("✓ 電話"); filled = true; }

  // 信箱
  const emailEl = document.querySelector(
    'input[type="email"], input[name*="email"], input[placeholder*="mail"]'
  );
  if (emailEl) { fillInput(emailEl, MY_EMAIL); log("✓ 信箱"); filled = true; }

  return filled;
}

function scrollModalToBottom() {
  // 1. ReactModal 直接用 class 鎖定（portal 掛在 body，不受 aria-hidden 影響）
  const modal = document.querySelector(".ReactModal__Content");
  if (modal) {
    modal.scrollTop = modal.scrollHeight;
    log("已滾動 ReactModal__Content");
    return;
  }

  // 2. 找 role=dialog 裡可滾的子元素
  const dialog = document.querySelector('[role="dialog"]');
  if (dialog) {
    const target = [dialog, ...dialog.querySelectorAll("div")]
      .find(el => el.scrollHeight > el.clientHeight + 10);
    if (target) {
      target.scrollTop = target.scrollHeight;
      log(`已滾動 dialog 子元素（${target.className.split(" ")[0]}）`);
      return;
    }
  }

  // 3. 完全不 fallback 到頁面，改記錄警告
  log("⚠ 找不到 modal 可滾動元素，同意按鈕可能仍是灰色");
}

// 輪詢等待 modal 出現，最多等 maxMs
function waitForModal(maxMs, onFound, onTimeout) {
  const start = Date.now();
  (function poll() {
    if (paused) return;
    const modal = document.querySelector(".ReactModal__Content");
    if (modal) { onFound(modal); return; }
    if (Date.now() - start > maxMs) { onTimeout(); return; }
    setTimeout(poll, 300);
  })();
}

function afterSlotClick() {
  if (paused) return;
  log("時段已選，等待完成預訂按鈕…");

  // 輪詢等「完成預訂」出現，最多 8 秒
  const t0 = Date.now();
  (function waitConfirmBtn() {
    if (paused) return;
    const confirmBtn = [...document.querySelectorAll("button")]
      .find(b => ["完成預訂", "確認預訂", "下一步", "Next", "Confirm"]
        .some(k => b.textContent.includes(k)) && b.offsetParent !== null && !b.disabled);
    if (confirmBtn) {
      realClick(confirmBtn);
      log(`✓ 點擊「${confirmBtn.textContent.trim().replace(/\n/g, " ")}」`);

      log("等待規則視窗出現…");
      waitForModal(10000,
        (modal) => {
          if (paused) return;
          log("規則視窗已出現，滾動 data-show-scrollbar 區域…");

          function doScroll() {
            const scrollEl = document.querySelector("[data-show-scrollbar]")
              || modal.querySelector("div + div")
              || modal;
            scrollEl.scrollTop = scrollEl.scrollHeight;
            scrollEl.dispatchEvent(new Event("scroll", { bubbles: true }));
            log(`滾動 on ${scrollEl.getAttribute("data-show-scrollbar") !== null ? "[data-show-scrollbar]" : scrollEl.className.split(" ")[0]}`);
          }

          doScroll();

          function agreeAndContinue(afterAllModals) {
            if (paused) return;
            const scrollEl = document.querySelector("[data-show-scrollbar]")
              || document.querySelector(".ReactModal__Content")
              || modal;
            function doScrollHere() {
              scrollEl.scrollTop = scrollEl.scrollHeight;
              scrollEl.dispatchEvent(new Event("scroll", { bubbles: true }));
            }
            doScrollHere();
            const start = Date.now();
            (function tryBtn() {
              if (paused) return;
              const btn = document.querySelector('[data-cy="confirm-house-rule"]:not([disabled])')
                || [...document.querySelectorAll("button")]
                  .find(b => (b.textContent.includes("我已閱讀並同意") || b.textContent.includes("同意規則"))
                          && b.offsetParent !== null && !b.disabled);
              if (btn) {
                realClick(btn);
                log(`✓ 點擊「${btn.textContent.trim().slice(0, 20)}」`);
                setTimeout(() => {
                  if (paused) return;
                  const closeStart = Date.now();
                  (function waitModalClose() {
                    if (paused) return;
                    const nextModal = document.querySelector(".ReactModal__Content");
                    if (!nextModal) { afterAllModals(); return; }
                    if (nextModal !== btn.closest(".ReactModal__Content")) {
                      log("偵測到另一個規則視窗，繼續處理…");
                      agreeAndContinue(afterAllModals); return;
                    }
                    if (Date.now() - closeStart > 3000) { afterAllModals(); return; }
                    setTimeout(waitModalClose, 150);
                  })();
                }, 0);
              } else if (Date.now() - start < 8000) {
                doScrollHere();
                setTimeout(tryBtn, 400);
              } else {
                log("⚠ 同意按鈕仍未啟用，請手動點擊");
              }
            })();
          }

          agreeAndContinue(() => {
            if (paused) return;
            const formStart = Date.now();
            (function waitForm() {
              if (paused) return;
              const hasField = document.querySelector(
                'input[type="tel"], input[type="email"], input[name*="name"], input[name*="phone"], ' +
                'input[placeholder*="姓名"], input[placeholder*="電話"], input[placeholder*="手機"]'
              );
              if (hasField || Date.now() - formStart > 5000) {
                tryFillForm();
                setTimeout(() => {
                  if (paused) return;
                  const ok = clickButtonWithText(["確認訂位", "確認預訂", "送出", "下一步", "Confirm", "Next", "確認"]);
                  if (!ok) {
                    const s = document.querySelector('button[type="submit"]');
                    if (s) { realClick(s); log("✓ 已點送出"); }
                    else { log("⚠ 找不到送出按鈕，請手動點擊"); setStatus("⚠ 找不到送出按鈕，請手動點擊", "error"); return; }
                  }
                  log("已點確認，等待後續視窗…");
                  setTimeout(() => {
                    if (paused) return;
                    agreeAndContinue(() => {
                      log("✓ 所有步驟完成！請確認訂位結果。");
                      setStatus("🎉 訂位送出成功！請確認結果", "success");
                    });
                  }, 800);
                }, 500);
              } else {
                setTimeout(waitForm, 200);
              }
            })();
          });
        },
        () => log("⚠ 規則視窗等待超時，請手動操作")
      );
    } else if (Date.now() - t0 < 8000) {
      setTimeout(waitConfirmBtn, 200);
    } else {
      log("⚠ 找不到完成預訂按鈕，請手動點擊");
    }
  })();
}

function check() {
  if (paused || booked || checking) return;
  checking = true;
  const slot = findAvailableSlot();
  if (slot) {
    booked = true;
    log(`找到今日可用時段：${getSlotTime(slot)}，點擊中…`);
    realClick(slot);
    setTimeout(afterSlotClick, 1500);
  } else {
    log("目前無今日可用時段，繼續等待…");
  }
  checking = false;
}

function isBotChallenge() {
  return !![...document.querySelectorAll("button")]
    .find(b => b.textContent.includes("按住不放"))
    || document.body.innerText.includes("確認您是人類");
}

// 從 data-cy="date-picker" 讀取目前選擇的日期
function getPageDate() {
  // 直接讀 date-picker 元素
  const picker = document.querySelector('[data-cy="date-picker"]') || document.querySelector('#date-picker');
  if (picker) {
    const text = picker.textContent.trim();
    const m = text.match(/(\d{1,2})月(\d{1,2})日/);
    if (m) return `${parseInt(m[1])}/${parseInt(m[2])}`;
  }
  return null;
}

// 等待 date-picker 出現並回傳日期（最多等 3 秒）
function waitForPageDate(onFound, onTimeout) {
  const start = Date.now();
  (function poll() {
    if (paused) return;
    const date = getPageDate();
    if (date) { onFound(date); return; }
    if (Date.now() - start > 3000) { onTimeout(); return; }
    setTimeout(poll, 150);
  })();
}

log(`【${EXTENSION_NAME}】啟動！`);
setStatus(`【${EXTENSION_NAME}】偵測中…`, "info");
setTimeout(() => {
  if (isBotChallenge()) {
    log("⚠ 偵測到人類驗證畫面，自動重整已暫停，請手動通過後重新整理頁面");
    setStatus("🤖 需要人類驗證！請按住按鈕通過，再手動重整頁面", "error");
    return;
  }

  waitForPageDate(
    (current) => {
      if (paused) return;
      debugButtons();
      if (TARGET_DATES && TARGET_DATES.length > 0) {
        const match = TARGET_DATES.some(d => {
          const [m, day] = d.split("/").map(Number);
          const [cm, cday] = current.split("/").map(Number);
          return m === cm && day === cday;
        });
        if (!match) {
          log(`目前日期 ${current} 不在目標清單（${TARGET_DATES.join("、")}），跳過`);
          setStatus(`😴 非目標日期(${current})，等待重整…`, "info");
          _reloadTimer = setTimeout(() => { if (!paused) window.location.reload(); }, CHECK_INTERVAL);
          return;
        }
      }
      const slot = findAvailableSlot();
      if (slot) {
        booked = true;
        const t = getSlotTime(slot);
        log(`找到可用時段：${t}，點擊中…`);
        setStatus(`⚡ 找到 ${t}，搶位中…`, "warn");
        realClick(slot);
        setTimeout(afterSlotClick, 1500);
      } else {
        log(`目標日期(${current}) 無可用時段，${CHECK_INTERVAL / 1000} 秒後重整…`);
        setStatus(`😴 ${current} 無空位，等待重整…`, "info");
        _reloadTimer = setTimeout(() => { if (!paused) window.location.reload(); }, CHECK_INTERVAL);
      }
    },
    () => {
      // 3秒內找不到 date-picker，直接重整
      log("⚠ date-picker 未出現，重整重試…");
      _reloadTimer = setTimeout(() => { if (!paused) window.location.reload(); }, 1000);
    }
  );
}, 300);

} // end window._grabSlotStarted guard
