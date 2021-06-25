var s = "hello world!" //문자열
var word = s.substring(s.indexOf(" ")+1, s.length); //문자열 프로퍼티 사용

console.log(word); // 왜 문자열은 객체도 아닌데 프로퍼티를 가질까?
/* 동작 원리
1. 문자열 s의 프로퍼티에 참조하려고 할 때,
 1-1 마치 new String(s)를 호출한 것 처럼 문자열 값을 개체로 변한한다. (실제로는 x)
2. 실제로는 문자열 메서드를 상속하여 프로퍼티를 살펴보는데 사용한다.
3. 참조가 해체되면?
 3-1 실제로는 객체 생성후 삭제하는 과정이 있어야 하지만? 그런 것 처럼 동작하긴 해야하므로
4. 회수(하는 것 처럼 보인다.) */

//마찬 가지로 숫자나 불리언 또한 메서드를 가지고 있다
var s = "test";
s.len = 4;
var t = s.len;
console.log(t);


var s = "test"; // 문자열 값
var n = 1;		// 숫자 값
var b = true;	// 불리언 값
var S = new String(s);  //String  객체
var N = new Number(n);  //Number  객체
var B = new Boolean(b); //Boolean 객체
console.log(typeof(s));
console.log(typeof(S));