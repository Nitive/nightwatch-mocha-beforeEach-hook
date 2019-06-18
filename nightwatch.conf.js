const common = {
  src_folders: ['./tests'],
  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        server_path: './node_modules/.bin/chromedriver',
        port: 9515,
      },
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },
  },
  globals_path: './globals.js',
}

const mocha = {
  ...common,
  filter: '**/*.mocha.js',
  test_runner: {
    type: 'mocha',
  },
}

const nightwatch = {
  ...common,
  filter: '**/*.nightwatch.js',
}

module.exports = process.env.MOCHA ? mocha : nightwatch
