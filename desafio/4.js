function criarContador() {
  let contadorInterno = 0; 
  
  return function() {
    contadorInterno += 1; 
    return contadorInterno;
  };
}

const meuContador = criarContador();
console.log(meuContador()); 
console.log(meuContador()); 
console.log(meuContador());