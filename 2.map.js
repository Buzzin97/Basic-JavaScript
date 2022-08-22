//Map 은 고유한 키를 이용한다.
const map = new Map([
  ['key1', 'a'],
  ['key2', 'b'],
]);
console.log(map);

// 사이즈 확인 size
map.size 
// 존재하는지 확인  has
map.has('key1')
// 순회 forEach
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
//찾기 get
map.get('key1');
//추가 set
map.set('key3', 'd');
console.log(map);
//삭제 delete
map.delete('key3');
console.log(map);
//전부 삭제
map.clear();

// 오브젝트와의 큰 차이점? Map은 사용할 수 있는 함수가 많다!
const key = { name: 'milk', price: 10};
const milk = { name: 'milk', price: 10, description: '맛있는 우유'};
const obj = {
  [key]: milk,
};
console.log(obj);  // key는 object이고 값은 milk 객체가 들어있다.

const map2 = new Map([[key, milk]]);
console.log(map2);
console.log(obj[key]); // 객체의 동적 접근
console.log(map2[key]); // undefined
console.log(map2.get(key)); // map의 get 함수를 이용한다.