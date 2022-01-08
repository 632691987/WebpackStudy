CSS编程 - 导入 SASS 装载模块
==========================

## 知识点

* 为 Web 工程导入 SASS-CSS 装载模块

## 官网

https://sass-lang.com/

### sass-loader

https://webpack.docschina.org/loaders/sass-loader/

## 实战演习/说明讲解

+ 安装 sass-loader 装载器
+ 建立 SASS 样式单(SASS, SCSS)
+ 修改 webpack.config.js 导入 SASS 装载器
+ 修改 html 组件，引用 SASS 样式单
+ 打包编译确认

## 操作步骤

### 安装 sass-loader 装载器

```bash
$ npm install sass-loader sass --save-dev
```

### 建立 SASS 样式单

*/styles/myweb.scss*

```scss
$fg-color: red;
$bg-color: yellow;

body {
    color: $fg-color;
    background-color: $bg-color;
}
```

### 修改 webpack.config.js 导入 SASS 装载器

*webpack.config.js*

```js
...
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // 将 JS 字符串生成为 style 节点
                    'style-loader',
                    // 将 CSS 转化成 CommonJS 模块
                    'css-loader',
                    // 将 Sass 编译成 CSS
                    'sass-loader',
                ],
            },
...
```

### 修改 html 组件，引用 SASS 样式单

*/src/index.js*

```js
import '../styles/myweb.scss'
...
```

### 打包编译确认

```bash
$ npm run serve
```