const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

const WIDTH = 1000;
const HEIGHT = 800;
const ENTRY_HTML = path.join(__dirname, '../build/index.html');

// Leave a global reference to the object, so the GC doesn't collect it.
let window;

app.on('ready', createWindow);
app.on('window-all-closed', onAllWindowsClosed);
app.on('activate', onActivate);

function createWindow () {
    window = new BrowserWindow({
        width: WIDTH,
        height: HEIGHT,
        webPreferences: {
            webSecurity: false
        }
    });
    window.on('closed', onWindowClosed);
    loadHtml();
    // openDevToolsIfDevMode();
    registerLinkHandler();
}

function onAllWindowsClosed () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
}

function onActivate () {
    if (window === null) {
        createWindow();
    }
}

function registerLinkHandler () {
    window.webContents.on('will-navigate', handleLink);
    window.webContents.on('new-window', handleLink);
}

function handleLink (event, url) {
    if (url !== window.webContents.getURL()) {
        event.preventDefault();
        require('electron').shell.openExternal(url);
    }
}

function loadHtml () {
    window.loadURL(url.format({
        pathname: ENTRY_HTML,
        protocol: 'file:',
        slashes: true
    }));
}
function onWindowClosed () {
    window = null;
}
