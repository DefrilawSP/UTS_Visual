const { app, BrowserWindow } = require("electron");
let window;

const loadAppWindow = () => {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    icon: `${__dirname}/assets/pictures/icon.png`,
    webPreferences: {
      nodeIntegration: true
    }
  });
  window.loadFile("./views/index.html");
};

app.on("ready", loadAppWindow);
