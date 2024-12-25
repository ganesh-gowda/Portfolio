import url from 'rollup-plugin-url';

export default {
  input: 'src/Development.jsx',  // Entry point for your app
  output: {
    file: 'dist/bundle.js',  // The output file
    format: 'es',  // Module format (can be 'es', 'cjs', etc.)
  },
  plugins: [
    url({
      include: [
        '**/*.jpg', '**/*.png', '**/*.svg', // Images
        '**/*.ttf', '**/*.woff', '**/*.woff2' // Fonts
      ], 
      limit: 10 * 1024,  // Max file size to be inlined in the bundle (10 KB)
      publicPath: '/assets/',  // Path to where assets will be served from
    }),
  ],
};
