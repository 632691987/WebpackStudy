打包第一个 javascript 文件
========================

## 知识点

* 使用 webpack 打包第一个 javascript 文件

## 实战演习/说明讲解

+ 编写 javascript 文档
+ 使用 webpack 进行打包
+ 从 html 文档引用打包后的 js 文档

## 操作步骤

### 编写 javascript 文档

*src/index.js*

```js
function sayhelo(name) {
    return `你好 ${name}.`;
}
console.log(sayhelo('webpack5'));
```

### 使用 webpack 进行打包

```bash
# 执行编译前的文件
$ node src/index.js
# 编译项目
$ npx webpack
$ npx webpack --mode production
$ npx webpack --mode development
# 执行编译后的文件
$ node dist/main.js
# 确认模式状态
$ npx webpack --stats detailed --mode production
$ npx webpack --stats detailed --mode development
```

### 从 html 文档引用打包后的 js 文档

*index.html*

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>小马学 Webpack5</title>
    <script src="./dist/main.js"></script>
</head>
<body>
    <h1>Webpack5 真不错！</h1>
    <hr />
</body>
</html>
```

```bash
# 启动本地 http 服务器
$ npx http-server ./ -d -c-1 -a -p 3000
```

## 小马部落

https://discord.gg/VSKw72P

## 课程文件

+ 小马部落Discord专区共享(三级会员)

## 小马视频频道

https://komavideo.com

## 深学AWS

https://deeplearnaws.com
