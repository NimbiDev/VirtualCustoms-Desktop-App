const { app } = require("electron");
const path = require("path");
const { menubar } = require("menubar");

const mb = menubar({
  browserWindow: {
    width: 1280,
    height: 768,
    resizable: true,
    movable: true,
    minimizable: true,
    maximizable: true,
    center: true,
    closable: true,
    fullscreen: false,
    fullscreenable: true,
    hasShadow: true,
    autoHideMenuBar: true,
    frame: true
  },
  preloadWindow: true,
  icon: path.join(__dirname, "./MenuIcon.png"),
  webPreferences: {
    nodeIntegration: true,
    partition: "persist:virtualcustoms"
  },
});


mb.app.commandLine.appendSwitch(
  "disable-backgrounding-occluded-windows",
  "true"
);

mb.on("ready", () => {
  console.log("app is ready");

  win = mb.window;

  win.loadURL("https://virtualcustoms.net/");

});

mb.on('after-create-window', () => {

});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

