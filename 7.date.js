// UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date()); // 현재 시간을 출력한다. ()
console.log(new Date('Jun 5, 2022'));

console.log(Date.now()); // static 함수 now 1231244214식으로 출력한다.
console.log(Date.parse('2022-12-30')); // 밀리초 단위로 반환한다.

const now = new Date();
now.setFullYear(2023)  // 인스턴스 레벨의 함수
now.setMonth(10); // 0부터 1월이다.
console.log(now.getFullYear());
console.log(now.getDate()); // 0이 1이다!
console.log(now.getDay); // 0 일요일부터, 1...6 토요일
console.log(now.getMinutes());
console.log(now.getTime());

console.log(now.toString());
console.log(now.toDateString());
