import { test, expect } from "@playwright/test";
import { LanguageConversionPage } from "../../pages/LanguageConversionPage";
import { positiveTestCases } from "../../utils/testData";

/**
 * Positive Test Cases: Pos_Fun_0001 to Pos_Fun_0010
 * These tests verify correct language conversion for various input types
 */

test.describe("Positive Functional Tests - Batch 1 (TC 0001-0010)", () => {
  let conversionPage: LanguageConversionPage;

  test.beforeEach(async ({ page }) => {
    conversionPage = new LanguageConversionPage(page);
    await conversionPage.goto();
  });

  test("Pos_Fun_0001: Simple present tense statement", async () => {
    const testCase = positiveTestCases.find(
      (tc) => tc.tcId === "Pos_Fun_0001"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Neg_Fun_0002: Simple greeting", async () => {
    const testCase = positiveTestCases.find(
      (tc) => tc.tcId === "Neg_Fun_0002"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Pos_Fun_0003: Polite request", async () => {
    const testCase = positiveTestCases.find(
      (tc) => tc.tcId === "Pos_Fun_0003"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Pos_Fun_0004: Medium length Sentence", async () => {
    const testCase = positiveTestCases.find(
      (tc) => tc.tcId === "Pos_Fun_0004"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Pos_Fun_0005: Long mixed-language input with slang", async () => {
    const testCase = positiveTestCases.find(
      (tc) => tc.tcId === "Pos_Fun_0005"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Pos_Fun_0006: Convert positive future intent sentence", async () => {
    const testCase = positiveTestCases.find(
      (tc) => tc.tcId === "Pos_Fun_0006"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Pos_Fun_0007: Convert complex sentence with cause and effect", async () => {
    const testCase = positiveTestCases.find(
      (tc) => tc.tcId === "Pos_Fun_0007"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Pos_Fun_0008: Convert a multi-word expression combining motion and eating", async () => {
    const testCase = positiveTestCases.find(
      (tc) => tc.tcId === "Pos_Fun_0008"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Pos_Fun_0009: Convert a medium-length sentence with proper spacing and mixed English", async () => {
    const testCase = positiveTestCases.find(
      (tc) => tc.tcId === "Pos_Fun_0009"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Pos_Fun_0010: Convert repeated word expression for emphasis", async () => {
    const testCase = positiveTestCases.find(
      (tc) => tc.tcId === "Pos_Fun_0010"
    )!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });
});
