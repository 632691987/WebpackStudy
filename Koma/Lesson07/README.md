动态生成打包文件名
===============

## 知识点

* 动态生成打包文件名, 每次可以生成不同的文件名

## 实战演习/说明讲解

+ 修改 webpack.config.js 文件
+ 重新打包工程

## 操作步骤

### 修改 webpack.config.js 文件

*webpack.config.js*

```js
const path = require('path');
const now = new Date();

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: `bundle-${now.getTime()}.js`,
        path: path.resolve(__dirname, "dist"),
        clean: true,
    }
}
```

### 重新打包工程

```bash
$ npm run build
>确认生成不同的文件名
```