// 1. 배열의 구조 분해 할당 - 변수의 순서와 배열 요소의 위치가 중요
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당 - 변수의 이름이 객체 속성 이름과 일치해야 함
let person = {
    name: "장다희",
    age: 22,
    hobby: "뮤지컬 관람"
};

let {
    age: myAge,
    hobby,
    name,
    extra = "hello"
} = person;

console.log(myAge);
// console.log(age);
console.log(person.age);
console.log(extra);
console.log(person.extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법  
const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra);
}

func(person);