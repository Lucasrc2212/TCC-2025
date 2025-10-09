
function enviar(){
    usuario = document.getElementById('cadastroUsuario').value 
    senha = document.getElementById('cadastroSenha').value
    if(usuario && senha){
        usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

        existe = usuarios.find(u => u.usuario === usuario && u.senha === senha)
        if(existe){
            document.getElementById("mensagem").innerHTML = "Usuário já utilizado!"
            mensagem.style.color = "red"
            setTimeout(() => location.reload(), 1500)
            return
            
        }
         
        usuarios.push({ usuario, senha})

        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        localStorage.setItem("usuarioLogado", usuario)
        document.getElementById("mensagem").innerHTML = "Cadastro criado com sucesso!"
        mensagem.style.color = "green"
        setTimeout(() => window.location.href = "inicio.html", 1500)
        

    }else{
        document.getElementById("mensagem").innerHTML = 'Preencha todos os campos!'
        mensagem.style.color = "red"
        setTimeout(() => location.reload(), 1500)
        return
    }
}
