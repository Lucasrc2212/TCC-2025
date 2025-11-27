window.onload = function() {
    usuarioLogado = localStorage.getItem("usuarioLogado");
    if (usuarioLogado) {
        document.getElementById("bemVindo").innerHTML = `Seja Bem-vindo(a), ${usuarioLogado}!`;
    }
}