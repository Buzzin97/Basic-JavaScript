// static 정적 프로퍼티, 메서드
class Fruit {
  static MAX_FRUITS = 4;
  // 생성자: new 키워드로 객체를 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
   }

   // 클래스 레벨의 메서드
   static makeRandomFruit() {
      // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    return new Fruit('banana', '🍌')
   }

   // 인스턴스 레벨의 메서드
   display = () => {
     console.log(`${this.name}: ${this.emoji}`);
    };
  }
  const banana = Fruit.makeRandomFruit();
  console.log(banana);
  console.log(Fruit.MAX_FRUITS);
//console.log(Fruit.name); // 인스턴스 레벨의 프로퍼티와 메서드는 호출할 수 없다.
//Fruit.display();


// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
// orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(orange.emoji);
apple.display();

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: 'sejin'};

Math.pow();
Number.isFinite(1);