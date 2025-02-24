// math 모듈
// CommonJS 모듈시스템 이용 

// function add(a, b){
//     return a + b;
// }

// function sub(a, b){
//     return a - b;
// }

// module.exports = {
//     add: add, 
//     sub: sub
// }

// 아래도 가능 
// module.exports = {
//     add, 
//     sub
// }

// ES 모듈시스템 이용

// 방법 1
// function add(a, b){
//     return a + b;
// }

// function sub(a, b){
//     return a - b;
// }

// export { add, sub }

// 방법 2

// Named Export
export function add(a, b){
    return a + b;
}

// Named Export
export function sub(a, b){
    return a - b;
}

// Default Export
export default function multiply(a, b){
    return a * b;
}