module.exports = {
  'Demo test GitHub'(client) {
    client
      .url('http://github.com/nightwatchjs/nightwatch')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('#repository-container-header h1 strong a')
      .assert.containsText(
        '#repository-container-header h1 strong a',
        'nightwatch',
        'Checking project title is set to nightwatch',
      )
  },
}
