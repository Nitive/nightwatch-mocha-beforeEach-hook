module.exports = {
  before() {
    console.log('GLOBAL before')
  },

  beforeEach() {
    console.log('GLOBAL beforeEach')
  },

  after() {
    console.log('GLOBAL after')
  },

  afterEach() {
    console.log('GLOBAL afterEach')
  },
}
