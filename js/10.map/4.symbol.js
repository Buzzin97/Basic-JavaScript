// Symbol 심벌
// 유일한 키를 생성할 수 있음
const map = new Map();
const key1 = 'key';
const key2 = 'key';
map.set(key1, 'Hello');
console.log(map.get(key2)); // 변수(원시값)이 달라도 값이 같아서 변환되었다.
console.log(key1 === key2); // 값과 타입이 같다.

const key3 = Symbol('key'); // 유일한 키를 만들때 Symbol을 사용한다.
const key4 = Symbol('key');
map.set(key3, 'Hello')
console.log(map.get(key4));
console.log(key3 === key4);

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심벌 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2);

console.log(Symbol.keyFor(k1)); // keyFor는 global symbol의 key 값을 반환해준다.
console.log(Symbol.keyFor(key3));

const obj = { [k1]: 'Hello', [Symbol('key')]:1 };
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol['key']]);
