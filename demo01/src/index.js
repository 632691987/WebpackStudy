import _ from 'lodash';
import '../styles/style.css'
import '../styles/myweb.scss'
import webpackImage from '../images/webpack.png'
import data from '../data.json'

function mycomponent() {
    const element = document.createElement('div');
    element.innerHTML = `<h1>Webpack5入门开发</h1><hr/>`
    data.forEach(item => {
        element.innerHTML += `<h2>${item.name} : ${item.price}</h2>`;
    });

    element.classList.add('myclass');
    element.innerHTML += "<h1>我的 HTML 组件，帅哭了！</h1>";
    element.innerHTML += _.join(['原神', '是个', '好游戏'], '-----');

    const myImg = new Image();
    myImg.src = webpackImage;
    element.appendChild(myImg);

    return element;
}
document.body.appendChild(mycomponent());