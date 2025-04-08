## ⚠️ Deprecated

This project is no longer actively maintained.

It is recommended to use [NeoStandard](https://github.com/neostandard/neostandard) instead. NeoStandard offers a modern approach to JavaScript linting, compatible with ESLint's flat config and built for today's ecosystem.

To migrate, you can follow these steps:

```bash
# 1. Uninstall healthier
npm uninstall healthier

# 2. Install NeoStandard and ESLint
npm install -D neostandard eslint

# 3. Generate an ESLint flat configuration file (eslint.config.js)
#    Use --esm for ESM projects or omit for CJS projects
npx neostandard --esm > eslint.config.js

# 4. Run ESLint
eslint . # Or specify your source files/directories
```

NeoStandard provides a similar zero-config experience but leverages the latest ESLint features and community best practices.

# eslint-config-healthier

Eslint config for https://github.com/KidkArolis/healthier. Healthier is an opinionated linter that only applies non code style related linting rules, which makes it a great companion for code formatters such as Prettier.

## Usage

    npm i -D eslint-config-healthier

Add to your .eslintrc:

```json
{
  "extends": ["healthier"]
}
```

And optionally, for extra rules for React:

```json
{
  "extends": ["healthier", "healthier/react"]
}
```
