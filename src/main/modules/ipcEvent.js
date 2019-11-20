import {ipcMain} from 'electron'
// 窗口是否最大化的标志
export default function () {
    ipcMain.on('window-min', () => {
        global.mainWindow.minimize();
    });
    ipcMain.on('window-close', () => {
        global.mainWindow.close();
    });
    ipcMain.on('window-max', (event, screenFlag) => {
        screenFlag ? global.mainWindow.unmaximize() : global.mainWindow.maximize();
    });
}