// a) Escreva uma função que receba um número e retorne "Fizz" se o número for divisível por 3, "Buzz" se o número for divisível por 5 e "FizzBuzz" se o número for divisível por ambos.

let numero

function FizzBuzz() {
  for (numero = 1; numero <= 100; numero++) {
    if (numero % 3 === 0) {
      if (numero % 5 === 0) {
        console.log('FizzBuzz')
      } else {
        console.log('Fizz')
      }
    } else if (numero % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(numero)
    }
  }
}

FizzBuzz()
