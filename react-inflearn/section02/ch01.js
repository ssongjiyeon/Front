// 1. Falsy 한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";

// 2. Truthy 한 값 -> Falsy 한 값을 제외한 나머지 모든 값
let t1 = "hello";

// 3. 활용
function printName(person) {
  if (!person) { return; }
  console.log(person.name);
}

let person;
pringName(person);

// 단락 평가
// 논리연산에서 앞에 있는 조건식의 결과만으로 전체 결과를 알 수 있는 것
// 그래서 뒤에있는 조건을 보지 않는 것
function returnFalse() {
  return false;
}

function retrunTrue() {
  return true;
}

console.log(returnFalse() && retrunTrue());

// .단락 평가 활용
function printName(person) {
  // console.log(person && person.name);
  const name = person && person.name
  console.log(name || "person의 값이 없음")
}

// 구조 분해 할당
let arr = [1, 2, 3];
let [one, two, three, four = 4] = arr;

// 객체의 구조 분해 할당
let person2 = {
  name: "이정환",
  age : 27
}

let {name, age, hobby} = person2

// 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age }) => {
  console.log(name, age)
}

func(person2)

// Spread 연산자 -> 흩뿌리다, ㅕㄹ치다
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
let obj1 = {
  a:1, b:2
}
let obj3 = {
  ...obj1,
  c: 4,
  d:4
}

// Rest 매개변수 -> 나머지, 나머지 매개변수
// ...rest 뒤에 매개변수를 더 추가할 수는 없음
function funcB(...rest) {
  console.log(rest);
}
funcB(...arr1);

// 반복문으로 배열과 객체 순환하기
let arr4 = [1, 2, 3,];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let item of arr) { // 배열에만 사용 가능
  console.log(item);
}

// 객체 순회 방법
let person3 = {
  name: "jj",
  age : 27
}

// 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

// 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person3);

// for in -> 객체만을 위한 순환
for (let key in person3) {
  console.log(key, person3[key])
}
























