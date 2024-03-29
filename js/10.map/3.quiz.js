// 주어진 배열에서 중복을 제거 하라
const fruits = ['a', 'b' , 'c' , 'a', 'b', 'd'];
// ['a' , 'b' , 'c' , 'd']

function array (item) {
  return [...new Set(item)]
}
console.log(array(fruits));

const arr = [...new Set(fruits)]
console.log(arr);

function removeDuplication(value) {
    return [...new Set(fruits)];
}
console.log(removeDuplication(fruits));

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트를 만들기 
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

function findIntersection(set1, set2) {
  const Array = [...set1].filter(item => set2.has(item));
  return new Set(array);
};
console.log(findIntersection(set1,set2));



