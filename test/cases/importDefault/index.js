const fs = require('fs')
const path = require('path')

module.exports = {
  input: fs.readFileSync(path.join(__dirname, './input.vue'), { encoding: 'utf8' }),
  expect: fs.readFileSync(path.join(__dirname, './expect.vue'), { encoding: 'utf8' })
}
