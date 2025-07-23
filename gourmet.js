
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log('検索結果が2件あります');
  console.log('名前: ' + data.results.shop[0].name);
  console.log('アクセス: ' + data.results.shop[0].access);
  console.log('住所: ' + data.results.shop[0].address);
  console.log('予算: ' + data.results.shop[0].budget.name);
  console.log('キャッチコピー: ' + data.results.shop[0].catch);
  console.log('ジャンル: ' + data.results.shop[0].genre.name);
  console.log('営業時間: ' + data.results.shop[0].open);
  console.log('最寄駅: ' + data.results.shop[0].station_name);
  console.log('サブジャンル: ' + data.results.shop[0].sub_genre.name);
  console.log('名前: ' + data.results.shop[1].name);
  console.log('アクセス: ' + data.results.shop[1].access);
  console.log('住所: ' + data.results.shop[1].address);
  console.log('予算: ' + data.results.shop[1].budget.name);
  console.log('キャッチコピー: ' + data.results.shop[1].catch);
  console.log('ジャンル: ' + data.results.shop[1].genre.name);
  console.log('営業時間: ' + data.results.shop[1].open);
  console.log('最寄駅: ' + data.results.shop[1].station_name);
  console.log('サブジャンル: ' + data.results.shop[1].sub_genre.name);
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let x = 0;
  for(let n of data.results.shop){
    x = x + 1;
  }
  u = document.querySelector('div#result');
  p = document.createElement('h2');
  p.textContent = '検索結果が' + x + '件あります';
  p.insertAdjacentElement('beforeend', u);
  for(let n of data.results.shop){
    u = document.createElement('ul');
    l = document.createElement('li');
    l.textContent = '名前: ' + n.name;
    u.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = 'アクセス: ' + n.access;
    u.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = '住所: ' + n.address;
    u.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = '予算: ' + n.budget.name;
    u.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = 'キャッチコピー: ' + n.catch;
    u.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = 'ジャンル: ' + n.genre.name;
    u.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = '営業時間: ' + n.open;
    u.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = '最寄駅: ' + n.station_name;
    u.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = 'サブジャンル: ' + n.sub_genre.name;
    u.insertAdjacentElement('beforeend', l);
    p = document.querySelector('div#result');
    p.insertAdjacentElement('beforeend', u);
  }
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
b = document.querySelector('button#sendRequest');
b.addEventListener('click', sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let old = document.querySelector('#result');
  let p;
  let u;
  //p = document.querySelector('h2');
  //u = document.querySelector('p');
  //u.insertAdjacentElement('afterend', p);
  if(old){
    p = document.querySelector('h2');
    if(p!==null){
      p.remove();
    }
    old.remove();
  }
  u = document.querySelector('p#search');
  p = document.createElement('div');
  p.id = 'result';
  console.log(p);
  u.insertAdjacentElement('afterend', p);
	// URL を設定
  let key = document.querySelector('input[name="keyword"]');
  key = key.value;
	let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + key + '.json';

	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  // サーバから送られてきたデータを出力
	let data = resp.data;

  //p = document.createElement('h2');
  //u = document.querySelector('p');
  let x = 0;
  //for(let n of data.results.shop){
  //  x = x + 1;
  //}
  //p.textContent = '検索結果が' + x + '件あります';
  //u.insertAdjacentElement('afterend', p);
  for(let n of data.results.shop){
    u = document.createElement('ul');

    l = document.createElement('li');
    l.id = 'name';
    l.textContent = '名前: ' + n.name;
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.id = 'access';
    l.textContent = 'アクセス: ' + n.access;
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.id = 'address';
    l.textContent = '住所: ' + n.address;
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.id = 'budget';
    l.textContent = '予算: ' + n.budget.name;
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.id = 'catch';
    l.textContent = 'キャッチコピー: ' + n.catch;
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.id = 'genre';
    l.textContent = 'ジャンル: ' + n.genre.name;
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.id = 'open';
    l.textContent = '営業時間: ' + n.open;
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.id = 'station';
    l.textContent = '最寄駅: ' + n.station_name;
    u.insertAdjacentElement('beforeend', l);

    if(n.sub_genre){
      l = document.createElement('li');
      l.textContent = 'サブジャンル: ' + n.sub_genre.name;
      u.insertAdjacentElement('beforeend', l);
    }

    p = document.querySelector('div#result');
    p.insertAdjacentElement('beforeend', u);
    x = x + 1;
  }
  p = document.createElement('h2');
  u = document.querySelector('p');
  p.textContent = '検索結果が' + x + '件あります';
  u.insertAdjacentElement('afterend', p);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること