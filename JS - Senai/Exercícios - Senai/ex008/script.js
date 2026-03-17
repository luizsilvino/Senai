const IDADE_MINIMA = 18;

function verificarIdade(){

let idade = Number(document.getElementById("idade").value);

if(idade >= IDADE_MINIMA){
resultado.innerText = "Cadastro permitido";
}else{
resultado.innerText = "Cadastro não permitido";
}

}