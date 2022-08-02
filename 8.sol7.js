// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자!
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
  constructor(name, part, pay , payRate) {
    this.name = name;
    this.part = part;
    this.pay = pay;
    this.payRate = payRate;
  }
  payment() {
    return this.pay * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  static PAY_RATE = 10000;
  constructor(name,part,pay) {
    super(name, part, pay, FullTimeEmployee.PAY_RATE);
  }
}

class PartTimeEmployee extends Employee {
  static PAY_RATE = 8000;
  constructor(name,part,pay) {
    super(name, part, pay, PartTimeEmployee.PAY_RATE);
  }
}


const park = new FullTimeEmployee('세진' ,'font-end', 30);
const sejin = new PartTimeEmployee('진팍' ,'pulishing', 15);
console.log(park.payment());
console.log(sejin.payment());