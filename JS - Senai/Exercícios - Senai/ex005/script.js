const MAX_USUARIOS = 100;

function verificar(){

let usuarios = Number(document.getElementById("usuarios").value);

if(usuarios <= MAX_USUARIOS){
resultado.innerText = "Sistema funcionando";
}else{
resultado.innerText = "Limite de usuários atingido";
}

}