// 주어진 seconds(초)가 지나면 callback함수를 호출한다.
// 단, seconde가 0보다 작으면 에러를 던지자!
function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if(!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'))
    }
    setTimeout(resolve, seconds * 1000);
  }); 
} // Promise 객체를 호출해서 성공했을때의 callback함수와 실패했을때 callback함수를 받는다.

runInDelay(2)
.then(() => console.log('타이머 완료!')) // 필요한 일을 수행
.catch(console.error) // 에러를 처리
.finally(() => console.log('끝났다!')) // 최종적으로 무조건 호출!
