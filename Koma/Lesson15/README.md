## 实战演习/说明讲解

+ 安装 HtmlWebpackPlugin 插件
+ 修改 webpack.config.js 配置插件
+ 修改 package.json 更新 http-server 服务文件夹
+ 删除 /index.html
+ 打包编译确认

```bash
$ npm install --save-dev html-webpack-plugin
```

### 修改 webpack.config.js 配置插件

*webpack.config.js*

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
...
    plugins: [
        new HtmlWebpackPlugin({
            title: '我的Webpack5',
        }),
    ],
...
```

### 修改 package.json 更新 http-server 服务文件夹

*package.json*

```json
...
    "dev": "npx http-server ./dist/ -d -c-1 -a -p 3000"
...
```

### 打包编译确认

```bash
$ npm run build
$ nano index.html
$ npm run dev
```

#### 修改 html 组件

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