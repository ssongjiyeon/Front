// Date 객체 생성
let date1 = new Date() // 생성자(new 랑 같이 객체 생성하는 것)
let date2 = new Date("1997-01-07");

// 타임 스탬프
// 특정 시간이 1970.01.01. 00시 00분 00초(UTC) 로 부터 몇 ms 가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
let date4 = new Date(ts1);

// 시간 요소들을 추출한느 방법
let year = date1.getFullYear();
let month = date1.getMonth(); // js 의 월은 0월부터 나와서 +1 해야 함
let date = date1.getDate();
// 시분초도 똑같이 하면 됨

// 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 시간을 여러 포맷으로 출력
date1.toDateString() // 날짜만 출력
date1.toLocaleString // 현지화된 형태로 날짜 출력
