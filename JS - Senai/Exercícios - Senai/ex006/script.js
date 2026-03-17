const FRETE_GRATIS = 150;

function calcularFrete(){

let valor = Number(document.getElementById("valor").value);

if(valor >= FRETE_GRATIS){
resultado.innerText = "Frete grátis!";
}else{
resultado.innerText = "Frete pago";
}

}