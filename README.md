# Glassdoor Dark Mode

![CI](https://github.com/YOUR-USERNAME/glassdoor-dark-mode/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)

A Chrome extension that adds a dark mode to Glassdoor, with a floating toggle, a popup menu,
a keyboard shortcut, system-theme detection and an optional schedule.

> Unofficial personal project. Not affiliated with or endorsed by Glassdoor.

![Demo](docs/screenshots/demo.gif)
<!-- Record a short clip with Cmd+Shift+5, save it as docs/screenshots/demo.gif -->

## Features

- Floating 🌙/☀️ button on Glassdoor pages
- Popup with **Auto / Light / Dark**, brightness and contrast sliders
- **Auto** follows your system theme live, or a time **schedule** (for example 19:00 to 07:00)
- Keyboard shortcut: **Option+Shift+D** (Mac) or **Alt+Shift+D** (change it at `chrome://extensions/shortcuts`)
- Settings sync across your devices through your Chrome profile
- Survives Glassdoor's single-page navigation (the button comes back if the page removes it)
- Keyboard accessible, with ARIA labels and reduced-motion support

## Install

1. Download the latest zip from [Releases](../../releases), or clone this repo.
2. Unzip it, then open `chrome://extensions` and turn on **Developer mode**.
3. Click **Load unpacked** and select the folder that contains `manifest.json`.
4. Open glassdoor.com.

## How it works

- **Content script** (`src/content.js`) runs inside Glassdoor pages, adds the button, and toggles
  a `gd-dark` class on `<html>`.
- **CSS** (`src/content.css`) inverts the page with `filter: invert(1) hue-rotate(180deg)`, then
  inverts images and video again so they look normal.
- **Settings** live in `chrome.storage.sync`. The button, popup and shortcut all just write
  settings, and every tab re-renders when they change.
- **Logic** (`src/logic.js`) holds the pure decision code (schedule, auto mode) so it can be unit tested.
- **Background worker** (`src/background.js`) forwards the keyboard shortcut to the active tab.
- **MutationObserver** re-adds the button and theme class if Glassdoor's JavaScript removes them.

## Project structure

```
manifest.json      extension config
src/               content script, styles, logic, background worker
popup/             toolbar popup UI
icons/             extension icons
test/              unit tests (node:test)
docs/              landing page and screenshots
.github/           CI, release workflow, issue templates
```

## Development

```bash
npm install
npm test        # unit tests
npm run lint    # ESLint
npm run package # builds dist/glassdoor-dark-mode.zip
```

To publish a release: `git tag v1.1.0 && git push --tags`. The release workflow attaches the zip.

## Known limitations

- The invert filter is a shortcut, not a hand-designed theme. Some elements, such as gradients or
  text over images, may look off.
- Only works on the Glassdoor domains listed in `manifest.json` (.com, .co.in, .co.uk). Add more
  in `matches` if you need them.
- There may be a brief flash of the light theme on page load, because settings load asynchronously.

## Privacy

This extension collects no data and makes no network requests. It stores only your theme settings
in your browser's synced storage.

## Roadmap

- Hand-tuned theme with CSS variables (needs careful inspection of Glassdoor's markup)
- Firefox port
- Chrome Web Store listing

## About

Initial versions were generated with AI assistance (Claude), then reviewed, tested and modified by me.

## License

MIT. See [LICENSE](LICENSE).
