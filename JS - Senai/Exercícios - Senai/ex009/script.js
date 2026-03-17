const PRECO_PRODUTO = 50;
const TAXA_ENTREGA = 10;
const DESCONTO = 20;
const LIMITE_DESCONTO = 200;

function calcularCompra(){

let nome = document.getElementById("cliente").value;

let quantidade = Number(document.getElementById("quantidade").value);

let valorProdutos = quantidade * PRECO_PRODUTO;

let total = valorProdutos + TAXA_ENTREGA;

let descontoAplicado = 0;

if(valorProdutos > LIMITE_DESCONTO){
total = total - DESCONTO;
descontoAplicado = DESCONTO;
}

resultado.innerHTML =
"Cliente: " + nome + "<br>" +
"Valor dos produtos: R$ " + valorProdutos + "<br>" +
"Taxa de entrega: R$ " + TAXA_ENTREGA + "<br>" +
"Desconto aplicado: R$ " + descontoAplicado + "<br>" +
"Total: R$ " + total;

}