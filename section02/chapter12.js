function add(a, b, callback){
    setTimeout(()=>{
        let sum = a + b;
        callback(sum);
    }, 3000);
}


add(2, 3, (value)=>{console.log(value)});

// 음식을 주문하는 상황 
function orderFood(callback){
    setTimeout(()=>{
        const food = "떡볶이";
        callback(food);
    }, 3000)
}

function coolDownFood(food, callback){
    setTimeout(()=>{
        const coolDownedFood = `식은 ${food}`;
        callback(coolDownedFood);
    }, 2000)
}

function freezeFood(food, callback){
    setTimeout(()=>{
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    }, 1000)
}


// callback hell 
orderFood((food)=>{
    console.log(food);
    coolDownFood(food, (coolDownedFood)=>{
        console.log(coolDownedFood);
        freezeFood(coolDownedFood, (freezedFood)=>{
            console.log(freezedFood);
        })
    });
});


