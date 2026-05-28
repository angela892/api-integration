// ============================================================
//  個人資料（修改這裡）
// ============================================================
const MY_NAME  = "顏淑如";
const MY_PHONE = "0912287123";
const MY_EMAIL = "a0912287123@gmail.com";
const PEOPLE   = 2;

const CHECK_INTERVAL = 5000;
const TARGET_TIME    = null;   // null=任何時段，或填 "19:00"
// ============================================================

let booked   = false;
let checking = false;

function log(msg) {
  console.log(`[搶位v3 ${new Date().toLocaleTimeString()}] ${msg}`);
}

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
  const rgba = bg.match(/rgba\(\s*[\d.]+,\s*[\d.]+,\s*[\d.]+,\s*([\d.]+)\s*\)/);
  if (rgba) return parseFloat(rgba[1]) === 0;
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

function debugButtons() {
  const all = document.querySelectorAll("button:not([disabled])");
  const visible = [...all].filter(b => b.offsetParent !== null);
  log(`=== 按鈕掃描（共 ${visible.length} 個）===`);
  visible.forEach(b => {
    const t  = (b.innerText || "").trim().replace(/\n/g, "↵");
    const bg = window.getComputedStyle(b).backgroundColor;
    const m  = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    const ok = m ? (parseInt(m[1]) >= 250 && parseInt(m[2]) >= 250 && parseInt(m[3]) >= 250) : "?";
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

  const MY_LAST  = MY_NAME.slice(0, 1);
  const MY_FIRST = MY_NAME.slice(1);

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

  const phoneEl = document.querySelector(
    'input[type="tel"], input[name*="phone"], input[placeholder*="電話"], input[placeholder*="手機"]'
  );
  if (phoneEl) { fillInput(phoneEl, MY_PHONE); log("✓ 電話"); filled = true; }

  const emailEl = document.querySelector(
    'input[type="email"], input[name*="email"], input[placeholder*="mail"]'
  );
  if (emailEl) { fillInput(emailEl, MY_EMAIL); log("✓ 信箱"); filled = true; }

  return filled;
}

// 輪詢等待 modal 出現，最多等 maxMs
function waitForModal(maxMs, onFound, onTimeout) {
  const start = Date.now();
  (function poll() {
    const modal = document.querySelector(".ReactModal__Content");
    if (modal) { onFound(modal); return; }
    if (Date.now() - start > maxMs) { onTimeout(); return; }
    setTimeout(poll, 300);
  })();
}

function afterSlotClick() {
  log("時段已選，2 秒後點擊完成預訂…");
  setTimeout(() => {
    const clicked = clickButtonWithText(["完成預訂", "確認預訂", "下一步", "Next", "Confirm"]);
    if (!clicked) { log("⚠ 找不到完成預訂按鈕"); return; }

    log("等待規則視窗出現…");
    waitForModal(10000,
      (modal) => {
        log("規則視窗已出現，滾動 data-show-scrollbar 區域…");

        function doScroll() {
          const scrollEl = document.querySelector("[data-show-scrollbar]")
            || modal.querySelector("div + div")
            || modal;
          scrollEl.scrollTop = scrollEl.scrollHeight;
          scrollEl.dispatchEvent(new Event("scroll", { bubbles: true }));
          log(`滾動 scrollTop=${scrollEl.scrollHeight} on ${scrollEl.getAttribute("data-show-scrollbar") !== null ? "[data-show-scrollbar]" : scrollEl.className.split(" ")[0]}`);
        }

        doScroll();

        const agreeStart = Date.now();
        (function tryAgree() {
          const btn = document.querySelector('[data-cy="confirm-house-rule"]:not([disabled])')
            || [...document.querySelectorAll("button")]
              .find(b => (b.textContent.includes("我已閱讀並同意") || b.textContent.includes("同意規則"))
                      && b.offsetParent !== null && !b.disabled);
          if (btn) {
            realClick(btn);
            log(`✓ 點擊「${btn.textContent.trim().slice(0, 15)}」`);
            setTimeout(() => {
              tryFillForm();
              setTimeout(() => {
                const ok = clickButtonWithText(["確認預訂", "送出", "下一步", "Confirm", "Next", "確認"]);
                if (!ok) {
                  const s = document.querySelector('button[type="submit"]');
                  if (s) { s.click(); log("✓ 已送出"); }
                  else { log("⚠ 找不到送出按鈕，請手動點擊"); }
                } else {
                  log("✓ 已送出！請確認訂位結果。");
                }
              }, 1500);
            }, 3000);
          } else if (Date.now() - agreeStart < 8000) {
            doScroll();
            setTimeout(tryAgree, 400);
          } else {
            log("⚠ 同意按鈕仍未啟用，請手動點擊");
          }
        })();
      },
      () => log("⚠ 規則視窗等待超時，請手動操作")
    );
  }, 2000);
}

function check() {
  if (booked || checking) return;
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

log("搶位助手 v3 啟動！");
setTimeout(() => {
  debugButtons();
  const slot = findAvailableSlot();
  if (slot) {
    booked = true;
    log(`找到今日可用時段：${getSlotTime(slot)}，點擊中…`);
    realClick(slot);
    setTimeout(afterSlotClick, 1500);
  } else {
    log(`目前無今日可用時段，${CHECK_INTERVAL / 1000} 秒後重整…`);
    setTimeout(() => window.location.reload(), CHECK_INTERVAL);
  }
}, 2000);
