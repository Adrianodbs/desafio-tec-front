// b) Escreva uma função que receba uma lista de números e retorne a soma dos números pares

function somarNumerosPares(numeros) {
  let valor = 0

  numeros.forEach(numero => {
    if (numero % 2 === 0) {
      valor += numero
    }
  })

  return valor
}

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const resultadoFinal = somarNumerosPares(lista)

console.log(resultadoFinal)
