// 한줄 주석
/** 여러줄 주석*/

/** 변수규칙
 * 라틴문자(0-9, a-z, A-Z,)
 * 대소문자를 구분함
 * 추천: camelCase
 * 한국어 x
 * 예약어 x
 * 숫자로 시작 x
 * 특수문자 x(_ ,$ 두가지 예외)
 * 이모지 x
 * 여러개의 변수를 숫자로 구분하는 것 x --> 최대한 구체적으로 의미있게 한다.
 */

let apple;
let redApple;

// 나쁜예시

let number = 20;

let audio1;
let audio2;

// 좋은예시
let myAge = 20;

let backgroundAudio;
let windAudio;

// 꿀팁! --> 큰 분류에서 구체적으로 적는다.
let audioBackground;
let audioAudio;


