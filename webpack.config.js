const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const port = 3000;
const dist = path.join(__dirname, 'dist');
const src = path.join(__dirname, 'src');
const host = 'localhost';

module.exports = (_, { mode }) => {
  return {
    entry: './index.tsx',
    devtool: 'source-map',
    context: src,
    devServer: {
      open: true,
      port,
      hot: true,
      historyApiFallback: true,
      host,
    },
    resolve: {
      modules: [src, 'node_modules'],
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        src,
      },
    },
    output: {
      path: dist,
      publicPath: mode === 'development' ? `http://${host}:${port}/` : undefined,
      filename: `js/[name].js`,
      chunkFilename: `js/[name].js`,
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          loader: require.resolve('babel-loader'),
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          exclude: /\.module\.scss$/,
        },
        {
          test: /\.module\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]_[local]-[hash:base64:5]',
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.svg$/i,
          oneOf: [
            {
              issuer: /\.[jt]sx?$/,
              resourceQuery: /react/, // `?react` will trigger this
              use: ['@svgr/webpack'],
            },
            {
              type: 'asset/resource',
              generator: {
                filename: 'images/[name].[hash][ext]',
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name].[hash][ext]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        favicon: path.resolve(__dirname, 'public/favicon.svg'),
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/[name].css',
      }),
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          configFile: path.join(__dirname, 'tsconfig.json'),
        },
      }),
    ],
  };
};
