/* 
  variáveis são espaços na mémoria do computador, usados para guardarmos    informações. Essas informações podem ser números, palavras (chamadas de strings. Strings sempre devem estar entre aspas duplas ou simples), elementos (links por exemplo), valores boleanos (verdadeiro  e falso) e etc.
  https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Vari%C3%A1veis

  Para criar uma variável, basta usarmos a palavra "var" e usar o operador de attribuição "=" seguido do conteúdo. Ex var nome = "seu nome".

  Nesse caso, vamos guardar na variavel "form", o formulário que criamos no nosso HTML. 

  Para pegar um elemento do HTML com o javascript, usamos um método chamado querySelector. Como usamos um ID no nosso form, usamos o identificador de id (#) junto com o nome que demos. Nesse caso #form.

  Vamos salvar também, os campos de nome e email que criamos.

 */
var formulario = document.querySelector('#form');
var campoNome = document.querySelector('#nome');
var campoEmail = document.querySelector('#email');
/* 
    Agora que temos nosso formulário, e campos estão  guardados em váriaveis, ou seja, na memória do computador, podemos usá-los. 
    No nosso caso, queremos saber se os campos do nosso formulário estão preenchidos, antes e salvarmos esses dados.
    Para isso, precisamos adicionar um ouvidor de eventos, que vai ouvir quando quando o evento de "submit" for disparado, e validar se os campos estão vazios ou preenchidos.

    Esse 'ouvidor' é uma função chamada addEventListener.
    Adicionamos esse ouvidor ao elemento da seguinte forma:

    elemento.addEventListener()

    a função addEventListener espera receber o nome do evento que deve ser ouvido:

    elemento.addEventListener('nomeDoEvento')

    além do evento que deve ser ouvido, ela recebe uma função anônima, que pode ou não, receber um parâmetro:

    elemento.addEventListener('nomeDoEvento', function(){})

    dentro dessa função anônima que passamos para o ouvidor, é onde o códido que deve ser executado será escrito.

    Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. 


    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Fun%C3%A7%C3%B5es

    Funções podem ser nomeadas:

    function nomeDafunção() {
      //código a ser executado
    }

    Ou anônimas: 

    function(){
      //código a ser executado
    }
 */

formulario.addEventListener('submit', function(evento){
  /* no nosso caso, passamos o evento como parametro para a nossa função anônima. No nosso caso, o submit.

  Alguns eventos tem um comportamento padrão. 
  O submit, por padrão, recarrega a página quando é acionado.

  Porém, não queremos que nossa página seja recarregadaa quando clicarmos no botão enviar. 

  No javascript, existe uma função criada exatamente para isso. Chamasse preventDefault().

  */

  evento.preventDefault();
  
  /*
    Agora que evitamos que a página seja recarregada, podemos começar nossas validações.

    para acessarmos que foi digitado nos campos de cada formulario, acessamos o 'value' dele, dessa forma:

    campoDoFormulario.value.

    como já temos nossas campos guardados em variáveis podemos acessar os valores, atraves do variavel.value.

    após conseguirmos acessar esses valores, podemos criar nossas condicionais if else (se, senão).    
  
  */


  if(campoNome.value == "" && campoEmail.value == ""){
    /*
    se o campo nome, e o campo email estiverem vazios, mostramos um alerta pedindo para que o usuario preencha os campos corretamente.

    */
    alert('Por favor, preencha os campos nome e email')
  }else if(campoNome.value ==""){
    /*
      senão se, o campom nome estiver vazio, mostramos um alerta pedindo para que o usuario preencha o campo nome corretamente
    */
    alert('Por favor, preencha o campo nome')
  }else if(campoEmail.value ==""){
    /*
      senão se, o campom email estiver vazio, mostramos um alerta pedindo para que o usuario preencha o campo email corretamente
    */
    alert('Por favor, preencha o campo e-mail')
  }else{
    /*
      senão, caso tudo esteja preenchido corretamente, mostramos uma mensagem de sucesso.
    */
    alert('Dados enviados!')
  }
})




