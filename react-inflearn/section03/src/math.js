// math 모듈

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

export default function DoubleN(a, b) {
  return a * b;
}

// module.exports = {
//   add,
//   sub,
// };
export { add, sub };