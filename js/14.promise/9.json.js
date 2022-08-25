// JSON: JavaScript Object Notation
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷
// stringify(object): JSON
// parse(JSON): object
const sejin = {
  name: 'sejin',
  age: 20,
  eat: () => {
    console.log('eat');
  },
};

// 직렬화 Serializing: 객체를 문자열로 변환
const json = JSON.stringify(sejin) // JSON 순수 문자열 데이터
console.log(sejin);
console.log(json); // 함수는 JSON에 포함되지 않는다.

// 역직렬화 Deserializing: 문자열 데이터를 자바스크릅트 객체로 변환
const obj = JSON.parse(json); // 다시 객체로
console.log(obj);