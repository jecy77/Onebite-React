// 1. Date 객체를 생성하는 방법
let date1 = new Date();
console.log(date1);

let date2 = new Date("2002-08-08/15:55:00");
console.log(date2);

let date3 = new Date(2002, 8, 8, 15, 55, 0);
console.log(date3);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값 
let ts = date1.getTime();
let date4 = new Date(ts);
console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // getMonth는 배열의 인덱스처럼 month가 0부터 시작
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(
    year,
    month,
    date,
    hour,
    minute,
    seconds
)

// 4. 시간 수정하기
date1.setFullYear(2024);
date1.setMonth(2); // 3월
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 영어 포맷 
console.log(date1.toLocaleString()); // 우리나라에 맞게 현지화 