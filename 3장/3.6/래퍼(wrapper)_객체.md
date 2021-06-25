## 래퍼(wrapper) 객체

#### 래퍼(wrapper) 객체란?

- 문자열, 숫자, 불리언의 프로퍼티에 접근하려고 할 때 생성되는 임시 객체

#### 프로퍼티 접근 예제

- ```javascript
  var s = "hello world!" //문자열
  var word = s.substring(s.indexOf(" ")+1, s.length); //문자열 프로퍼티 사용
  console.log(word); // 왜 문자열은 객체도 아닌데 프로퍼티를 가질까?
  ```

- 동작 원리

  - 문자열 s의 프로퍼티에 참조하려고 할 때?
    - 마치 new String(s)를 호출한 것처럼 문자열 값을 개체로 변환한다. (실제로는 x)

  - 실제로는 문자열 메서드를 상속하여 프로퍼티를 참조한다.
  - 참조가 해제되면?
    - 객체 생성 후 삭제하는 과정이 있어야 하지만 그런 것 처럼 동작해야하므로

  - 회수(하는 것 처럼 보인다.)

- ```javascript
  var s = "test"
  s.len = 4;
  var t = s.len;
  console.log(t); // undefined
  ```

- 동작 원리

  - 2행은 생성된 임시 String 객체의 len 프로퍼티에 4를 할당하면서 바로 삭제된다.
  - 3행은 기존 문자열 값과 같은 값을 가진 새로운 String 객체를 생성하고 len 프로퍼티에 접근한다.
  - 따라서 존재하지 않는 프로퍼티에 접근하므로 undefined로 평가된다.



#### 명시적인 래퍼 객체 생성

- 생성자를 이용한 래퍼 객체 생성과 목적

- ```javascript
  var s = "test"; // 문자열 값
  var n = 1;		// 숫자 값
  var b = true;	// 불리언 값
  var S = new String(s);  //String  객체
  var N = new Number(n);  //Number  객체
  var B = new Boolean(b); //Boolean 객체
  
  //quiz
  console.log(typeof(s)); //string
  console.log(typeof(S)); //object
  ```

  - String(), Number(), Boolean()과 같이 명시적으로 래퍼 객체를 생성할 수 있다.
  - 위와 같이 필요에 따라 래퍼 객체를 기본 타입으로 변환한다.
  - 동치 연산자(==)는 래퍼 객체와 동등한 값으로 평가한다.
  - 엄격한 동치 연산자(===)를 이용하여 구분할 수 있다.
  - typeof 연산자 또한 기본 타입과 래퍼 객체의 차이점을 확인할 수 있다.