// 21번. set을 만드는 방법
// let x = new Set() 
// set은 중복을 허락하지 않는 특성이 있다.

// 22번. 배수인지 확인하는 법
// i % 6 === 0 ... 나누어 떨어진게 0인지를 확인한다.

// 23번 기본 나눔값과 floor
// console.log(10/3) ====> 3.3333... Math.floor를 사용하면 3이된다.

// 24번 대문자로 바꿔주세요!

chanage = (string) => {
  console.log(string.toUpperCase());
}
chanage('mary')

// 25번 원의 넓이를 구해주세요
cricleWidth = (n) => {
 let result = n * n * 3.14
 return result
}
console.log(cricleWidth(5));

// 26번 한글 이름을 입력하면 영어를 반환하게 해주기

const planet = {
  수성 : 'Mercury', 
  금성 : 'Venus', 
  지구 : 'Earth', 
  화성 : 'Mars', 
  목성 : 'Jupiter', 
  토성 : 'Saturn', 
  천황성 : 'Uranus', 
  혜왕성 : 'Neptune'
}

console.log(planet['수성']);
console.log(planet.수성);

// 27번 객체만들기
// 이름과 점수가 나오는 객체를 만드시오

//const keys = prompt('이름을 입력하세요').split(' ')
//const values = prompt('점수를 입력하세요').split(' ')

// node.js  prompt 안되서 함수로 만들었음

let key = function inputKeys(a,b) {
  key = [a,b]
  console.log(key); 
}
key('세진','진세')

let values = function inputValues(a,b) {
  values = [a,b]
}
values('90', '78')

// 객체 생성 for문으로 안에 넣어줄거임
let obj = {};

for(let i = 0; i < key.length; i++) {
  obj[key[i]] = values[i] // 객체 만들기 obj[key] = value // key : value 가 만들어진다.
  console.log(obj);
}

// 28번 2-gram 2개의 연속도 요소를 출력하자
let strings = '안녕하세요'
for(let i = 0; i < strings.length-1; i++) {
  console.log(strings[i],strings[i + 1]);
}

// 29번 대문자만 지나가세요
const word = "H"

if(word === word.toUpperCase()) {
  console.log('yes');
} else {
  console.log('no');
}

// 30번 문자열 속 문자찾기 (시작하는 index를 반환하도록 하기)
const str = 'pineapple is yummy'

console.log(str.indexOf('apple'));