const home = document.getElementById("home");
const menu = document.getElementById("menu");
const sobre = document.getElementById("sobre");
const contato = document.getElementById("contato");
const carrinho = document.getElementById("carrinho");
const pagamento = document.getElementById("pagamento");

const secoes = [home, menu, sobre, contato, carrinho, pagamento];

// aqui fica a lista dos produtos
let itensCarrinho = [];

// valor fixo da entrega
const taxaEntrega = 8;

function mostrarSecao(secao) {
    secoes.forEach(item => {
        item.style.display = "none";
    });

    secao.style.display = "block";
}

document.getElementById("btn-home").addEventListener("click", function (event) {
    event.preventDefault();
    mostrarSecao(home);
});

document.getElementById("btn-menu").addEventListener("click", function (event) {
    event.preventDefault();
    mostrarSecao(menu);
});

document.getElementById("btn-sobre").addEventListener("click", function (event) {
    event.preventDefault();
    mostrarSecao(sobre);
});

document.getElementById("btn-contato").addEventListener("click", function (event) {
    event.preventDefault();
    mostrarSecao(contato);
});

document.getElementById("btn-carrinho").addEventListener("click", function (event) {
    event.preventDefault();
    mostrarSecao(carrinho);
});

// botão para ir para a tela de pagamento
document.getElementById("btn-pagamento").addEventListener("click", function () {
    atualizarPagamento();
    mostrarSecao(pagamento);
});

function adicionarCarrinho(nome, preco) {
    // adiciona o produto dentro do array
    itensCarrinho.push({ nome, preco });

    // atualiza a lista na tela
    atualizarCarrinho();

    // leva direto para o carrinho
    mostrarSecao(carrinho);
}

function removerItem(indice) {
    // remove 1 item pela posição dele no array
    itensCarrinho.splice(indice, 1);

    // atualiza a tela depois de remover
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById("lista-carrinho");
    const subtotalTexto = document.getElementById("subtotal");
    const taxaEntregaTexto = document.getElementById("taxa-entrega");
    const totalTexto = document.getElementById("total");

    // limpa a lista antes de montar de novo
    listaCarrinho.innerHTML = "";

    // soma o valor dos produtos
    let subtotal = 0;

    itensCarrinho.forEach((item, indice) => {
        subtotal += item.preco;

        const li = document.createElement("li");

        // texto do item
        const texto = document.createElement("span");
        texto.textContent = `${item.nome} - R$ ${item.preco.toFixed(2).replace(".", ",")}`;

        // botão para remover
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = function () {
            removerItem(indice);
        };

        li.appendChild(texto);
        li.appendChild(botaoRemover);

        // deixa o conteúdo separado
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
        li.style.gap = "10px";

        listaCarrinho.appendChild(li);
    });

    // só cobra entrega se tiver item no carrinho
    let entregaFinal = 0;
    if (itensCarrinho.length > 0) {
        entregaFinal = taxaEntrega;
    }

    const totalFinal = subtotal + entregaFinal;

    subtotalTexto.textContent = `Subtotal: R$ ${subtotal.toFixed(2).replace(".", ",")}`;
    taxaEntregaTexto.textContent = `Taxa de entrega: R$ ${entregaFinal.toFixed(2).replace(".", ",")}`;
    totalTexto.textContent = `Total: R$ ${totalFinal.toFixed(2).replace(".", ",")}`;
}

function atualizarPagamento() {
    const resumoPagamento = document.getElementById("resumo-pagamento");

    let subtotal = 0;

    itensCarrinho.forEach(item => {
        subtotal += item.preco;
    });

    let entregaFinal = 0;
    if (itensCarrinho.length > 0) {
        entregaFinal = taxaEntrega;
    }

    const totalFinal = subtotal + entregaFinal;

    if (itensCarrinho.length === 0) {
        resumoPagamento.textContent = "Seu carrinho está vazio.";
    } else {
        resumoPagamento.innerHTML = `
            Produtos: R$ ${subtotal.toFixed(2).replace(".", ",")} <br>
            Taxa de entrega: R$ ${entregaFinal.toFixed(2).replace(".", ",")} <br>
            Total final: R$ ${totalFinal.toFixed(2).replace(".", ",")}
        `;
    }
}