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

## Configuring rules

Healthier depends on the following plugins for extra rules:

- eslint-plugin-standard
- eslint-plugin-node
- eslint-plugin-import
- eslint-plugin-promise
- eslint-plugin-react
- eslint-plugin-react-hooks

But to avoid having you to install all of these, it renames the prefix of all of the rules that these plugins provide.

For example, if you want to turn off `react/prop-types` rule, you need to instead turn off `healthier/prop-types`. The same applies for all of the following rules:

```

standard/* -> healthier/*
node/* -> healthier/*
import/* -> healthier/*
promise/* -> healthier/*
react/* -> healthier/*
react-hooks/* -> healthier/*
```
