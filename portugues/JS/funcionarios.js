funcionarios = []

window.onload = function() {
  if (localStorage.getItem("funcionarios")) {
    funcionarios = JSON.parse(localStorage.getItem("funcionarios"))
    mostrarFuncionarios()
  }
};

function cadastrar() {
  nome = document.getElementById('nome').value
  email = document.getElementById('email').value
  cargo = document.getElementById('cargo').value
  salario = document.getElementById('salario').value

  funcionario = {
    nome: nome,
    email: email,
    cargo: cargo,
    salario: salario
  }

  funcionarios.push(funcionario)

  localStorage.setItem("funcionarios", JSON.stringify(funcionarios))
  localStorage.setItem("qtdFuncionarios", JSON.stringify(funcionarios.length))

  mostrarFuncionarios()

  document.getElementById('nome').value = ""
  document.getElementById('email').value = ""
  document.getElementById('cargo').value = ""
  document.getElementById('salario').value = ""
}

function mostrarFuncionarios() {
  cardsContainer = document.querySelector('.cards_funci')
  cardsContainer.innerHTML = ""

  for ( i = 0; i < funcionarios.length; i++) {
    f = funcionarios[i]

    card = `
      <div class="card">
        <h3>${f.nome}</h3>
        <p><b>Cargo:</b> ${f.cargo}</p>
        <p><b>Salário:</b> R$ ${f.salario}</p>
        <p><b>E-mail:</b> ${f.email}</p>
        <button onclick="apagar(${i})">Exluir</button>
      </div>
    `

    cardsContainer.innerHTML += card
  }
}

function apagar(index){
  funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || []
  funcionarios.splice(index, 1)

  localStorage.setItem("funcionarios", JSON.stringify(funcionarios))
  localStorage.setItem("qtdFuncionarios", funcionarios.length)

  mostrarFuncionarios()
}
