const webpack = require('webpack');
const isProd = (process.env.NODE_ENV || 'production') === 'production';
const assetPrefix = isProd ? '/svg-zoo/' : '';

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
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      }),
    );
    config.resolve.modules.push(__dirname);
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
