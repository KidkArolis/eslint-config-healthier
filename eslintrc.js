module.exports = {
  extends: [
    './configs/standard.js',
    './configs/standard-jsx.js',
    './configs/prettier-react.js',
    './configs/prettier-standard.js',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/babel',
    'prettier/flowtype',
    'prettier/unicorn',
    'prettier/vue'
  ],
  plugins: ['healthier']
}
