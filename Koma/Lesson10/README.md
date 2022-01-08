建立全局样式单 style.css
======================

## 知识点

* 为 Web 工程建立全局样式单 style.css

## 实战演习/说明讲解

+ 安装样式单加载器
+ 修改 webpack.config.js, 注册css加载器模块
+ 编写全局样式单
+ 编译工程, 修改index.html, 确认动作

## 操作步骤

### 安装样式单加载器

```bash
$ npm install --save-dev style-loader css-loader
```

### 修改 webpack.config.js, 注册css加载器模块

*webpack.config.js*

```js
...
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
...
```

### 编写全局样式单

*/styles/style.css*

```css
body {
    background-color: antiquewhite;
}
```

*/pages/index.js*

```js
import '../styles/style.css'
```

### 编译工程, 修改index.html, 确认动作

```bash
$ npm run build
$ nano index.html
$ npm run dev
```

Done.

## 小马部落

https://discord.gg/VSKw72P

## 课程文件

+ 小马部落Discord专区共享(三级会员)

## 小马视频频道

https://komavideo.com

## 深学AWS

https://deeplearnaws.com
