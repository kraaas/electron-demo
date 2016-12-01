'use strict'
const electron = require('electron')
const path = require('path')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const isDevEnv = process.env.NODE_ENV === 'development'

let mainWindow
let config = {}

if (isDevEnv) {
  config = require('../config')
  config.url = `http://localhost:${config.port}`
} else {
  config.url = `file://${__dirname}/dist/index.html`
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    icon: './icon.png'
  })

  mainWindow.setMenu(null)

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  mainWindow.loadURL(config.url)
  if (isDevEnv) {
    createDevtool()
  }
  console.log('mainWindow opened')
}

function createDevtool() {
  BrowserWindow.addDevToolsExtension(path.join(__dirname, '../node_modules/devtron'))
  let installExtension = require('electron-devtools-installer')
  installExtension.default(installExtension.VUEJS_DEVTOOLS)
    .then((name) => mainWindow.webContents.openDevTools())
    .catch((err) => console.log('An error occurred: ', err))
}
