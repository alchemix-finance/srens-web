/** @type {import("prettier").Options} */
const config = {
  arrowParens: "always",
  singleQuote: false,
  jsxSingleQuote: false,
  printWidth: 120,
  tabWidth: 2,
  semi: false,
  plugins: ["prettier-plugin-tailwindcss"],
}

module.exports = config
