加载 JSON 数据文件
=================

## 知识点

* 为 Web 工程加载 JSON 数据文件

## 实战演习/说明讲解

+ 编写 JSON 数据文件
+ 编写 html 组件，引用 JSON 数据
+ 打包编译确认

## 操作步骤

### 编写 JSON 数据文件

*/data.json*

```json
[
    {
        "name": "GTA5",
        "price": 4999
    },
    {
        "name": "塞尔达传说",
        "price": 3899
    },
    {
        "name": "马力欧传奇",
        "price": 1988
    }
]
```

### 编写 html 组件，引用 JSON 数据

*/src/index.js*

```js
import '../styles/style.css'
// 导入 json 数据
import data from '../data.json'

function mycomponent() {
    const element = document.createElement('div');

    data.forEach(item => {
        element.innerHTML += `<h2>${item.name} : ${item.price}</h2>`;
    });

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