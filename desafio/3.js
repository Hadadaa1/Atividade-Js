function criarSaudacao(saudacaoBase) {
  return function(nome) {
    return `${saudacaoBase}, ${nome}!`;
  };
}
const saudacaoBomDia = criarSaudacao("Bom dia");
console.log(saudacaoBomDia("Carlos")); 
console.log(criarSaudacao("Boa noite")("Maria"));