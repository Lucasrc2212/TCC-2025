window.onload = function () {
    // ====== PEGAR VALORES DO LOCALSTORAGE ======
    let somaSalarios = Number(localStorage.getItem("somaSalarios")) || 0;
    let mediaSalarios = Number(localStorage.getItem("mediaSalarial")) || 0;
    let totalProdutos = Number(localStorage.getItem("totalProdutos")) || 0;

    let qtdFuncionarios = Number(localStorage.getItem("qtdFuncionarios")) || 0;
    let qtdProdutos = Number(localStorage.getItem("qtdProdutos")) || 0;

    // ====== FORMATADOR PADRÃO R$ ======
    const formatar = (v) =>
        v.toLocaleString("pt-BR", { minimumFractionDigits: 2 });

    // ====== COLOCAR VALORES NO HTML ======

    // Gastos totais (funcionários + produtos)
    document.querySelector(".valor h1").innerHTML = 
        "R$ " + formatar(somaSalarios + totalProdutos);

    // Média salarial
    document.querySelector(".media_sal h2").innerHTML =
        "R$ " + formatar(mediaSalarios);

    // Tabela — gastos com produtos
    document.querySelector(".valor_pro").innerHTML =
        "R$ " + formatar(totalProdutos);

    document.querySelector(".quant_pro").innerHTML =
        qtdProdutos;

    // Tabela — gastos com funcionários
    document.querySelector(".valor_funci").innerHTML =
        "R$ " + formatar(somaSalarios);

    document.querySelector(".quant_funci").innerHTML =
        qtdFuncionarios;
};
