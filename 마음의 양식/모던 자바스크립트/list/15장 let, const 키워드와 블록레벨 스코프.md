# 15장 let, const 키워드와 블록 레벨 스코프



## 1. 전역 객체와 `let`

- `var` 키워로 선언한 전역변수와 전역 함수는 암묵적으로 전역 객체 `window`의 프로퍼티가 됩니다.
  - 전역 객체 프로퍼티를 참조할 때에도 `window`를 생략할 수 있습니다.
- `let` 키워드는 전역 변수로 선언을 해도 전역 객체의 프로퍼티가 아닙니다.
  - `window.name`으로 접근할 수 없습니다.
  - 이유 : 보이지 않은 개념적인 블록 내에 존재하게 됩니다.

```js
let x = 1;

console.log(window.x); // undefined
console.log(x); // 1
```

