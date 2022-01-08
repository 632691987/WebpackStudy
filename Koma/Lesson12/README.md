## 实战演习/说明讲解

+ 设置内置的资源模块
+ 准备显示的图片
+ 修改 html 组件引用图片
+ 打包编译确认

## 操作步骤

### 设置内置的资源模块

*webpack.config.js*

```js
...
    {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    },
...
```

### 准备显示的图片

*/images/webpack.png*

### 修改 html 组件引用图片

*/pages/index.js*

```js
import webpackImage from '../images/webpack.png'
...
    const myImg = new Image();
    myImg.src = webpackImage;
    element.appendChild(myImg);
...
```

### 打包编译确认

```bash
$ npm run build
$ nano index.html
$ npm run dev
```