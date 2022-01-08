加载自定义字体 Supercell Magic Font
=================================

## 知识点

* 为 Web 工程加载自定义字体 - Supercell Magic Font

## 实战演习/说明讲解

+ 设置内置的资源模块
+ 准备使用的字体
+ 修改样式单文件，引用字体
+ 修改 html 组件设置显示字体
+ 打包编译确认

## 操作步骤

### 设置内置的资源模块

*webpack.config.js*

```js
...
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    },
...
```

### 准备使用的字体

*/fonts/supercell-magic-webfont.ttf*

### 修改样式单文件，引用字体

*/styles/style.css*

```css
@font-face {
    font-family: 'SupercellMagicFont';
    src: url('../fonts/supercell-magic-webfont.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
}

body {
    font-family: 'SupercellMagicFont';
    background-color: antiquewhite;
}
...
```

### 修改 html 组件设置显示字体

*/pages/index.js*

```js
import _ from 'lodash';
import '../styles/style.css'

function mycomponent() {
    const element = document.createElement('div');

    element.innerHTML = "<h1>This is my html component.</h1>";
    element.innerHTML += _.join(['Genshin Impact', 'is', 'good game.'], '-----');
    element.classList.add('myclass');

    return element;
}

document.body.appendChild(mycomponent());
```

### 打包编译确认

```bash
$ npm run build
$ nano index.html
$ npm run dev
```