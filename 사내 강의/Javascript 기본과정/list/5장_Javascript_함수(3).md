# 5장 Javascript 함수(3) 및 프레임워크



## 1. 상속

- `prototype`을 통해 상속을 흉내낼 수 있습니다.

```js
function Man (name, age){
  this.name = name;
  this.age = age;
}

Man.prototype.speak = function (contents) {
  console.log(this.name + ": " + contents);
}

Player.prototype = new Man;
function Player (name, age, salary, record) {
  Man.call(this, name, age);
  
  this.salary = salary;
  this.record = record;
}

Player.prototype.run = function () {
  console.log(this.name + ": run!");
}

var a = new Player("woodong", 29, 10000, {win: 6, lose: 3});
a.speak('hi'); // woodong: hi

var b = new Man("woodong", 29);
b.run(); // 에러가 발생합니다.
```



## 2. 생각보다 자바스크립트가 불현해보이는데?

- 어려운 문법들을 조금 더 쉽게 만들 수 있습니다. ( Syntactic sugar )
- `JINDO`, `jQuery`등의 프레임워크나 라이브러리를 사용해서 손쉽게 구현할 수 있습니다.