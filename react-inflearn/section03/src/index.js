// const moduleData = require("./math");
// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// ES 모듈 시스템을 사용할 때는 파일의 확장자까지 작성해야 한다.
import doubleN, { add, sub } from "./math.js";

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(doubleN(2, 3));