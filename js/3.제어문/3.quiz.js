// 퀴즈!
let num = 2;
// num의 숫자가 짝수이면 👍, 홀수라면 👎을 출력하도록
// if문
// ternary 이용

if (num % 2 === 0) {
  console.log("👍");
} else {
  console.log('👎');
}
// ternary
num % 2 === 0 ? console.log("👍") : console.log('👎');

// console.log 중복 피하기 ==> 바로 변수

let emoji = num % 2 === 0 ? "👍" : '👎';
console.log(emoji);