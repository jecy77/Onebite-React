function add10(num){
    const promise = new Promise((resolve, reject)=>{
        // 비동기 작업 실행하는 함수
        // executor
    
        setTimeout(()=>{
            // console.log(typeof num);
            
            if(typeof num === "number"){
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다.");
            }
        }, 2000);
    });

    return promise;
};

promise = add10(0);
console.log(promise); // pending 상태

// promise chaining
promise
    .then((result)=>{
        console.log(result);
        return add10(result);
})
    .then((result)=>{
        console.log(result);
        return add10(result);
    })
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
})

setTimeout(()=>{
    console.log(promise); // fulfilled or rejected 상태 
}, 3000);

