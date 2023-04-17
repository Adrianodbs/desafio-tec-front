2 - Manipulação de dados:
a) Crie um componente React que exiba uma lista de itens de uma API e permita que o usuário filtre os itens por um critério específico (por exemplo, categoria ou preço).

- O primeiro passo para a nossa aplicação foi buscar uma API diretamente do site "https://fakestoreapi.com/".
- O segundo passo foi criar um state chamado "produto" utilizando o useState do React, onde iremos armazenar todos os dados da nossa API.
- Posteriormente instalamos o axios na nossa aplicação, criamos uma pasta 'service' dentro do nosso 'src', e lá criamos um arquivo chamado 'api.js' e lá invocamos o axios passando o link da API e chamando-o de 'apiData'.
- Depois criamos um useEffect, e dentro desse useEffect colocamos uma função assíncrona, já que estamos utilizando dados externos e o carregamento pode demorar um tempo. Dentro dessa função assíncrona criamos um TryCatch para filtar erros e utilizamos o axios para buscar a nossa API, e no link da nossa API acrescentamos "limit=15" no fim, para limitar para apenas 15 itens. Poderiamos ter usado o método fetch também, mas ambos funcionam perfeitamente para buscar esses dados.
- Após criar a nossa função, nós a invocamos no fim do nosso useEffect, e deixamos o array de dependências vazio, para o useEffect sempre ser invocado quando recarregamos a página.
- No nosso return, ao criar o nosso código jsx, nós executamos um map no nosso state "produto", para resgatar todos os 15 produtos dentro da nossa state.
- Depois criamos uma div, passamos a key para essa div utilizando o ID, e invocamos a imagem, o título e o preço.
- Após a invocação de todos os produtos, foi realizado a estilização deles.
- Feito isso, foi o momento de criar o filtro. Para isso criamos uma state chamada 'filtro' onde ficariam armazenados os nosso produtos filtrados.
- No jsx criamos 4 botões para invocar esses filtros, em cada botão havia um onClick, chamando uma função distinta.
- criamos uma função chamada 'handleFilter', que tinha como parâmetro um valor mínimo de preço e um valor máximo de preço, valores esses que passaríamos em cada uma das outras funções invocadas pelo onClick. Dentro da 'handleFilter' passamos o método filter, para filtrar apenas os produtos que se encontravam detro da faixa de preço estipulada, ou seja, entre o valor mínimo e o valor máximo.
- Por fim criamos um state chamado loading para ser exibido na tela enquanto ocorre o carregamento da API.
