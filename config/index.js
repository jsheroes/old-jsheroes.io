module.exports = {
  // this node is injected as is in app/next.config.js
  next: {
    distDir: '../build',
    poweredByHeader: false
  },
  // inform app/server.js about the app folder location
  appFolder: 'app',
  port: 4000
}
