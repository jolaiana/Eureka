class View {
    renderSuccessfulLogin() {
        let loginMain = document.querySelector("main") // dom para modificar a main APENAS da página de login
        loginMain.innerHTML = `
        <h2 class="titulo" style="margin-top: 10%;">Login sucedido</h2>
        <h2 class="titulo" style="margin-top: 10%; font-weight: 300">Bem vindo novamente!</h2>
        `
    }
    
    renderSentEmail(email) {
        let section = document.querySelector(".secao-login")
        section.innerHTML = `
        <p class="titulo" style="margin-top: 10%; font-size: larger">Um email com sua nova senha foi enviado para: </p> 
        <p class="titulo" style="margin-top: 10%; font-size: larger"><b style="padding-left: 10%;">${email}</b></p>
        `
    }
    
    renderListaEspera() {
        let loginMain = document.querySelector("main") // dom para modificar a main APENAS da página de Lista de Espera
        loginMain.innerHTML = `
        <h2 class="titulo" style="margin-top: 10%;">Cadastro efetuado na lista de espera!</h2>
        <h2 class="titulo" stle="margin-top: 0%"; padding-top:0%; font-weight: 300">Fique ligado no seu email para mais novidades</h2>`
    }

    renderErrorText(text) {
        let listaEsperaForm = document.querySelector("#form")
        let errorText = document.getElementById("error-text")
        
        if (errorText == null) { // serve para evitar criar varios elementos repitidos
            errorText = document.createElement("h3")
            errorText.id = "error-text"
            errorText.classList.add("login-invalido")
        }
        
        errorText.innerText = text
        
        listaEsperaForm.appendChild(errorText)
    }
}