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
function relatorios(){
    window.location.href = "relatorios.html"
}