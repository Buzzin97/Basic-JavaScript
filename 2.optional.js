// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ES11 (ECMAScript 2020)
// ?.
// null 또는 undefined을 확인할때
let item = { price: 1 };
//const price = item && item.price;
const price = item?.price;
console.log(price);

let obj = {name: '강아지' , owner: {name:'세진'}};
//const ownerName = obj && obj.owner && obj.owner.name; // 객체안의 객체 접근법! undefind이 나올시 error가 나오기 때문에 이렇게 접근해야한다. 
function printName(obj) {
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}
printName(obj);