module.exports = {
  'Demo test GitHub'(client) {
    console.log(client.globals.beforeEach)
    console.log(client.globals.before)
    client
      .url('http://github.com/nightwatchjs/nightwatch')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('.container h1 strong a')
      .assert.containsText(
        '.container h1 strong a',
        'nightwatch',
        'Checking project title is set to nightwatch',
      )
  },
}
