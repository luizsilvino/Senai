const cliente = document.getElementById("cliente");
const barbeiro = document.getElementById("barbeiro");
const corte = document.getElementById("corte");
const data = document.getElementById("data");
const agendarBtn = document.getElementById("agendarBtn");
const mensagem = document.getElementById("mensagem");

agendarBtn.addEventListener("click", function () {
  const nomeCliente = cliente.value.trim();
  const nomeBarbeiro = barbeiro.value;
  const tipoCorte = corte.value;
  const dataAgendada = data.value;

  if (
    nomeCliente === "" ||
    nomeBarbeiro === "" ||
    tipoCorte === "" ||
    dataAgendada === ""
  ) {
    mensagem.style.backgroundColor = "#8b0000";
    mensagem.style.color = "#fff";
    mensagem.innerHTML = "Preencha todos os campos para agendar.";
    return;
  }

  mensagem.style.backgroundColor = "#1e7e34";
  mensagem.style.color = "#fff";
  mensagem.innerHTML = `
    ✅ ${nomeCliente}, seu <strong>${tipoCorte}</strong> com o barbeiro 
    <strong>${nomeBarbeiro}</strong> foi agendado para o dia 
    <strong>${dataAgendada}</strong>.
  `;
});