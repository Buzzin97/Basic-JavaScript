// Iterable 하다는건! 순회가 가능하다는 것이다!
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는것은
// 순회 가능한 객체이다 라는걸 알 수 있음
// 순회가 가능하면 무엇을 할 수 이나? for..of, spread 연산자를 사용가능하다.
const array = [1, 2, 3];
for(const item of array) { // for of... 순회한다. 배열
  console.log(item);
}

const obj = {
  0: 1,
  1: 2
}; 
for(const item in obj) { // 객체는 이터러블이 아니다! error가 나온다. of 대신 in을 쓴다.
  console.log(item); // for..in 객체안의 key값을 출력해준다.
}

array.values() // for of 에서 사용가능하다. key entries ....