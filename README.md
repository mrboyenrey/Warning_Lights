# Warning Lights System

This project is a WebSocket-based warning lights system that includes a dashboard for monitoring and controlling the lights in real-time. The system consists of three main components:
1. **Dashboard**: Displays the current light status and provides controls to change the light.
2. **Controller**: A standalone interface to send commands to the lights.
3. **Lights Display**: A visual representation of the lights that updates based on the commands received.

## Features

- Real-time updates using WebSocket.
- Dashboard with light status and control buttons.
- Separate controller interface for sending commands.
- Smooth animations for light transitions.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- A modern web browser (e.g., Chrome, Firefox)

## Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory:
   ```bash
   cd c:\Users\MainB\OneDrive\Documents\CCF\FIX\Warning_Lights
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```
2. Open the dashboard in your browser:
   ```
   http://<server-ip>:8080
   ```
   Replace `<server-ip>` with the actual IP address or hostname of the server. If running locally, use `http://localhost:8080`.

## Components

### Dashboard
- URL: `http://localhost:8080`
- Displays the current light status.
- Includes buttons to control the lights (`Red`, `Yellow`, `Green`, `Turn Off`).

### Controller
- URL: `http://localhost:8080/controller.html`
- A standalone interface for sending commands to the lights.

### Lights Display
- URL: `http://localhost:8080/lights.html`
- A visual representation of the lights that updates in real-time based on the commands received.

## Commands

The following commands can be sent to control the lights:
- `red`: Turns on the red light.
- `yellow`: Turns on the yellow light.
- `green`: Turns on the green light.
- `off`: Turns off all lights.

## Project Structure

```
Warning_Lights/
├── public/
│   ├── dashboard.html       # Dashboard interface
│   ├── controller.html      # Controller interface
│   ├── lights.html          # Lights display
├── server.js                # WebSocket server
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation
```

## Troubleshooting

- **WebSocket connection issues**:
  - Ensure the server is running (`npm start`).
  - Verify the WebSocket URL in the browser console matches `ws://localhost:8080`.

- **Dashboard or controller not opening**:
  - Manually navigate to `http://localhost:8080` or `http://localhost:8080/controller.html`.

## License

This project is licensed under the MIT License.
