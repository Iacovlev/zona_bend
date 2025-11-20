module.exports = {
  root: true,
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  rules: {
    "at-rule-no-unknown": [true, { ignoreAtRules: ["include", "mixin"] }],
    "selector-class-pattern": null
  }
};