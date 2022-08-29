// 동결! Object.freeze 추가 삭제 쓰기 속성 재정의가 안된다.
// (단, 얕은 동결이 된다.)
const sejin = { name: '세진'}
const dog = { name: '와우',  emoji: '🐕', owner: sejin};
Object.freeze(dog);
dog.name = '멍멍'
console.log(dog);

// 밀봉! Object.seal 값의 수정은 가능, 추가 삭제 속성 재정의는 불가능하다.
const cat = {...dog}
// Object.assign(cat, dog); // assign 복사해온다. spread 연산자와 비슷하다.
Object.seal(cat)
cat.name = '냐옹'
delete cat.emoji
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

// 확장 금지 preventExtensions 추가만 불가능
const tiger = { name: '어흥' };
Object.preventExtensions(tiger)
console.log(Object.isExtensible(tiger));
tiger.name ='어흐응'
console.log(tiger);
delete tiger.name