module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": ["off", {"singleQuote": true, "parser": "flow"}]
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)"],
      env: {
        mocha: true
      }
    }
  ]
};
