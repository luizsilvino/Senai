const MEDIA_MINIMA = 7;

function calcularMedia(){

let nota1 = Number(document.getElementById("nota1").value);
let nota2 = Number(document.getElementById("nota2").value);
let nota3 = Number(document.getElementById("nota3").value);

let media = (nota1 + nota2 + nota3) / 3;

if(media >= MEDIA_MINIMA){
document.getElementById("resultado").innerText = "Média: " + media + " - Aprovado";
}else{
document.getElementById("resultado").innerText = "Média: " + media + " - Reprovado";
}

}