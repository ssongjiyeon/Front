// 객체 생성
let obj1 = new Object() // 객체 생성자
let obj2 = {}; // 객체 리터럴 방법(대부분 사용)

let person = {
  name: "a", // 객체 프로퍼티 ( 객체 속성 )
  age: 2,     // key : value 형태
  "like cat" : true
}

// 특정 프로퍼티 접근(점, 괄호)
let name = person.name;
// 존재하지 않는 프로퍼티 접근 시 undefinded

let age = person["age"];

// 새로운 프로퍼티 추가
person.job = "abc";

// 프로퍼티 수정
person.job = "ccc";

// 프로퍼티 삭제
delete person.job;
delete person("age");

// 프로퍼티 존재 유무
let result1 = "name" in person; // name 프로퍼티가 person 에 있나

// 상수 객체
const animal = {
  type: "cat",
  name: 'nabi'
};

// 상수인데 추가, 수정, 삭제가 가능하다.
// 상수에는 새로운 값을 할당하는건 문제가 되지만 객체 수정, 삭제, 추가는 가능하다.

// 메서드
const p = {
  sayHi: function () {
    console.log("hi")
  },
  // 메서드 선언 방식
  sayHello() { // 객체 동작을 정의할 때 사용할 수 있다.
    console.log("hello")
  }
}

p.sayHello();
p["sayHello"]();

// 배열
// 값을 순차적으로 담을 수 있는 자료형
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

let arrC = [1, 2, 3, true]

// 배열 접근
let item1 = arrC[0];
let item2 = arrC[1];

console.log(item1, itme2)

