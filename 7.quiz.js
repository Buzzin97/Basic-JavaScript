// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록한다.
// input:['🍌','🍓','🍇','🍓']
// output:['🍌','🥝','🍇','🥝']
function replace(array, from, to) {
  return array.map(item => item === from ? to : from )
};


const input = ['🍌','🍓','🍇','🍓'];
const output = replace(input,'🍓','🥝');
console.log(output);

/** 퀴즈2: 배열과 특정한 요소를 전달받아,
 *  배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
 *  input: ['🍌','🥝','🍇','🥝'], '🥝'
 *  output: 2 
 */
function counter(array,item) {
  return array.filter(value => value === item).length;
}


// function counter(array, item) {
//   return array.reduce((count,value) => {
//     if(value === item) {
//       count++;
//     }
//     return count;
//   },0)
// }
 

const fruits = ['🍌','🥝','🍇','🥝'];
console.log(counter(fruits,'🥝'));


/** 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
 *  배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
 *  input['🍌','🥝','🍇'], ['🍌','🍓','🍇','🍓']
 *  output ['🍌','🍇']
 */

 function match(array1,array2) {
  return array1.filter(item => array2.includes(item));
  // let result = [];
  // for(let i = 0; i < array1.length; i++){
  //   if(array2.includes(array1[i])) {
  //     result.push(array1[i])
  //   }
  // }
  // return result;
}

console.log(match(['🍌','🥝','🍇'], ['🍌','🍓','🍇','🍓']));



/** 퀴즈4
 *  5이상(보다 큰)의  숫자들의 평균
 */
const nums = [3, 16, 5, 25, 4, 34, 21];