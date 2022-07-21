// 문자열타입
let string = '안녕하세요';
string =`안녕!`;
console.log(string);

//특수문자 출력하는 법
string = '"안녕"';
console.log(string);

string = `안녕!\n 반가워\t\t너의 이름은`;
console.log(string);

// 템플릿 리터럴 ``
let id = '링크';
let greetings = "'안녕!, " + id + "✋\n즐거운 하루 보내요!'"
console.log(greetings);

greetings = `'안녕, ${id}🦊
즐거운 하루 보내요!'`
console.log(greetings);