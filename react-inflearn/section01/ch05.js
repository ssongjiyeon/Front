// 함수 표현식 및 화살표 함수
function funcA() {
  console.log("a");
}

let varA = funA;

// B 함수는 선언식이 아니기 때문에 funB 자체를 부를 수 없다.
// 어차피 함수명이 의미가 없기 때문에 생략이 가능하다.
let varB = function funcB() {
  console.log("b");
}

// 이렇게 이름을 생략한 함수를 익명함수라고 부른다.
let varC = function () {
  console.log("b");
}

// 화살표 함수
let varD = () => {
  return 1;
}

let varF = () => 1; // return 밖에 없으면 중괄호도 생략 가능 return 값 그대로 써주면 된다.
let varW = (value) => value + 1;

// 콜백 함수
// 자신이 아닌 다른 함수에 인수로 전달된 함수를 의미
// 매개 변수를 함수로 불러올 수도 있다.
// 인수로서 전달된 함수를 콜백 함수라고 한다.
function m(value) {
  console.log(value)
  value();
}

function sub() {
  console.log("sub")
}

// 콜백 = 나중에 실행되는
m(sub);
m(() => { console.log("aaa") })

// 콜백 활용
// 구조가 거의 비슷한 함수를 만들게 될 수 있는 경우
function repeat(count) {
  for (let idx=1; idx <= count; idx++) {
    console.log(idx);
  }
}

function repeatD(count) {
  for (let idx=1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

function re(count, callback) {
  for (let idx=1; idx <= count; idx++) {
    collback(idx);
  }
}
repeat(5);
repeatDouble(2);
re(5, function (idx) {
  console.log(idx);
});
re(5, function (idx) {
  console.log(idx * 2);
});
re(5, (idx) => {
  console.log(idx);
});

// 스코프
// 범위, 변수나 함수에 접근하거나 호출할 수 있는 범위를 말 함
// 전역 스코프
let a = 1;

function funA() {
  let b = 2; // 지역 스코프
  console.log(a);
}

console.log(b); // 오류 발생
