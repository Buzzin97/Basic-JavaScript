// closure는 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해 사용한다.
// 캡슐화와 정보은닉
// 클래스 private 필드 또는 메소드를 사용하는 효과와 동일하다.
function makeCounter() {
  let count = 0;
  function increase() {
    count++
    console.log(count);
  }
  return increase;
}


// 외부에서 내부 함수를 다룰수 없는것을 이용해서  private 효과를 내었다.
const increase = makeCounter();
increase()
increase()
increase()

// 클래스 private 필드
class Counter {
  #count = 0;
  increase() {
    this.#count++
    console.log(this.#count);
  }
}
const counter = new Counter()
counter.increase()
counter.increase()