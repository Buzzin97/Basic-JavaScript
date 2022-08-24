function a() {
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

const result = c();
console.log(result);
// call stack에서는 c -> b -> a순으로 
// return 때는 a -> b -> c 순으로 반환한다.
// 자바스크립트는 기본적으로 하나하나씩 동기적으로 실행된다.