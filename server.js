const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve dashboard.html on the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// WebSocket connection handling
wss.on('connection', (ws) => {
  console.log('WebSocket connection established.');

  ws.on('message', (message) => {
    const decodedMessage = message.toString(); // Decode the Buffer into a string
    console.log('Received:', decodedMessage);

    // Broadcast the decoded message to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(decodedMessage);
      }
    });
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed.');
  });
});

// Start the server
const PORT = 8080;
server.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  // Use dynamic import for the `open` package
  const { default: open } = await import('open');
  await open(`http://localhost:${PORT}`); // Open the dashboard in the default browser
});
