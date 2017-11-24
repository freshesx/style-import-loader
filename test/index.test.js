const loader = require('../src/index.js')

describe('style-import-loader', () => {
  test('import style', () => {
    const importDefault = require('./cases/importDefault')
    const output = loader(importDefault.input)
    expect(output).toEqual(importDefault.expect)
  })

  test('import null', () => {
    const importDefault = require('./cases/importNull')
    const output = loader(importDefault.input)
    expect(output).toEqual(importDefault.expect)
  })
})
