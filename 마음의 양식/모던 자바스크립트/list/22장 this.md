# 22장 this

- `this`는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 **자기 참조 변수**입니다.



## 22-1 콜백함수의 this

- 콜백함수도 일반함수로 호출된다면 콜백함수 내부의 `this`에도 전역 객체가 바인딩 됩니다.

```js
var value = 1;

const obj = {
    value: 100,
    foo() {
        console.log(this.value); //100

        setTimeout(function() {
            console.log(this.value) //1
        }, 1000);

        setTimeout(() => {
            console.log(this.value) //100
        }, 1000);
    }
}

obj.foo();
```

