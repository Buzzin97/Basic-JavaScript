// 36번 구구단 출력하기 입력값을 받고 한줄로 출력하기!
let result = " ";
multiple = (num) => {
  for(let i = 0; i < 9; i++) {
    result += num * (i+1) + " "
  }
  console.log(result);
}

multiple(2)

// 37번 반장선거 (문자열을 받고 그 문자열중 가장 많이 적힌사람이 반장으로 뽑힌다.)
const mate = ['원범', '원범', '혜원', '혜원', '혜원', '혜원', '유진', '유진'];
let leader = " ";
const results = {};

for(let index in mate) {
  let val = mate[index];
  results[val] = results[val] === undefined ? 1 : results[val] += 1;
}
leader = Object.keys(results).reduce(function(a , b) {
  return results[a] > results[b] ? a : b
})

console.log(results[leader]);
console.log(leader);

console.log(`${leader}(이)가 총 ${results[leader]}표로 반장이 되었습니다. `);

// 37번 복습 가장 많은 알파벳 찾기
const stringAbc = ['A', 'A', 'A', 'B', 'B' ,'C'] 
let abc = " ";
let finish = {};

for(let sup in stringAbc) {
  let inabc = stringAbc[sup]
  finish[inabc] = finish[inabc] === undefined ? 1 : finish[inabc] += 1;
}
console.log(finish);

abc = Object.keys(finish).reduce(function(a,b){
  return finish[a] > finish[b] ? a : b
})
console.log(abc);

console.log(`가장많은 알파벳은 ${abc}이고 총 ${finish[abc]}번 반복되었습니다.`);

