// const moduleData = require("./math");
// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// ES 모듈 시스템을 사용할 때는 파일의 확장자까지 작성해야 한다.
import DoubleN, { add, sub } from "./math.js";
// 라이브러링서 가져올 때는 경로가 아닌 라이브러리명만 명시하면 된다.
import randomColor from "randomcolor"
// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(doubleN(2, 3));

const color = randomColor();
console.log(color)