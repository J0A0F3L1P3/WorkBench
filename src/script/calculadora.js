let expression = "";

function addCalc(calc) {
  expression += calc;
  atualizarDisplay();
}

function limpar() {
  expression = "";
  atualizarDisplay();
}

function calcular() {
  try {
    let resultado = eval(expression);
    expression = resultado.toString();
    atualizarDisplay();
  } catch (error) {
    expression = "Erro";
    atualizarDisplay();
  }
}

function atualizarDisplay() {
  document.querySelector("#display").value = expression;
}