// const webpack = require('webpack');

module.exports = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
    url: false,
  },
  env: {
    PUBLIC_URL: "https://nelilly.github.io/svg-zoo",
    assetPrefix: './'
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'babel-loader',
        },
        {
          loader: 'react-svg-loader',
          options: {
            jsx: true, // true outputs JSX tags
          },
        },
      ],
    });

    return config;
  },
  devIndicators: {
    autoPrerender: false,
  },
};
