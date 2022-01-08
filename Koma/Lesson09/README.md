增加第三方依赖库 lodash
=====================

## 知识点

* 为 Web 工程增加第三方依赖库 lodash

## 官网

https://lodash.com/

## 实战演习/说明讲解

+ 安装 lodash 第三方库
+ 修改 html 组件，引入 lodash
+ 运行确认动作

## 操作步骤

### 安装 lodash 第三方库

```bash
$ npm install --save lodash
```

### 修改 html 组件，引入 lodash

*src/index.js*

```js
// 导入lodash
import _ from 'lodash';
function mycomponent() {
    const element = document.createElement('div');
    element.innerHTML = "<h1>我的 HTML 组件，帅哭了！</h1>";
    element.innerHTML += _.join(['原神', '是个', '好游戏'], '-----');
    return element;
}
document.body.appendChild(mycomponent());
```

### 运行确认动作

```bash
# 打包编译
$ npm run build
# 开发运行
$ npm run dev
```