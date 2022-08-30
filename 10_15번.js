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

const a = 100;
const sum = (a*(a+1))/2
console.log(sum);

// 12번 클래스 만들기

class Wizard {
  constructor(health,mana,armor){
    this.health = health
    this.mana = mana
    this.armor = armor
  }
  attack = () => {
    console.log('파이어볼!');
  } 
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

// 13번 몇 번째 행성인가요?

/**
 * 우리 태양계를 이루고 있는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성으로 총 8개 입니다.
 *  저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.

입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다. 
출력으로 그 순서에 해당하는 행성의 이름을 출력해 주세요.

예를들어 1이 입력되면, 첫번째 행성인 수성이 출력됩니다.
 */

const solar = [
  '수성',
  '금성',
  '지구',
  '화성',
  '목성',
  '토성',
  '천왕성',
  '혜왕성'
]
search = (n) => {
  if(n < 0) {
    console.log("1이상 수를 입력해주세요");
  } else if (n === 0) {
    console.log('태양');
  } else{
    console.log(`${n}번째 행성은 ${solar[n-1]}입니다`);
  }
}
search(2)

// 입력을 받을떈 prompt를 사용한다.
// const n = prompt("몇번째 행성을 원하나요?");
// console.log(solar[n-1]);

// 14번 3의 배수 인가요?
// 입력으로 랜덤한 숫자 n이 주어집니다.
// 만약 그 수가 3의 배수라면 '짝'이라는 글자를, 
// 3의 배수가 아니라면 n을 그대로 출력해 주세요.

 printNumber= (nums) => {
  if(nums % 3 === 0 && n != 0) {
    console.log('짝');
  } else {
    console.log(nums);
  }
 }

 printNumber(4)