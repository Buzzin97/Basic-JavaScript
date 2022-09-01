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
const obj = {};