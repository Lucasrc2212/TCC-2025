window.onload = function() {
    usuarioLogado = localStorage.getItem("usuarioLogado");
    if (usuarioLogado) {
        document.getElementById("bemVindo").innerHTML = `Seja Bem-vindo(a), ${usuarioLogado}!`;
    }
}

function funcionarios(){
    window.location.href = "funcionarios.html"
}
function clientes(){
    window.location.href = "clientes.html"
}
function produtos(){
    window.location.href = "produtos.html"
}
function agenda(){
    window.location.href = "agenda.html"
}
function despesas(){
    window.location.href = "despesas.html"
}



numero_funci = localStorage.getItem("qtdFuncionarios")
if(numero_funci === null){
    numero_funci = 0
}
else{
    document.getElementById("quantidade_funci").innerHTML = `${numero_funci} funcionário(s)`
}

numero_clientes = localStorage.getItem("qtdClientes")
if(numero_clientes === null){
    numero_clientes = 0
}
else{
    document.getElementById("quantidade_clientes").innerHTML = `${numero_clientes} cliente(s)`
}

numero_produtos = localStorage.getItem("qtdProdutos")
if(numero_produtos === null){
    numero_produtos = 0
}
else{
    document.getElementById("quantidade_produtos").innerHTML = `${numero_produtos} produto(s)`
}


numero_agenda = localStorage.getItem("quantidadeCompromissos")
if(numero_funci === null){
    numero_funci = 0
}
else{
    document.getElementById("quantidadeCompromissos").innerHTML = `${numero_agenda} compromisso(s)`
}

