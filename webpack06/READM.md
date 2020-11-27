# 如何在 webpack 中使用 babel

## 安装 babel-loader、@babel/core

`npm install --save-dev babel-loader @babel/core`

## 在 webpack.config.js 中配置

```js
module: {
  rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }];
}
```

## 安装@babel/preset-env

`npm install @babel/preset-env --save-dev`

## 在 webpack.config.js 中配置

```js
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  ];
}
```

## 以上 4 步只是简单的 es6 部分语法转化成 es5 语法，如果你想全部转换的话，需要安装

`npm install --save @babel/polyfill`

## 并在每个文件顶部写上

`import "@babel/polyfill";`

## 直接这样，它会把所有的 es6 语法转换成 es5 语法，如果你只想转换文件中使用的语法，需要配置 webpack.config.js

```js
  module:{
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",options:{
        "presets": [["@babel/preset-env",{
          useBuiltIns:'usage'
        }]]
      }}
    ]
  },
```

## 生成.babelrc 文件

你可以将 babel 配置项内的 options 字段提出来，在根目录下创建一个.babelrc 文件。
