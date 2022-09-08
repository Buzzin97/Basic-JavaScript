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


// 47번 set자료형 응용(set은 중복을 허락하지 않음)
const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903"
};  // 중복 제거 해주기 set 객체

let result = new Set();
console.log(result);
for(let key in people) {
  result.add(people[key])
}
console.log(result); // 중복 제거된 객체 
console.log(result.size);