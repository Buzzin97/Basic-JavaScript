// 46번 각 자리 숫자합 구하기2 (1부터 20부터 쭉 나열후 그 숫자를 더하기)
const arr = [];
let total = 0;

for(let i = 0; i < 20; i++) {
  arr[i] = i+1;
}

console.log(arr);

arr.forEach((n) => {
  total = total + n%10;
  n = Math.floor(total/10)
})
console.log(total);
