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

// 37번 복습 가장 많은 알파벳 찾기 + arrow funtion 이용하기
const stringAbc = ['A', 'A', 'A', 'B', 'B' ,'C'] 
let abc = " ";
let finish = {};

for(let sup in stringAbc) {
  let inabc = stringAbc[sup]
  finish[inabc] = finish[inabc] === undefined ? 1 : finish[inabc] += 1;
}
console.log(finish);

abc = Object.keys(finish).reduce((a,b) =>
  finish[a] > finish[b] ? a : b
)
console.log(abc);

console.log(`가장많은 알파벳은 ${abc}이고 총 ${finish[abc]}번 반복되었습니다.`);

// 37번 if문으로 구현하기 , 입력 함수 만들기
const def = ['A', 'A', 'B', 'B', 'B' ,'C', 'A' ,'A'] 
let pack = {};
let winner = " ";

for(let a in def) {
  let packing = def[a]
  if (pack[packing] === undefined) {
    pack[packing] = 1
  } else 
  {
    pack[packing] += 1
  }
}
console.log(pack);
winner = Object.keys(pack).reduce(function(a,b){
  return pack[a] > pack[b] ? a:b
})
console.log(winner);
console.log(pack[winner]);

display = (a,b) => {
  console.log(`${a}가 총${b}번으로 가장많이 산출되었습니다.`);
}
display(winner, pack[winner])


// 38번 점수가 1등 ~ 3등 학생(중복)한테 사탕을 주자!

const score = ['97' ,'86' ,'75' ,'66' ,'55' ,'97' ,'85' ,'97' ,'97' ,'95']
const scores = ['97' ,'86' ,'75' ,'66' ,'55' ,'97' ,'85' ,'75' ,'97' ,'95']

score.sort((a,b) => a - b)
console.log(score);

let top3 = [];
let count = 0;

while (top3.length < 3) {
  let values = score.pop()
  if(!top3.includes(values)){
    top3.push(values)
  }
  count++
}

console.log(top3);
console.log(count);

// 38번 다른 풀이

// 해시로 카운트 하기  key값은 점수 , 값은 학생 수
const counter = scores.reduce((a,b) => {
  a[b] = a[b] ? a[b]+= 1 : 1;
  return a
},{})

// 키값으로 3등까지 뽑기
const cadidates = Object.keys(counter)
.sort((a,b) => b - a)
.slice(0,3)

// 3등까지의 key값을 합산해준다.
const solves = cadidates.reduce((a,b) => {
  a += counter[b]
  return a;
},0)

console.log(counter);
console.log(cadidates);
console.log(solves);
