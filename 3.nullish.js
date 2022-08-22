// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// ?? null, undefined
// || falshy한 경우 설정(할당) 0 , -0 , ''
let num = 0;
console.log(num || '-1'); // 0은 false 이므로 뒤에 있는 값이 호출된다.
console.log(num ?? '-1'); // 0은 값이 있는데 null, undefined로 나오는 것을 해결한다.