funcionarios = []

window.onload = function() {
  if (localStorage.getItem("funcionarios")) {
    funcionarios = JSON.parse(localStorage.getItem("funcionarios"))
    mostrarFuncionarios()
    somarSalarios();
    mediaSalarial();

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
  somarSalarios();
  mediaSalarial();


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
  somarSalarios()
  mediaSalarial()

}

function converterSalario(valor) {
  let v = String(valor).trim();

  if (v === "" || v === null || v === undefined) return 0;

  v = v.replace(",", ".");

  let num = Number(v);
  return isNaN(num) ? 0 : num;
}


function somarSalarios() {
  funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];

  let soma = 0;

  for (let i = 0; i < funcionarios.length; i++) {
    soma += converterSalario(funcionarios[i].salario);
  }

  // proteção extra — caso por algum motivo dê NaN
  if (isNaN(soma)) soma = 0;

  localStorage.setItem("somaSalarios", soma);
}



function mediaSalarial() {
  funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];

  if (funcionarios.length === 0) {
    localStorage.setItem("mediaSalarial", 0);
    return;
  }

  let soma = 0;

  for (let i = 0; i < funcionarios.length; i++) {
    soma += converterSalario(funcionarios[i].salario);
  }

  let media = soma / funcionarios.length;

  if (isNaN(media)) media = 0;

  localStorage.setItem("mediaSalarial", media);
}



