"""
inline.app 自動搶位腳本（Playwright + 系統 Chrome 版）
目標: https://inline.app/booking/-NxWP2_vJt5UGbg1i5DW:inline-live-3/-NxWP2mC40FysUUZT7O4
"""

import os
import shutil
import sys
import time
import winsound
from datetime import datetime

import browser_cookie3
from playwright.sync_api import sync_playwright, TimeoutError as PWTimeout

# ============================================================
#  個人資料
# ============================================================
MY_NAME  = "顏淑如"
MY_PHONE = "0912287123"
MY_EMAIL = "a0912287123@gmail.com"

TARGET_URL = (
    "https://inline.app/booking/"
    "-NxWP2_vJt5UGbg1i5DW:inline-live-3/-NxWP2mC40FysUUZT7O4"
)

CHECK_INTERVAL = 5
REAL_PROFILE   = r"C:\Users\QA000\AppData\Local\Google\Chrome\User Data\Default"
TEMP_PROFILE   = r"C:\temp\chrome-pw-profile"
# ============================================================


def ts():
    return datetime.now().strftime("%H:%M:%S")

def log(msg):
    print(f"[{ts()}] {msg}")

def beep(n=3):
    for _ in range(n):
        winsound.Beep(1000, 400)
        time.sleep(0.1)


def ask_config():
    print("\n" + "=" * 40)
    print("  inline.app 自動搶位腳本")
    print("=" * 40)

    raw = input("\n人數（直接按 Enter 預設 2）：").strip()
    people = int(raw) if raw.isdigit() else 2

    print("\n搶位模式：")
    print("  1. 最早有空的任何時段")
    print("  2. 指定日期 ＋ 指定時間")
    print("  3. 指定日期，任何時間")
    raw = input("選擇 1 / 2 / 3（預設 1）：").strip()
    mode = {"1": "earliest", "2": "specific", "3": "date_any"}.get(raw, "earliest")

    target_date = target_time = None
    if mode in ("specific", "date_any"):
        target_date = input("目標日期（YYYY-MM-DD）：").strip()
    if mode == "specific":
        target_time = input("目標時間（HH:MM）：").strip()

    print(f"\n  姓名：{MY_NAME}  電話：{MY_PHONE}  信箱：{MY_EMAIL}")
    print(f"  人數：{people}  模式：{mode}", end="")
    if target_date: print(f"  日期：{target_date}", end="")
    if target_time: print(f"  時間：{target_time}", end="")
    print()
    input("\n按 Enter 開始，Ctrl+C 中止…")

    return {"people": people, "mode": mode,
            "target_date": target_date, "target_time": target_time}


def copy_real_profile():
    dst = os.path.join(TEMP_PROFILE, "Default")
    os.makedirs(dst, exist_ok=True)
    copied = 0
    for item in ["History", "Preferences", "Visited Links", "Web Data", "Cookies"]:
        src = os.path.join(REAL_PROFILE, item)
        d   = os.path.join(dst, item)
        if not os.path.exists(src):
            continue
        try:
            if os.path.isdir(src):
                if os.path.exists(d): shutil.rmtree(d)
                shutil.copytree(src, d)
            else:
                shutil.copy2(src, d)
            copied += 1
        except Exception:
            pass
    log(f"Profile 複製完成（{copied} 個檔案）")


def inject_cookies(page):
    """從真實 Chrome 讀取 inline.app Cookie 並注入"""
    try:
        cj = browser_cookie3.chrome(domain_name="inline.app")
        cookies = []
        for c in cj:
            cookies.append({
                "name":     c.name,
                "value":    c.value,
                "domain":   c.domain,
                "path":     c.path,
                "secure":   bool(c.secure),
                "httpOnly": False,
            })
        if cookies:
            page.context.add_cookies(cookies)
            log(f"已注入 {len(cookies)} 個 inline.app Cookie")
        else:
            log("未找到 inline.app Cookie（可能需要先用真實 Chrome 訪問過）")
    except Exception as e:
        log(f"Cookie 注入失敗：{e}")


def find_human_check(page):
    """找「按住不放」元素"""
    for text in ["按住不放", "按壓不放"]:
        try:
            el = page.locator(f"text={text}").first
            if el.count() > 0 and el.is_visible(timeout=500):
                return el
        except Exception:
            pass
    return None


def handle_human_check(page):
    """偵測到驗證時，自動按住直到元素消失"""
    el = find_human_check(page)
    if not el:
        return False

    log("偵測到人類驗證，開始按住…")
    try:
        box = el.bounding_box()
        if not box:
            return False
        x = box["x"] + box["width"]  / 2
        y = box["y"] + box["height"] / 2

        page.mouse.move(x, y)
        time.sleep(0.3)
        page.mouse.down()
        log("按住中，等待驗證通過…")

        for _ in range(120):      # 最多等 60 秒
            time.sleep(0.5)
            if not find_human_check(page):
                break

        page.mouse.up()
        time.sleep(1)

        if not find_human_check(page):
            log("驗證通過！")
            return True

    except Exception as e:
        log(f"長按失敗：{e}")
        try: page.mouse.up()
        except Exception: pass

    beep(5)
    log("⚠ 自動驗證失敗，請手動在瀏覽器按住後按 Enter…")
    input()
    return True


def find_slot(page, mode, target_time=None):
    """偵測可用時段並點擊"""
    time.sleep(1.5)
    buttons = page.locator("button:not([disabled])").all()
    candidates = []
    for btn in buttons:
        try:
            text = btn.inner_text().strip()
            if len(text) <= 5 and ":" in text and btn.is_visible():
                candidates.append((text, btn))
        except Exception:
            continue

    if not candidates:
        return False

    if mode == "specific" and target_time:
        for text, btn in candidates:
            if target_time in text:
                btn.click()
                log(f"已點擊時段：{text}")
                return True
        return False

    text, btn = candidates[0]
    btn.click()
    log(f"已點擊時段：{text}")
    return True


def try_fill(page, selectors, value, label):
    for sel in selectors:
        try:
            el = page.locator(sel).first
            if el.count() > 0 and el.is_visible(timeout=500):
                el.click()
                el.fill(value)
                log(f"  ✓ {label} 已填入")
                return True
        except Exception:
            continue
    log(f"  ⚠ 找不到 {label} 欄位")
    return False


def fill_and_submit(page, config):
    log("開始填寫表單…")
    time.sleep(1.5)

    try_fill(page,
        ["input[name*='name']", "input[placeholder*='姓名']", "input[placeholder*='Name']"],
        MY_NAME, "姓名")
    try_fill(page,
        ["input[type='tel']", "input[name*='phone']", "input[placeholder*='電話']"],
        MY_PHONE, "電話")
    try_fill(page,
        ["input[type='email']", "input[name*='email']", "input[placeholder*='mail']"],
        MY_EMAIL, "信箱")

    page.screenshot(path="before_submit.png")
    log("截圖存至 before_submit.png，3 秒後自動送出…")
    time.sleep(3)

    for sel in ["button[type='submit']", "button:has-text('確認')",
                "button:has-text('送出')", "button:has-text('下一步')"]:
        try:
            btn = page.locator(sel).first
            if btn.count() > 0 and btn.is_visible(timeout=500):
                btn.click()
                log("已點擊送出按鈕")
                return
        except Exception:
            continue
    log("⚠ 找不到送出按鈕，請手動點擊")


def handle_policy(page):
    time.sleep(1.5)
    for text in ["同意", "我同意", "確認", "Agree"]:
        try:
            btn = page.locator(f"button:has-text('{text}')").first
            if btn.count() > 0 and btn.is_visible(timeout=500):
                btn.click()
                log(f"已點擊「{text}」")
                return
        except Exception:
            continue


def main():
    config = ask_config()
    copy_real_profile()

    with sync_playwright() as p:
        log("啟動 Chrome…")
        ctx = p.chromium.launch_persistent_context(
            user_data_dir=TEMP_PROFILE,
            channel="chrome",          # 使用系統安裝的 Chrome
            headless=False,
            args=["--start-maximized"],
            locale="zh-TW",
            no_viewport=True,
        )
        page = ctx.new_page()

        log("注入 Cookie…")
        page.goto("https://inline.app", wait_until="domcontentloaded", timeout=15000)
        inject_cookies(page)

        log("開啟頁面…")
        page.goto(TARGET_URL, wait_until="domcontentloaded", timeout=30000)

        # 等待驗證或頁面內容出現（最多 10 秒）
        for _ in range(10):
            time.sleep(1)
            if find_human_check(page):
                break
        handle_human_check(page)

        attempt = 0
        while True:
            attempt += 1
            log(f"第 {attempt} 次偵測…")
            handle_human_check(page)
            page.screenshot(path="current_state.png")

            found = find_slot(page, config["mode"], config.get("target_time"))

            if found:
                beep(5)
                log("找到空位！開始填表…")
                handle_human_check(page)
                fill_and_submit(page, config)
                handle_human_check(page)
                handle_policy(page)
                page.screenshot(path="after_submit.png")
                log("流程完成！截圖存至 after_submit.png")
                input("瀏覽器保持開啟—請確認訂位結果。按 Enter 關閉…")
                break

            log(f"目前無可搶時段，{CHECK_INTERVAL} 秒後重試…")
            time.sleep(CHECK_INTERVAL)

        ctx.close()


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n使用者中止。")
        sys.exit(0)
