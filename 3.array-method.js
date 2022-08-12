 // 배열의 함수들
 // 배열 자체를 변경하는지, 새로운 배열을 반환하는지

 const fruits = ['🍎', '🍊', '🍋'];  // 0 1 2 3

 // 특정한 오브젝트가 배열인지 체크
 console.log(Array.isArray(fruits));
 console.log(Array.isArray({}));

 // 특정한 아이템의 위치를 찾을때
 console.log(fruits.indexOf('🍎')); // 인덱스가 나온다 0

 // 배열안에 특정한 아이템이 있는 체크
 console.log(fruits.includes('🍎'));

 // 추가 - 제일 뒤
 let length = fruits.push('복숭아'); // 배열 자체를 수정(업데이트) 추가된 길이도 리턴해준다.
 console.log(fruits);
 console.log(length);

 // 추가 - 제일 앞
 length = fruits.unshift('딸기');
 console.log(fruits);
 console.log(length);

 // 제거 - 제일 뒤
 let lastItem = fruits.pop(); // 제일 뒤에 요소를 배열에서 제거해준다. 그리고 요소를 리턴한다.
 console.log(fruits);
 console.log(lastItem);

 // 제거 제일 앞
 lastItem = fruits.shift(); 
 console.log(fruits);
 console.log(lastItem);

 // 중간에 추가 또는 삭제
 const deleted = fruits.splice(1, 1);
 console.log(fruits); // 배열자체를 수정
 console.log(deleted);
 fruits.splice(1,0,'바나나', '수박');
 console.log(fruits);
