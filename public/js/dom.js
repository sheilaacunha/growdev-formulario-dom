
function addImagem() {
    let img = document.getElementById("img")
    let imagem = document.getElementById("imagem")

    if (img.style.display == "none") {
        img.style.display = "block"
        imagem.innerHTML = "CLIQUE DE NOVO"
    }
    else {
        img.style.display = "none";
        imagem.innerHTML = "CLIQUE AQUI"
    }
}

function addConteudo() {
    let teste = document.getElementById("teste");

    if (teste.textContent === "Botão") {
        teste.textContent = "Olá mundão!";
        teste.value = "Olá mundão!"

    } else {
        teste.textContent = "Botão";
        teste.value = "Botão"
    }

}

let conteudoHTML = document.getElementById('conteudo')
let botaoAdicionar = document.getElementById('adicionar')



let identificador = 1

botaoAdicionar.addEventListener('click', adicionarNovoElemento)
function adicionarNovoElemento() {
    let meuH1 = document.createElement('h1')
    meuH1.innerHTML = 'Conteudo inserido <span style="color: yellow">Agora clique aqui.</span>'
    meuH1.setAttribute('style', 'font-family: sans-serif; color: red;')
    meuH1.setAttribute('id', `${identificador}`)
    conteudoHTML.appendChild(meuH1)

    meuH1.addEventListener('click', () => {
        console.log(meuH1.id)
        remover(meuH1.id)
    })

    identificador++

}
function remover(identificador) {
    let listaH1s = document.querySelectorAll('h1')
    for (const h1 of listaH1s) {
        if (h1.id === identificador) {
            conteudoHTML.removeChild(h1)
        }
    }
}