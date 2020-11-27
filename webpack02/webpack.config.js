const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'boundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /.(png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[hash].[ext]', // 这样就还会保持原来的文件名
            outputPath: 'images/', // 图片打包输出的路径
            limit: 2048, // 限制文件大小(如果图片文件大于该值会打包出图片文件)
          },
        },
      },
    ],
  },
};
