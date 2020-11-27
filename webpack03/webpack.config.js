const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'boundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            // 不管你是在js中直接引入css,还是在css中再引入css文件。加上下面的importLoaders，都会走sass-loader和postcss-loader。
            options: {
              importLoaders: 2,
              modules: true, // 应用css Modules
            },
          },
          'sass-loader',
          'postcss-loader',
        ],
      },
    ],
  },
};
