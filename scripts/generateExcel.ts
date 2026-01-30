#!/usr/bin/env ts-node

/**
 * Script to generate Excel test case template
 * Run: npx ts-node scripts/generateExcel.ts
 */

import { createExcelFromTestData } from "../utils/excelHelper";
import * as path from "path";

const excelPath = path.join(__dirname, "..", "test-cases.xlsx");

console.log("Generating Excel file from test data...");
createExcelFromTestData(excelPath);
console.log("✅ Done! Excel file created at:", excelPath);
