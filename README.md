# Language Conversion Tests ✅

Playwright UI automation tests for Singlish/Thanglish to Sinhala/Tamil language conversion system.

---

## 🚀 Quick Start

Prerequisites:
- Node.js (recommended 16+)
- npm (or yarn)

Install dependencies and browsers:

```bash
npm install
npm run install:browsers
```

Run tests:

```bash
npm test                # run all tests (headless)
npm run test:headed     # run tests with headed browsers
npm run test:ui         # open Playwright Test UI
npm run test:positive   # run positive tests only
npm run test:negative   # run negative tests only
```

View HTML report:

```bash
npm run report
```

Other helpers:

```bash
npm run generate:excel   # generate Excel template for test cases
npm run update:results   # update Excel with latest results
npm run start:mock       # start local mock server
```

---

## 📁 Project Structure

- `tests/` — test suites (positive, negative, ui)
- `pages/` — Page Object files (ex: `LanguageConversionPage.ts`)
- `scripts/` — helper scripts (`generateExcel.ts`, `mock-server.ts`, `updateExcelResults.ts`)
- `utils/` — helpers used by tests (ex: `excelHelper.ts`, `testData.ts`)
- `playwright.config.ts` — Playwright configuration
- `playwright-report/` — generated test reports
- `test-results/` — json results

---

## ✍️ Contributing

- Add tests under `tests/` following existing naming conventions.
- Update `test_cases.json` if you add new test cases referenced by scripts.
- Run tests locally with `npm test` and attach the report if opening a PR.

---

## ℹ️ Notes

- Tests are written in TypeScript using `@playwright/test`.
- If you need to run TypeScript scripts directly, `ts-node` is used in `scripts/`.

---

## 📜 License

This project is licensed under **ISC**.

---

If you'd like, I can add a short CONTRIBUTING.md or improve this README with badges and example test outputs. 🔧