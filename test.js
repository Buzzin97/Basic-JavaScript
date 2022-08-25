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