// 1. 콜백함수
function main(value) {
    value();
    console.log(value);
  }
  
  main(() => {
      console.log("i am sub");
  });
  
  // 2. 콜백함수의 활용
function repeat(count, callback){
    for(i=0; i<count; i++){
        callback(i);
    }
}
  
  repeat(5, (idx) => {
    console.log(idx);
  });
  
  repeat(5, (idx) => {
    console.log(idx * 2);
  });
  
  repeat(5, (idx) => {
    console.log(idx * 3);
  });