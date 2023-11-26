const number = document.querySelector('.number');
const numberButtons = document.querySelectorAll('.button-number');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide')
const clear = document.querySelector('#clear');
const allClear = document.querySelector('#all-clear')
const period = document.querySelector('#period');
const equal = document.querySelector('#equal')
let num1;
let num2;
let operations;
let hasSymbol;


numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {
        if (number.textContent == 0){
            number.textContent = numberButton.textContent;
        }
        else{
            number.textContent += numberButton.textContent;
        }
    })
})

add.addEventListener('click', () =>{
    const hasSymbol = number.textContent.split("").some((item) => {
        console.log(number.textContent.split(" "));
        return item === "+" || item === "-" || item === "*" || item === "/" ;
    })
    operations = number.textContent.split(" ");
    console.log(hasSymbol);
    if (!hasSymbol) {
        num1 = operations[0];
        console.log(num1);
        number.textContent += ` ${add.textContent} `;
    }
    else{
        num2 = operations[2];
        result = parseFloat(num1) + parseFloat(num2);
        number.textContent = `${result} + `;
        num1 = result;
        num2 = 0;
    }
})

subtract.addEventListener('click', () =>{
    const hasSymbol = number.textContent.split("").some((item) => {
        console.log(number.textContent.split(" "));
        return item === "+" || item === "-" || item === "*" || item === "/" ;
    })
    operations = number.textContent.split(" ");
    console.log(hasSymbol);
    if (!hasSymbol) {
        num1 = operations[0];
        console.log(num1);
        number.textContent += ` ${subtract.textContent} `;
    }
    else{
        num2 = operations[2];
        result = parseFloat(num1) - parseFloat(num2);
        number.textContent = `${result} - `;
        num1 = result;
        num2 = 0;
    }
})