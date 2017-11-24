const path = require('path')

module.exports = source => {
  const styleFile = 'dist/main.css'
  const scopeName = '@humans/[\\w-]+'
  const lineReg = new RegExp(`^[\\s]*import[\\w\\s,{}]+'${scopeName}'$`, 'gm')
  const pkgReg = new RegExp(`${scopeName}`, 'g')
  const matched = source.match(lineReg)

  matched.forEach(line => {
    const pkg = line.match(pkgReg)[0]
    const style = `import '${pkg}/${styleFile}'`
    source = source.replace(line, '$&\n  ' + style)
  })

  return source
}
