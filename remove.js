// Question 3: Remove log files and directory
const fs = require('node:fs');
const path = require('node:path');
const logsDirectory = path.join(__dirname, 'Logs');
if (fs.existsSync(logsDirectory)) {
  for (const filename of fs.readdirSync(logsDirectory)) {
    const filePath = path.join(logsDirectory, filename);
    if (fs.statSync(filePath).isFile()) {
      fs.unlinkSync(filePath);
      console.log(`Deleted: ${filename}`);
    }
  }
  fs.rmdirSync(logsDirectory);
  console.log('Removed Logs directory');
} else {
  console.log('Logs directory does not exist');
}
