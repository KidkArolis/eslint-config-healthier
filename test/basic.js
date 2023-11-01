var config = require('../')
var test = require('tape')

test('test basic properties of config', function (t) {
  t.ok(isObject(config.extends))
  t.ok(isObject(config.plugins))
  t.end()
})

function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}
