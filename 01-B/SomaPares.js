// b) Escreva uma função que receba uma lista de números e retorne a soma dos números pares

function somarNumerosPares(numeros) {
  let valor = 0

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      valor += numeros[i]
    }
  }

  return valor
}
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const resultadoFinal = somarNumerosPares(lista)

console.log(resultadoFinal)
