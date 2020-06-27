const defaultResult= 0;
let CurrentResult= defaultResult;

function add(num1, num2){
    const result= num1 + num2;
    return result;
}

CurrentResult= add(1, 2);


let calculationDescription='(' + defaultResult + '+ 10) *3/2-1';
outputResult(CurrentResult, calculationDescription);