Go言語に特有な部分にフォーカスしてつらつらと書いていきます。


## 変数宣言の省略

```go
number := 100 // var int number = 100
```

※使っていない変数があるとエラーをはく



## 複数のパッケージ名・変数宣言

`()` で囲う

```go
import (
    “fmt”
    “math”
)

const (
    Small = 1
    Medium = Small << 10
    Large = Medium << 10
)
```



## slice

要素数を書くと配列、書かないとスライスになる。

```go
// array
ary := [...]int{1, 3, 5, 7, 10}

// slice
s := []int{1, 3, 5, 7, 10}
```

基本的にはスライスの方が多く使われる。
スライスは `append()` や `copy()` が使える。



## ハッシュ中の値の有無

```go
// map = 連想配列、ハッシュ
m := map[string]int{
    "sato":   100,
    "suzuki": 200}
value, ok := m["sato"]
fmt.Println(value, ok) // 100 true 存在しない場合は 0 false
```



## 制御文の中に変数を書ける

```go
if n := 100; n > 50 {
	fmt.Println("Good!!")
}
fmt.Println(n) // undefined
```

変数のスコープは違うが、以下と同じ意味

```go
n := 100
if n > 50 {
    fmt.Println("Good!!")
}
fmt.Println(n) // 100
```



## forの省略

```go
// 初期化と処理後の処理の省略が可能
i := 0
// whileと同じ処理になる（Go言語にはwhileがない）
for i < 10 {
    i++
}
```

```go:無限ループ
for {
    // 処理
}
```



## range

スライス、マップなどを要素数分ループさせるキーワード。

```go:スライス
s := []string{"red", "blue", "yellow"}
// '_'はワイルドカード
for _, value := range s {
    fmt.Println(value)
}
```

```go:マップ
m := map[string]int{
    "sato":   100,
    "suzuki": 200}
for k, value := range m {
    fmt.Println(k, value)
}
```



## メソッドとレシーバ

メソッド：構造体などのデータ型に紐づいた関数

レシーバ：メソッドを呼び出される対象

```go
type user struct {
	name  string
	score int
}

// 値渡し
func (u user) show() {
	fmt.Println(u.name, u.score)
}

// 参照渡し
func (u *user) add() {
	// 元の値を書き換える
	// ポインタ変数にしないとscore=10のまま
	u.score++
}

func main() {
	u := user{
		name:  "sato",
		score: 10,
	}
	u.add()
    u.show()
}
```



## 空のインターフェース

空のインターフェースを利用すると、
あらゆる型を受け付ける関数をつくることができる。

一方、型の動的チェックをするために、
if文の「型アサーション」と、
switch文の「型switch」が提供されている。

```go
// あらゆる型を受け付ける関数
func anyFunc(any interface{}) {

    // 型アサーション
	if _, ok := any.(string); ok {
		fmt.Println("this is string")
	} else {
		fmt.Println("this is not string")
    }
    
    // 型switch
	switch any.(type) {
	case string:
		fmt.Println("this is string")
	default:
		fmt.Println("this is not string")
	}
}

func main() {
    anyFunc("空のインターフェース")
}
```



## goroutine

並行処理（順不同に行う処理）を実現する

```go
func task1() {
	// 重い処理の想定で１秒待つ
	time.Sleep(time.Second)
	fmt.Println("task1 finidhed...")
}
func task2() {
	fmt.Println("task2 finidhed...")
}
func main() {
    go task1()
    go task2()

    // 上記関数が終わる前にmain関数が終わってしまうのを防ぐ
    time.Sleep(time.Second * 3)
}
```

task1()、task2()が走り、
すぐにtask2()が終わり、1秒後にtask1()が終わる。



## channel

goroutine間におけるデータを受け渡しするパイプ

送信：channel<-value
受信：<-channel

```go
func task1(ch chan string) {
	time.Sleep(time.Second)
	// 値をチャネルへ送信
	ch <- "task1 finidhed..."
}
func task2() {
	fmt.Println("task2 finidhed...")
}
func main() {
	// チャンネルを宣言
	ch := make(chan string)
	go task1(ch)
	go task2()

	// チャネルから受信
	fmt.Println(<-ch)
	// 受信するまで処理が止まっているのでtime.Sleep()は不要
}
```

task1()、task2()が走り、すぐにtask2()は終わる。
1秒後にtask1()の処理が進み、データをチャネルへ送信。
main関数の中でチャネルからデータを受信し、全体の処理が終了。



## defer

defer へ渡した関数の実行を、呼び出し元の関数の終わり(returnする)まで遅延させる。

つまり、その関数が終了する際に実行したい処理を記述することができる。

複数の関数を渡した場合はLIFOの順番で実行される。

```go
func main() {
	defer fmt.Println("world")

	fmt.Println("hello")
}
```

```bash:出力
hello

world
```


> 参考
[A Tour of Go](https://go-tour-jp.appspot.com/welcome/1)
[dotinstall Go言語入門](https://dotinstall.com/lessons/basic_golang)