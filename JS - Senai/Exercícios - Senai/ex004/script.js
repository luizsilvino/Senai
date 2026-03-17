const VELOCIDADE_INICIAL = 10;

let velocidade = VELOCIDADE_INICIAL;

resultado.innerText = "Velocidade atual: " + velocidade;

function aumentar(){

velocidade = velocidade + 5;

resultado.innerText = "Velocidade atual: " + velocidade;

}