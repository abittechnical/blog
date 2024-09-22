/** @type {import("prettier").Config} */

export default {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  plugins: [],
  overrides: [
    {
      files: ['*.mdx', '*.md'],
      options: {
        printWidth: 42,
        semi: false,
      },
    },
  ],
};
