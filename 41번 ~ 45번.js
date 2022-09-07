// 41번 소수 판별기 (소수는 자기자신과 1만을 인자로 같은 수이다.)
const prime = 11;
primeFun = (n) => {
  for(let i = 2; i < n;  i++) {
    if(n % i === 0) {
      console.log('소수가 아닙니다.');
      return false;
    }
    if(n === 1) {
      console.log('1은 소수가 아닙니다.');
      return false;
    }
  }
console.log(`${n}은 소수입니다.`);
}

primeFun(prime)

// 42번 요일 구하기  2022년 x월 x일의 요일 구하기
const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const date = 21;
const month = 12;

solveDay = (a,b) => {
  const nowDay = new Date(`2022-${a}-${b}`)
  console.log(day[nowDay.getDay()]);
}

solveDay(month,date)


// 43번 10진수를 2진수로 만들기
let dec = 160;
const arr = [];

while(dec) {
  arr.push(dec%2)  // 빈 배열에 2로 나눈 나머지값을 push 해준다.
  dec = Math.floor(dec / 2) // while 반복동안 계속 2로 나누어줘서 dec에 다시 저장해준다.
}
let aaa = 160;
console.log(arr.reverse().join(''));
console.log(aaa.toString(2));