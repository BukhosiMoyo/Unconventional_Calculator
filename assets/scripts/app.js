const  deafultResult = 0;
let currentResult = deafultResult;

function add(num1, num2){
    const result = num1 + num2;
    alert(`This result is ${result}`)
}

add(20, 7);
add(90, 67);

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `(${deafultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);