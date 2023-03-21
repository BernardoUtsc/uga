let usuario = localStorage.getItem("nome")
let header = document.querySelector("div.header-home")
header.innerHTML = `<h1>Bem vindo, <strong>${usuario}</strong>!</h1>`

if(usuario !== "Admin"){
alert(`Função "DELETAR" desativada, para reativar, entre com um perfil administrador!`)
}
let dados = [
    {
        nome: "Admin",
        senha: "admin"
    },
    {
        nome: "Pablo",
        senha: "123456"
    },
    {
        nome: "Vinícius",
        senha: "123456"
    },
    {
        nome: "Adrian",
        senha: "123456"
    },
    {
        nome: "Pedro",
        senha: "123456"
    },
    {
        nome: "Bernardo",
        senha: "123456"
    },
    {
        nome: "Moisés",
        senha: "123456"
    },
    {
        nome: "Ana",
        senha: "123456"
    },
    {
        nome: "Maria",
        senha: "123456"
    },
    {
        nome: "João",
        senha: "123456"
    },
    {
        nome: "Maicon",
        senha: "123456"
    },
    {
        nome: "Gabriele",
        senha: "123456"
    },
    {
        nome: "Renan",
        senha: "123456"
    },
    {
        nome: "Lula",
        senha: "123456"
    },
    {
        nome: "Marcos",
        senha: "123456"
    },
    {
        nome: "Fernando",
        senha: "123456"
    },
    {
        nome: "Hugo",
        senha: "123456"
    },
    {
        nome: "Natan",
        senha: "123456"
    },
    {
        nome: "Vitor",
        senha: "123456"
    },
    {
        nome: "Kevin",
        senha: "123456"
    },
    {
        nome: "Miguel",
        senha: "123456"
    },
   
    {
        nome: "Bolsonaro",
        senha: "123456"
    },
    {
        nome: "Vitor",
        senha: "123456"
    },
    {
        nome: "Gustavo",
        senha: "123456"
    }
];





const inputlistarusuarios = document.querySelector('#listarusuarios')
inputlistarusuarios.addEventListener("click", listarusuarios0)

const inputlimpar = document.querySelector('#limparusuarios')
inputlimpar.addEventListener("click", limpartela)

if(usuario == "Admin"){
const inputdeletar1 = document.querySelector('#deletarusuarios1')
inputdeletar1.addEventListener("click", deletarusuario1)
}


const inputadicionar1 = document.querySelector('#adicionarusuarios1')
inputadicionar1.addEventListener("click", adicionarusuarios1)

const inputatualizar1 = document.querySelector('#atualizarusuarios1')
inputatualizar1.addEventListener("click", atualizarusuarios1)


const inputtestar1 = document.querySelector('#testarusersenha1')
inputtestar1.addEventListener("click", testarusersenha1)



function listarusuarios0() {
    let lista = document.getElementById('screen')
    lista.innerHTML = ""
    for (let index = 0; index < dados.length; index++) {
        lista.innerHTML += `<p>Usuário ${index + 1} - ${dados[index].nome}</p>`
    }
}

function limpartela() {
    let lista = document.getElementById('screen')
    lista.innerHTML = ""
}

function deletarusuario1() {
    let lista = document.getElementById('screen')
    lista.innerHTML = ""
    for (let index = 0; index < dados.length; index++) {
        lista.innerHTML += `<p><input type="checkbox" id="${index}" class="checkbox"><label> -${dados[index].nome}</label></p>`
    }
    lista.innerHTML += `<input type="button" value="Deletar" class="botao" id="deletarusuarios2">`
    const inputdeletar2 = document.querySelector("#deletarusuarios2")
    inputdeletar2.addEventListener("click", deletarusuario2)
}

function deletarusuario2() {

    let userdeletado = [""]
    for (let index = 0; index < dados.length; index++) {
        let checkbox = document.getElementById(`${index}`)
        if (checkbox.checked == true) {
            userdeletado[index] = 1
        }
        else {
            userdeletado[index] = 0
        }
    }
    for (let index = userdeletado.length - 1; index >= 0; index--) {
        if (userdeletado[index] == 1) {
            dados.splice(index, 1)
        }
        }
        listarusuarios0()
    }


    



function adicionarusuarios1() {
    let lista = document.getElementById('screen')
    lista.innerHTML = ""
    lista.innerHTML += `<form>
    <label for="inputuser">Nome do usuário:</label><br>
    <input type="text" class="inputuser"> <br>
    <label for="inputsenha">Senha do usuário:</label><br>
    <input type"password" class="inputsenha"><br><br>
    <input type="button" value="Adicionar Usuário" class="botao" id="adicionarusuarios2">
    </form>`
    const inputadicionar2 = document.querySelector("#adicionarusuarios2")
    inputadicionar2.addEventListener("click", adicionarusuarios2)
}
function adicionarusuarios2() {
    let novousuario = {
        nome: document.querySelector('input.inputuser').value,
        senha: document.querySelector('input.inputsenha').value
    }
    let repetida = 0
    for (let index = 0; index < dados.length; index++) {
        if (dados[index].nome == novousuario.nome) {
            repetida = 1
        }
    }
    if (repetida == 0) {
        dados.push(novousuario)
        alert("Usuário adicionado com sucesso!")
        listarusuarios0()
    }
    else {
        alert("Usuário já existe no cadastro, insira outro nome")
        adicionarusuarios1()
    }
}

function atualizarusuarios1() {
    let lista = document.getElementById("screen")
    lista.innerHTML = ""
    lista.innerHTML += `<form>
        <label for="inputuser">Nome usuario:<label><br>
        <input type="text" class="inputuser"><br>
        <label for="inputsenha">Digite a senha atual:<label><br>
        <input type="password" class="inputsenha"><br>
        <label for="inputuser1">Novo usuario:<label><br>
        <input type="text" class="inputuser1"><br>
        <label for="inputsenha1">Nova senha:<label><br>
        <input type="password" class="inputsenha1"><br>
        <label for="inputsenha2">Confirmar senha:<label><br>
        <input type="password" class="inputsenha2"><br>
        <input type="button" value="trocar" class="botao" id="trocarsenha">`

    const inputtrocarsenha1 = document.querySelector("#trocarsenha")
    inputtrocarsenha1.addEventListener("click", atualizarusuarios2)
}

function atualizarusuarios2() {
    
    let nome = document.querySelector('input.inputuser').value
    if(nome !== "Admin"){
    let nome1 = document.querySelector('input.inputuser1').value
    let senha = document.querySelector('input.inputsenha').value
    let senha1 = document.querySelector('input.inputsenha1').value
    let senha2 = document.querySelector('input.inputsenha2').value
    let errosenha = 1
    let errousuario = 0
    let indice = 0

    for (let index = 0; index < dados.length; index++) {
        if (dados[index].nome == nome1) {
            if (dados[index].nome != nome) {
                errousuario = 1
            }
        }
    }
    if (errousuario == 0) {
        errousuario = 1
        for (let index = 0; index < dados.length; index++) {
            if (dados[index].nome == nome) {
                errousuario = 0
                if ((dados[index].senha == senha) && (senha1 == senha2)) {
                    errosenha = 0
                    indice = index
                }
            }
        }
    }
    if (errousuario == 0) {
        if (errosenha == 0) {
            let lista = document.getElementById("screen")
            lista.innerHTML = ""
            dados[indice].nome = nome1
            dados[indice].senha = senha1
            alert("Dados atualizados com sucesso!")
            atualizar()
        }
        else {
            alert("Login incorreto, favor verificar os dados, senha incorreta")
            atualizar()
        }
    } else {
        alert("Login incorreto, favor verificar os dados, usuário incorreto")
    }
}
if(nome == "Admin"){
    alert("IMPOSSÍVEL ALTERAR LOGIN DO ADMINISTRADOR!")
}
}
function testarusersenha1() {
    let lista = document.getElementById("screen")
    lista.innerHTML = ""
    lista.innerHTML += `<form>
    <label for="inputuser">Nome usuário:</label><br>
    <input type="text" class="inputuser"> <br>
    <label for="inputsenha">Digite a senha:</label><br>
    <input type="password" class="inputsenha"> <br>
    <input type="button" value="Logar" class="botao" id="testarusersenha2">
    </form>`

    const inputtestar2 = document.querySelector("#testarusersenha2")
    inputtestar2.addEventListener("click", testarusersenha2)
}
function testarusersenha2() {
    let user = {
        nome: document.querySelector("input.inputuser").value,
        senha: document.querySelector("input.inputsenha").value
    }
    let erro = 1
    for (let index = 0; index < dados.length; index++) {
        if (dados[index].nome == user.nome && dados[index].senha == user.senha) {
            erro = 0
            index = dados.length
        }
    }
    if (erro == 0) {
        alert("Login realizado com sucesso!")

    } else {
        alert("Login incorreto, favor verificar os dados, usuário ou senha incorreto")

    }
}

const sair = document.querySelector("input#sair")
sair.addEventListener("click", function () {
    localStorage.removeItem("nome")
    window.location.href = "file:///C:/telaDeLogin/Login/login.html"
})

window.addEventListener('beforeunload', function(e){
    localStorage.removeItem('nome')
})

