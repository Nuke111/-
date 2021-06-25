## null과 undefined

##### null

- null은 보통 아무 값도 갖지 않음을 가리킬 때 사용
- 특별한 값을 평가하는 키워드
- typeof 연산자를 null에 사용하면 문자열 "object"를 반환
- '객체가 없음'을 뜻하는 특수한 객체 값
- 값이 null 하나뿐인 어떤 고유한 자료형에 속한 것으로 간주됨

##### undefined

- 초기화되어 있지 않은 변수에 들어있는 값
- 존재하지 않는 객체 프로퍼티나 배열의 원소 값에 접근할 때 얻는 값
- 즉, 반환값이 없는 함수의 반환 값

##### null과 undefined 비교

- 둘 다 값이 없음을 나타낸다.
- 미리 선언되어 초기화 된 객체나 변수의 값이 없음은 null
- 존재하지 않는 객체나 배열의 값에 접근시 undefined
- ECMAScript5에서는 undefined를 읽기 전용으로 사용
- 동치 연산자(==) : null과 undefined는 두 값이 같음
  - 구별하기 위해서는 엄격한 동치 연산자(===) 사용

- null과 undefined는 둘 다 false로 판정되며 불리언 값(false)으로 변환된다.
- null과 undefined는 프로퍼티나 메서드를 가지지 않는다.
  - 접근하기 위해 . 연산자나 []를 사용하면 TypeError 발생

##### null과 undefined 사용

- 시스템 수준에서 예기치 않은 상황에 발생한 값은 undefined
- 일반적인 프로그래밍 수준에서 오류는 null을 사용한다.
  - 변수나 프로퍼티 할당, 함수 인자로 전달할 경우 null이 적절하다.