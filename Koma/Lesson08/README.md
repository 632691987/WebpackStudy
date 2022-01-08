写个 html 组件
=============

## 知识点

* 写个 html 组件, 并打包运行它

## 实战演习/说明讲解

+ 修改 package.json 设置
+ 写个 html 组件
+ 从主页面 index.js 中调用组件
+ 运行确认动作

## 操作步骤

### 修改 package.json 设置

*package.json*

```json
...
    "build": "webpack --config webpack.config.js",
    "dev": "npx http-server ./ -d -c-1 -a -p 3000"
...
```

### 写个 html 组件

*src/index.js*

```js
function mycomponent() {
    const element = document.createElement('div');
    element.innerHTML = "<h1>我的 HTML 组件，帅哭了！</h1>";
    return element;
}
document.body.appendChild(mycomponent());

```

### 从主页面 index.js 中调用组件

*index.html*

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Webpack5</title>
    <script>
    </script>
</head>
<body>
    <h1>Webpack5</h1>
    <hr />
    <script src="./dist/bundle-XXXXXXXXXXXXX.js"></script>
</body>
</html>
```

### 运行确认动作

```bash
# 打包编译
$ npm run build
# 开发运行
$ npm run dev
```
