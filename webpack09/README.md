# webpack 如果分别配置生产环境和开发环境

分别创建两种环境的配置文件，即 webpack.dev.js 和 webpack.prod.js，然后将两个文件的共有部分提取出来，放到 wenpack.common.js 文件中。安装依赖 wenpack-merge 将 webpack.common.js 文件分别合并到两种环境的配置文件。

## 自己实现一个代码分割 code splitting

你只需要将第三方库文件自己单独创建一个文件引入，然后在 webpack 配置文件中的 entry 配置项，再定义一个变量引入这个文件。 如：

```js
  entry: {
        main: './src/index.js',
        lodash:'./src/lodash.js'
    }
```

## 注意：output 配置项中的 filename 字段需要使用'[name].js',这样就可以原样输出文件名。

```js
output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    }
```
