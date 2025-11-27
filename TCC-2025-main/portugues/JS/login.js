function enviar(){
    usuario = document.getElementById("loginUsuario").value
    senha = document.getElementById("loginSenha").value

    usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

    user = usuarios.find(u => u.usuario === usuario && u.senha === senha)

    if(user){
        localStorage.setItem("usuarioLogado", usuario)
        document.getElementById("mensagem").innerHTML = "Login realizado com sucesso!"
        mensagem.style.color = "green"
        setTimeout(() => window.location.href = "inicio.html", 1500)
    }else{
        document.getElementById("mensagem").innerHTML = "Usuário ou senha incorretos!"
        mensagem.style.color = "red"
        setTimeout(() => location.reload(), 1500)
    }
}