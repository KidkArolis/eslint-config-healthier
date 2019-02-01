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

  return config
}
