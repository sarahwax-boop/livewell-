/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // Add the '@' and '/postcss' here
    autoprefixer: {},
  },
};

export default config;