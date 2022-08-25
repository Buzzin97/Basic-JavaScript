function runInDelay(callback, seconds) {
  if(!callback) {
    throw new Error('잘못된 입력입니다.')
  }
  if(!seconds || seconds < 0) {
    throw new Error('잘못된 시간입니다.')
  } setTimeout(callback, seconds * 1000)
}

try{
 runInDelay(() => {console.log('무야호');} , 5)
} catch(error) {
  console.log('에러입니다 다시 입력해주세요');
}

// Promise를 이용해서 만들기

function promiseDelay(second) {
  return new Promise((resolve, reject) => {
    if(!second || second < 0) {
      reject(new Error('0보다 큰 수를 넣어주세요'))
    }
    setTimeout(resolve, second * 1000)
  })
}

promiseDelay(2)
.then(() => {
  console.log('뿌야호');
})
.catch(console.error)

console.log(`${'세진'} => 팍`);

