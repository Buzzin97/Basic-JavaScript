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

function fecthEgg(chicken) {
  return Promise.resolve(`${chicken} => 🐣`)
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍝`)
}

function getChicken() {{
  return Promise.resolve('🌏 => 🐔')
}}

getChicken()
.then(fecthEgg)
.then(fryEgg)
.then(console.log)

function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌')
    }, 1000)
  })
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎')
    }, 3000)
  })
}

function getOrange() {
  return Promise.reject(new Error('no orange'))
}

// 바나나와 사과를 같이 가지고 오기
getBanana()
.then((b) => 
  getApple()
    .then((a) => [b,a])
)
.then(console.log)

Promise.all([getBanana(),getApple()])
.then((f) => console.log('all', f))

Promise.race([getBanana(),getApple()])
.then((f) => console.log('race', f))

Promise.allSettled([getBanana(),getOrange()])
.then((f) => console.log('error-all', f))
.catch(console.log('에러입니다.'))

async function fetchFruits() {
  const banana = await getBanana();
  const apple = await getApple();
  return [banana, apple]
}

fetchFruits()
.then((a) => console.log('async', a))




