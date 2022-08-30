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

const n = 100;
const sum = (n*(n+1))/2
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


