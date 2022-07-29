const x = 0;
const y = 0;
const coordinate = {x, y};   //{x: x, y: y};
console.log(coordinate);

function makeObj(name, age) { // 키와 변수가 가리키는 값이 같으면 생략이 가능하다.
  return {
    name,
    age
  };
}