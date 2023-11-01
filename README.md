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
