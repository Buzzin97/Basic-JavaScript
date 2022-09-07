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

