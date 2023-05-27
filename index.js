function calcSum(){
    let sum = 0;

    function sumWithClosure(number){
        return sum += number;
    }
    return sumWithClosure;
}

let callFunction = calcSum();
console.log(callFunction(5)); 

console.log(callFunction(3));
console.log(callFunction(10));