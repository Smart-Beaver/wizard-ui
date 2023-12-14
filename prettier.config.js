/** @type {import("prettier").Config} */
module.exports = {
  trailingComma: 'none',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 120,
  endOfLine: 'lf',
  plugins: [require.resolve('prettier-plugin-tailwindcss')]
};
