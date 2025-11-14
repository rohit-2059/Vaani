// Simple WebSocket connection test
const WebSocket = require('ws');

const serverUrl = 'ws://10.251.123.57:3000';
console.log(`Testing WebSocket connection to: ${serverUrl}`);

const ws = new WebSocket(serverUrl);

ws.on('open', function open() {
  console.log('✅ WebSocket connection established successfully!');
  console.log('Connection is working from computer to server');

  // Send a test message
  ws.send(
    JSON.stringify({
      type: 'test',
      message: 'Hello from test client',
    }),
  );
});

ws.on('message', function message(data) {
  console.log('📥 Received message:', data.toString());
});

ws.on('error', function error(err) {
  console.log('❌ WebSocket connection failed:', err.message);
});

ws.on('close', function close() {
  console.log('🔌 WebSocket connection closed');
  process.exit(0);
});

// Close after 3 seconds
setTimeout(() => {
  if (ws.readyState === WebSocket.OPEN) {
    ws.close();
  }
}, 3000);
