/*변수 
변수는 숫자로 시작할수 없다.
띄어쓰기가 안된다.
예약어를 사용할수없다.
$ _ 를 제외한 특수문자를 사용할수 없다.
대소문자 구분한다.
class는 대문자로 시작한다.
나머지는 소문자로 시작한다.
*/

/* 산술 연산자
  할당연산자 +=
  논리 연산자 && || ! 
  &&은 곱 ||는 합 !는 부정 */

  let username = 'sejin';
  result = username || '유저이름이 없습니다.';
  console.log(result);

  username = undefined;
  result = username || '유저이름이 없습니다.';
  console.log(result);

  // 프로퍼티 접근 법
  // 마침표 프로퍼티 접근 연산자
  // 대괄호 프로퍼티 접근 연산자


10 in [10, 20, 30] // false
1 in [10, 20, 30] // true
//1 in 'hello' // error
'name' in {'name':'hojun', 'age':10} //true
'length' in [10, 20, 30]; // true



let array = Array(100).fill(0).map((value, index)=> value + index)
console.log(array);

let map = new Map()
map.set('one', 100)
map.set('two', 200)
map.set('three', 300)
map.set('four', [10, 20])
map.set(5, [100, 200])
map.set([1, 2], [100, 200])
map.get(5)

let human = {
    name:'sejin',
    age:26,
    local:'youngin'
}
let sejin = new Map(Object.entries(human))
console.log(sejin);
console.log(human);

//함수 표현식과 함수 선언식
let 함수표현식 = function(){} // 호이스팅 X
function 함수선언식(){} // 호이스팅 O