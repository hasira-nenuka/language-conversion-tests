import { test, expect } from "@playwright/test";
import { LanguageConversionPage } from "../../pages/LanguageConversionPage";
import { negativeTestCases } from "../../utils/testData";

/**
 * Negative Test Cases: Neg_Fun_0001 to Neg_Fun_0005
 * These tests verify that the system FAILS appropriately for unsupported inputs
 * IMPORTANT: These tests are EXPECTED to FAIL due to system limitations
 */

test.describe("Negative Functional Tests - Batch 1 (TC 0001-0005)", () => {
  let conversionPage: LanguageConversionPage;

  test.beforeEach(async ({ page }) => {
    conversionPage = new LanguageConversionPage(page);
    await conversionPage.goto();
  });

  test("Neg_Fun_0001: Handle unsupported chat-style slang", async () => {
    const testCase = negativeTestCases.find(
      (tc) => tc.tcId === "Neg_Fun_0001"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    // This test SHOULD FAIL because the system cannot handle chat-style slang correctly
    // Expected: තෑන්ක්ස් මචන් ආවට
    // Actual: Will likely be incorrect (e.g., තx මචන් ආවට or similar)
    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Neg_Fun_0002: Numeric Suffix Handling", async () => {
    const testCase = negativeTestCases.find(
      (tc) => tc.tcId === "Neg_Fun_0002"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    // This test SHOULD FAIL because the system cannot handle numeric suffixes correctly
    // Expected: මම 1990දී උපන්නේ
    // Actual: Will likely be මම 1990ඩි උපන්නේ (incorrect transliteration)
    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Neg_Fun_0003: Case Sensitivity (Retroflex Letters)", async () => {
    const testCase = negativeTestCases.find(
      (tc) => tc.tcId === "Neg_Fun_0003"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    // This test SHOULD FAIL due to case sensitivity and retroflex letter issues
    // Expected: මාට පාට පෙන්නේ නෑ
    // Actual: Will likely be මට පට පෙන්නෙ න (incorrect vowel length and characters)
    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Neg_Fun_0004: Repetitive Emphasis with Slang Exclamation", async () => {
    const testCase = negativeTestCases.find(
      (tc) => tc.tcId === "Neg_Fun_0004"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    // This test SHOULD FAIL because slang exclamations are not in formal dictionaries
    // Expected: හයියෝ එයා ඒක කාලා
    // Actual: Will likely be හෛයෝඔ එයා එක කාලා (incorrect exclamation handling)
    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Neg_Fun_0005: Mixed Language with Nonsense Words and Symbols", async () => {
    const testCase = negativeTestCases.find(
      (tc) => tc.tcId === "Neg_Fun_0005"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    // This test SHOULD FAIL because nonsense words and symbols cannot be converted meaningfully
    // Expected: බ්ලෝර්ච් ග@ර්බ්ල් 123% මම
    // Actual: Will likely be බ්ලොර්ච් g@ර්බ්ලෙ 123% මම (incorrect handling of nonsense)
    expect(actualOutput).toBe(testCase.expectedOutput);
  });
});
