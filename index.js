const { app, BrowserWindow, autoUpdater } = require('electron');
const server = 'http://localhost:5000'; // Replace with your update server URL
const feed = `${server}/update/${process.platform}/${app.getVersion()}`;
const path = require('path');


autoUpdater.setFeedURL(feed);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
icon: path.join(__dirname, "icon.ico"),
    //,
    // webPreferences: {
    //   nodeIntegration: true,
    //   contextIsolation: false,
    //   enableRemoteModule: true
    // }



  });

  win.loadURL('https://ai.com');

}

app.whenReady().then(() => {
  createWindow();


  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
