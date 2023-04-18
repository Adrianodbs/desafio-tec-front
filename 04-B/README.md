b) Crie um componente React que utilize o estado global do Redux para exibir informações de um usuário.

- O primeiro passo foi instalar as bibliotecas 'redux', 'react-redux' e '@reduxjs/toolkit'
- Depois criei um arquivo 'store.js' para configurar a instância do Redux store.
- É importante ressaltar que no meu 'main.jsx' envolvi a aplicação com o componente Provider e passei a instância do store criada anteriormente como propriedade.
- O store.js está importando a função configureStore do pacote @reduxjs/toolkit, . Em seguida, ele está importando um reducer chamado 'userReducer' de um arquivo 'userSlice.js', que vou explicar mais a frente, dessa forma, foi criada uma instância da "store" do Redux com uma fatia (slice) de estado chamada "user", que é gerenciada pelo reducer "userReducer". A função "configureStore" do pacote "@reduxjs/toolkit" é usada para simplificar a criação da store.
- Já no arquivo userSlice.js primeiramente foi importada a função 'createSlice' da biblioteca Redux Toolkit. Em seguida, um novo slice é criado passando como argumento um objeto com as seguintes propriedades:
  - 'name': o nome do slice, que será usado para identificá-lo no store do Redux.
  - 'initialState': o estado inicial do slice, que é um objeto que contém as informações do usuário.
  - ' 'reducers': um objeto que contém as funções reducer que podem ser usadas para atualizar o estado do slice.

-As funções reducer recebem dois argumentos: o estado atual do slice e um objeto que contém a carga útil (payload) que é passada ao chamar a função. Cada uma dessas funções retorna um novo objeto de estado que contém a propriedade atualizada com o novo valor.
-Por fim, são exportadas as funções reducer 'changeNome', 'changeSobrenome', 'changeIdade', 'changeEmail' e 'changeProfissao', que podem ser usadas para atualizar o estado do slice. Além disso, é exportada a função selectUser, que pode ser usada para selecionar o estado do slice no store do Redux. E por fim, o slice é exportado como o valor padrão do módulo.

-Já no App.js foi usada a função 'useDispatch', que foi importada do React Redux e usada para obter uma referência à função dispatch, que é usada para despachar as ações para o store do Redux.

- A função 'cadastrarUsuario' é uma função que é chamada quando o formulário de cadastro de usuário é submetido. Dentro da função cadastrarUsuario, são despachadas várias ações que atualizam o estado do slice de usuário no store do Redux. Cada ação é despachada usando a função dispatch, que recebe como argumento uma função reducer de ação.

-Após despachar as ações, as variáveis de estado nome, sobrenome, idade, email e profissao são redefinidas para strings vazias usando as funções setNome, setSobrenome, setIdade, setEmail e setProfissao, respectivamente. Isso é feito para limpar o formulário após a submissão.

- Foi criado também uma pasta chamada components, e criado um arquivo com uma função chamada 'Usuario', nessa função utilizamos um useSelector, que é usada para selecionar um subconjunto de estado do store do Redux. Ela recebe uma função seletora como argumento, que é usada para selecionar o estado desejado.
- No caso desse exemplo, a função seletora é 'selectUser', que é definida no módulo do slice de usuário. Essa função retorna o estado completo do slice de usuário.
- Em seguida, é utilizada a sintaxe de desestruturação do JavaScript para extrair as propriedades nome, sobrenome, idade, email e profissao do estado selecionado.
- Dessa forma, as variáveis nome, sobrenome, idade, email e profissao são inicializadas com os valores atuais do estado do usuário. Essas variáveis podem ser usadas para exibir ou manipular as informações do usuário na interface do usuário.
- Por fim esse componente de Usuário foi chamada no nosso App.js
