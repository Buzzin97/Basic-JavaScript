const text = 'hello'
function func() {
  console.log(text);
}
func()

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`); // 내부함수에서 외부 데이터에 접근이 가능하다.
  }
  return inner; 
  // inner 렉시컬 환경은 외부 렉시컬 환경을 참조한다. (outer 렉시컬환경) --> 전역 렉시컬 환경
}
const func1 = outer()
func1()