module.exports = {
  extends: ['./configs/standard-react.js', './configs/react-hooks.js'],
  plugins: ['healthier'],
  rules: {
    // turn this off since it's really up to the project
    'react/prop-types': 'off',

    // turn on only the rules of hooks,
    // the exhaustive deps give too many false positives
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',

    // turn on some extra rules from eslint-config-react-app
    // that are not already turned on in eslint-config-standard-jsx
    'react/no-typos': 'error',
    'react/require-render-return': 'error',
    'react/style-prop-object': 'error',
    'react/no-direct-mutation-state': 'warn',
    'react/no-danger-with-children': 'error'
  }
}
