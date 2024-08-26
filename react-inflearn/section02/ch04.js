// 동기 => 여러개의 작업이 있을 때 순서대로 실행하는 것
// 자바스크립트 엔진에는 쓰레드가 1개만 있음
// 비동기 => 작업을 기다리지 않고 다음 작업을 동시에 실행

console.log(1);
setTimeout(() => {
  console.log(2);
}, 3000); // 특정함수를 비동기적으로 실행할 수 있게 해줌
console.log(3);

// 쓰레드가 1개인데 어떻게 여러개의 작업이 동시에 처리할 수 있을까?
// 비동기 작업들은 자바스크립트 엔진이 아닌 Web APIs 에서 실행이 된다.
// Web APIs = 웹 브라우저가 직접 관리하는 별도의 영역

// 콜백함수
function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

add(1, 2, (value) => { console.log(value) });

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
};

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownFood = `식은 ${food}`;
    callback(cooldownFood);
  }, 2000); 
}

orderFood((food) => {
  console.log(food);
  cooldownFood(food, (cooldownFood)=>{console.log(cooldownFood)});
})

// promise = 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// 비동기 작업을 감싸는 객체이다.
// 대기 (pending) : 아직 작업이 완료되지 않은 상태
// 성공(Fulfilled) : 비동기 작업이 성공적으로 마무리 된 상태
// 실패 (Rejected) : 비동기 작업이 실패한 상태
// 대기 -> 성공 : resolve 해결
// 대기 -> 실패 : reject 거부
const promise = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수
  // executor

  setTimeout(() => {

    console.log("안녕");
    // resolve("안녕");
    reject("왜 실패?")
  }, 2000);
})

setTimeout(() => {
  console.log(promise);
}, 3000);

// promise 가 성공한 후에 출력하는 것
// then 은 promise 객체를 그대로 반환해서 then, catch 두개 연결해서 쓸 수 있다.(promise 체이닝)
promise.then((value) => {
  console.log(value);
})

// promise 가 실패했을 때
promise.catch((error) => {
  console.log(error)
})

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10)
      } else {
        reject("num 은 숫자가 아님")
      }
    }, 2000);
  });

  return promise;
}

const p = add10(0);
p.then((result) => {
  console.log(result);

  const newP = add10(result); // 콜백 지옥
  newP.then((result) => {
    console.log(result);
  })

  return newP; // 반환 객체를 정할 수 있음 
}).then((result) => {
  console.log(result);
  return add10(result);
})

// Async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

async function getDate() { // 만약 함수 return 이 promise 객체이면 그대로 반환하게 냅둔다.
  return {
    name: "홍길동",
    id: "hong"
  };
}

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할
function printData() {
  getDate.then((result) => {
    console.log(result);
  })
}

async function printDate2() {
  const data = await getData();
  console.log(data)
}

printData();
