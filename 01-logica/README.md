Função FizzBuzz:

- No início foi criada uma Let com o título "numero" onde seriam armazenados todos os itens do nosso loop.
- Na sequência foi criada uma função chamada "FizzBuzz".
- Dentro dessa função foi executado um loop através do "For", onde foi iniciado com o número 1 percorrendo todos os números até chegar ao número 100, para fazer com que isso funcionasse, colocamos o primeiro parâmetro do "for" como numero(esse foi o let utilizado fora do escopo da função)= 1, como segundo parâmetro numero <= 100, ou seja, ele vai do 1 passando por todos os números menores ou igual a 100, e como terceiro parâmetro foi colocado
  numero++, sendo assim, ele iria incrementando número após número até chegar em 100.
- Feito isso, foi utilizado o método else if para selecionar os números desse loop que são divisíveis por 3, por 5 ou por ambos.
- Na primeira verificação foi utilizado if (numero % 3 === 0), ou seja, só passariam números que ao serem dividos por 3 não deixassem sobras.
- Dentro dessa primeira verificação, foi colocada uma segunda verificação if (numero % 5 === 0), ou seja, só passariam números que ao serem dividos por 5 não deixassem sobras. Se o número cumprisse esses dois requisitos, significava que ele era divisível tanto por 3 quanto por 5, sendo assim, receberia um console.log escrito 'FizzBuzz'.
- Caso o número passasse pelo primeiro mas não pelo segundo, ele entraria no else da segunda verificação que estava atrelada à primeira verificação, significando que ele só poderia ser divisível por 3, recebendo assim um console.log de 'Fizz'.
- Caso ele não fosse divisível por 3, ele já entraria no else if da primeira verificação, caso ele fosse divisível por 5 (else if (numero % 5 === 0)) ele receberia um console.log de console.log('Buzz'), caso não fosse divisível por 5, ele entraria no else, recebendo um console.log do numero.
- Por fim, invocamos a função FizzBuzz.

Função para somar os números pares.

- O primeiro passo foi criar uma função chamada somarNumerosPares e para essa função colocamos "numeros" como parâmetro, que no caso seria a lista de números passada posteriormente.
- Depois foi criada uma let chamada "valor" e foi atribuído o valor 0 para ela.
- Na sequência foi realizado um loop for com intuito de percorrer a nossa lista de números "for (let i = 0; i < numeros.length; i++)", onde o primeiro parâmetro seria responsável por estabelecer o valor de i como zero, o segundo parâmetro foi responsável por estabelecer até onde esse loop iria, sendo assim, foi utilizado o tamanho da nossa lista como parâmetro, ou seja, se nossa lista tivesse 8 números, esse loop iria percorrer até esse oitavo número. E como terceiro parâmetro foi colocado o "i++" para incremetar um número por vez até alcançar o valor total do length.
- Feito isso, seria necessário realizar uma verificação para selecionar os números pares, isso foi feito através de if: "if (numeros[i] % 2 === 0)", ou seja, todo número que ao ser dividido por dois, não deixasse sobras, seria considerado como um número par.
  -Para realizar a soma, utilizamos "valor += numeros[i]", ou seja, nossa let "valor" que começou como 0, iria receber a soma de todos os números pares, pois na verificação anterior selecionamos todos os números pares através do if, e todos os números que não passaram por essa verificação, foram desconsiderados.
- No fim, retornamos a nossa let "valor", com o seu valor atualizado.
- Após a função, criamos o nosso array de números chamado "lista", tanto com números pares quanto ímpares.
- Depois criamos uma const chamada resultadoFinal, e como valor, passamos a nossa função recebendo a "lista" como parâmetro, ou seja, a "lista" atua aqui como o parâmetro "numeros" passado anteriormente para a nossa função.
- Por fim, exibimos o resultado através de "console.log(resultadoFinal)"
