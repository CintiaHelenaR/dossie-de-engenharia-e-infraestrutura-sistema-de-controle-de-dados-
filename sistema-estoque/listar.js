
const listaProdutos = document.getElementById("listaProdutos");

const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

// Atualiza os cartões de resumo
document.getElementById("totalProdutos").textContent = produtos.length;

const unidades = produtos.reduce(function(total, produto) {
    return total + Number(produto.quantidade);
}, 0);

document.getElementById("totalUnidades").textContent = unidades;

// Verifica se existem produtos cadastrados
if (produtos.length === 0) {

    listaProdutos.innerHTML = `
        <tr>
            <td colspan="5">Nenhum produto cadastrado.</td>
        </tr>
    `;

} else {

   produtos.forEach(function(produto, index) {

    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.quantidade}</td>
        <td>R$ ${Number(produto.preco).toFixed(2).replace(".", ",")}</td>

        <td>
        <button class="botao-editar" onclick="editarProduto(${index})">
    Editar
</button>

            <button class="botao-excluir" onclick="excluirProduto(${index})">
                Excluir
            </button>
        </td>
    `;

    listaProdutos.appendChild(linha);
});
}
function excluirProduto(index) {

    const confirmar = confirm("Tem certeza que deseja excluir este produto?");

    if (confirmar) {
        produtos.splice(index, 1);

        localStorage.setItem("produtos", JSON.stringify(produtos));

        location.reload();
    }
}
function editarProduto(index) {

    const produto = produtos[index];

    const novoNome = prompt("Nome do produto:", produto.nome);
    const novaCategoria = prompt("Categoria:", produto.categoria);
    const novaQuantidade = prompt("Quantidade:", produto.quantidade);
    const novoPreco = prompt("Preço:", produto.preco);

    if (
        novoNome !== null &&
        novaCategoria !== null &&
        novaQuantidade !== null &&
        novoPreco !== null
    ) {
        produto.nome = novoNome;
        produto.categoria = novaCategoria;
        produto.quantidade = novaQuantidade;
        produto.preco = novoPreco;

        localStorage.setItem("produtos", JSON.stringify(produtos));

        location.reload();
    }
}