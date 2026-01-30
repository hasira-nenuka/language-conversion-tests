# 🎯 SETUP AND EXECUTION GUIDE

## Complete Guide for Language Conversion UI Automation Tests

This guide will walk you through setting up, configuring, running, and analyzing the Playwright UI automation tests.

---

## 📋 STEP 1: Prerequisites Check

Before starting, ensure you have:

```bash
# Check Node.js version (should be v18+)
node --version

# Check npm version (should be v9+)
npm --version

# Check Git
git --version
```

If any are missing, install them first.

---

## 📦 STEP 2: Project Setup

### Option A: Clone from GitHub (Recommended)

```bash
# Clone the repository
git clone <YOUR_GITHUB_REPO_URL>
cd language-conversion-tests

# Install dependencies
npm install

# Install Playwright browsers
npm run install:browsers
```

### Option B: Use Existing Local Copy

```bash
# Navigate to project directory
cd /Users/dulinanadith/Desktop/IT23343184/language-conversion-tests

# Dependencies are already installed
# Just install Playwright browsers
npm run install:browsers
```

---

## ⚙️ STEP 3: Configure Application URL

**IMPORTANT**: You must configure the URL of the language conversion application.

### Method 1: Edit playwright.config.ts

Open `playwright.config.ts` and update line 29:

```typescript
use: {
  baseURL: 'http://localhost:3000', // ← Change this to your app URL
}
```

### Method 2: Use Environment Variable

```bash
export BASE_URL=http://your-app-url.com
npm test
```

---

## 🎨 STEP 4: Update Element Selectors (If Needed)

If your application uses different element IDs/classes, update `pages/LanguageConversionPage.ts`:

```typescript
// Line 15-18: Update these locators
this.inputField = page.locator("YOUR_INPUT_SELECTOR");
this.outputField = page.locator("YOUR_OUTPUT_SELECTOR");
this.convertButton = page.locator("YOUR_BUTTON_SELECTOR");
```

**How to find selectors:**

```bash
# Use Playwright's codegen tool
npx playwright codegen http://your-app-url.com
```

This will open a browser and show you the selectors as you click elements.

---

## 🚀 STEP 5: Run Tests

### Run All Tests

```bash
npm test
```

Expected output:

```
Running 34 tests using 1 worker

  ✓ Pos_Fun_0001: Simple present tense statement (2s)
  ✓ Neg_Fun_0002: Simple greeting (1s)
  ...
  ✓ 24 passed
  ✗ 10 failed
```

### Run Only Positive Tests (Should All Pass)

```bash
npm run test:positive
```

### Run Only Negative Tests (Should All Fail)

```bash
npm run test:negative
```

### Run Tests in Headed Mode (See Browser)

```bash
npm run test:headed
```

### Run Tests in UI Mode (Interactive Debugging)

```bash
npm run test:ui
```

---

## 📊 STEP 6: View Test Reports

### HTML Report (Recommended)

```bash
npm run report
```

This opens an interactive HTML report showing:

- ✅ Passed tests (24 expected)
- ❌ Failed tests (10 expected)
- Screenshots of failures
- Detailed error messages
- Execution timeline

### Console Summary

After running tests, you'll see:

```
Test Execution Summary
======================
Total Test Cases: 34
✅ Passed: 24
❌ Failed: 10
```

---

## 📝 STEP 7: Analyze Results

### Expected Results

| Category       | Count | Status  |
| -------------- | ----- | ------- |
| Positive Tests | 24    | ✅ PASS |
| Negative Tests | 10    | ❌ FAIL |

### Why Negative Tests Fail

Each negative test fails for a specific reason:

1. **Neg_Fun_0001**: Chat slang "thx" → System doesn't support abbreviations
2. **Neg_Fun_0002**: "1990di" → Numeric suffix incorrectly transliterated
3. **Neg_Fun_0003**: "mata pata" → Retroflex letter case sensitivity
4. **Neg_Fun_0004**: "haiyooo" → Slang exclamation not in dictionary
5. **Neg_Fun_0005**: Nonsense words → Cannot be meaningfully converted
6. **Neg_Fun_0006**: "vidya" → Yansaya (combined letter) logic error
7. **Neg_Fun_0007**: "koomada? yko." → Extreme abbreviations lack context
8. **Neg_Fun_0008**: English quotes → Phonetically converted instead of preserved
9. **Neg_Fun_0009**: Formal letter → Typographical noise causes errors
10. **Neg_Fun_0010**: Long concatenation → Word boundary detection fails

---

## 📄 STEP 8: Excel Report

### View Excel File

```bash
# Open the Excel file
open test-cases.xlsx  # macOS
# or
xdg-open test-cases.xlsx  # Linux
# or manually open in Excel/LibreOffice
```

The Excel file contains:

- All 34 test cases
- Input and expected output
- Actual output (filled after running tests)
- Pass/Fail status
- Accuracy justification

### Update Excel with Results (Manual)

After running tests:

1. Open `test-cases.xlsx`
2. Copy actual outputs from the HTML report
3. Update "Actual output" column
4. Update "Status" column (Pass/Fail)

---

## 🐛 STEP 9: Troubleshooting

### Issue: Tests are timing out

**Solution**: Increase timeout in `playwright.config.ts`:

```typescript
timeout: 60000, // 60 seconds instead of 30
```

### Issue: Cannot find input/output fields

**Solution**: Update selectors in `pages/LanguageConversionPage.ts`

Use Playwright Inspector:

```bash
npx playwright codegen http://your-app-url.com
```

### Issue: All tests failing

**Checklist**:

- ✅ Is the application running?
- ✅ Is the URL correct in `playwright.config.ts`?
- ✅ Are element selectors correct?
- ✅ Did you install Playwright browsers?

### Issue: Negative tests are passing

This means the system is working better than expected! Update the expected outputs in `utils/testData.ts` to match actual system behavior.

---

## 📤 STEP 10: Push to GitHub

### Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., "language-conversion-tests")
3. Don't initialize with README (we already have one)

### Push Code

```bash
# Add remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Verify Upload

Visit your GitHub repository and ensure all files are there:

- ✅ README.md
- ✅ All test files
- ✅ package.json
- ✅ playwright.config.ts
- ✅ test-cases.xlsx

---

## 📋 STEP 11: Final Deliverables Checklist

Before submitting your assignment:

- [ ] All 34 test cases implemented
- [ ] 24 positive tests PASS
- [ ] 10 negative tests FAIL (naturally)
- [ ] Excel file (`test-cases.xlsx`) completed with actual results
- [ ] README.md is comprehensive
- [ ] Git repository initialized
- [ ] Code pushed to GitHub
- [ ] GitHub repository is PUBLIC
- [ ] Repository URL saved in a text file

---

## 🎓 Assignment Submission

### Required Files:

1. **GitHub Repository Link** (in a text file)
2. **Completed Excel File** (`test-cases.xlsx`)
3. **Playwright HTML Report** (optional, can be generated from code)

### How to Submit:

1. Create a text file with your GitHub repository URL
2. Download the completed `test-cases.xlsx` file
3. Submit both files according to your assignment instructions

---

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review the README.md
3. Inspect the Playwright HTML report for detailed error messages
4. Use `npm run test:ui` for interactive debugging

---

## ✅ Success Criteria

Your assignment is complete when:

✅ 24 positive tests PASS  
✅ 10 negative tests FAIL (naturally)  
✅ Excel sheet matches test execution results  
✅ All code is on GitHub (public repository)  
✅ README is clear and professional  
✅ Tests can be run by anyone following the README

---

**Good luck with your assignment! 🚀**
