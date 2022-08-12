const textObj = new String('Hello World');  // 객체 문자열
const text = 'Hello World'; // 문자열

console.log(text.substring);

console.log(text.length); // 문자열의 길이

console.log(text[0]);  // 문자열 배열의 요소 
console.log(text.charAt(0));

console.log(text.indexOf('l')); // 문자열의 문자가 몇 번째 배열에 있는지
console.log(text.lastIndexOf('l')); // 거꾸로 세어준다.

console.log(text.includes('tx')); // 문자열에 포함되어 있는지

console.log(text.startsWith('He')); // 문자로 시작 하는지
console.log(text.endsWith('!')); // 문자로 끝나는지

console.log(text.toUpperCase()); // 대문자로 변환한다.
console.log(text.toLowerCase()); // 소문자로 변환한다.

console.log(text.substring(0, 2)); // 0 부터~ 2까지 문자열
console.log(text.slice(2)); // 2부터 문자를 잘라낸다.
console.log(text.slice(-2)); // 뒤에서 부터 2 문자를 잘라낸다.

const space = '    space  ';
console.log(space.trim()); // 공백을 다 제거해준다.

const longText = 'Get to the point';
console.log(longText.split(' ')); // 지정한것 기준으로 끊어서 배열로 반환해준다.
console.log(longText.split(' ',2)); // 스페이스바 기준 2덩이만 가져온다.