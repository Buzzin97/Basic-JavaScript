// 오브젝트는 단 하나의 prototype을 가리킬 수 있다. (부모는 단 하나!)
// 하지만! 여러개의 함수들을 상속하고 싶을때 (다중상속이 가능하다.)
// Mixin
const play = {
  play: function () {
    console.log(`${this.name} 놀자!`);
  }
}

const sleep = {
  sleep: function () {
    console.log(`${this.name} 자자!`);
  }
}

function Dog(name) {
  this.name = name;
}

Object.assign(Dog.prototype, play, sleep); // assign 인스턴스를 섞어준다.
const dog = new Dog('멍멍')
console.log(dog);
dog.play()
dog.sleep()

class Animal {}
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

Object.assign(Tiger.prototype, play, sleep)
const tiger = new Tiger('어흥!')
tiger.play()
tiger.sleep()