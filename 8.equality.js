// 동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름
console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2'); // 타입은 다르지만 값이 같아서 == 는 true
console.log(2 === '2'); // 값은 같지만 타입이 달라서 === 는 false
console.log(true == 1); //  boolean True는 1이고 false는 0이다
console.log(true === 1); //  이 경우는 타입이 달라서 false이다
console.log(false == 0);
console.log(false === 0);

console.clear();

const obj1 = {
  name: 'js',
};

const obj2 = {
  name: 'js',
};

console.log(obj1 == obj2); // 객체 변수는 메모리 주소를 각각 담고 있기 때문에 같지않다.
console.log(obj1 === obj2); // 결국 메모리 주소는 다르다는 뜻이다.
console.log(obj1.name === obj2.name); // 객체의 내용물은 같은 값을 가진다. 
console.log(obj1.name === obj2.name); 

let obj3 = obj2;  // 메모리 주소를 할당한다.
console.log(obj3 == obj2);  // 메모리 주소는 같기 때문에 true이다.
console.log(obj3 === obj2);