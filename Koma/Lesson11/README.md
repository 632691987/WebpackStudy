* 建立样式单 class，应用到 html 组件

## 实战演习/说明讲解

+ 建立样式单 class
+ 从 html 组件中引用 class
+ 打包编译确认

## 操作步骤

### 建立样式单 class

*/styles/style.css*

```css
...
.myclass {
    font-size: 32px;
    color: brown;
    background-color: yellow;
    padding: 10px;
    margin: 5px;
    border-radius: 20px;
}
...
```

### 从 html 组件中引用 class

*/pages/index.js*

```js
...
    element.classList.add('myclass');
...
```

### 打包编译确认

```bash
$ npm run build
$ nano index.html
$ npm run dev
```