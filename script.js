class Calculator {
  constructor(previousNumber, currentNumber){
    this.currentNumber = currentNumber;
    this.previousNumber = previousNumber;
    this.clear();
  }

  clear(){
    this.cNumber = '';
    this.pNumber = '';
    this.operator = '';
  }

  deleted(){
    this.cNumber = this.cNumber.slice(0, -1)
  }

  appendNumber(number){
    this.cNumber = this.cNumber.toString() + number.toString();
    console.log(this.cNumber);
  }

  operation(operator){
    this.operator = operator;
    this.pNumber = this.cNumber
    this.cNumber = ''
  }

  calculate(){
    let res
    const p = parseFloat(this.pNumber)
    const c = parseFloat(this.cNumber)
    if(isNaN(p) || isNaN(c)) return
    switch(this.operator){
      case '+':
        res = p + c
        break
      case '-':
        res = p - c
        break
      case '*':
        res = p * c
        break
      case '÷':
        res = p / c
        break
      default: 
        return
    }
    this.cNumber = res
    this.pNumber = ''
    this.operator = ''
  }

  updateDisplay(){
    // this.cNumber = this.cNumber.toFixed(3)
    this.currentNumber.innerText = this.cNumber;
    this.previousNumber.innerText = this.pNumber
  }

}

const number = document.querySelectorAll('#number-button');
const operator = document.querySelectorAll('#operator-button');
const clear = document.querySelector('#clear-button')
const deleted = document.querySelector('#delete-button')
const equal = document.querySelector('#equals-button')

const currentNumber = document.querySelector('.currentNumber')
const previousNumber = document.querySelector('.previousNumber')

// console.log(currentNumber.innerText);
// console.log(previousNumber.innerText);

const cal = new Calculator(previousNumber, currentNumber);

number.forEach(button => {
  button.onclick = function(){
    cal.appendNumber(button.innerText);
    cal.updateDisplay()
  }
})

operator.forEach(button => {
  button.onclick = function(){
    cal.operation(button.innerText);
    cal.updateDisplay()
  }
})

clear.onclick = function(){
  cal.clear()
  cal.updateDisplay()
}

deleted.onclick = function(){
  cal.deleted()
  cal.updateDisplay()
}

equal.onclick = function(){
  cal.calculate()
  cal.updateDisplay()
}
