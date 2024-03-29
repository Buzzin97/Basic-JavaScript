// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자!
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Job {
  constructor(name, part , time) {
    this.name = name;
    this.part = part;
    this.time = time;
  }
  payment() {
    return this.time * this.pay;
  }
}

class PartTime extends Job {
  pay = 8000;
  constructor(name, part ,time ) {
    super(name, part ,time );
  }
 get payment() {
    return this.time * this.pay;
  }
}

class FullTime extends Job {
  pay = 10000;
  constructor(name, part, time) {
    super(name, part, time);
  }
  get payment() {
    return this.time * this.pay;
  }
}

const partime = new PartTime('세진','알바' , 3);
console.log(partime);
console.log(partime.payment);

const fulltime = new FullTime('박세진', '정직원', 52);
console.log(fulltime);
console.log(fulltime.payment);

//partime.payment()

