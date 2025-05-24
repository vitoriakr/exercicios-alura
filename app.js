let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let chute = parseInt(document.querySelector('input').value);
function exibirNaTela(tag,texto){
    let campo =document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagem(){
exibirNaTela("h1","jogo do número");
exibirNaTela("p","escolha um n° entre 1 e 10");
}
function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirNaTela("h1","ACERTOU");
        let palavraTentativa = tentativas>1 ?'tentativas':'tentativa';
        let mensagemTentativas =`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirNaTela("p",mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute>numeroSecreto){
            exibirNaTela("p","o número correto é menor");
        }else{
            exibirNaTela('p',"o numero é maior");
        }
        tentativas ++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random()*10+1);

}
function limparCampo(){
    chute = document,querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio;
    limparCampo();
    tentativas= 1;
    exibirMensagem();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}
