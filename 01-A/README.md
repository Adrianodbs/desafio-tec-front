Função FizzBuzz:

- No início foi criada uma função chamada "FizzBuzz".
- A função começa definindo um loop for, que irá iterar de 1 a 100. A variável i é inicializada em 1 e o loop vai até i ser menor ou igual a 100. A cada iteração, a variável i é incrementada em 1.
- Dentro do loop, temos um 'console.log' que irá mostrar a palavra correspondente ao número atual do loop. Foi utilizado a sintaxe de operador ternário (? :) para testar se o número é divisível por 3 e/ou 5, e então imprimir a string correspondente.
- O primeiro teste (i % 3 === 0 && i % 5 === 0) verifica se o número é divisível por 3 e 5. Se for, a palavra "FizzBuzz" é impressa na tela.
- Se o número não é divisível por 3 e 5, então o próximo teste é verificado (i % 3 === 0). Se o número for divisível por 3, a palavra "Fizz" é impressa.
- Se o número não for divisível por 3 e nem por 5, o próximo teste é verificado (i % 5 === 0). Se o número for divisível por 5, a palavra "Buzz" é impressa.
- CSe o número não for divisível por nenhum dos dois, a variável i é impressa na tela.
