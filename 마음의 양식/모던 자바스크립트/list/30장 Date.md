# 30장 Date

- 표준 빌트인 객체인 **Date**는 날짜와 시간을 위한 메서드를 제공하는 빌트인 객체이면서 생성자 함수입니다.



## 30-1 Date 생성자 함수

- new Date() : 현재 날짜와 시간을 가지는 **Date** 객체를 반환합니다.
  - 내부적으로는 날짜와 시간을 정수값으로 갖지만 콘솔에 출력하면 기본적으로 날짜와 시간 정보를 출력합니다.
  - `new`연산자를 사용하지 않으면 날짜와 시간 정보를 나타내는 문자열만 반환됩니다.
  - 인수를 넣으면 1970년 1월 1일 00:00:00을 기점으로 인수로 전달된 밀리초만큼 경과한 날짜와 시간을 나타내는 Date 객체를 반환합니다.

```js
new Date(); // Fri May 14 2021 17:05:18 GMT+0900 (대한민국 표준시)
new Date(1); // Thu Jan 01 1970 09:00:00 GMT+0900 (대한민국 표준시)
```



- 문자열을 인수로 전달하면 지정된 날짜와 시간을 나타내는 Date 객체를 반환합니다.

```js
new Date('May 26, 2020 10:00:00');
// -> Tue May 26 2020 10:00:00 GMT+0900 (대한민국 표준시)

new Date('2020/03/26/10:00:00');
// -> Thu Mar 26 2020 10:00:00 GMT+0900 (대한민국 표준시)
```



- 연, 월, 일, 시, 분, 초, 밀리초를 의미하느 숫자를 인수로 전달하면 지정된 날짜와 시간을 나타내는 Date 객체를 반환합니다.

```js
// 월을 나타내는 2는 3월을 의미한다. 2020/3/1/00:00:00:00
new Date(2020, 2);
// -> Sun Mar 01 2020 00:00:00 GMT+0900 (대한민국 표준시)

// 월을 나타내는 2는 3월을 의미한다. 2020/3/26/10:00:00:00
new Date(2020, 2, 26, 10, 00, 00, 0);
// -> Thu Mar 26 2020 10:00:00 GMT+0900 (대한민국 표준시)

// 다음처럼 표현하면 가독성이 훨씬 좋다.
new Date('2020/3/26/10:00:00:00');
// -> Thu Mar 26 2020 10:00:00 GMT+0900 (대한민국 표준시)
```



## 30-2 Date 메서드

- Date.now : 1970년 1월 1일 00:00:00을 기점으로 현재 시간 까지 경과한 밀리초를 숫자로 반환합니다.

```js
Date.now(); // 1620979936900
```



- Date.parse : 1970년 1월 1일 00:00:00을 기점으로 인수로 전달된 지정시간까지의 밀리초를 숫자로 반환한다.

```js
// UTC
Date.parse('Jan 2, 1970 00:00:00 UTC'); // -> 86400000

// KST
Date.parse('Jan 2, 1970 09:00:00'); // -> 86400000

// KST
Date.parse('1970/01/02/09:00:00');  // -> 86400000
```



- Date.UTF : 1970년 1월 1일 00:00:00을 기점으로 인수로 전달된 지정시간까지의 밀리초를 숫자로 반환한다.
  - 형식적인 인수를 활용해야 합니다.

```js
Date.UTC(1970, 0, 2); // -> 86400000
Date.UTC('1970/1/2'); // -> NaN
```



- Date.prototype.getFullYear : Date 객체의 연도를 나타내는 정수를 반환합니다.

```js
new Date('2020/07/24').getFullYear(); // -> 2020
```



- Date.prototype.setFullYear : Date 객체에 연도를 나타내는 정수를 설정한다.
  - 월 일도 설정 가능하다.

```js
const today = new Date();

// 년도 지정
today.setFullYear(2000);
today.getFullYear(); // -> 2000

// 년도/월/일 지정
today.setFullYear(1900, 0, 1);
today.getFullYear(); // -> 1900
```



- Date.prototype.getMonth : Date 객체의 월을 나타내는 0~11의 정수를 반환합니다.
  - 0 : 1월
  - 11 : 12월

```js
new Date('2020/07/24').getMonth(); // -> 6
```



- Date.prototype.setMonth : Date 객체에 월을 나타내는 정수를 설정합니다.
  - 일도 설정 할 수 있습니다.

```js
const today = new Date();

// 월 지정
today.setMonth(0); // 1월
today.getMonth(); // -> 0

// 월/일 지정
today.setMonth(11, 1); // 12월 1일
today.getMonth(); // -> 11
```



- Date.prototype.getDate : Date 객체에서 날짜를 나타내는 정수를 반환합니다.

```js
new Date('2020/07/24').getDate(); // -> 24
```



- Date.prototype.setDate : Date 객체에서 날짜를 수정합니다.

```js
const today = new Date();

// 날짜 지정
today.setDate(1);
today.getDate(); // -> 1
```



- Date.prototype.getDay : Date 객체에서 요일을 나타내는 정수를 반환합니다.
  - 0~6으로 표시합니다.(일~월)

```js
new Date('2020/07/24').getDay(); // -> 5
```



- Date.prototype.getHours : Date 객체의 시간을 나타내는 정수를 반환합니다.

```js
new Date('2020/07/24/12:00').getHours(); // -> 12
```



- Date.prototype.setHours : Date 객체에 시간을 나타내는 정수를 설정합니다.

```js
const today = new Date();

// 시간 지정
today.setHours(7);
today.getHours(); // -> 7

// 시간/분/초/밀리초 지정
today.setHours(0, 0, 0, 0); // 00:00:00:00
today.getHours(); // -> 0
```



- Date.prototype.getMinutes : Date 객체의 분을 나타내는 정수를 반환합니다.

```js
new Date('2020/07/24/12:30').getMinutes(); // -> 30
```



- Date.prototype.setMinutes : Date 객체에 분을 나타내는 정수를 설정합니다.

```js
const today = new Date();

// 분 지정
today.setMinutes(50);
today.getMinutes(); // -> 50

// 분/초/밀리초 지정
today.setMinutes(5, 10, 999); // HH:05:10:999
today.getMinutes(); // -> 5
```



- Date.prototype.getSeconds : Date 객체의 초를 나타내는 정수를 반환합니다.

```js
new Date('2020/07/24/12:30:10').getSeconds(); // -> 10
```



- Date.prototype.setSeconds : Date 객체에 초를 나타내는 정수를 설정합니다.

```js
const today = new Date();

// 초 지정
today.setSeconds(30);
today.getSeconds(); // -> 30

// 초/밀리초 지정
today.setSeconds(10, 0); // HH:MM:10:000
today.getSeconds(); // -> 10
```

