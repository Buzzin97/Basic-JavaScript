// 주어진 seconds(초)가 지나면 callback함수를 호출한다.
// 단, seconde가 0보다 작으면 에러를 던지자!
function runInDelay(callback, seconds) {
  if(!callback) {
    throw new Error('callback함수를 전달 해야 함')
  }
  if(!seconds || seconds < 0) {
    throw new Error('seconds는 0보다 커야함')
  }
  setTimeout(callback, seconds * 1000); 
}
try {
  runInDelay(() => {console.log('뿌')}, 2)
} catch (error) {}