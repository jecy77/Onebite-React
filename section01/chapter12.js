// 1. 함수 표현식
function funcA() {
    //   console.log("funcA");
  } // 함수 선언, hoisting 적용
  
  let varA = funcA;
  varA();
  
  let varB = function () {
    //   console.log("funcB");
  }; // 함수 표현식, hoisting 미적용 
  
  varB();
  
  // 2. 화살표 함수
  let varC = (value) => {
    console.log(value);
    return value + 1;
  };
  
  console.log(varC(10));