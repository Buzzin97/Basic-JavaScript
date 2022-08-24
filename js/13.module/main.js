// import increase1 from './counter.js';
// export default는 딱하나만 가져오기 때문에 이름을 바꿔도 상관 없다.


// import { increase as increase1 } from './counter.js';


// export 할때 {} 같은 이름을 가져와야한다.
// 이름을 바꾸고 싶을땐 as 

// import { increase, getCount } from './counter'; 함수를 하나하나씩 가져오기
import * as counter from './counter.js'; // 함수를 그룹화해서 가져오기
counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());