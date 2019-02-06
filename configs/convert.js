module.exports = config => {
  config = { ...config }

  config.plugins = []

  config.rules = Object.keys(config.rules).reduce((acc, rule) => {
    let key = rule
    let val = config.rules[rule]

    if (rule.includes('/')) {
      key = `healthier/${rule.split('/')[1]}`
    }

    acc[key] = val

    return acc
  }, {})

  // delete config.extends, because
  // only standard-react extends standard-jsx
  // but we are already extending both of them
  // if we don't do this, then eslint will
  // add standard-jsx on top of everything
  // healthier config extends and do that
  // without the healthier/* rule renaming
  delete config.extends

  return config
}
