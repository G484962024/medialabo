b = document.querySelector('button#henkou');
b.addEventListener('click', changeDom);

function changeDom() {
    //ヨットを追加
    let l = document.createElement('li');
    let u = document.querySelector('ul#kazoeuta');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = 'ヨット';

    //ブルームーンの画像を貼り付ける
    let i = document.querySelector('img#bluemoon');
    i.setAttribute('src', 'bluemoon.jpg');

    //拓大のリンク追加
    let a = document.createElement('a');
    let p = document.querySelector('p#takudai');
    p.insertAdjacentElement('afterend', a);
    a.textContent = "拓殖大学HP";
    a.setAttribute("href", 'https://www.takushoku-u.ac.jp');

    //餅を削除
    l = document.querySelector('li#mochi');
    l.remove();
    
    //「ul#kassen」を削除
    u = document.querySelector('ul#kassen');
    u.remove();
    
    //光の三原色追加
    u = document.createElement('ul');
    l = document.createElement('li');
    l.textContent = '赤';
    u.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = '緑';
    u.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = '青';
    u.insertAdjacentElement('beforeend', l);
    p = document.querySelector('p#primary');
    p.insertAdjacentElement('afterend', u);
}