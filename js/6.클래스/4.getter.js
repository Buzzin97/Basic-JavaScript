// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
     return `${this.firstName} ${this.lastName}`
   }

   set fullName(value) {
      console.log('set',value);
   }
}

const student = new Student('세진', '박');
console.log(student.fullName);
student.fullName = '김철수';