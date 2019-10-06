module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier"],
  plugins: ["react", "jsx-a11y", "import", "react-native"],
  env: {
    browser: true,
    node: true
  },
  globals: {
    document: false,
    window: false
  },
  rules: {
    radix: "off",
    indent: "off",
    "no-underscore-dangle": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "linebreak-style": 0,
    "react/prop-types": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "import/extensions": 0,
    "no-param-reassign": [
      2,
      {
        props: false
      }
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"]
      }
    ]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".android.js", ".ios.js"]
      }
    }
  }
};
