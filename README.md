# Glassdoor Dark Mode

![CI](https://github.com/YOUR-USERNAME/glassdoor-dark-mode/actions/workflows/ci.yml/badge.svg)

A Chrome extension that adds dark mode to Glassdoor, with a floating toggle, a popup menu,
a keyboard shortcut, and an optional schedule.

> Unofficial personal project. Not affiliated with Glassdoor.

![Demo](docs/screenshots/demo.gif)

## Features
- 🌙/☀️ toggle button on Glassdoor pages
- Popup with Auto / Light / Dark and brightness and contrast sliders
- Follows your system theme, or a custom schedule (e.g. 19:00 to 07:00)
- Shortcut: Option+Shift+D (Mac) or Alt+Shift+D
- Settings sync across devices

## Install
1. Download the zip from [Releases](../../releases) and unzip it.
2. Open `chrome://extensions` and turn on **Developer mode**.
3. Click **Load unpacked** and select the folder containing `manifest.json`.

## How it works
A content script adds a `gd-dark` class to the page, and CSS inverts the colors with
`filter: invert(1) hue-rotate(180deg)`. Images are inverted again so they look normal.
Settings are stored in `chrome.storage.sync`.

## Limitations
The invert filter is a shortcut, not a hand-tuned theme, so some elements may look off.

## Privacy
No data is collected and no network requests are made. Only your theme settings are stored.

## About
Built with AI assistance (Claude), then reviewed and modified by me.
(Add 2-3 sentences in your own words: why you built it and what you learned.)

## License
MIT
