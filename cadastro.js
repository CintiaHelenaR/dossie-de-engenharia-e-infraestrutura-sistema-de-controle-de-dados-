const formulario = document.getElementById("formCadastro");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const categoria = document.getElementById("categoria").value;
    const quantidade = Number(document.getElementById("quantidade").value);
    const preco = Number(document.getElementById("preco").value);

    const produto = {
        id: Date.now(),
        nome: nome,
        categoria: categoria,
        quantidade: quantidade,
        preco: preco
    };

    let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

    produtos.push(produto);

    localStorage.setItem("produtos", JSON.stringify(produtos));

    alert("Produto cadastrado com sucesso!");

    formulario.reset();
});