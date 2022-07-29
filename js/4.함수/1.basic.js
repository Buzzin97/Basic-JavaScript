// 사용예제 1
function add(a , b) {
  return a + b;
}
const result = add(1, 2);
console.log(result);

// 사용예제 2
function fullName(fristName, lastName) {
  return `${fristName} ${lastName}`;
}
let lastName = '박';
let fristName = '진세';
console.log(fullName(fristName, lastName));

let lastName2 = '박';
let fristName2 = '철수';
console.log(fullName(fristName2, lastName2));
