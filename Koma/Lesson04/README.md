使用 webpack.config.js 配置文件
=============================

## 知识点

* 使用 webpack.config.js 配置文件打包项目

## 实战演习/说明讲解

+ 配置 webpack.config.js 文件
+ 按照配置文件打包工程
+ 修改 package.json 增加打包命令

## 操作步骤

### 配置 webpack.config.js 文件

*webpack.config.js*

```js
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "out"),
    }
}
```

### 按照配置文件打包工程

```bash
$ npx webpack
$ node out/bundle.js
```

### 修改 package.json 增加打包命令

*package.json*

```json
...
  "scripts": {
    "build": "webpack --config webpack.config.js"
  },
...
```

```bash
$ rm -fr out
$ npm run build
```

## 小马部落

https://discord.gg/VSKw72P

## 课程文件

+ 小马部落Discord专区共享(三级会员)

## 小马视频频道

https://komavideo.com

## 深学AWS

https://deeplearnaws.com
