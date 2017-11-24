const path = require('path')
const utils = require('loader-utils')

module.exports = source => {
  const options = utils.getOptions(this) || {}
  const styleFile = options.style || 'dist/main.css'
  const scopeName = options.scoped || '@humans/[\\w-]+'
  const lineReg = new RegExp(`^[\\s]*import[\\w\\s,{}]+'${scopeName}'$`, 'gm')
  const pkgReg = new RegExp(`${scopeName}`, 'g')
  const matched = source.match(lineReg)

  if (matched && matched.length > 0) {
    matched.forEach(line => {
      const pkg = line.match(pkgReg)[0]
      const style = `import '${pkg}/${styleFile}'`
      source = source.replace(line, '$&\n  ' + style)
    })
  }

  return source
}
