produtos = []

window.onload = function() {
  if (localStorage.getItem("produtos")) {
    produtos = JSON.parse(localStorage.getItem("produtos"))
    mostrarProdutos()
    somarValorProdutos();

  }
};

function cadastrar() {
  nome_produto = document.getElementById('nome_produto').value
  categoria = document.getElementById('categoria').value
  preco = document.getElementById('preco').value
  quantidade = document.getElementById('quantidade').value

  produto = {
    nome_produto: nome_produto,
    categoria: categoria,
    preco: preco,
    quantidade: quantidade
  }

  produtos.push(produto)

  localStorage.setItem("produtos", JSON.stringify(produtos))
  localStorage.setItem("qtdProdutos", JSON.stringify(produtos.length))

  mostrarProdutos()
  somarValorProdutos();


  document.getElementById('nome_produto').value = ""
  document.getElementById('categoria').value = ""
  document.getElementById('preco').value = ""
  document.getElementById('quantidade').value = ""
}

function mostrarProdutos() {
  cardsContainer = document.querySelector('.cards_produtos')
  cardsContainer.innerHTML = ""

  for ( i = 0; i < produtos.length; i++) {
    f = produtos[i]

    card = `
      <div class="card">
        <h3>${f.nome_produto}</h3>
        <p><b>Categoria:</b> ${f.categoria}</p>
        <p><b>Preço:</b> R$ ${f.preco}</p>
        <p><b>Quantidade:</b> ${f.quantidade}</p>
        <button onclick="apagar(${i})">Excluir</button>
      </div>
    `

    cardsContainer.innerHTML += card
  }
}

function apagar(index){
  produtos = JSON.parse(localStorage.getItem("produtos")) || []
  produtos.splice(index, 1)

  localStorage.setItem("produtos", JSON.stringify(produtos))
  localStorage.setItem("qtdProdutos", produtos.length)

  mostrarProdutos()
  somarValorProdutos();

}

function pesquisarProduto() {
  termo = document.getElementById("pesquisa").value.trim().toLowerCase()
  cards = document.querySelectorAll(".card")
  encontrou = false

  cards.forEach(card => {
    nomeProduto = card.querySelector("h3").textContent.toLowerCase()
    
    card.classList.remove("destaque")

    if (nomeProduto.includes(termo) && termo !== "") {
      card.classList.add("destaque")
      encontrou = true
    }
  })

  if (!encontrou && termo !== "") {
    alert("Produto não encontrado!")
  }
}

function converterPreco(valor) {
  let v = String(valor).trim().replace(",", ".");
  let n = Number(v);
  return isNaN(n) ? 0 : n;
}

function somarValorProdutos() {
  let lista = JSON.parse(localStorage.getItem("produtos")) || [];
  let total = 0;

  for (let i = 0; i < lista.length; i++) {
    let preco = converterPreco(lista[i].preco);
    let qtd = Number(lista[i].quantidade) || 0;

    total += preco * qtd;
  }

  localStorage.setItem("totalProdutos", total);
}


