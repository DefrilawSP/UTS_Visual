const electron = require("electron");

const {
    app,
    BrowserWindow,
    Menu,
    ipcMain
} = electron;

let mainWindow;
let kasirWindow;
let produkWindow;

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        title: "Main Menu"
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.on("closed", () => {

        app.quit()
        mainWindow = null;
    });

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);

});

const kasirWindowCreator = () => {
    kasirWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 800,
        height: 600,
        title: "Kasir"
    });

    kasirWindow.setMenu(null);
    kasirWindow.loadURL(`file://${__dirname}/kasir.html`);
    kasirWindow.on("closed", () => (kasirWindow = null));
};

const produkWindowCreator = () => {
    produkWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 800,
        height: 600,
        title: "Katalog"
    });

    produkWindow.setMenu(null);
    produkWindow.loadURL(`file://${__dirname}/produk.html`);
    produkWindow.on("closed", () => (produkWindow = null));
};

ipcMain.on("appointment:request:main", event => {
    console.log("Masuk");
});
ipcMain.on("appointment:request:produk", event => {
    console.log("Produk")
});
ipcMain.on("appointment:request:kasir", event => {
    console.log("Kasir")
});

const menuTemplate = [{
        label: "Menu",
        submenu: [
            {
                label: "Kasir",
                click() {
                    kasirWindowCreator();
                }
            },
            {
                label: "Katalog",
                click() {
                    produkWindowCreator();
                }
            },
            {
                label: "Quit",
                accelerator: process.platfrom === "darwin" ? "Command+Q" : "CTRL + Q",
                click() {
                    app.quit();
                }
            }
        ]
    },

    {
        label: "View",
        submenu: [{
            role: "reload"
        }, {
            role: "toggledevtools"
        }]
    }
]