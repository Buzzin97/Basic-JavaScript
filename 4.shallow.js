// 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign
const pizza = {
  name: '🍕',
  price: 2,
  owner: {name: '세진'}
};
const ramen = {
  name: '🍜',
  price: 3
};
const sushi = {
  name: '🍣',
  price: 1
};

const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('1',store1);
console.log('2',store2);

store2.push(sushi);
console.log('store1', store1);
console.log('store2', store2);

pizza.price = 4;  // 배열에 변경된 사항이 반영된다. 
console.log('store1', store1);
console.log('store2', store2);
// 배열의 객체에는 주소값이 저장되기 때문에 실제 값은 변경이 가능하다.