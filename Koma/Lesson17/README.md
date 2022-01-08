## 实战演习/说明讲解

+ 修改 webpack.config.js 改变输出文件名生成方式
+ 打包编译确认

## 操作步骤

### 修改 webpack.config.js 改变输出文件名生成方式

*webpack.config.js*

```js
...
    output: {
        // filename: `bundle-${now.getTime()}.js`,
        filename: 'bundle-[contenthash].js',
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
...
```

### 打包编译确认

```bash
$ npm run build
```