const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'), // Optional preload
    },
  });

  // ✅ Load the *built* React app (not public/index.html)
  win.loadFile(path.join(__dirname, 'build', 'index.html'));
  win.webContents.openDevTools(); // Optional: remove in production
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
