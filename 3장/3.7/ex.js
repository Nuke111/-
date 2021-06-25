var s = "hello";	// "hello" 문자열을 사용한다.
s.toUpperCase();	// "HELLO" 반환, 
console.log(s);		// 하지만 s는 변경되지 않는다.

var o = {x:1}, p = {x:1}; //같은 프로퍼티를 가지고 있는 두 객체
console.log(o==p);
console.log(o===p);
var a = [], b = [];
console.log(a==b);
console.log(a===b);

console.log(equalArrays(a,b));
function equalArrays(a, b) {
    if(a.length!=b.length)
        return false;
    for(var i=0; i<a.length; i++)
        if(a[i]!==b[i])
            return false;
    return true;
}

var a = []; //변수 a는 빈 배열
var b = a;  //변수 b는 a와 같은 배열을 참조한다.
b[0] = 1;	//변수 b가 참조하는 배열을 변경한다.
console.log(a[0]) //변수 a를 통해 바뀐 점을 확인한다.
console.log(a===b) //두 변수가 같은지 확인해본다.