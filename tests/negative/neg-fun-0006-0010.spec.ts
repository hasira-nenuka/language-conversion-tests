import { test, expect } from "@playwright/test";
import { LanguageConversionPage } from "../../pages/LanguageConversionPage";
import { negativeTestCases } from "../../utils/testData";

/**
 * Negative Test Cases: Neg_Fun_0006 to Neg_Fun_0010
 * These tests verify that the system FAILS appropriately for unsupported inputs
 * IMPORTANT: These tests are EXPECTED to FAIL due to system limitations
 */

test.describe("Negative Functional Tests - Batch 2 (TC 0006-0010)", () => {
  let conversionPage: LanguageConversionPage;

  test.beforeEach(async ({ page }) => {
    conversionPage = new LanguageConversionPage(page);
    await conversionPage.goto();
  });

  test("Neg_Fun_0006: Yansaya (Combined Letters)", async () => {
    const testCase = negativeTestCases.find(
      (tc) => tc.tcId === "Neg_Fun_0006"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    // This test SHOULD FAIL because Yansaya (combined letter) logic is not correctly implemented
    // Expected: විද්යා
    // Actual: Will likely be විඩ්යා (separate characters instead of combined form)
    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Neg_Fun_0007: Extreme Abbreviation and Missing Context", async () => {
    const testCase = negativeTestCases.find(
      (tc) => tc.tcId === "Neg_Fun_0007"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    // This test SHOULD FAIL because extreme abbreviations lack linguistic cues
    // Expected: කූමද? yko. ගියේ?
    // Actual: Will likely be කෝමඩ? ය්කො. ගීයෙ? (garbled or incomplete)
    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Neg_Fun_0008: English Quote Handling", async () => {
    const testCase = negativeTestCases.find(
      (tc) => tc.tcId === "Neg_Fun_0008"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    // This test SHOULD FAIL because English quotes are phonetically converted instead of preserved
    // Expected: එයා මට කිව්වා "I will never give up" කියලා.
    // Actual: Will likely be එය මට කිwwඅ "ඉ will never give up" කියල. (incorrect quote handling)
    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Neg_Fun_0009: Formal Letter Block", async () => {
    const testCase = negativeTestCases.find(
      (tc) => tc.tcId === "Neg_Fun_0009"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    // This test SHOULD FAIL due to severe typographical noise and formal structure
    // Expected: ගරු මහත්මයා,මට ලබන සතියේ නිවාඩුවක් ගන්න පුළුවන්ද? ගෙදර පොඩි හදිස්සියක් වෙලා තියෙනවා. ඒ නිසා මට දවස් 3ක් නිවාඩු ඕනි.ස්තූතියි,සමන්.
    // Actual: Will have significant transliteration errors throughout
    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Neg_Fun_0010: Overly Long Word Concatenation with Numerals", async () => {
    const testCase = negativeTestCases.find(
      (tc) => tc.tcId === "Neg_Fun_0010"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    // This test SHOULD FAIL because the input is an artificially long concatenated word
    // Expected: මමගීධරගියා2023දෙසැම්බර්25ඊතේහතපස්බලන්නඅවශ්යයක්කරල
    // Actual: Will likely be මමගේදරගියා2023december25ඒත්හෙතපස්සෙබලන්නාවශ්යයක්කරල (incorrect parsing)
    expect(actualOutput).toBe(testCase.expectedOutput);
  });
});
