function somarTudo(...numeros) {
  let soma = 0;
  for (let numero of numeros) {
    soma += numero;
  }
  return soma;
}
console.log(somarTudo(1, 2, 3, 4, 5));