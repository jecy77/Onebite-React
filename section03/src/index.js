

// CommonJS 모듈시스템 이용 
// const moduleData = require("./math.js"); // 방법 1
// const {add, sub} = require("./math.js"); // 방법 2: 객체의 구조 분해 할당 이용 

// console.log(moduleData);
// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// console.log(add(3, 2));
// console.log(sub(3, 2));
// console.log("안녕 Node.js");

// ES 모듈시스템 이용 
// import mul from "./math.js"; // 기본값은 불러올 때 이름을 마음대로 정할 수 있음 
import mul, {add, sub} from "./math.js";
console.log(add(3, 2));
console.log(sub(3, 2));
console.log(mul(3, 2));

import randomColor from "randomcolor"; // 라이브러리는 경로가 아닌 라이브러리 이름만 가져오면 됨 

const color = randomColor();
console.log(color);