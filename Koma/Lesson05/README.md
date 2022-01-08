打包多个 javascript 文件
======================

## 知识点

* 使用 webpack 打包多个 javascript 文件

## 实战演习/说明讲解

+ 编写 common.js 共同函数文件
+ 从 index.js 引用 common.js 文件的功能
+ 打包工程, 动作确认

## 操作步骤

### 编写 common.js 共同函数文件

*/src/common.js*

```js
export function outlog(content) {
    console.log("INFO", content);
};
```

### 从 index.js 引用 common.js 文件的功能

*/src/index.js*

```js
import { outlog } from "./common";

outlog('我的日志');

function sayhelo(name) {
    return `helo ${name}.`;
}

console.log(sayhelo('webpack5'));
```

### 打包工程, 动作确认

```bash
# 打包工程
$ npx webpack
# 执行打包后的代码
$ node dist/bundle.js
```