import { Page, Locator } from "@playwright/test";

/**
 * Page Object Model for Language Conversion Application
 * This class encapsulates all UI interactions with the language conversion page
 */
export class LanguageConversionPage {
  readonly page: Page;
  readonly inputField: Locator;
  readonly outputField: Locator;
  readonly convertButton: Locator;
  readonly clearButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Locators - Update these selectors based on your actual application
    // Common patterns: input[type="text"], textarea, #inputField, .input-box
    this.inputField = page
      .locator(
        'textarea#input, input#input, textarea.input, [placeholder*="Enter"], [placeholder*="Type"]'
      )
      .first();
    this.outputField = page
      .locator(
        "textarea#output, input#output, textarea.output, .output, [readonly]"
      )
      .first();
    this.convertButton = page
      .locator(
        'button:has-text("Convert"), button:has-text("Translate"), button[type="submit"]'
      )
      .first();
    this.clearButton = page
      .locator('button:has-text("Clear"), button:has-text("Reset")')
      .first();
  }

  /**
   * Navigate to the language conversion page
   */
  async goto() {
    await this.page.goto("/");
    // Wait for the page to be fully loaded
    await this.page.waitForLoadState("networkidle");
  }

  /**
   * Enter text into the input field
   * @param text - The Singlish text to convert
   */
  async enterText(text: string) {
    await this.inputField.clear();
    await this.inputField.fill(text);
    // Small delay to allow for any input event handlers
    await this.page.waitForTimeout(300);
  }

  /**
   * Click the convert button (if exists)
   * Some applications may convert in real-time without a button
   */
  async clickConvert() {
    try {
      if (await this.convertButton.isVisible({ timeout: 1000 })) {
        await this.convertButton.click();
      }
    } catch (error) {
      // Button might not exist for real-time conversion
      console.log("Convert button not found - assuming real-time conversion");
    }
  }

  /**
   * Get the converted output text
   * @returns The Sinhala/Tamil output text
   */
  async getOutput(): Promise<string> {
    // Wait for output to appear (real-time conversion may take a moment)
    await this.page.waitForTimeout(500);

    // Try to get text from output field
    const outputText = await this.outputField
      .inputValue()
      .catch(() => this.outputField.textContent());

    return (outputText || "").trim();
  }

  /**
   * Perform complete conversion: enter text, convert, and get output
   * @param inputText - The Singlish text to convert
   * @returns The converted Sinhala/Tamil text
   */
  async convertText(inputText: string): Promise<string> {
    await this.enterText(inputText);
    await this.clickConvert();
    return await this.getOutput();
  }

  /**
   * Clear the input and output fields
   */
  async clear() {
    try {
      if (await this.clearButton.isVisible({ timeout: 1000 })) {
        await this.clearButton.click();
      } else {
        await this.inputField.clear();
      }
    } catch (error) {
      await this.inputField.clear();
    }
  }

  /**
   * Wait for real-time conversion to complete
   * Useful when the application converts as you type
   */
  async waitForConversion(expectedLength: number = 0) {
    // Wait for output to have content
    await this.page.waitForTimeout(1000);

    // Additional wait if we expect a certain length
    if (expectedLength > 0) {
      let attempts = 0;
      while (attempts < 10) {
        const output = await this.getOutput();
        if (output.length >= expectedLength * 0.5) {
          break;
        }
        await this.page.waitForTimeout(200);
        attempts++;
      }
    }
  }

  /**
   * Take a screenshot for debugging
   * @param name - Screenshot name
   */
  async screenshot(name: string) {
    await this.page.screenshot({
      path: `screenshots/${name}.png`,
      fullPage: true,
    });
  }
}
