# 4장 Javascript 함수(2)



## 1. 유효범위, 실행 컨텍스트

- 유혀범위(scope)는 함수만이 만들 수 있습니다.
- 유효범위에 따라 실행 컨텍스트가 생성됩니다.
  - variables
  - function declarations ( 선언된 함수들 )
  - arguments
  - scope chain
- `this`키워드는 현재 실행 컨텍스트 자체를 의미 합니다.

```js
function Man(name, age){
  console.log(this) // Man {speak: function}
  
  this.name = name;
  this.age = age;
  
  function walk() {
    console.log(this);
  }
  this.eat = function () {
    console.log(this);
  }
  
  walk(); // window
  this.eat(); // Man { name: "woodong", age: 29 ...}
  this.speak; // Man { name: "woodong", age: 29 ...}
}

Man.prototype.speak = function (contents) {
  console.log(this);
}

var human = new Human("woodong", 29)
```



## 2. 클로저

```js
function fa () {
  var a = "hello";
  
  return function () {
    console.log(a);
  }
}

var fb = fa();
var a = 'Objective'

fb(); // "hello"
```



## 3. prototype 공유

```js
function Man(name, age){
  this.name = name;
  this.age = age;
}

Man.prototype.speak = function (contents) {
  console.log(this.name +": "+contents)
}

var a = new Man("woodong", 29);
a.speak("hi"); // woodong: hi
```

