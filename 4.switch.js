// 조건문 Conditional Statement
// switch
// if else if else if else
// 정해진 범위안에 값에 대해 특정한 일을 해야 하는 경우
let day = 6; // 0:월요일 , 1:화요일... 6: 일요일
let dayName;
if(day === 0) {
  dayName = '월요일';
} else if (day === 1) {
  dayName = '화요일'
}

// case 별로 나누는 switch문! 
switch(day) {
  case 0:
    dayName = '월요일'
    break;
  case 1:
    dayname = '화요일'
    break;
    default : console.log('해당 요일이 없음'); // if문의 else와 같다 default
}

let condition = 'okay'; // okay , good --> 좋음! , bad --> 나쁨!
let text;
switch(condition) {
  case 'okay':
  case 'good':
    text = '좋음';
    break; // 여러가지 케이스일때는 한가지 break!
  case 'bad':
    text = '나쁨';
    break;
}
console.log(text);