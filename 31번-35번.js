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