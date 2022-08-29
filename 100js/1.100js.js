// 1. pop을 이용해서 배열 끝에 숫자를 제거
var nums = [100, 200, 300, 400, 500];
console.log(nums.pop());
console.log(nums.pop());
console.log(nums);

// 2.  splice이용하기  splice(인덱스, 인덱스 부터 제거할 개수, 추가 정보)
var arr = [200, 100, 300];
console.log(arr);
arr.splice(2,0,10000)  
출력
[200, 100, 10000, 300]


// 3. 변수의 타입 typeof

// 원시 타입: number , string , boolean, undefined, null
// 참조 타입 : object

var arr = [100, 200, 300];
console.log(typeof(arr));
// 배열은 참조타입이다. object이다.


//4.
let a = 1;
console.log(typeof(a));
// 다음 변수 a를 `typeof(a)`로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?

// 1)  입력 : a =1,   출력 : number

// 2)  입력 : a = 2.22,   출력 : boolean ---> number 타입이다.

// 3)  입력 : a = 'p',   출력 : string

// 4)  입력 : a = [1, 2, 3],   출력 : object


// 5. 출력값 찾기
var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){ // i = i + 2
    a += i; // a = a + i
    // for문에 두번 돈다. 처음 10 + 1 , 두번째 11 + 3 => 14 출력
}

console.log(a+b); // 16이 출력된다.


// 6.
// 다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
// 앗, False로 취급하지 않는 것이 하나 있네요! True를 찾아주세요.

// falshy : 0 , ' ' , NaN , false , null , undefined 
// truthy  

// 1)  NaN // false
// 2)  1 // true
// 3)  "" // false
// 4)  0  // false
// 5)  undefined // false


// 7.
// 다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.
/**
 *  변수의 식별자로 사용 가능한 기준
 *  1. 특수기호 (_ $)
 *  2. 문자열 (단, 예약어는 불가능)
 *  3. 숫자(단, 첫번째 순서로는 불가능)
 */

// 1)  age
// 2)  Age
// 3)  let // 사용불가(예약어)
// 4)  _age
// 5)  1age // 사용불가(첫번째 숫자)


// 8. 출력값 찾기
var d = {
  'height':180,
  'weight':78,
  'weight':84,
  'temperature':36,
  'eyesight':1
};
// 객체 접근자 . , ['']  key는 문자열과 숫자로 가능
console.log(d['weight']); // value : 78

// 9. concat을 활용해 출력하기
// 데이터
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = year.concat('/',month,'/',day,' ',hour,':',minute,':',second)

console.log(result);


출력
2019/04/26 11:34:27


// 10. 별찍기
입력
5

출력
    *
   ***
  *****
 *******
*********