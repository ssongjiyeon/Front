// 배열 메서드
// 요소 조작
// push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
// 반환값으로 새로운 배열의 길이를 반환한다.
let arr1 = [1, 2, 3];
arr1.push(4);
const newLength = arr1.push(5, 6, 8);

// pop
// 배열의 맨 뒤에 있는 요소를 제거하고 , 반환
let arr2 = [1, 2, 3];
const popItem = arr2.pop();

// shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3,];
const shiftedItem = arr3.shift();

// unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);

// shift, unshift 는 push, pop 보다는 늦게 동작함 맨 앞에 넣기 때문에

// slice
// 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
arr5.slice(2, 5); // 자른다고 해도 원본 배열은 변경되지 않는다.
// 음수 값을 넣으면 뒤에서부터 자른다.

// concat
// 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);

// 요소 순회 및 탐색
// forEach
// 모든 요소를 순회하면서 ,각각의 요소에 특정 동작을 수행시키는 메서드
let arr8 = [1, 2, 3];
arr8.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});

let doubledArr = [];
arr8.forEach(( item ) => {
  doubledArr.push(item * 2);
});

// includes
// 배열에 특정 요소가 있는지 확인하는 메소드
let arr9 = [1, 2, 3];
let isInclude = arr9.includes(3);

// indexOf
// 특정 요소의 위치를 찾아 반환하는 메소드
let arr10 = [1, 2, 3];
let index = arr3.indexOf(2); // 가장 첫 번째로 찾은 인덱스 반환, -1 은 요소가 없을 때

// findIndex
// 특정 요소의 인덱스(위치)를 반환하는 메소드
// 모든 요소를 순회하면서 콜백함수를 만족할 때
let arr11 = [1, 2, 3];
arr11.findIndex((item) => {
  if (item === 2) return true;
});

arr11.findIndex((item) => (item === 2));


let objectArr = [{ name: "이정환" }, { name: "홍길동" }];
objectArr.indexOf.indexOf({ name: "이정환" }) // -1로 객체 값을 못찾음
// 왜냐면 indexOf는 얕은 비교로 이뤄지기 때문
// 이렇기 때문에 findIndex 로 객체를 찾을 수 있음(콜백함수로 동작해서 조건만 잘 찾아주면 됨)
objectArr.findIndex((item) => item.name = "이정환");

// find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
objectArr.find((item) => item.name = "이정환");

// 배열 변형 메서드
// filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열을 반환
let arr12 = [
  { name: "홍", hobby: "테니스" },
  { name: "길", hobby: " 테니스" },
  { name: "동", hobby: "독서" }
];
arr12.filter((item) => item.hobby === "테니스");

// map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr13 = [1, 2, 3];
const mapResult1 = arr13.map((item, idx, arr) => {
  return item * 2;
});

let names = arr12.map((item) => item.name);

// sort
// 배열을 사전 순으로 정렬하는 메서드
let arr14 = ["b", "a"];
arr14.sort();
// 근데 숫자로 되어 있으면 정렬이 잘 되지않음 왜냐하면 sort 는 사전순으로 정렬이 되기 때문에 콜백함수를 넣어서 기준을 넣어줘야 함
let arr15 = [10, 3, 5];
arr15.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 와라
    return 1;
  } else if (a < b) {
    // a가 b 앞에 와라
    return -1;
  } else {
    return 0;
  }
});

// toSorted
// 원본 배열을 냅두고 새로운 배열을 정렬해서 반환
const sorted = arr13.toSorted()

// join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
const joined = arr14.join(" ");
