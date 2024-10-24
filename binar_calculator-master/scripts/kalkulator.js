// getting numbers from html
let firstNum = document.getElementById('firstNumber')
let secondNum = document.getElementById('secondNumber')
// getting anwser field from html
let answer = document.getElementById('answer')
// getting options from html
let select = document.getElementById('options')

// This is a binary conversion
function toBinary(number) {
    return Number(number.toString(2))
}

// This is a decimal conversion
function toDecimal(number) {
    return parseInt(number.value, 2)
}

// This is a function that shows the calculate answer to the answer field
document.getElementById('btn').addEventListener('click',()=>{
    let finalNumber = 0

    if (options.value == '+') {
        finalNumber = toDecimal(firstNum) + toDecimal(secondNum)
    }else if(options.value == '-'){
        finalNumber = toDecimal(firstNum) - toDecimal(secondNum)
    }else if(options.value == '*'){
        finalNumber = toDecimal(firstNum) * toDecimal(secondNum)
    }else if(options.value == '/'){
        finalNumber = toDecimal(firstNum) / toDecimal(secondNum)
    }

    // displaying the anwser
    answer.textContent = `Ответ: ${toBinary(finalNumber)}`        
})


