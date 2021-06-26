console.log(10+" objects"); // 10 objects 숫자 10은 문자열로 변환된다.
console.log("7"*"4");       // 28 두 문자열은 숫자로 변환된다.
var n = 1 - "x";
console.log(n);             // NaN: 문자열 "x"는 숫자로 변환될 수 없다.
console.log(n+" objects");  // NaN objects: NaN은 문자열 "NaN"으로 변환된다.

console.log(null==undefined); // true
console.log("0"==0) //true
console.log(0==false) // 불리언은 비교하기전 숫자로 변환한다.
console.log("0"==false) // 두 피연산자는 비교하기 전에 숫자로 변환한다.

var x = true;
console.log(x + ""); // 문자열 true, String(x)와 같다.
console.log(+x);     // 숫자 1, Number(x)와 같다.
console.log(!!x);    // 불리언 true, Boolean(x)과 같다.

var n = 17
binary_string = n.toString(2);
console.log(binary_string);     // 2진수 10001 출력
octal_string = n.toString(8);
console.log(octal_string);      // 8진수 21 출력 
hex_string = "0x" + n.toString(16);
console.log(hex_string);        // 16진수 0x11출력

var n = 123456.789;
console.log(n.toFixed(0)); // 123457 출력
console.log(n.toFixed(2)); // 123456.79 출력
console.log(n.toFixed(5)); // 123456.78900 출력
console.log(n.toExponential(1)); // 1.2e+5 출력
console.log(n.toExponential(3)); // 1.235e+5 출력
console.log(n.toPrecision(7)); // 123456.8 출력
console.log(n.toPrecision(10)); // 123456.7890 출력

console.log(parseInt("3 blind mice")); // 3 출력
console.log(parseFloat("3.14 meters")); // 3.14 출력
console.log(parseInt("0xFF")); // 255 출력
console.log(parseFloat(".1")); // 0.1출력
console.log(parseInt(".1")); // NaN 출력, 정수는 "."으로 시작할 수 없다.
console.log(parseFloat("$72.47")); // NaN 출력, 숫자는 "$"로 시작할 수 없다.

// parseInt() 는 기수를 정의하는 선택적인 두 번째 인자를 받는다.
console.log(parseInt("ff", 16)); // 255
console.log(parseInt("zz", 36)); // 1295

var a = new Boolean(false);
console.log(a); //[Boolean: false]
console.log(new Boolean(a)); //[Boolean: true]

var now = new Date();           // Date 객체 생성
console.log(typeof(now+1));     // string : +는 날짜를 문자열로 변환시킨다.
console.log(typeof(now-1));     // number : -는 객체에서 숫자로 변환시킨다.
console.log(now==now.toString); // false  : 암시적 그리고 명확한 문자열 변환
console.log(now>(now-1));       // true   : Date에서 숫자로 변환