console.log(globalThis);
console.log(this); // window
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num = 2; console.log(num)'); // 코드 실행 eval
console.log(isFinite(1)); // true
console.log(isFinite(Infinity)); // false

console.log(parseFloat('12.43')); // 문자열 --> 숫자로 변환
console.log(parseInt('12.43')); // 실수 --> 정수

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리 해야 한다.
const URL = 'https://세진팍.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component이용
const part = '세진팍.com';
console.log(encodeURIComponent(part));

