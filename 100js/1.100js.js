// 1.
var nums = [100, 200, 300, 400, 500];


// 2.
var arr = [200, 100, 300];
//pass
console.log(arr);

출력
[200, 100, 10000, 300]

// 3. 변수의 타입
var arr = [100, 200, 300];
console.log(typeof(arr));


//4.
// 다음 변수 a를 `typeof(a)`로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?

// 1)  입력 : a =1,   출력 : number

// 2)  입력 : a = 2.22,   출력 : boolean

// 3)  입력 : a = 'p',   출력 : string

// 4)  입력 : a = [1, 2, 3],   출력 : object


// 5. 출력값 찾기
var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
    a += i;
}

console.log(a+b);


// 6.
// 다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
// 앗, False로 취급하지 않는 것이 하나 있네요! True를 찾아주세요.

// 1)  NaN
// 2)  1
// 3)  ""
// 4)  0
// 5)  undefined


// 7.
// 다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.

// 1)  age
// 2)  Age
// 3)  let
// 4)  _age
// 5)  1age


// 8. 출력값 찾기
var d = {
  'height':180,
  'weight':78,
  'weight':84,
  'temperature':36,
  'eyesight':1
};

console.log(d['weight']);

// 9. concat을 활용해 출력하기
// 데이터
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = //빈칸을 채워주세요

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