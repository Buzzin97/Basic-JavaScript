// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation
const obj1 = {name: 'a'};
const obj2 = {name: 'b', owner: 'Sejin'};

if (obj1 && obj2) { // 객체안에 값이 있어서 불리언 값이 true이다.
  console.log('둘다 true!');
}

if (obj1 || obj2) { 
  console.log('둘다 true!');
}

let result = obj1 && obj2; // && 연산자라서 앞 값이 true이면 뒤에 값을 그냥 short 할당한다.
console.log(result);

result = obj1 || obj2; // || 연산자는 앞이 true이면 앞의 값만 할당한다.
console.log(result);

// 활용예
// 조건이 truethy일때, && 무언가를 해야 할 경우
// 조건이 falshy일때, || 무언가를 해야 할 경우
function changeOwner(animal) {
  if(!animal.owner) {
    throw new Error('주인이 없습니다.');
  }
  animal.owner = '바뀐주인!';
}

function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있습니다.');
  }
  animal.owner = '새로운 주인!';
}

obj1.owner && changeOwner(obj1); // 앞의 값이 false이면 뒤에 값이 호출되지 않는다.
obj2.owner && changeOwner(obj2); // 앞의 값이 true이면 뒤에 값이 호출된다. && 연산자
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1); // 앞의 값이 false이면 뒤에 값이 호출된다. || 연산자
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경우를 확인할때
let item // = {price: 1};
const price = item && item.price; // undefind일때 item.price는 error가 난다. 따라서 && 연산자를 
console.log(price);               // 이용해서 item이 true라면 item.price를 접근할 수 있게 한다. 

// 기본값을 설정
// default parammeter 전달하지 않거나, undefined 설정
// || 값이 falshy한 경우 설정(할당): 0, -0, null, undefined, ''
function print(message) {
  const text = message || 'Hello';
  console.log(text);
}
// falshy의 값이다. || 뒤가 호출된다.
print();
print(undefined);
print(null);
print(0);
