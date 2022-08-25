function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('banana');
    }, 1000);
  });
}

function getApple() {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve('apple')
    }, 3000)
  })
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// 바나나와 사과를 같이 가지고 오기
async function fetchFruits() {
  const banana = await getBanana();
  const apple = await getApple();
  return [banana, apple]
}
fetchFruits()
.then(fruits => console.log(fruits))


//   return getBanana() //
//     .then((banana) =>
//       getApple() // 
//         .then((apple) => [banana, apple])
//     )
//     .then(console.log)
// }

// 제너레이터 실행기

const async = generatorFunc => {
  const generator = generatorFunc(); // 2

  const onResolved = arg => {
    const result = generator.next(arg); // 5
    
    return result.done
    ? result.value
    : result.value.then(res => onResolved(res)); // 7
  }
return onResolved;  //  3
};

(async(function* fetchTodo() {  // 1
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  const response = yield fetch(url); // 6
  const todo = yield response.json(); // 8
  console.log(todo);
})()); // 4

/**
 * async 함수가 호출되면(1) 인수로 전달받은 제너레이터 함수 fecthTodo를 호출하여 
 * 객체를 생성(2)를 하여 onResolved 함수를 반환한다.(3)
 */