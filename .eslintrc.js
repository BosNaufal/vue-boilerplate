module.exports = {
  "extends": [
    "eslint:recommended",
    "vue",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  "plugins": [
    "vue",
    "import",
    "promise",
    "html"
  ],
  "settings": {
    "html/report-bad-indent": 2,
  },
  "rules": {
    "promise/always-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/catch-or-return": "error",
    "promise/no-native": "off",
    "promise/no-nesting": "warn",
    "promise/no-promise-in-callback": "warn",
    "promise/no-callback-in-promise": "warn",
    "promise/avoid-new": "warn",
    "semi": 0
  }
};
