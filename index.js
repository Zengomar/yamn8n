
const { spawn } = require("node:child_process");

const isWindows = process.platform === "win32";
const n8nCommand = isWindows ? "n8n.cmd" : "n8n";

const n8n = spawn(n8nCommand, ["start"], {
  stdio: "inherit",
  shell: isWindows,
  env: {
    ...process.env,
    N8N_PORT: "5678",
    N8N_LISTEN_ADDRESS: "127.0.0.1",
  },
});

n8n.on("error", (error) => {
  console.error("Failed to start n8n:", error.message);
});

n8n.on("exit", (code) => {
  console.log(`n8n stopped with code: ${code}`);
});
