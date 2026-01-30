import { test, expect } from "@playwright/test";
import { LanguageConversionPage } from "../../pages/LanguageConversionPage";
import { positiveTestCases } from "../../utils/testData";

/**
 * UI Test Case: Pos_UI_0001
 * This test verifies UI-specific functionality like real-time conversion
 */

test.describe("Positive UI Tests", () => {
  let conversionPage: LanguageConversionPage;

  test.beforeEach(async ({ page }) => {
    conversionPage = new LanguageConversionPage(page);
    await conversionPage.goto();
  });

  test("Pos_UI_0001: Convert imperative command sentence", async () => {
    const testCase = positiveTestCases.find((tc) => tc.tcId === "Pos_UI_0001")!;

    const actualOutput = await conversionPage.convertText(testCase.input);

    expect(actualOutput).toBe(testCase.expectedOutput);
  });

  test("Pos_UI_0001 (Real-time): Verify real-time conversion updates", async ({
    page,
  }) => {
    const testCase = positiveTestCases.find((tc) => tc.tcId === "Pos_UI_0001")!;

    // Enter text character by character to test real-time conversion
    await conversionPage.inputField.clear();

    for (const char of testCase.input) {
      await conversionPage.inputField.type(char, { delay: 50 });
    }

    // Wait for real-time conversion to complete
    await conversionPage.waitForConversion(testCase.expectedOutput.length);

    const actualOutput = await conversionPage.getOutput();

    // Verify the output matches expected
    expect(actualOutput).toBe(testCase.expectedOutput);
  });
});
