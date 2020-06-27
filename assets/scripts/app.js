const defaultResult= 0;
let CurrentResult= defaultResult;

//get user input
function getUserNumberInput(){
    return parseInt(usrInput.value);
}

//printing values 
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){

    const calcDescription = ` ${resultBeforeCalc} ${operator} ${calcNumber}`;

    outputResult(CurrentResult, calcDescription);//from vendor.js function

}


function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = CurrentResult;
    CurrentResult = CurrentResult + enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = CurrentResult;
    CurrentResult = CurrentResult - enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = CurrentResult;
    CurrentResult = CurrentResult * enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
}

function division(){
    const enteredNumber = getUserNumberInput();
    const initialResult = CurrentResult;
    CurrentResult = CurrentResult /enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', division);


