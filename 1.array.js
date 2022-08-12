// 배열 생성 방법
let array = new Array(3);  // 배열의 크기를 정하기
console.log(array); 

array = new Array(1, 2, 3); // 배열의 내용물 넣기  ... 생성자 함수
console.log(array); 

array = Array.of(1,2);  // static of 함수 ... 내용물의 크기가 정해지지 않았을 때
console.log(array); 

const anotherArray = [1, 2, 3, 4];  // 배열 리터럴을 이용하기
console.log(anotherArray);

array = Array.from(anotherArray); // static from 함수 순회가 가능한 함수를 받는다.
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야함
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고
// 오브젝트와 유사하다!
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다!
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음 (Typed Collections)

array = Array.from({  // 객체의 key와 value length를 정해주면 array가 나온다.
  0: '안',
  1: '녕',
  length: 2,
});
console.log(array);
