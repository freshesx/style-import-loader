const loader = require('../src/index.js')

describe('style-import-loader', () => {
  test('import style', () => {
    const importDefault = require('./cases/importDefault')
    const output = loader(importDefault.input)
    // expect(output).toEqual(importDefault.expect)
  })
})
