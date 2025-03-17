function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(operator, a, b) {
    a = parseInt(a,10);
    b = parseInt(b,10);
    switch (operator) {
        case "+":
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "*":
            return multiply(a,b);
            break;
        case "/":
            return divide(a,b);
            break;
    }
}

let inputValue =  "";
let numberStack = [];
let cacheOperator = "";

const result = document.querySelector("#result");

const buttons = document.querySelectorAll('input[type="button"]');
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let calcValue = button.value;

        if(calcValue === "+" || 
            calcValue === "-" ||
            calcValue === "*" ||
            calcValue === "/") {
            if (!(inputValue === "")){
                numberStack.push(inputValue);
            }
            inputValue = "";
            result.value = inputValue;
            if(numberStack.length % 2 == 0) {
                length = numberStack.length;
                const operatedValue = operate(cacheOperator, numberStack[length - 2], numberStack[length - 1]);
                numberStack.push(operatedValue);
                result.value = operatedValue;
            } 
            cacheOperator = calcValue;
        } else if(calcValue === "=") {
            numberStack.push(inputValue);
            inputValue = "";
            result.value = inputValue;
            if(numberStack.length % 2 == 0) {
                length = numberStack.length;
                const operatedValue = operate(cacheOperator, numberStack[length - 2], numberStack[length - 1]);
                result.value = operatedValue;
            }
        } else if(calcValue === "clear") {
            inputValue =  "";
            numberStack = [];
            cacheOperator = "";
            result.value = ""
        } else {
            inputValue = inputValue.concat("",calcValue);
            result.value = inputValue;
        }
    }) 
})

