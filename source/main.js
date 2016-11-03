const {
    app,
    Menu,
    BrowserWindow
} = require('electron');
const path = require('path');

const indexPath = path.join('file://', __dirname, 'index.html');
const ScreenWidth = 683,
    ScreenHeight = 384;

let win;

app.on('ready', () => {
    createWindow();
});
// Quit when all windows are closed.

app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
});

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: ScreenWidth,
        height: ScreenHeight,
				useContentSize:true,
				resizable:false,
				minimizable:true,
				maximizable:false,
				alwaysOnTop:true
    });

    win.setMenu(null);
    // and load the index.html of the app.
    win.loadURL(indexPath);

    // Open the DevTools.
    // win.webContents.openDevTools();
    console.log(win);
    // Emitted when the window is closed.

    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    });
};
/*

*/
