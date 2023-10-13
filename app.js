let listaDeNumerosSorteados = []; // Criar lista vazia
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
 function exibirTextoNaTela(tag, texto) {
     let campo = document.querySelector(tag);
     campo.innerHTML = texto;
     responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2}); //Site responsive voice, para colcoar mulher brasileira falando e com a velocidade (rate) da voz.
 }

 function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
 }

 exibirMensagemInicial();

 function verificarChute() {
     let chute = document.querySelector('input').value;
     if(chute == numeroSecreto){
      exibirTextoNaTela('h1', 'Acertou');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
      exibirTextoNaTela('p', `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}!`);
      document.getElementById('reiniciar').removeAttribute('disabled');
     } else {
      if (chute > numeroSecreto) {
         exibirTextoNaTela('p', 'O número secreto é menor');
      } else {
         exibirTextoNaTela('p', 'O número secreto é maior');
      }
      tentativas++;
      limparCampo();
     }
    
 }

 function reiniciarJogo() {
    limparCampo();
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
 }

 function gerarNumeroAleatorio() {
     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
     let QuantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

      if (QuantidadeDeElementosNaLista == numeroLimite) {
         listaDeNumerosSorteados = []; // Vai zerar números da lista
      }

     if (listaDeNumerosSorteados.includes(numeroEscolhido)) { // Verifica se o número já foi sorteado, ou seja, se já esta na lista
         return gerarNumeroAleatorio();
     } else {
      listaDeNumerosSorteados.push(numeroEscolhido);
      console.log(listaDeNumerosSorteados);
      return numeroEscolhido;
     }
 }

 function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
    chute.focus();
 }