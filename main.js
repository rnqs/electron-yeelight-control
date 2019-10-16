const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

let win

function createWindow() {
    win = new BrowserWindow({
        width: 420,
        height: 200,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.setMenuBarVisibility(false)
    win.setResizable(false)
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'view','index.html'),
        protocol: 'file:',
        slashes: true
    }))
}

app.on('ready', createWindow)