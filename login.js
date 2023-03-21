function enviarDados() {
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
            nome: "Vinicius",
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
            nome: "Gabriel",
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
            nome: "Marcos",
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
            nome: "Brian",
            senha: "123456"
        },
        {
            nome: "Alexandra",
            senha: "123456"
        },
        {
            nome: "Lula",
            senha: "123456"
        },
        {
            nome: "Bolsonaro",
            senha: "123456"
        }
    ];

    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;

    for (let index = 0; index < dados.length; index++) {
        let usuario = dados[index];
        if ((nome === usuario.nome) && (senha === usuario.senha)) {
            localStorage.setItem("nome", nome)
            window.location.assign("file:///C:/telaDeLogin/home/home.html");
            break; // para interromper o loop após encontrar uma correspondência
        } 
    } 
}