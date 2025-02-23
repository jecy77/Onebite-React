// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

// async function getData(){
//     return {
//         name: "장다희",
//         id: "Dah", 
//     }; // PromiseResult
// }

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {
                name: "장다희",
                id: "Dah"
            };

            if (data.id !== "Dah") {
                reject("Invalid ID: 데이터 검증 실패.");
            } else {
                resolve(data);
            }
        }, 1500);
    });
}


// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
    try {
        const data = await getData();
        console.log(data);  
    } catch (error) {
        console.error("Error:", error); 
    }
}

printData();