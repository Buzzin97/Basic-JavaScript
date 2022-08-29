// 자바스크립트의 함수는 기능이 많다.
// 함수처럼 사용, 생성자 함수로 사용 (클래스)
// 하지만, 이걸 위해서 불필요한 무거운 프로토타입 객체가 생성된다.
const dog = {
  name: 'dog',
  play: function () {
    // 😥 객체 안에서 함수 선언 지양 key: function x
    console.log('왈왈');
  }
}
dog.play()
const obj = new dog.play()
console.log(obj);

// ES6 
const cat = {
  name: 'cat',
  play() { // 객체의 매서드(오브젝트에 속한 함수)
    console.log('냐옹');
  }
}
cat.play()
// const obj1 = new cat.play() // 생성자 함수로 사용 x

/** 
 *  화살표 함수의 특징
 *  1. 문법이 깔끔하다.
 *  2. 생성자 함수로 사용이 불가능(무거운 프로토타입을 만들지 않는다.)
 *  3. 함수 자체 arguments
 *  4. this에 대한 바인딩이 정적으로 결정됨
 *    - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩 됨
 */

function sum(a, b) {
  console.log(arguments);
}
sum(1,2)

const add = (a, b) => {
  console.log(arguments); // arrow 함수 외부의 arguments를 참조만 함
}
add(1,2)

const printArrow = () => {
  console.log(this);
}
printArrow();
cat.printArrow = printArrow;
cat.printArrow();