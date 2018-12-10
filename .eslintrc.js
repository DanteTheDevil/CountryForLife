module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
  ],
  "plugins": [
    "react",
    "babel"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "parser": "babel-eslint",
  "settings": {},
  "rules": {
    "react/prop-types": [1, {
      "ignore": ["className"]
    }],
    "react/forbid-component-props": 0,
    "eqeqeq": ["error", "always"],
    "arrow-parens": ["error", "as-needed"],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "ignoredNodes": [ "JSXAttribute", "JSXSpreadAttribute", ],
      }
    ],
    "max-len": [
      "error",
      {
        "ignoreTrailingComments": true,
        "ignoreComments": true,
        "code": 100
      }
    ],
    "linebreak-style": [
      0,
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "brace-style": ["error", "1tbs"],
    "keyword-spacing": ["error", {"before": true, "after": true}],
    "new-cap": ["error", { "newIsCap": true }],
    "no-var": ["error"],
    "prefer-const": "error",
    "one-var": ["error", "never"],
    "space-infix-ops": "error",
    "no-nested-ternary": "error",
    "max-params": ["error", 3],
    "space-before-function-paren": ["error", "always"],
    "no-console": ["error", { "allow": ["warn", "error"]}],
    "no-unused-vars": 0
  }
};
