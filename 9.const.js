// let 재할당이 가능
  let a =1;
  a = 2;

// const는 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
  const text = 'hello';
// text = 'hi'; 이렇게 하면 안된다.

// 1. 상수
  const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
  const apple = {
    name: 'apple',
    color: 'red',
    display: '🍎',
 };
 // apple = {};
  console.log(apple);
  apple.name = 'orange';
  apple.display = '🍏'
  console.log(apple);

  // const는 재할당이 불가능 하지만 객체의 내용은 수정이 가능하다!
