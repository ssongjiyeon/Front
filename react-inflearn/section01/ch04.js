// 변수
let age = 29;
age = 30

// 상수
const birth = "22"

// 자료형
// number type - 사칙연산 모두 지원(모듈러 연산)
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity
let mInf = -Infinity

let nan = NaN // 난 not a number 사칙연산 실패 시 나옴

// String
let myName = "송";
let lastName = "지";
let name = myName + lastName

let text = `${name}`

// boolean
let isTrue = true

// null
let empty = null;

// undefined type - 아무런 값도 안넣은 것
let none;

// 묵시적 형변환
let num = 10;
let str = "20"

const result = num + str;

// 명시적 형변환
// -> 내장함수 등을 이용해 직접 변환 명시
let str1 = "10"
let strToNum = Number(str1);

// 연산자
// null 병합 연산자 -> null, undefined 가 아니니 값을 찾아내는 연산자.
let var1;
let var2 = 10;

let var3 = var1 ?? var2;

let var4 = 20;
let var5 = var2 ?? var3; // 앞에 null, undefined가 아닌 값이 나옴

// 2. typeof -> 값의 타입을 문자열로 변환하는 기능을 하는 연산자
let var7 = 1;
var7 = "hello"
let t1 = typeof var7;

// 3. 삼항 연산자
// 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var8 = 10;
let res = var8 % 2 === 0 ? "짝" : "홀"