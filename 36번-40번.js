// 36번 구구단 출력하기 입력값을 받고 한줄로 출력하기!
let result = " ";
multiple = (num) => {
  for(let i = 0; i < 9; i++) {
    result += num * (i+1) + " "
  }
  console.log(result);
}

multiple(2)