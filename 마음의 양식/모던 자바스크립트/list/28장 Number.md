# 28장 Number

- 표준 빌트인 객체 Number 객체는 생성자 함수 객체입니다.
- 따라서 `new` 연산자와 함께 호출하여 **인스턴스**를 생성할 수 있습니다.



## 28-1 Number 프로퍼티

- Number.EPSILON : 부동소수점을 사용하여 발생하는 오차를해결하기 위해 사용 됩니다.

```js
0.1 + 0.2 === 0.3 // false

function isEqual(a, b){
	return Math.abs(a-b) < Number.EPSILON;
}

isEqual(0.1 + 0.2, 0.3); // true
```



- Number.MAX_VALUE : 자바스크립트에서 표현할 수 있는 가장 큰 양수 값입니다.
  - 더 큰 숫자는 `Infinity` 입니다.
- Number.MIN_VALUE : 자바스크립트에서 표현할 수 있는 가장 작은 양수 값입니다.
  - 더 작은 숫자는 0입니다.
- Number.MAX_SAFE_INTEGER : 자바스크립트에서 안전하게 표현할 수 있는 가장 큰 정수 값입니다.
- Number.MIN_SAFE_INTEGER : 자바스크립트에서 안전하게 표현할 수 있는 가장 작은 정수 값입니다.
- Number.POSITIVE_INFINITY : 양의 무한대를 나타내는 숫자값 `Infinity` 입니다.
- Number.NEGATIVE_INFINITY : 음의 무한대를 나타내는 숫자값 `-Infinity`입니다.
- Number.NaN : 숫자가 아님을 나타내는 숫자값입니다.



## 28-2 Nuber 메서드

- isFinite() : 인수로 전달된 숫자값이 정상적인 유한수인지 검사합니다.

```js
Number.isFinite(0); // true;
Number.isFinite(Infinity); // false;
```



- isInteger() : 인수로 전달된 값이 정수인지 검사합니다.

```js
Number.isInteger(0); // true
Number.isInteger(0.5); // false
```



- isNaN() : 인수로 전달된 숫자값이 NaN인지 검사합니다.

```js
Number.isNaN(NaN); // true
```



- sSafeInteger() : 인수로 전달된 값이 안전한 정수인지 검사합니다.

```js
Number.isSafeInteger(0); // true
Number.isSafeInteger('123'); // false
```



- toExponential() : 숫자를 지수 표기벗으로 변환하여 문자열로 반환합니다.
  - 인수로 전달된 값은 소수점 이하로 표현할 자릿수 입니다.

```js
 (77.1234).toExponential(2); // 7.71e+1"
```



- toFixed() : 숫자를 반올림하여 문자열로 반환합니다.
  - 인수로 전달된 값은 소수점 이하로 표현할 자릿수 입니다.

```js
(12345.6789).toFixed(); // "12346"
(12345.6789).toFixed(1); // "12345.7"
```



- toPrecision() : 인수로 전달받은 전체 자릿수까지 유효하도록 나머지 자릿수를 반올림하여 문자열로 반환합니다.

```js
(12345.6789).toPrecision(); // "12345.6789"

// 전체 자릿수 1개 유효, 나머지 반올림
(12345.6789).toPrecision(1); // "1e-4"
```



- toString() : 숫자를 문자열로 반환합니다.

```js
(10).toString(); // "10"
```

