// Set
const set = new Set([1, 2, 3]);
console.log(set);

// 사이즈 확인
console.log(set.size);

// 존재하는지 확인
console.log(set.has(2));
console.log(set.has(6));

// 순회
set.forEach((item) => console.log(item));
for(const value of set.values()) {
  console.log(value);
}

// 추가
set.add(6);
console.log(set);
set.add(6);  // set은 중복이 되지 않는다.
console.log(set);

// 삭제
set.delete(6);
console.log(set);

// 전부 삭제
set.clear();
console.log(set);

// 오브젝트 세트
const obj1 = {name: 'a', price: 8}
const obj2 = {name: 'b', price: 5}
const objs = new Set([obj1, obj2]);
console.log(objs); // set의 사이즈와 객체 2개가 들어가있다.

// 퀴즈
obj1.price = 10; // 얕은 복사가 되기 떄문에 set크기는 2이다.
objs.add(obj1);
console.log(objs);

// 퀴즈
const obj3 = { name:'b', price: 3} // 참조값이 새로 생겨서 객체 하나가 늘었다. Set의 값은 3이다.
objs.add(obj3);
console.log(objs);
obj3.price = 8 // 얕은 복사가 이루어진다.
console.log(objs);