function enviar() {
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const servico = document.getElementById('servico').value;
    const descricao = document.getElementById('descricao').value;

    if (!data || !hora || !servico) {
        alert("Preencha os campos obrigatórios!");
        return;
    }

    const novoAgendamento = {
        data,
        hora,
        servico,
        descricao
    };

    // Pega os agendamentos salvos e adiciona o novo
    let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    agendamentos.push(novoAgendamento);

    // Salva tudo de volta no localStorage
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

    // Atualiza a tela
    mostrarCards();
    atualizarContagem();

    // Limpa os campos
    document.getElementById('data').value = "";
    document.getElementById('hora').value = "";
    document.getElementById('servico').value = "";
    document.getElementById('descricao').value = "";
}

function apagar() {
    localStorage.removeItem('agendamentos');
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";
    atualizarContagem();
}

function mostrarCards() {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";

    const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];

    agendamentos.forEach(agendamento => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <div class="hora">${agendamento.hora}</div>
            <div class="conteudo">
                <h4>${agendamento.servico}</h4>
                <p>${agendamento.descricao || "Sem descrição"}</p>
                <small>${agendamento.data.split('-').reverse().join('/')}</small>
            </div>
        `;

        cardContainer.appendChild(card);
    });
}

function atualizarContagem() {
    const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    const total = agendamentos.length;
    localStorage.setItem('quantidadeCompromissos', total);
    console.log(`Total de cards salvos: ${total}`);
}

// Quando a página carrega, recria os cards salvos
window.onload = function() {
    mostrarCards();
    atualizarContagem();
};
