function contarVogais(palavra) {
  let contador = 0;
  const vogais = "aeiouAEIOU"; 
  
  for (let i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i])) {
      contador++;
    }
  }
  return contador;
}
console.log(contarVogais("javascript"));