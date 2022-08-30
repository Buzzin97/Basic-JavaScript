// 10번 별찍기
const star = 5;
for(let i = 1; i <= star; i++) {
  let tree = ""
  for(let k = 1; k <= star -i; k++) {
    tree += " "
  }
  for(let j = 1; j <= i*2-1; j++) {
    tree += "*"
  }
  console.log(tree);
}

// 11번 1 ~ 100까지 숫자 더하기 for이용
let s = 0;
for(let i = 0; i <= 100; i++) {
 s = s + i
}
console.log(s);