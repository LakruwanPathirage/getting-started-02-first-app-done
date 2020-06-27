const defaultResult= 0;
let CurrentResult= defaultResult;
let logEntries=[];

//get user input
function getUserNumberInput(){
    return parseInt(usrInput.value);
}

//printing values 
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){

    const calcDescription = ` ${resultBeforeCalc} ${operator} ${calcNumber}`;

    outputResult(CurrentResult, calcDescription);//from vendor.js function

}
function writeLog(opeartionIdentifier,prevResult,operationNumber,newResult)
{
    const logEntry={
        operation:opeartionIdentifier,
        prevResult:prevResult,
        number:operationNumber,
        result:newResult
    };


    logEntries.push(logEntry);
    console.log(logEntries);
}




function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = CurrentResult;
    CurrentResult = CurrentResult + enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeLog('ADD',initialResult,enteredNumber,CurrentResult);
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = CurrentResult;
    CurrentResult = CurrentResult - enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeLog('SUBSTRACT',initialResult,enteredNumber,CurrentResult);
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = CurrentResult;
    CurrentResult = CurrentResult * enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeLog('MULTIPLY',initialResult,enteredNumber,CurrentResult);
}

function division(){
    const enteredNumber = getUserNumberInput();
    const initialResult = CurrentResult;
    CurrentResult = CurrentResult /enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeLog('DIVISION',initialResult,enteredNumber,CurrentResult);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', division);


