function maiorEntreTres(a, b, c) {
  let maior = a;
  if (b > maior) {
    maior = b;
  }
  if (c > maior) {
    maior = c;
  }
  return maior;
}
console.log(maiorEntreTres(10, 25, 15));