var eslint = require('eslint')
var test = require('tape')

test('load config in eslint to validate all rule syntax is correct', function(t) {
  var CLIEngine = eslint.CLIEngine

  var cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'eslintrc.json'
  })

  var code = 'var foo = 1\nvar bar = function () {}\nbar(foo)\n'

  console.log(cli.executeOnText(code).results[0].messages)
  t.equal(cli.executeOnText(code).errorCount, 0)
  t.end()
})
