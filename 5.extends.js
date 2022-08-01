// class Tiger {
//   ç
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다!');
//   }
//   play() {
//     console.log('놀자!');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다!');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('범이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
    constructor(color, ownerName) {
      super(color); // super 부모클래스를 가리킨다.
      this.ownerName = ownerName;
    }
  play() {
    console.log('놀자아~!');
  }

  // 오버라이딩 overriding
  eat() {
    super.eat(); // 부모 클래스의 eat 함수를 가져왔다.
    console.log('콩이가 먹는다!');
  }
}
const dog = new Dog('콩이', '팍');
console.log(dog);
dog.play();
dog.eat();