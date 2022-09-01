// 16번 꺼꾸로 출력기 메서드 체이닝 이용
// 문자열 배열(split(기준으로 배열)) ==> 거꾸로 메서드 이용(reverse) ==> 배열을 문자열로(join(기준))
let a = '거꾸로';
change = (a) => {
  let b = a.split('').reverse('').join('')
  console.log(b);
}
change(a)

