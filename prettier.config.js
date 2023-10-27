module.exports = {
  trailingComma: 'all',
  arrowParens: 'always',
  singleQuote: true,
  singleAttributePerLine: true,
  printWidth: 100,
  importOrder: [
    '^types$',
    '^(react|react-dom)$',
    '^next(.*)$',
    '<THIRD_PARTY_MODULES>',
    '',
    '^(src|vectors|images|utils|hooks|queries|store|styles|config|navigators|screens|static)(/.*|$)',
    '^(pages|layouts|modules|common)(/.*|$)',
    '',
    '^[./]',
  ],
  plugins: [require('prettier-plugin-tailwindcss'), require('@ianvs/prettier-plugin-sort-imports')],
};
