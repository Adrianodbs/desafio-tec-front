Função para somar os números pares.

- O primeiro passo foi criar uma função 'somarNumerosPares', que recebe como parâmetro um array de números (numeros).
- Depois foi criada uma let chamada "valor" e foi atribuído o valor 0 para ela.
- Na sequência foi utilizado o método forEach para iterar sobre o array numeros. O método forEach executa uma função para cada elemento do array.
- A função passada como parâmetro para o método forEach é uma arrow function que recebe um parâmetro 'numero'. Essa função verifica se o número é par usando a expressão 'numero % 2 === 0'. Se o número for par, a linha 'valor += numero' é executada, somando o número à variável 'valor'.
- Após a iteração sobre todos os elementos do array 'numeros', a função retorna o valor da variável 'valor'.
- Depois foi criado um array chamado 'lista' contendo os números de 1 a 12.
- Depois foi chamada a função 'somarNumerosPares' passando o array lista como parâmetro, e posteriormente esse resultado foi exibido em um console.log
