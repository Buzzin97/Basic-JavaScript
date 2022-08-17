const fruits = ['🍎', '🍊', '🍋', '🍌'];  // 0 1 2 3

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
};

// const fruits = ['🍎', '🍊', '🍋', '🍌'];  // 0 1 2 3
// 추가, 삭제 - 좋지 않은 방식 
fruits[4] = '놉';  // 인덱스를 이용해서 추가하는것은 좋은 방식이 아니다.
console.log(fruits);

delete fruits[1];
console.log(fruits);
