// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let seikai = 0;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let k = document.querySelector('span#kaisu');
let kaisu = Number(k.textContent);
b = document.querySelector('button#kaito');
b.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  

  let y = document.querySelector('input[name="yoso"]');
  let yoso = Number(y.value);

  let p = document.querySelector('span#answer');
  p.textContent = yoso;

  let reply = document.querySelector('p#result');

  k.textContent = kaisu;

  if (kaisu >= 4 || seikai === 1) {
    reply.textContent = '答えは ' + kotae + ' でした．すでにゲームは終わっています';
  }
  if (yoso === kotae && seikai === 0) {
    console.log('正解です．おめでとう!');
    seikai = 1;
  }
  if (kaisu === 3 && seikai === 0) {
    reply.textContent = 'まちがい．残念でした答えは ' + kotae + ' です．';
  }
  if (kaisu <= 2 && yoso < kotae) {
    reply.textContent = 'まちがい．答えはもっと大きいですよ';
  }
  if (kaisu <= 2 && yoso > kotae) {
    reply.textContent = 'まちがい．答えはもっと小さいですよ';
  }
  kaisu = kaisu + 1;
}