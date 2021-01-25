module.exports = {
  extends: [
    // "stylelint-config-airbnb",
    "stylelint-config-rational-order",
    //  "stylelint-prettier/recommended",
    "stylelint-config-recommended-scss",
  ],
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    "max-empty-lines": 1,
  },
};
