// Question 3: Create ten log files
const fs = require('node:fs');
const path = require('node:path');
const logsDirectory = path.join(__dirname, 'Logs');
fs.mkdirSync(logsDirectory, { recursive: true });
process.chdir(logsDirectory);
for (let i = 1; i <= 10; i += 1) {
  const filename = `log${i}.txt`;
  fs.writeFileSync(filename, `Log file ${i} created for COMP3123 Lab Test 1.\n`);
  console.log(`Created: ${filename}`);
}
