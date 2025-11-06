clientes = []

window.onload = function() {
  if (localStorage.getItem("clientes")) {
    clientes = JSON.parse(localStorage.getItem("clientes"))
    mostrarClientes()
  }
};

function cadastrar() {
  nome = document.getElementById('nome').value
  genero = document.getElementById('genero').value
  cpf = document.getElementById('cpf').value
  cidade = document.getElementById('cidade').value

  cliente = {
    nome: nome,
    genero: genero,
    cpf: cpf,
    cidade: cidade
  };

  clientes.push(cliente)

  localStorage.setItem("clientes", JSON.stringify(clientes))
  localStorage.setItem("qtdClientes", JSON.stringify(clientes.length))

  mostrarClientes()

  document.getElementById('nome').value = ""
  document.getElementById('genero').value = ""
  document.getElementById('cpf').value = ""
  document.getElementById('cidade').value = ""
}

function mostrarClientes() {
  cardsContainer = document.querySelector('.cards_clientes')
  cardsContainer.innerHTML = ""

  for ( i = 0; i < clientes.length; i++) {
    f = clientes[i]

    card = `
      <div class="card">
        <h3>${f.nome}</h3>
        <p><b>Gênero:</b> ${f.genero}</p>
        <p><b>CPF:</b> R$ ${f.cpf}</p>
        <p><b>Cidade:</b> ${f.cidade}</p>
        <button onclick="apagar(${i})">Exluir</button>
      </div>
    `

    cardsContainer.innerHTML += card
  }
}

function apagar(index){
  clientes = JSON.parse(localStorage.getItem("clientes")) || []
  clientes.splice(index, 1)

  localStorage.setItem("clientes", JSON.stringify(clientes))
  localStorage.setItem("qtdClientes", clientes.length)

  mostrarClientes()
}
