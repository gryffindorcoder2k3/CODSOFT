
let resF = document.getElementById('result');

function appendNumber(number) {
  resF.value += number;
}

function appendOperator(operator) {
  resF.value += operator;
}

function calculate() {
  try {
    let res = eval(resF.value);
    resF.value = res;
  } catch (error) {
    resF.value = 'Error';
  }
}

function clearResult() {
  resF.value = '';
}
