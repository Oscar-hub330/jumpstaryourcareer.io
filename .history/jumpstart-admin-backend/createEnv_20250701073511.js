// createEnv.js
const fs = require("fs");

const envContent = `
PORT=5000
MONGODB_URI=mongodb+srv://madalaneoscar50:OGeYVFJxFy7t9OJV@jumpstartcluster.ujmkh8e.mongodb.net/jumpstartDB?retryWrites=true&w=majority&appName=JumpstartCluster
`.trim();

fs.writeFileSync(".env", envContent, "utf8");

console.log("✅ .env file created successfully.");
