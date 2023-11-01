const { ESLint } = require('eslint')
const test = require('tape')

test('load config in eslint to validate all rule syntax is correct', async function (t) {
  const eslint = new ESLint({
    useEslintrc: false,
    overrideConfigFile: 'eslintrc.js',
  })

  const code = 'var foo = 1\nvar bar = function () {}\nbar(foo)\n'

  const [result] = await eslint.lintText(code)
  t.equal(result.errorCount, 0)
  t.end()
})
