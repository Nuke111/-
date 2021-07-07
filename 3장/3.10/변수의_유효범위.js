var scope = "global";
function checkscope() {
    var scope = "local";
    return scope;
}
console.log(checkscope()); // local 출력

function checkscope2() {
    scope = "local";         // 전역 변수 변경
    myscope = "local";       // 암묵적인 전역변수 선언
    return [scope, myscope]; // 두 변수의 값 반환
}
console.log(checkscope2()); // [local, local] 출력
console.log(scope); // local 출력
console.log(myscope); // local 출력

var scope_test = "global scope"; // 전역 변수
function checkscope3() {
    var scope_test = "local scope";
    function nested() {
        var scope_test = "nested_scope";
        return scope_test;
    }
    return nested();
}
console.log(checkscope3()); // nested scope

function test(o) {
    var i = 0;                      // i는 함수 전체에 걸쳐 정의된다.
    if(typeof o == "object") {
        var j = 0;                  // j는 블록 뿐만 아니라 
                                    // 함수 전체에 걸쳐 정의된다.
        for(var k=0; k<10; k++) {   // k는 반복문 외에도 
                                    // 함수 전체에 걸쳐 정의된다.
            console.log(k);         // 숫자 0~9 출력
        }
        console.log(k);             // k는 여전히 정의되어 있기에
                                    // 10을 출력한다.
    }
    console.log(j);                 // j는 정의되어 있고, 
                                    // 초기화되어 있지 않을 것이다. 0 출력
}
console.log(test("hi"));

var scope_test2 = "global";
function f() {
    console.log(scope_test2);  // global이 아니라 undefined 출력
    var scope_test2 = "local"; // 여기서 초기화하지만, 
                               // 정의는 다른 곳에서 이뤄졌다.
    console.log(scope_test2);  // local을 출력한다.
}
f();

function f_test() {
    var scope_test3;            // 지역 변수는 함수 맨 꼭대기에서 선언한다.
    console.log(scope_test3);   // scope 변수는 존재하지만 아직 undefined 값이다.
    scope_test3 = "local";      // 이제 scope 변수가 제대로 초기화
    console.log(scope_test3);   // 기대한 값이 출력된다. local
}
f_test();

var truevar = 1;            // 올바르게 선언한 전역 변수, 삭제 불가
fakevar = 2;                // 삭제가 가능한 전역 변수
this.fakevar2 = 3;          // 삭제가 가능한 전역 변수
delete truevar;             // false : 변수는 삭제할 수 없다.
delete fakevar;             // true : 삭제할 수 있다.
delete this.fakevar2;       // true : 삭제할 수 있다.
// 확인
console.log(truevar);       // 1 출력
console.log(fakevar);       // ReferenceError: fakevar is not defined
console.log(this.fakevar2); // undefined 출력
