const DARK_CLASS = "gd-dark";
const root = document.documentElement;

function applyDark(isDark) {
  root.classList.toggle(DARK_CLASS, isDark);
  const btn = document.getElementById("gd-dark-toggle");
  if (btn) {
    btn.textContent = isDark ? "☀️" : "🌙";
    btn.setAttribute("aria-pressed", String(isDark));
    btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  }
}

function createButton(isDark) {
  const btn = document.createElement("button");
  btn.id = "gd-dark-toggle";
  btn.type = "button";
  document.body.appendChild(btn);
  applyDark(isDark);

  btn.addEventListener("click", () => {
    const next = !root.classList.contains(DARK_CLASS);
    applyDark(next);
    chrome.storage.local.set({ darkMode: next });
  });
}

// Load the saved preference, apply it right away, then add the button once the page body exists
chrome.storage.local.get("darkMode", (result) => {
  const isDark = Boolean(result.darkMode);
  root.classList.toggle(DARK_CLASS, isDark);

  if (document.body) {
    createButton(isDark);
  } else {
    document.addEventListener("DOMContentLoaded", () => createButton(isDark));
  }
});