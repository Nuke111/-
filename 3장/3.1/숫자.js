// 10 진수
0
3
100000

// 16 진수
0xff //15*16+25=255 (base 10) 십진수 255
0xCAFE911

// 8 진수
0377 // 3*64 + 7*8 + 7 = 255 (base 10) 십진수 255 

3.14
2345.789
.33333333
6.02e23 // 6.02 ﻿× 10^23
1.4738223E-32 // 1.4738223 × 10^-23

// 다양한 Math 함수, 아래 외 함수는 레퍼런스 참조
Math.pow(2, 53) // => 900719925470992 : 2의 53승
Math.round(.6) // => 1.0: 반올림
Math.ceil(.6) // => 1.0: 올림
Math.floor(.6) // => 0.0: 내림
Math.abs(-5) // => 5: 절대 값
//Math.max(x,y,z) // 가장 큰 인자를 반환한다.
//Math.min(x,y,z) // 가장 작은 인자를 반환한다.
Math.random() // 0과 1.0 사이의 임의의 수 x를 반환한다.
Math.PI // 원주율
Math.E // 자연 로그 상수
Math.sqrt(3) // 3의 제곱근
Math.pow(3,3) // 3의 3제곱
Math.sin(0) // 삼각함수 sin
Math.log(10) // 자연로그 10
Math.log(100)/Math.LN10 // 밑이 10인 로그 100
Math.log(512)/Math.LN2 // 밑이 2인 로그 512
Math.exp(3) // Math.E의 3 거듭제곱

//상수
Infinity // 읽고 쓰기 가능한 변수로 Infinity로 초기화된다.
Number.POSITIVE_INFINITY // Infinity와 같은 값이지만 읽기 전용이다.
1/0 // Infinity와 동일
Number.MAX_VALUE // Infinity와 동일
Number.NEGATIVE_INFINITY // 음의 무한대
-Infinity
-1/0
-Number.MAX_VALUE - 1
NaN // 읽고 쓰기 가능한 변수로 NaN으로 초기화 된다.
Number.NaN // NaN과 같은 값이지만, 읽기 전용 프로퍼티
0/0 // NaN으로 평가된다.
Number.MIN_VALUE/2 // 언더플로 : 0
-Number.MIN_VALUE/2 // 음의 0으로 간주한다.
-1/Infinity // 음의 0으로 간주한다.
-0

// NaN은 그 자신뿐만 아니라 다른 값과 같은지 비교할 수 없다.
x == NaN // 틀린 문장
x != x // x가 NaN이라면 참. isNaN() 함수로도 사용 가능

var zero = 0; // 일반적인 0
var negz = -0
zero === negz // => true 0과-0은 같다.
1/zero === 1/negz // => false 무한대와 음의 무한대는 같지 않다.

var x = .3 - .2 // 0.3 - 0.2
var y = .2 - .1 // 0.2 - 0.1
x == y // false : 두 값은 같지 않다.
x == .1 // false : 0.3 - 0.2는 0.1이 아니다.
y == .1 // true : 0.2 - 0.1은 0.1과 같다.

var then = new Date(2010, 0, 1); // 2010년 1월 1일
var later = new Date(2010, 0, 1, 17, 10, 30); // 2010년 1월 1일 오후 5시 10분 30초

var now = new Date();       // 현재 날짜와 시간
var elapsed = now - then;   //밀리초로 날짜 계산

later.getFullYear()         // 2010
later.getMonth()            // => 0: 월은 0부터 시작한다.
later.getDate()             // => 1: 일은 1로 시작한다.
later.getDay()              // => 5: 요일. 0은 일요일, 5는 금요일
later.getHours()            // => 17: 오후 5시
later.getUTCHours()         // 시간대에 의존한 UTC 시간
later.toString();           // Fri Jan 01 2010 17:10:30 GMT+0900 (대한민국 표준시)
later.toUTCString();        // Fri, 01 Jan 2010 08:10:30 GMT
later.toLocaleDateString(); // 2010. 1. 1
later.toLocaleTimeString(); // 05:10:30 PM
later.toISOString();        // 2010-01-02T01:10:30.000Z // ECMAScript 5에서만 지원