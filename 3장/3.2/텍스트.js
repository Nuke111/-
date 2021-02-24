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