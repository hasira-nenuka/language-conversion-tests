#!/usr/bin/env ts-node

/**
 * Script to update Excel file with test results from Playwright JSON report
 * Run: npx ts-node scripts/updateExcelResults.ts
 */

import {
  updateExcelWithResults,
  generateSummaryReport,
} from "../utils/excelHelper";
import * as path from "path";
import * as fs from "fs";

const excelPath = path.join(__dirname, "..", "test-cases.xlsx");
const resultsPath = path.join(__dirname, "..", "test-results", "results.json");

console.log("Updating Excel file with test results...");

// Check if results file exists
if (!fs.existsSync(resultsPath)) {
  console.error("❌ Test results file not found. Please run tests first.");
  console.error("   Run: npm test");
  process.exit(1);
}

// Read test results
const resultsData = JSON.parse(fs.readFileSync(resultsPath, "utf-8"));

// Extract test results
const results = new Map<
  string,
  { actualOutput: string; status: "Pass" | "Fail" }
>();

resultsData.suites?.forEach((suite: any) => {
  suite.specs?.forEach((spec: any) => {
    // Extract TC ID from test title
    const match = spec.title.match(/(Pos_Fun_\d+|Neg_Fun_\d+|Pos_UI_\d+)/);
    if (match) {
      const tcId = match[1];
      const status = spec.ok ? "Pass" : "Fail";

      // Try to extract actual output from test (this is a simplified version)
      // In a real scenario, you'd need to store this during test execution
      results.set(tcId, {
        actualOutput: "", // Will be filled during test execution
        status: status,
      });
    }
  });
});

// Update Excel file
updateExcelWithResults(excelPath, results);

// Generate summary report
generateSummaryReport(excelPath);

console.log("✅ Done! Excel file updated at:", excelPath);
