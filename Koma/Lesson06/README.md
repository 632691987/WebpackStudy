+ 修改 index.html 引用 bundle.js 文件
+ 运行确认动作

*index.html*

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Webpack5</title>
    <script language="javascript">
        function btnClick1() {
            outlog('日志记录: 确定按钮被按下...');
            console.log(sayhelo('webpack5真不错啊！'));
        }
    </script>
</head>
<body>
    <h1>Webpack5</h1>
    <hr />
    <button onclick="btnClick1()">确定按钮</button>
    <script src="./dist/bundle.js"></script>
</body>
</html>
```

*/src/index.js*

```js
window.sayhelo = sayhelo;
window.outlog = outlog;
```

### 运行确认动作

```bash
$ npm run build
# 启动本地 http 服务器
$ npx http-server ./ -d -c-1 -a -p 3000
```
