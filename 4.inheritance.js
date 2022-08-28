// 프로토타입을 베이스로한 객체지향 프로그래밍
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
}

function Dog(name, emoji, owner) {
  // super(name, emoji) == call
  Animal.call(this, name, emoji);
  this.owner = owner
}
// 기본 프로토타입은 Object로 되어있다. create로 Animal.를 상속하게 했다.
// Dog.prototype = Object.create(Object.prototype) 
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.play = () => {
  console.log('같이 놀자옹!');
}

function Tiger(name, emoji) {
  Animal.call(this, name, emoji)
}

Tiger.prototype = Object.create(Animal.prototype)
Tiger.prototype.hunt = () => {
  console.log('사냥하자!');
}
const dog1 = new Dog('멍멍', '🐕' , '세진')
dog1.play()
dog1.printName()
const tiger1 = new Tiger('어흥', '😨')
tiger1.printName()
tiger1.hunt()

// 최신 자바스크립트 타입스크립트는 클래스를 이용한다.