# Language Conversion UI Automation Tests

Playwright-based UI automation testing for Singlish/Thanglish to Sinhala/Tamil language conversion system.

## 📋 Project Overview

This project implements **34 comprehensive test cases** for a language conversion web application:

- ✅ **24 Positive Test Cases** - Expected to PASS
- ❌ **10 Negative Test Cases** - Expected to FAIL (due to system limitations)

All test cases are mapped to the Excel test case template (Appendix 2) for easy tracking and analysis.

## 🎯 Test Coverage

### Positive Tests Cover:

- Simple present/past/future tense statements
- Greetings and polite requests
- Medium and long sentences
- Mixed Singlish + English inputs
- Technical terms and abbreviations
- Currency, dates, and time formats
- Complex sentences with cause and effect
- Conditional statements
- Imperative commands
- Real-time UI conversion

### Negative Tests Cover:

- Unsupported chat-style slang
- Numeric suffix handling errors
- Case sensitivity issues (retroflex letters)
- Repetitive emphasis with slang
- Nonsense words and special symbols
- Yansaya (combined letters) errors
- Extreme abbreviations
- English quote handling issues
- Formal letter conversion errors
- Overly long word concatenations

## 🛠️ Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **Git** (for cloning the repository)

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd language-conversion-tests
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Install Playwright browsers**:
   ```bash
   npm run install:browsers
   ```

## ⚙️ Configuration

Before running tests, configure the application URL:

1. Open `playwright.config.ts`
2. Update the `baseURL` in the `use` section:
   ```typescript
   use: {
     baseURL: 'http://localhost:3000', // Change to your app URL
   }
   ```

Alternatively, set the `BASE_URL` environment variable:

```bash
export BASE_URL=http://your-app-url.com
```

## 🚀 Running Tests

### Run All Tests

```bash
npm test
```

### Run Tests in Headed Mode (See Browser)

```bash
npm run test:headed
```

### Run Tests in UI Mode (Interactive)

```bash
npm run test:ui
```

### Run Only Positive Tests

```bash
npm run test:positive
```

### Run Only Negative Tests

```bash
npm run test:negative
```

### Run Specific Test File

```bash
npx playwright test tests/positive/pos-fun-0001-0010.spec.ts
```

## 📊 Viewing Test Reports

After running tests, view the HTML report:

```bash
npm run report
```

This will open an interactive HTML report showing:

- Test execution summary
- Pass/Fail status for each test
- Screenshots and videos of failures
- Detailed error messages
- Execution timeline

## 📁 Project Structure

```
language-conversion-tests/
├── tests/
│   ├── positive/
│   │   ├── pos-fun-0001-0010.spec.ts    # Positive tests batch 1
│   │   ├── pos-fun-0011-0020.spec.ts    # Positive tests batch 2
│   │   └── pos-fun-0021-0024.spec.ts    # Positive tests batch 3
│   ├── negative/
│   │   ├── neg-fun-0001-0005.spec.ts    # Negative tests batch 1
│   │   └── neg-fun-0006-0010.spec.ts    # Negative tests batch 2
│   └── ui/
│       └── pos-ui-0001.spec.ts          # UI-specific tests
├── pages/
│   └── LanguageConversionPage.ts        # Page Object Model
├── utils/
│   ├── testData.ts                      # Test case data
│   └── excelHelper.ts                   # Excel file utilities
├── playwright.config.ts                 # Playwright configuration
├── package.json                         # Project dependencies
├── tsconfig.json                        # TypeScript configuration
├── test-cases.xlsx                      # Excel test case template
└── README.md                            # This file
```

## 📝 Test Case Mapping

Each test case in this project maps directly to the Excel template:

| Excel Column           | Description                                      |
| ---------------------- | ------------------------------------------------ |
| TC ID                  | Unique test case identifier (e.g., Pos_Fun_0001) |
| Test case name         | Descriptive name of the test                     |
| Input length type      | S (≤30), M (31-299), L (≥300 characters)         |
| Input                  | Singlish/Thanglish input text                    |
| Expected output        | Expected Sinhala/Tamil output                    |
| Actual output          | Actual output from test execution                |
| Status                 | Pass/Fail                                        |
| Accuracy justification | Reason for pass/fail                             |
| What is covered        | Test coverage details                            |

## 🔍 Understanding Test Results

### Expected Results:

- **24 Positive Tests**: Should all PASS ✅
- **10 Negative Tests**: Should all FAIL ❌

### Why Negative Tests Fail:

Negative tests fail due to **natural system limitations**, not test errors:

1. **Neg_Fun_0001**: Chat slang ("thx") not supported
2. **Neg_Fun_0002**: Numeric suffixes incorrectly transliterated
3. **Neg_Fun_0003**: Retroflex letter case sensitivity issues
4. **Neg_Fun_0004**: Slang exclamations not in dictionary
5. **Neg_Fun_0005**: Nonsense words cannot be converted
6. **Neg_Fun_0006**: Combined letter (Yansaya) logic errors
7. **Neg_Fun_0007**: Extreme abbreviations lack context
8. **Neg_Fun_0008**: English quotes phonetically converted
9. **Neg_Fun_0009**: Formal text with typographical noise
10. **Neg_Fun_0010**: Long concatenated words break parsing

## 📊 Excel Report Generation

To generate/update the Excel report with test results:

1. Run the tests
2. The `test-cases.xlsx` file will be updated with:
   - Actual output from each test
   - Pass/Fail status
   - Timestamp of execution

## 🐛 Troubleshooting

### Tests are timing out

- Increase timeout in `playwright.config.ts`:
  ```typescript
  timeout: 60000, // 60 seconds
  ```

### Cannot find input/output fields

- Update locators in `pages/LanguageConversionPage.ts`
- Use Playwright Inspector to find correct selectors:
  ```bash
  npx playwright codegen <your-app-url>
  ```

### All tests are failing

- Verify the application URL is correct
- Ensure the application is running
- Check if element selectors match your application

## 📄 Test Execution Report

After running tests, you'll see:

```
Test Execution Summary
======================
Total Test Cases: 34
✅ Passed: 24
❌ Failed: 10
⏸️  Not Run: 0
```

## 🤝 Contributing

This is an assignment project. For questions or issues, please contact the project maintainer.

## 📜 License

ISC

## 👨‍💻 Author

QA Automation Engineer - Senior Test Analyst

---

**Note**: This project is designed for educational and assignment purposes. All test cases are based on the provided Excel template (Appendix 2) and follow industry-standard QA automation practices.
