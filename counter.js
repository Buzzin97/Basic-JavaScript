let count = 0;
export function increase() {
  count++;
  console.log(count);
}
export function getCount() {
  return count;
}
// 변수는 안가져오고 함수만 외부로 노출 시킬수 있다. 디폴트 설정도 가능하다.
// 모듈화가 되어있기 때문에 외부에서 사용하려면 export를 해줘야한다.