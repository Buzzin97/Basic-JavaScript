// 31번 자바스크립트 자료형의 복잡도
// 배열하는 접근하는 속도가 일정하면 O(1)이다
const arr = ['1','2','3','4']

console.log(arr[0]); // O(1)   
console.log(arr.push('5')); // O(1)  
console.log(arr.slice()); // O(1)이 아니다 slice 매개변수가 커질수록 시간 복잡도가 증가한다.
console.log(arr.pop()); // O(1)
console.log(arr.includes(5)); // O(1) 배열의 크기가 커질수록 시간 복잡도가 증가한다.
console.log(arr); // O(1)

// 32번 문자열 만들기 (문자열을 입력받으면 단어의 갯수를 출력하는 프로그램을 만들기)

const words = '안녕하세요. 저는 한양대학교 건축공학전공 진세입니다.'
console.log(words.split(" "));
console.log(words.split(" ").length);

inputWord = (words) => {
  const count = words.split(" ").length;
  console.log(count);
}
inputWord(words)

// 33번 숫자 여러개가 입력되면 역순으로 숫자들을 하나씩 출력해주기
const data = '5 6 7 8'
let result = ' ';
cha = (data) => {
  let datas = data.split(" ").reverse()
  return datas
} // 문자열을 입력 받아서 split(" ")기준으로 배열 생성 .reverse() 거꾸로 배열을 return한다.
let solve = cha(data) // 함수의 return값을 저장해줄 변수 선언해줬다.
console.log(solve); 
for(let i = 0; i < solve.length; i++) {
  result += solve[i]+ " "
}
// result = result + solve[i] + " " (뒤에 공백) const result는 빈 문자열이다.
console.log(result);

// 34번 sort 구현하기
const unsorted = '176 156 155 165 93 169';
let sorted = ' ';
// sort() 함수 ==> 문자열의 순서대로 정렬을 해준다. (비교해서 정렬)
// 숫자대로 안해준다... function a b 를 이용해서 a - b가 음수 일때 a가 앞으로 나올수 있게한다.
sorted = unsorted.split(" ").sort(function(a,b){
  return a-b;
}).join(" ")


console.log(sorted);

// 35번 Factory 함수만들기 (2제곱 3제곱 4제곱 만들기)
function one(n){
  function two(value){
     return Math.pow(value, n)
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));
