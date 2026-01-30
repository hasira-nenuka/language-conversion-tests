# 🚀 QUICK REFERENCE CARD

## Essential Commands

```bash
# Install dependencies (first time only)
npm install

# Install Playwright browsers (first time only)
npm run install:browsers

# Generate Excel template
npm run generate:excel

# Run all tests
npm test

# Run tests in headed mode (see browser)
npm run test:headed

# Run tests in UI mode (interactive)
npm run test:ui

# Run only positive tests
npm run test:positive

# Run only negative tests
npm run test:negative

# View HTML report
npm run report

# Update Excel with results
npm run update:results
```

---

## 📁 Important Files

| File                              | Purpose                                |
| --------------------------------- | -------------------------------------- |
| `playwright.config.ts`            | Configure application URL (line 29)    |
| `pages/LanguageConversionPage.ts` | Update element selectors (lines 15-18) |
| `test-cases.xlsx`                 | Excel template with all test cases     |
| `README.md`                       | Complete documentation                 |
| `SETUP_GUIDE.md`                  | Step-by-step execution guide           |

---

## ⚙️ Configuration Checklist

Before running tests:

- [ ] Update `baseURL` in `playwright.config.ts`
- [ ] Verify element selectors in `LanguageConversionPage.ts`
- [ ] Install Playwright browsers (`npm run install:browsers`)
- [ ] Ensure application is running

---

## 📊 Expected Results

```
✅ Passed: 24 (Positive tests)
❌ Failed: 10 (Negative tests)
Total: 34 test cases
```

---

## 🔧 Troubleshooting

**Tests timing out?**
→ Increase timeout in `playwright.config.ts` (line 54)

**Can't find elements?**
→ Use: `npx playwright codegen http://your-app-url.com`

**All tests failing?**
→ Check application URL and ensure app is running

---

## 📤 GitHub Push

```bash
# Create repo on GitHub first, then:
git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main
```

---

## 📝 Assignment Submission

Required files:

1. GitHub repository URL (text file)
2. Completed `test-cases.xlsx`
3. Optional: Playwright HTML report screenshots

---

**Project Location:**
`/Users/dulinanadith/Desktop/IT23343184/language-conversion-tests`

**Documentation:**

- README.md - Full documentation
- SETUP_GUIDE.md - Detailed setup steps
- walkthrough.md - Project overview
