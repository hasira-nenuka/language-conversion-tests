import * as http from "http";
import { getAllTestCases } from "../utils/testData";

const PORT = 3000;

// Create a mapping of inputs to expected outputs from our test data
const translations = new Map<string, string>();
getAllTestCases().forEach((tc) => {
  translations.set(tc.input, tc.expectedOutput);
});

// Create HTML content for the mock app
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mock Language Converter</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        .container { display: flex; gap: 20px; }
        .box { flex: 1; }
        textarea { width: 100%; height: 200px; padding: 10px; font-size: 16px; }
        button { padding: 10px 20px; background: #007bff; color: white; border: none; cursor: pointer; margin-top: 10px; }
        .status { margin-top: 10px; font-style: italic; color: #666; }
    </style>
</head>
<body>
    <h1>Singlish to Sinhala Converter (Mock)</h1>
    <div class="container">
        <div class="box">
            <h3>Input (Singlish)</h3>
            <textarea id="input" placeholder="Type here..."></textarea>
        </div>
        <div class="box">
            <h3>Output (Sinhala)</h3>
            <textarea id="output" readonly></textarea>
        </div>
    </div>
    <button id="convert-btn">Convert</button>
    <div class="status" id="status">Ready</div>

    <script>
        const input = document.getElementById('input');
        const output = document.getElementById('output');
        const btn = document.getElementById('convert-btn');
        const status = document.getElementById('status');

        // Mapping from server
        const dictionary = ${JSON.stringify(Object.fromEntries(translations))};

        function convert() {
            const text = input.value;
            status.innerText = 'Converting...';
            
            // Artificial delay to simulate network
            setTimeout(() => {
                // Check direct match
                if (dictionary[text]) {
                    output.value = dictionary[text];
                    status.innerText = 'Converted successfully';
                } else {
                    // Default behavior for unknown text
                    output.value = 'UNK: ' + text; 
                    status.innerText = 'Translation not found in mock data';
                }
            }, 100);
        }

        // Real-time conversion (with debounce)
        let timeout;
        input.addEventListener('input', () => {
             clearTimeout(timeout);
             timeout = setTimeout(convert, 300);
        });

        btn.addEventListener('click', convert);
    </script>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(htmlContent);
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(PORT, () => {
  
  console.log("MOCK SERVER RUNNING!");
  console.log(" URL: http://localhost:" + PORT + "");
  
});
