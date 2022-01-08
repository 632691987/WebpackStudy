初始化 webpack 工程
==================

## 知识点

* 使用 npm 工具初始化 webpack 工程

*前提: 安装好 Node.js 工具*

## 实战演习/说明讲解

+ 使用 npm 工具初始化 webpack 工程

## 操作步骤

### 使用 npm 工具初始化 webpack 工程

```bash
$ mkdir wpweb5
$ cd wpweb5
$ npm init -y
# 安装 webpack
$ npm install -D webpack webpack-cli
# 版本确认
$ npx webpack -v
$ cat package.json
# 安装 http-server
$ npm install -D http-server
# 启动本地 http 服务器
$ npx http-server ./ -d -c-1 -a -p 3000
$ npx http-server -v
# 编写一个 html 页面
$ nano index.html
```

*index.html*

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>小马学 Webpack5</title>
</head>
<body>
    <h1>Webpack5 真不错！</h1>
    <hr />
</body>
</html>
```