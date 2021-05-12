# 2장 Javascript 객체

- 자바스크립트는 객체에 기반한 **고급 객체 지향 언어** 입니다.
- 기본 타입을 제외한 모두가 객체입니다.
- number, string, boolean은 메소드가 있는 유사객체 입니다.
  - 유사 객체는 `Number()`, `String()`, `Boolean()` 내장 객체 랩퍼함수가 존재합니다.
- 모든 객체는 내장 객체 타입인 `Object` 객체의 일원 입니다.



## 1. 객체란?

- `key : value` 쌍으로 이루워진 속성들의 **집합체**입니다.

```js
var man = {
	name: "woodong",
	age: 29,
  item: [],
}
```

- 객체는 `prototype`이라는 속성을 갖습니다.
  - 이것을 이용해 속성 공유 및 상속, 다형성을 구현할 수 있습니다.
- 리터럴 표현법, 생성자 등을 이용하여 다양한 객체를 생성할 수 있습니다.

```js
// 리터럴 표현법 : 객체 생성이 매우 빠르고 성능상에 유리합니다.
// Object 함수의 인스턴스가 됩니다. 즉 Object의 prototype을 참조하게 됩니다.
var obj = {
	id: 1,
	name: "woodong",
}
```



## 2. prototype chaining

- `__proto__`의 속성으로 연결되어 계층적 구조를 이루는 것을 의미합니다.
- 자신에게 프로퍼티가 존재하지 않으면 **chaining**을 통해 상위로 찾아갑니다.

```js
var man = {
	name: "woodong",
	age: 29,
}

var info = {
  idx: 1,
  __proto__: man
}

console.log(info.age) // 29
```

