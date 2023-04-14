2 - Manipulação de dados:
a) Crie um componente React que exiba uma lista de itens de uma API e permita que o usuário filtre os itens por um critério específico (por exemplo, categoria ou preço).
b) Escreva uma função que receba uma lista de objetos com propriedades "name" e "age" e retorne uma nova lista de objetos com propriedades "name" e "isAdult" (true ou false dependendo se a idade é maior ou igual a 18).

- O primeiro passo para a nossa aplicação foi buscar uma API diretamente do site "https://fakestoreapi.com/".
- O segundo passo foi criar um state chamado "produto" utilizando o useState do React, onde iremos armazenar todos os dados da nossa API.
- Depois criamos um useEffect, e dentro desse useEffect colocamos uma função assíncrona, já que estamos utilizando dados externos e o carregamento pode demorar um tempo. Dentro dessa função assíncrona utilizamos o método fetch para buscar a nossa API, e no link da nossa API acrescentamos "limit=15" no fim, para limitar para apenas 15 itens. Poderiamos ter usado o Axios também, mas ambos funcionam perfeitamente para buscar esses dados.
- Após criar a nossa função, nós a invocamos no fim do nosso useEffect, e deixamos o array de dependências vazio, para o useEffect sempre ser invocado quando recarregamos a página.
- No nosso return, ao criar o nosso código jsx, nós executamos um map no nosso state "produto", para resgatar todos os 15 produtos dentro da nossa state.
- Depois criamos uma div, passamos a key para essa div utilizando o ID, e invocamos a imagem, o título e o preço.
- Após a invocação de todos os produtos, foi realizado a estilização deles.
