使用开发服务器 webpack-dev-server
===============================

## 知识点

* 使用开发服务器 webpack-dev-server 热加载模块

## 官网

https://webpack.docschina.org/configuration/dev-server/

## 实战演习/说明讲解

+ 安装开发服务器 webpack-dev-server
+ 修改 webpack.config.js 增加开发服务器设置
+ 修改 package.json 增加开发服务器启动脚本
+ 打包编译确认

## 操作步骤

### 安装开发服务器 webpack-dev-server

```bash
$ npm install --save-dev webpack-dev-server
```

### 修改 webpack.config.js 增加开发服务器设置

*webpack.config.js*

```js
...
    devServer: {
        static: './dist',
        port: 3000,
    },
...
```

### 修改 package.json 增加开发服务器启动脚本

*package.json*

```json
...
    "serve": "webpack serve --config webpack.config.js"
...
```

### 打包编译确认

```bash
$ npm run serve
```

## 小马部落

https://discord.gg/VSKw72P

## 课程文件

+ 小马部落Discord专区共享(三级会员)

## 小马视频频道

https://komavideo.com

## 深学AWS

https://deeplearnaws.com
