MiniCssExtractPlugin - 释放 CSS 模块文件
======================================

## 知识点

* 使用 MiniCssExtractPlugin 插件，将 CSS 文件独立打包

## 官网

https://webpack.docschina.org/plugins/mini-css-extract-plugin/

## 实战演习/说明讲解

+ 安装 MiniCssExtractPlugin 插件
+ 修改 webpack.config.js 导入 MiniCss 插件
+ 修改 html 组件，引入 style.css
+ 打包编译确认

## 操作步骤

### 安装 MiniCssExtractPlugin 插件

```bash
$ npm install --save-dev mini-css-extract-plugin
```

### 修改 webpack.config.js 导入 MiniCss 插件

*webpack.config.js*

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
...
    plugins: [
...
        new MiniCssExtractPlugin({
            filename: 'bundle-[contenthash].css',
        }),
    ],
...
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
...
```

### 修改 html 组件，引入 style.css

*/src/index.js*

```js
import '../styles/style.css'
import data from '../data.json'
function mycomponent() {
    const element = document.createElement('div');
    element.innerHTML = `<h1>Webpack5入门开发</h1><hr/>`
    data.forEach(item => {
        element.innerHTML += `<h2>${item.name} : ${item.price}</h2>`;
    });
    return element;
}
document.body.appendChild(mycomponent());
```

### 打包编译确认

```bash
# 确认 /dist/bundle-xxxxxxx.css 文件输出
$ npm run build
# 使用 /dist/ 文件夹启动 http-server
$ npm run dev
```