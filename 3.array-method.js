 // 배열의 함수들
 // 배열 자체를 변경하는지, 새로운 배열을 반환하는지

 const fruits = ['🍎', '🍊', '🍋'];  // 0 1 2 3

 // 특정한 오브젝트가 배열인지 체크 isArray
 console.log(Array.isArray(fruits));
 console.log(Array.isArray({}));

 // 특정한 아이템의 위치를 찾을때 indexOf
 console.log(fruits.indexOf('🍎')); // 인덱스가 나온다 0

 // 배열안에 특정한 아이템이 있는 체크 includes
 console.log(fruits.includes('🍎'));

 // 추가 - 제일 뒤 push
 let length = fruits.push('복숭아'); // 배열 자체를 수정(업데이트) 추가된 길이도 리턴해준다.
 console.log(fruits);
 console.log(length);

 // 추가 - 제일 앞 unshift
 length = fruits.unshift('딸기');
 console.log(fruits);
 console.log(length);

 // 제거 - 제일 뒤 pop
 let lastItem = fruits.pop(); // 제일 뒤에 요소를 배열에서 제거해준다. 그리고 요소를 리턴한다.
 console.log(fruits);
 console.log(lastItem);

 // 제거 제일 앞 shift
 lastItem = fruits.shift(); 
 console.log(fruits);
 console.log(lastItem);

 // 중간에 추가 또는 삭제 splice
 const deleted = fruits.splice(1, 1);
 console.log(fruits); // 배열자체를 수정
 console.log(deleted);
 fruits.splice(1,0,'바나나', '수박');
 console.log(fruits);

 // 잘라진 새로운 배열을 만듬 slice
 let newArr = fruits.slice(0, 2); // 기존의 배열을 유지하고, 잘라진 배열을 리턴한다.
 console.log(newArr);
 console.log(fruits);
 newArr = fruits.slice(-1); // 제일 뒤에서 1칸
 console.log(newArr);

// 여러개의 배열을 붙여줌 concat
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

// 중첩 배열을 하나의 배열로 쫙 펴기 flat
let arr = [
  [1,2,3],
  [4,[5,6]],
];
console.log(arr);
console.log(arr.flat(2));  
arr = arr.flat(2);

// 특정한 값으로 배열을 채우기 fill (배열자체를 수정)
arr.fill(0);  // 0 으로 다채우기
console.log(arr);

arr.fill('s',1,3); // 인덱스 1 2를 's'로 채우기
console.log(arr);

arr.fill('a',1); // 인덱스 1부터 'a'로 채우기
console.log(arr);

// 배열을 문자열로 합하기 join
let text= arr.join();
console.log(text); 
text= arr.join(' $ ');
console.log(text); 