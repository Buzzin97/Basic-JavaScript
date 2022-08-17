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