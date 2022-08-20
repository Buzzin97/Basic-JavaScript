// Spread 연산자, 전개구문
// 모든 Interable으 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 촤르르 펼처 질 수 있다.
// func(... iterable)
// [...iterable]
// {...obj}
// EcmaScript 2018
function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(nums[0], nums[1], nums[2])); // 배열을 하나하나 입력하는 것은 불편하다.
console.log(add(...nums)); // Spread 연산자를 사용한다. 배열을 전개해준다.

// Rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}
sum(1,2,0,4,5,7); // 나머지 것들은 배열로 전달된다.

// Array Concat  배열을 합치는 Concat
const fruits1 = ['a' , 'b'];
const fruits2 = ['g', 'f'];
let arr = fruits1.concat(fruits2);
console.log(arr);
arr = [...fruits1, 'k', ...fruits2];  // Spread 연산자를 사용해서 배열을 합했다.  쫘악 펼침
console.log(arr);

// Object
const sejin = {name: 'Sejin', age: 20, home: {address: 'home'}};
const updated = {
  ...sejin, // 객체를 Spread 했다. key와 value들이 복사되어 들어온다.
  job: 'F/E',
};
console.log(sejin);
console.log(updated);
