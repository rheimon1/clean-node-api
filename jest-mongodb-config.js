module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest'
    },
    binary: {
      version: '4.4.0',
      skipMD5: true
    },
    autoStart: false
  }
}
