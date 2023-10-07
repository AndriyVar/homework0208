'use strict'

const urlParse = function(url) {
    let arr = url.split('/');

    let str = `Протокол: ${arr[0]}. Домен: ${arr[2]}. Шлях: ${arr[3]}.`;

    return str;
}

let url = prompt('Введіть url');

console.log(urlParse(url));