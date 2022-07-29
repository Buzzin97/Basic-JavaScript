// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max, action)
function iterate(max, action) {
 for(let i = 0; i < max; i++) {
  action(i); // 포문이 돌면서 action을 호출한다.
 }
}

// action 함수 만들기
function log(num) {
  console.log(num);
} // action은 단순히 console.log 해주는 함수

function logDouble(num) {
  console.log(num * 2);
} //action은 두배 숫자를 출력해주는 함수

iterate(5,log); // lterate 함수에 인자 할당하기!
iterate(5, logDouble);
iterate(5 , (num) => console.log(num * 3));

//callback 함수 사용예
setTimeout(()=>{
  console.log('1초뒤 이 함수가 실행됩니다.')
}, 1000);
