b) Crie um componente React de formulário que permita que o usuário insira dados e envie esses dados para uma API.

- O primeiro passo foi criar uma API utilizando o Node.js
- Depois instalamos o axios, criamos uma pasta chamada service com um arquivo chamado api e buscamos a nossa API que foi criada no back-end.
- Na sequência foram criadas 4 states (dados, nome, idade e email).
- Na state dados serão armazenados os dados de nome, idade e email, e essas outras 3 guardarão seus respectivos valores.
- Depois foi criada uma função chamada 'handleSubmit', função essa que será ativada após apertar o botão enviar, já que foi colocado um onSubmit no nosso form e o botão é do tipo submit.
- Colocamos um preventDefault() para evitar que a página atualize a cada submit.
- Buscamo a nossa api e colocamos a requisição POST nela, justamente para conseguir acreacentar novos dados. A requisição "POST" envia um objeto JSON com as propriedades "nome", "idade" e "email" no corpo da requisição. A primeira string vazia ('') é o endpoint para onde a requisição será enviada, mas já tinhamos colocado ela na nossa requisição de API. Uma vez que a requisição é concluída e a resposta é retornada, o valor é atribuído à constante "response".
- Na sequência adicionamos o produto desse POST a um novo item ao final do array de "dados". Para adicionar o novo objeto, a função "setDados" é chamada com um novo array que inclui os itens do array "dados" original e um novo item adicionado ao final (setDados([...dados, response.data])).
- Depois limpamos o input de nome, idade e e-mail.
- Como dito anteriormente foi criado um form com um onSubmit onde ficaram os inputs e o botão de enviar.
- Cada input recebeu seu respectivo "value" e um onChange pra capturar as mudanças realizadas naquele respectivo input.
- Por fim, chamamos os nossos dados através de um map.
