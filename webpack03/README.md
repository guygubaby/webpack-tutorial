# 处理 css 样式文件打包为什么同时引入 style-loader、css-loader

css-loader 处理 css 样式，而 style-loader 则需要将 css 挂载到 head 标签里。所以一般他们俩搭配使用。

## 如果你想打包其他 css 预处理语言怎么办

可以借助相应的 loader,比如你想打包 scss 文件，你就可以借助 sass-loader。利用它编译成 css 文件。下载的时候下载相应的 loader 和语言就可以了。

## loader 加载顺序

从下到上，从右到左

## css3 样式前自动加兼容前缀

需要借助 postcss-loader。安装 postcss-loader 以及 autoprefixer 依赖。然后在根目录下创建并编辑 postcss.config.js 文件。

## 如果我在样式文件里再引入别的样式文件

你需要给 css-loader 配置参数 importLoaders:2。这里的 2 代表 css-loader 前面还有两个 loader 需要加载。

## 怎样避免样式全局污染

配置 css-loader 的参数：modules:true。
