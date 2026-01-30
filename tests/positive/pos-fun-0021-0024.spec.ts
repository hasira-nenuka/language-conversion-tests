import { test, expect } from "@playwright/test";
import { LanguageConversionPage } from "../../pages/LanguageConversionPage";
import { positiveTestCases } from "../../utils/testData";

/**
 * Positive Test Cases: Pos_Fun_0021 to Pos_Fun_0024
 * These tests verify correct language conversion for various input types
 */

test.describe("Positive Functional Tests - Batch 3 (TC 0021-0024)", () => {
  let conversionPage: LanguageConversionPage;

  test.beforeEach(async ({ page }) => {
    conversionPage = new LanguageConversionPage(page);
    await conversionPage.goto();
  });

  test("Pos_Fun_0021: Technical term", async () => {
    const testCase = positiveTestCases.find(
      (tc) => tc.tcId === "Pos_Fun_0021"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Pos_Fun_0022: Question with punctuation", async () => {
    const testCase = positiveTestCases.find(
      (tc) => tc.tcId === "Pos_Fun_0022"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Pos_Fun_0023: Convert mixed-language polite request sentence", async () => {
    const testCase = positiveTestCases.find(
      (tc) => tc.tcId === "Pos_Fun_0023"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Pos_Fun_0024: Convert a past tense sentence with time reference", async () => {
    const testCase = positiveTestCases.find(
      (tc) => tc.tcId === "Pos_Fun_0024"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });
});
