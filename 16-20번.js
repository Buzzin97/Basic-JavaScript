// 16번 꺼꾸로 출력기 메서드 체이닝 이용
// 문자열 배열(split(기준으로 배열)) ==> 거꾸로 메서드 이용(reverse) ==> 배열을 문자열로(join(기준))
let a = '거꾸로';
change = (a) => {
  let b = a.split('').reverse('').join('')
  console.log(b);
}
change(a)

// 17번 놀이기구 키제한
// 키를 입력해서 150이넘으면 yes 아니면 no를 출력하시오
restrict = (tall) => {
  if (tall < 0 || tall < 150 ) {
    console.log('no'); 
  } else {
    console.log('yes');
  }
}
restrict(170)

// 18번 평균점수 구하기 프로그램 (소숫점 자리는 버린다. floor)
// const socre = prompt().split(' ')
let score = ['75', '80', '88']
average = (score) => {
  let sums  = 0;
  for(let i = 0; i < score.length; i++) {
   sums += parseInt(score[i],10);
  }
  console.log(Math.floor(sums/score.length));
}
average(score) 


// 19번 제곱을 구하기
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 만들기
const num = ["2" , "6"]
console.log(Math.pow(parseInt(num[0],10),parseInt(num[1],10))); // pow 첫번째것이 밑 , 두번째 것이 지수
