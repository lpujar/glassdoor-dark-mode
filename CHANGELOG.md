# Changelog

## 1.1.0
### Added
- Popup menu: Auto / Light / Dark, schedule, brightness and contrast sliders, button visibility.
- Keyboard shortcut (Option+Shift+D on Mac, Alt+Shift+D elsewhere).
- Auto mode follows the system theme live.
- Optional schedule (supports overnight ranges like 19:00 to 07:00).
- Settings sync across devices via `chrome.storage.sync`.
- MutationObserver keeps the button and theme alive on Glassdoor's single-page navigation.
- Extension icons, unit tests, ESLint, CI and release workflows.

### Fixed
- Images inside `<picture>` were inverted twice. The `picture` selector was removed.

## 1.0.0
- Floating toggle button, invert-filter dark mode, saved preference.
