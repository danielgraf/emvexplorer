
'use strict';

const electron = require('electron');
const app = electron.app;
const Menu = electron.Menu;
const Tray = electron.Tray;

var trayicon = null;

var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('ready', function() {
  trayicon = new Tray(__dirname + '/iconTemplate.png');

  app.on('window-all-closed', function() {
  app.quit();
});

mainWindow = new BrowserWindow({
        height: 600,
        width: 800
});

mainWindow.loadURL('file://' + __dirname + '/app/index.html');

    //mainWindow.openDevTools();

});
