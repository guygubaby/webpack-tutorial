# url-loader 与 file-loader 有什么不同

url-loader 打包图片时不会输出图片文件，只是将图片转化为 base64 链接放到 bundle.js（输出文件）。 使用 url-loader 好处是如果图片文件大小小的话，可以使用它，因为这样避免请求图片，直接一同加载 js 文件。但是如果文件特别大，不推荐使用它。使用 file-loader。

## url-loader 有没有两全的方法，文件大就打包出来，小就不打包

在 options 属性对象加上字段 limit:<字节值>, 限制文件大小(如果图片文件大于该值会打包出图片文件)。

```js
module: {
  rules: [
    {
      test: /\.(jpg|png|gif)$/, // 可以多加几个格式的文件
      use: {
        loader: 'url-loader', // file-loader/url-loader
        options: {
          // placeholders 占位符
          name: '[name].[ext]', // 这样就还会保持原来的文件名
          outputPath: 'images/', // 图片打包输出的路径
          limit: 2048, // 限制文件大小(如果图片文件大于该值会打包出图片文件)
        },
      },
    },
  ];
}
```
