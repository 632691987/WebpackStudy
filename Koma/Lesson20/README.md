支持 TypeScript 语言编码编译
==========================

## 知识点

* 使 Web 工程采用 TypeScript 语言开发，规范代码

## 官网

https://webpack.docschina.org/guides/typescript/

### TypeScript

https://www.typescriptlang.org/

## 实战演习/说明讲解

+ 安装 TypeScript 编译器和装载器
+ 修改 webpack.config.js 导入 TypeScript 配置
+ 添加 TypeScript 配置文件
+ 使用 TypeScript 语言改写 html 组件
+ 打包编译确认

## 操作步骤

### 安装 TypeScript 编译器和装载器

```bash
$ npm install --save-dev typescript ts-loader @types/lodash
```

### 修改 webpack.config.js 导入 TypeScript 配置

*webpack.config.js*

```js
module.exports = {
...
    entry: './src/index.ts',
...
    module: {
        rules: [
...
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}
```

### 添加 TypeScript 配置文件

*tsconfig.json*

```json
{
    "compilerOptions": {
        "outDir": "./dist/",
        "noImplicitAny": true,
        "module": "es6",
        "target": "es5",
        "jsx": "react",
        "allowJs": true,
        "moduleResolution": "node"
    }
}
```

### 使用 TypeScript 语言改写 html 组件

*/src/index.ts*

```ts
import '../styles/style.css'
import * as _ from 'lodash';

function mycomponent() {
    const element = document.createElement('div');
    element.innerHTML = `<h1>Webpack5入门开发</h1><hr/>`
    element.innerHTML += _.join(['Genshin Impact', 'is', 'good game.'], '-----');
    element.classList.add('myclass');

    return element;
}
document.body.appendChild(mycomponent());
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
