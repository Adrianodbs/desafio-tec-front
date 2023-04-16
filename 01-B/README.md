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
