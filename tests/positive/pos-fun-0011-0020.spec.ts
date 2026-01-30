import { test, expect } from "@playwright/test";
import { LanguageConversionPage } from "../../pages/LanguageConversionPage";
import { positiveTestCases } from "../../utils/testData";

/**
 * Positive Test Cases: Pos_Fun_0011 to Pos_Fun_0020
 * These tests verify correct language conversion for various input types
 */

test.describe("Positive Functional Tests - Batch 2 (TC 0011-0020)", () => {
  let conversionPage: LanguageConversionPage;

  test.beforeEach(async ({ page }) => {
    conversionPage = new LanguageConversionPage(page);
    await conversionPage.goto();
  });

  test("Pos_Fun_0011: Convert politely phrased interrogative request", async () => {
    const testCase = positiveTestCases.find(
      (tc) => tc.tcId === "Pos_Fun_0011"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Pos_Fun_0012: Convert a common day-to-day expression of extreme hunger", async () => {
    const testCase = positiveTestCases.find(
      (tc) => tc.tcId === "Pos_Fun_0012"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Pos_Fun_0013: Convert multi-sentence input with multiple embedded English technical and brand terms", async () => {
    const testCase = positiveTestCases.find(
      (tc) => tc.tcId === "Pos_Fun_0013"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Pos_Fun_0014: Convert a sentence containing currency format", async () => {
    const testCase = positiveTestCases.find(
      (tc) => tc.tcId === "Pos_Fun_0014"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Pos_Fun_0015: Convert a past tense sentence with ISO date format", async () => {
    const testCase = positiveTestCases.find(
      (tc) => tc.tcId === "Pos_Fun_0015"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Pos_Fun_0016: Convert a long sports-related paragraph with multiple sentences", async () => {
    const testCase = positiveTestCases.find(
      (tc) => tc.tcId === "Pos_Fun_0016"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Pos_Fun_0017: Convert a sentence with time format and English abbreviations", async () => {
    const testCase = positiveTestCases.find(
      (tc) => tc.tcId === "Pos_Fun_0017"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Pos_Fun_0018: Convert command sentence with English abbreviation", async () => {
    const testCase = positiveTestCases.find(
      (tc) => tc.tcId === "Pos_Fun_0018"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Pos_Fun_0019: Sinhala output updates automatically in real-time", async () => {
    const testCase = positiveTestCases.find(
      (tc) => tc.tcId === "Pos_Fun_0019"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Pos_Fun_0020: Complex sentence", async () => {
    const testCase = positiveTestCases.find(
      (tc) => tc.tcId === "Pos_Fun_0020"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });
});
