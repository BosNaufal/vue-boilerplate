module.exports = {
  "extends": [
    "vue",
    "eslint:recommended",
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
    "html/indent": "2",   // code should start at the beginning of the line (no initial indentation).
    "html/indent": "space"
  },
  "rules": {
    "no-else-return": "error",
    "import/no-unresolved": 0,
    "promise/always-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/catch-or-return": "error",
    "promise/no-native": "off",
    "promise/no-nesting": "warn",
    "promise/no-promise-in-callback": "warn",
    "promise/no-callback-in-promise": "warn",
    "promise/avoid-new": "warn",
    "semi": 0,
    "prefer-const": ["error", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": false
    }],
    "import/first": ["error"],
    "import/newline-after-import": ["error"],
    "import/order": ["error", {
      "groups": ["external", "internal"]
    }]
  },
  "env": {
     "jquery": true,
     "browser": true,
     "node": true,
     "mocha": true,
     "es6": true
   }
};
