import * as XLSX from "xlsx";
import * as fs from "fs";
import * as path from "path";
import { TestCase, getAllTestCases } from "./testData";

/**
 * Excel Helper Utilities
 * Handles reading from and writing to Excel files for test case management
 */

export interface ExcelTestCase {
  "TC ID": string;
  "Test case name": string;
  "Input length type": string;
  Input: string;
  "Expected output": string;
  "Actual output": string;
  Status: string;
  "Accuracy justification/ Description of issue type": string;
  "What is covered by the test": string;
}

/**
 * Create Excel file from test data
 */
export function createExcelFromTestData(outputPath: string): void {
  const testCases = getAllTestCases();

  const excelData: ExcelTestCase[] = testCases.map((tc) => ({
    "TC ID": tc.tcId,
    "Test case name": tc.testCaseName,
    "Input length type": tc.inputLengthType,
    Input: tc.input,
    "Expected output": tc.expectedOutput,
    "Actual output": tc.actualOutput || "",
    Status: tc.status || "",
    "Accuracy justification/ Description of issue type":
      tc.accuracyJustification,
    "What is covered by the test": tc.whatIsCovered,
  }));

  const worksheet = XLSX.utils.json_to_sheet(excelData);

  // Set column widths for better readability
  worksheet["!cols"] = [
    { wch: 15 }, // TC ID
    { wch: 50 }, // Test case name
    { wch: 15 }, // Input length type
    { wch: 80 }, // Input
    { wch: 80 }, // Expected output
    { wch: 80 }, // Actual output
    { wch: 10 }, // Status
    { wch: 60 }, // Accuracy justification
    { wch: 40 }, // What is covered
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Test Cases");

  XLSX.writeFile(workbook, outputPath);
  console.log(`✅ Excel file created: ${outputPath}`);
}

/**
 * Read Excel file and return test cases
 */
export function readExcelTestCases(filePath: string): ExcelTestCase[] {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Excel file not found: ${filePath}`);
  }

  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  const data: ExcelTestCase[] = XLSX.utils.sheet_to_json(worksheet);
  return data;
}

/**
 * Update Excel file with actual results
 */
export function updateExcelWithResults(
  filePath: string,
  results: Map<string, { actualOutput: string; status: "Pass" | "Fail" }>
): void {
  const testCases = readExcelTestCases(filePath);

  // Update test cases with actual results
  testCases.forEach((tc) => {
    const result = results.get(tc["TC ID"]);
    if (result) {
      tc["Actual output"] = result.actualOutput;
      tc["Status"] = result.status;
    }
  });

  const worksheet = XLSX.utils.json_to_sheet(testCases);

  // Set column widths
  worksheet["!cols"] = [
    { wch: 15 }, // TC ID
    { wch: 50 }, // Test case name
    { wch: 15 }, // Input length type
    { wch: 80 }, // Input
    { wch: 80 }, // Expected output
    { wch: 80 }, // Actual output
    { wch: 10 }, // Status
    { wch: 60 }, // Accuracy justification
    { wch: 40 }, // What is covered
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Test Cases");

  XLSX.writeFile(workbook, filePath);
  console.log(`✅ Excel file updated: ${filePath}`);
}

/**
 * Generate summary report from Excel
 */
export function generateSummaryReport(filePath: string): void {
  const testCases = readExcelTestCases(filePath);

  const totalTests = testCases.length;
  const passedTests = testCases.filter((tc) => tc.Status === "Pass").length;
  const failedTests = testCases.filter((tc) => tc.Status === "Fail").length;
  const notRunTests = testCases.filter(
    (tc) => !tc.Status || tc.Status === ""
  ).length;

  console.log("\n" + "=".repeat(60));
  console.log("TEST EXECUTION SUMMARY");
  console.log("=".repeat(60));
  console.log(`Total Test Cases: ${totalTests}`);
  console.log(`✅ Passed: ${passedTests}`);
  console.log(`❌ Failed: ${failedTests}`);
  console.log(`⏸️  Not Run: ${notRunTests}`);
  console.log("=".repeat(60));

  // List failed tests
  if (failedTests > 0) {
    console.log("\nFailed Test Cases:");
    testCases
      .filter((tc) => tc.Status === "Fail")
      .forEach((tc) => {
        console.log(`  - ${tc["TC ID"]}: ${tc["Test case name"]}`);
      });
  }

  console.log("\n");
}

/**
 * Validate Excel structure
 */
export function validateExcelStructure(filePath: string): boolean {
  try {
    const testCases = readExcelTestCases(filePath);

    const requiredColumns = [
      "TC ID",
      "Test case name",
      "Input length type",
      "Input",
      "Expected output",
      "Actual output",
      "Status",
      "Accuracy justification/ Description of issue type",
      "What is covered by the test",
    ];

    if (testCases.length === 0) {
      console.error("❌ Excel file is empty");
      return false;
    }

    const firstRow = testCases[0];
    const missingColumns = requiredColumns.filter((col) => !(col in firstRow));

    if (missingColumns.length > 0) {
      console.error(`❌ Missing columns: ${missingColumns.join(", ")}`);
      return false;
    }

    console.log("✅ Excel structure is valid");
    return true;
  } catch (error) {
    console.error("❌ Error validating Excel structure:", error);
    return false;
  }
}
