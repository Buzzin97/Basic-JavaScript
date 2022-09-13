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

// 48번 대소문자 바꿔주기
const str = 'AAABBBcccddd'
let array = [];

for(let i = 0; i < str.length; i++) {
  if(str[i] === str[i].toLowerCase()) {
    array.push(str[i].toUpperCase())
  } else {
    array.push(str[i].toUpperCase())
  }
}
console.log(array.join(""));

// 49번 최대값 구하기

let numbers = '1 2 3 4 5 6 7 8 9 10'.split(' ').map((n) => {
  return parseInt(n, 10);
}); // 문자열을 숫자로 맵핑했음
numbers.sort((a, b) => {
  return b-a;
}); // 오름차순정렬 => 배열

console.log(numbers[0]);  // 배열의 첫번째 요소가 최대값이다.

// 49번 - 1  sort함수 최솟값 구하기 & parseInt mapping
let number = '1 3 5 7 9'.split(' ').map((n) => {
  return parseInt(n,10);
})
let results = number.sort((a,b) => {
  return a - b;
})
console.log(number);
console.log(results[0]);

// 50번. 버블정렬 구현하기
function bubble(itema) {
  let formula = itema.slice(); 

  for (let i = 0; i < formula.length - 1; i++) {
    for (let j =0; j < formula.length - i - 1; j++) {
      if  (formula[j] > formula[j + 1]) {
         let values = formula[j]
         formula[j] = formula[j + 1]
         formula[j+1] = values
      }
    }
  }
  return formula;
}

const itema = '1 5 2 4 3 8'.split(' ').map((n) => {
  return parseInt(n, 10);
}); // 문자열 => 배열 => 숫자로 반환

console.log(bubble(itema));

