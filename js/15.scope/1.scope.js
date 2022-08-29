// 코드 블럭: {}, if() {}, for() { }, function() { }
// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 없다.
{
  const a = 'a';
  console.log(a);
}
// console.log(a); 외부에서 접근을 할 수 없다.
const b = 'b';

// 함수 외부에서는 함수 내부의 변수를 참조할 수 없다.
function print() {
  const message = 'Hello World';
  console.log(message);
}

// 함수 외부에서는 함수의 매개변수를 참조할 수 없다.
function sum(a,b) {
  console.log(a,b);
}