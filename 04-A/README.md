a) Crie uma ação Redux que altere o estado de um componente React quando o usuário clicar em um botão.

- O primeiro passo foi instalar as bibliotecas 'redux', 'react-redux' e '@reduxjs/toolkit'
- Depois criei um arquivo 'store.js' para configurar a instância do Redux store.
- É importante ressaltar que no meu 'main.jsx' envolvi a aplicação com o componente Provider e passei a instância do store criada anteriormente como propriedade.
- voltando para o arquivo 'store.js', utilizamos a função 'configureStore' fornecida pela biblioteca '@reduxjs/toolkit'. Também foi definido o estado inicial da aplicação, que contém uma propriedade color com o valor inicial de 'purple', ou seja, ao carregar a página o quadrado vai iniciar na cor roxa.
- Em seguida, foi criado um reducer, que é uma função que recebe o estado atual da aplicação e uma ação e retorna um novo estado. Esse reducer está implementando um switch case que verifica o tipo de ação recebida e, caso seja do tipo 'SET_COLOR', atualiza a propriedade 'color' do estado com o valor passado no payload da ação.

-Por fim, foi passado esse reducer para a função 'configureStore' como argumento do parâmetro 'reducer' e armazenando a store resultante na constante 'store', que é exportada para ser utilizada em outros arquivos.

- Posteriormente, criamos um componente chamado ColorSquare. Para interagir com a nossa store do Redux, estamos utilizando os hooks 'useSelector' e 'useDispatch' também fornecidos pelo pacote 'react-redux'.

-Na função 'useSelector', estamos passando uma função que recebe o estado completo da store como argumento e retorna apenas a propriedade 'color' do estado. Essa propriedade é armazenada na constante 'color'.

- Em seguida, estamos definindo a função 'handleClick', que é chamada quando o botão é clicado. Essa função gera um array com algumas cores, escolhe aleatoriamente uma delas e envia uma ação para o Redux contendo o tipo 'SET_COLOR' e o novo valor de cor como payload.
- Por fim, estamos retornando um <div> que será o nosso quadrado de cor, com a cor de fundo definida como a cor armazenada na store, e um botão que quando clicado chama a função handleClick. O objeto de ação é então passado como parâmetro para a função dispatch, que atualiza o estado global do Redux, fazendo com que o componente ColorSquare seja atualizado com a nova cor escolhida.

- Para finalizar, importamos o nosso componente no App.jsx
