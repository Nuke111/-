//  '//' 뒤에 오는 내용은 주석
//  주석이란? 해당 코드의 설명

//  변수는 한 값을 위한 상징적인 이름이다.
//  변수는 아래와 같이 var 키워드로 선업할 수 있다.
var x;  //  x란 이름의 변수를 선언한다.

//  = 기호를 이용하여 변수에 값을 할당할 수 있다.
x = 0;  //  이제 변수 x의 값은 0이다.
x       //  변수 x는 변수가 가진 값 0으로 평가된다.

//  자바스크립트는 다양한 타입의 값을 지원
x = 1;              //  숫자
x = 0.01;           //  정수나 실수
x = "안녕하세요";    //  큰 따옴표로 둘러쌓인 문자열 
x = '안녕하세요';    //  작은 따옴표로 둘러쌓인 문자열
x = true;           //  참을 뜻하는 논리 값
x = false;          //  거짓을 뜻하는 논리 값
x = null;           //  ★ 값이 없음을 뜻하는 특별한 값 ★
x = undefined;      //  null과 유사함. (???)

//  객체는 이름-값 (name-value pair)의 모음이다.
//  이름은 반드시 문자열이어야 한다.
//  값 자리에는 아무 자바스크립트 값이 올 수 있다.
var book = {                //  객체는 중괄호로 열어서 시작한다.
    topic : "JavaScript",   //  topic 프로퍼티의 값은 "JavaScript"다. 
    fat : true              //  fat 프로퍼티의 값은 true다.
}                           //  닫는 중괄호로 객체 선언의 끝낸다.

// 객체의 프로퍼티는 .와 []를 사용해 접근할 수 있다.
book.topic;             // => "JavaScript"
book["fat"];            // => true
//book[fat];            // => 이렇게는 사용할 수 없다. ReferenceError: fat is not defined
//BOOK["fat"];          // => 대소분자를 구분한다.
book.author = "NUKE";   // 객체에 값을 할당하여 새 프로퍼티를 생성한다.
book.contents = {};     // {}는 프로퍼티가 없는 빈 객체다.

// 배열과 객체는 각각 원소와 프로퍼티의 값으로 배열과 객체를 가질 수 있다.
var points = [      //  배열은 대괄호로 이뤄져있다.
    {x:0, y:0},     //  각 원소는 객체이다.
    {x:1, y:1}  
];  
var data = {                //  객체에 두 프로퍼티가 있다.
    trial1:[[1,2],[3,4]],   //  각 프로퍼티의 값은 배열이고,
    trial2:[[2,3],[4,5]]    // 배열의 각 원소는 배열이다.
}

// 연산자는 값(피연산자)들을 이용해 새 값을 산출한다.
// 산술 연산자
3 + 2                       // => 5:    덧셈
3 - 2                       // => 1:    뺄셈
3 * 2                       // => 6:    곱셈
3 / 2                       // => 1.5:  나눗셈
points[1].x - points[0].x   // => 1:    피연산자 뺄셈
"3" + "2"                   // => "32"  + 연산자로 두 문자열을 이어 붙임

// 산술 연산자의 단축 표현식
var count = 0;  //  값을 정의한다.
count++;        //  값을 1 증가시킨다.
count--;        //  값을 1 감소시킨다.
count += 2;     //  값을 2 증가시킨다. count = count + 2와 같다.
count *= 3;     //  값을 3 곱한다. count = count * 3과 같다.
count           //  => 6 : 변수 이름 또한 표현식이다.