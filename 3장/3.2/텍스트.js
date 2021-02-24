var s = "hello, world"  // 'hello world'를 사용한다.
s.charAt(0)             // => h : 첫 번째 문자
s.charAt(s.length-1)    // => d : 마지막 문자
s.substring(1, 4)       // => ell : 두번째, 세번째, 네번째 문자
s.slice(1, 4)           // => ell : 두번째, 세번째, 네번째 문자
s.slice(-3)             // => rld : 마지막 세 문자
s.indexOf("l")          // => 2: 문자 l이 위치한 첫 번째 위치
s.lastIndexOf("l")      // => 10: 문자 l이 위치한 마지막 위치
s.indexOf("l", 3)       // => 3: 세 번째 문자 이후, 문자 l이 등장하는 첫 위치
s.split(", ")           // => ["hello", "world"]: 부분 문자열로 나눈다.
s.replace("h", "H")     // => "Hello, world" : 문자열에서 h를 H로 바꾼다.
s.toUpperCase()         // HELLO WORLD

//ECMAScript 5
s[0]            // => "h"
s[s.length-1]   // => "d"

/*
/^HTML/				// HTML로 시작하는 문자열
/[1-9][0-9*]/		// 0 아닌 숫자로 시작하는 문자
/\BJAVASCRIPT\b/i	// 대소문자 구별 없이 javascript와 일치하는 문자열
*/

var text = "testing: 1, 2, 3";
var pattern = /\d+/g        // 하나 이상의 모든 숫자 일치
pattern.test(text)          // => true: 일치하는 문자열이 존재
text.search(pattern)        // => 9: 첫 번째로 매치하는 문자열의 위치
text.match(pattern)         // => ["1", "2", "3"]: 일치된 항목의 배열
text.replace(pattern, "#")  // => "testring: #, #, #"
text.split(/\D+/);          // => ["", "1", "2", "3"]: 숫자가 아닌 문자(열)을 기준으로 분할