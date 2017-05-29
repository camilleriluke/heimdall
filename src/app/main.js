const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

const WIDTH = 1280;
const HEIGHT = 800;
const ENTRY_HTML = path.join(__dirname, '../../build/index.html');

// Leave a global reference to the object, so the GC doesn't collect it.
let window;

app.on('ready', createWindow)
app.on('window-all-closed', onAllWindowsClosed);
app.on('activate', onActivate);

function createWindow () {
    window = new BrowserWindow({ width: WIDTH, height: HEIGHT })
    window.on('closed', onWindowClosed);
    loadHtml();
    openDevTools();
}

function onAllWindowsClosed () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
}

function onActivate () {
    if (window === null) {
        createWindow();
    }
}

function openDevTools () {
    window.webContents.openDevTools();
}

function loadHtml () {
    window.loadURL(url.format({
        pathname: ENTRY_HTML,
        protocol: 'file:',
        slashes: true
    }))
}
function onWindowClosed () {
    window = null;
}