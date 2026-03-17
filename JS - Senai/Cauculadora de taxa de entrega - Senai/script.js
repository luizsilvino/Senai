const precoProduto = 30;
const taxaEntrega = 5;

function calcular() {

  let quantidade = Number(document.getElementById("quantidade").value);

  let total = quantidade * precoProduto;
  let totalEntrega = total * (taxaEntrega / 100);
  let totalPedido = total + totalEntrega;

  document.getElementById("resultado").innerHTML =
    "Total do pedido: R$ " + totalPedido;
}