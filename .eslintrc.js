module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  plugins: ["jest"],
  rules: {},
};
