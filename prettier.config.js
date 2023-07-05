/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  trailingComma: 'all',
  arrowParens: 'always',
  singleQuote: true,
  printWidth: 100,
  singleAttributePerLine: true,
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
};
