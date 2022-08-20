//[Symbol.iterator](): Iterator{next(): {value, done}};
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
// 0, 1, 2, 3 ...., 9
// 0, 2, 4, 6 ...., 18

// const multiple = {
//   [Symbol.iterator]() {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return{value: num++ *2, done: num > max };
//       }
//     }
//   },
// };
// for (const num of multiple) {
//   console.log(num);
// }

function* multipleGenterator() {
  for(let i = 0; i < 10; i++) {
    console.log(i);
     yield i **2; // 사용자가 next()를 호출할때 까지 기다렸다가 호출하면 순회한다. 
  }
}
const multiple = multipleGenterator();
let next = multiple.next();
console.log(next.value, next.done); // 처음 값은 0과 false가 나온다. done이 false니까 순환 가능하다는 뜻이다.

//multiple.return(); // 다음 next()호출전에 return을 하면 정지!

next = multiple.next();
console.log(next.value, next.done);

const add = addGenerator();
let nexy2 = add.next();
function* addGenerator() {
  try {
    for(let i = 0; i < 10; i++) {
      console.log(i);
      yield i**2;
    }
    } catch(error) {
      console.log(error);
    }
  }


add.throw('Error!');