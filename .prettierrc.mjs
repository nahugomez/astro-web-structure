/** @type {import("prettier").Config} */
/** TODO: Integrar con ESLint */

export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.{astro,js,jsx,ts,tsx}',
      options: {
        parser: 'astro',
      },
    },
  ],
  arrowParens: 'always',
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  bracketSpacing: true,
  bracketSameLine: false,
  quoteProps: 'as-needed',
  endOfLine: 'lf',
  jsxSingleQuote: false,
  proseWrap: 'always',
  htmlWhitespaceSensitivity: 'strict',
  embeddedLanguageFormatting: 'auto',
};
