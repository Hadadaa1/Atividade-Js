function executarOperacao(a, b, operacao) {
  return operacao(a, b);
}

const soma = (x, y) => x + y;
const subtracao = (x, y) => x - y;
const multiplicacao = (x, y) => x * y;

console.log(executarOperacao(10, 5, soma));
console.log(executarOperacao(10, 5, multiplicacao));