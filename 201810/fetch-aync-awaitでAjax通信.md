fetch,async/awaitでAjax通信


## 前提

### fetch

[Fetch 概説 - Web API インターフェイス | MDN](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch)

XMLHttpRequestの代替。
PromiseベースのAjax仕様のAPI。

polyfillを忘れがちなので注意。
https://github.com/github/fetch


### async function

[async function - JavaScript | MDN - Mozilla](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/async_function)

関数定義の前に`async`をつけることで、その関数を`AsyncFunction`にする。
暗黙的にPromiseを返す関数。



### await

[await - JavaScript - MDN - Mozilla](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/await)

`async function`の実行を一時停止し、関数のPromiseの結果を待つ。
`fetch`はPromiseを返すので相性が良い。


## サンプル

お天気のAPI（[OpenWeatherMap](https://openweathermap.org/)）を叩くサンプル。

まずは定数を準備。

```javascript
const API_KEY = '${API_KEY}';
const CITY = 'Tokyo';
const URL = `http://api.openweathermap.org/data/2.5/forecast?q=${CITY},jp&units=metric&APPID=${API_KEY}`;
```

fetchを使用したサンプル。

```javascript
fetch(URL)
    .then(res => {
        if(res.ok){
            return res.json();
        } else {
            throw new Error();
        }
    })
    .then(myJson => {
        console.log(JSON.stringify(myJson));
    })
    .catch(err => {
        console.log(err);
    })
```

fetch,async/awaitを使用したサンプル。

```javascript
async function getWeather() {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
    // ↓無理やり一行で書くとこうなる
    // return await (await fetch(URL)).json();
}
getWeather()
    .then(data => {
        console.log(JSON.stringify(data));
    })
    .catch(err => {
        console.log(err);
    })
```