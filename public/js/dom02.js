

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

// cadastro do formulario
const formularioCadastro = document.getElementById('formularioCadastro')
const listaUsuarios = document.getElementById('listaUsuarios')


formularioCadastro.addEventListener('submit', (event) => {
    event.preventDefault();


    let cpf = document.getElementById('cpf')
    let nomeCompleto = document.getElementById('nomeCompleto')
    let dataNascimento = document.getElementById('dataNascimento')
    let email = document.getElementById('email')
    let whats = document.getElementById('whats')
    let enderecoCompleto = document.getElementById('enderecoCompleto')
    let senioridade = document.getElementById('senioridade')
    let pretSalarial = document.getElementById('pretSalarial')
    let experiencia = document.getElementById('experiencia')

    let areaAtuacao = document.querySelector('input[name="areaAtuacao"]:checked');
    let tecnologias = document.querySelectorAll('input[name="tecnologias"]:checked');
    let tecnologiasAux = [];

    tecnologias.forEach((valor) => tecnologiasAux.push(valor.value))

    const usuarioCadastrado = []


    const usuario = {
        cpf: cpf.value,
        nome: nomeCompleto.value,
        dataNasc: dataNascimento.value,
        email: email.value,
        whats: whats.value,
        endereco: enderecoCompleto.value,
        senioridade: senioridade.value,
        pretSalarial: pretSalarial.value,
        areaAtuacao: areaAtuacao.value,
        tecnologias: tecnologiasAux,
        experiencia: experiencia.value
    };

    let existeUsuario = usuarioCadastrado.some((valor) => valor.email === email.value)
    // console.log(existeUsuario);
    if (existeUsuario) {
        alert('ja existe esse usuario')
        return
    }

    usuarioCadastrado.push(usuario)
    usuariosNoHtml(usuario)
    console.log(usuarioCadastrado);
    formularioCadastro.reset()

})


function usuariosNoHtml(listaUsuario) {

    // console.log(`entoru ${listaUsuario}`)


    const divHtml = document.createElement('div')
    divHtml.setAttribute('id', `${listaUsuario.email}`)
    divHtml.classList.add('listaUsuario')

    const pCpf = document.createElement('p')
    pCpf.innerHTML = `Cpf: <span>${listaUsuario.cpf}</span>`

    const pNome = document.createElement('p')
    pNome.innerHTML = `Nome: <span>${listaUsuario.nome}</span>`

    const pDataNasc = document.createElement('p')
    pDataNasc.innerHTML = `Data de nascimento: <span>${listaUsuario.dataNasc}</span>`

    const pEmail = document.createElement('p')
    pEmail.innerHTML = `E-mail: <span>${listaUsuario.email}</span>`

    const pWhats = document.createElement('p')
    pWhats.innerHTML = `Whats: <span>${listaUsuario.whats}</span>`

    const pEndereco = document.createElement('p')
    pEndereco.innerHTML = `Endereço: <span>${listaUsuario.endereco}</span>`

    const pPretSalarial = document.createElement('p')
    pPretSalarial.innerHTML = `Pretenção Salarial: <span>${listaUsuario.pretSalarial}</span>`

    const pAreaAtuacao = document.createElement('p')
    pAreaAtuacao.innerHTML = `Area de Atuação: <span>${listaUsuario.areaAtuacao}</span>`

    const pSenioridade = document.createElement('p')
    pSenioridade.innerHTML = `Senioridade: <span>${listaUsuario.senioridade}</span>`


    let tecnologiasHtml = listaUsuario.tecnologias.reduce((acc, prox) => {
        return acc + ', ' + prox

    })
    const pTecnologias = document.createElement('p')
    pTecnologias.innerHTML = `Tecnologias: <span>${tecnologiasHtml}</span>`

    const pexperiencia = document.createElement('P')
    pexperiencia.innerHTML = `Experiencias: <span>${listaUsuario.experiencia}</span>`

    const divBtn = document.createElement('div')

    const buttonEditar = document.createElement('button')
    buttonEditar.innerText = 'Editar'
    buttonEditar.addEventListener('click', () => {
        console.log('editar')
    })

    const buttonApagar = document.createElement('button')
    buttonApagar.innerText = 'Apagar'
    buttonApagar.addEventListener('click', () => {
        console.log('buttonApagar')
    })

    divHtml.appendChild(pCpf)
    divHtml.appendChild(pNome)
    divHtml.appendChild(pDataNasc)
    divHtml.appendChild(pEmail)
    divHtml.appendChild(pWhats)
    divHtml.appendChild(pEndereco)
    divHtml.appendChild(pPretSalarial)
    divHtml.appendChild(pAreaAtuacao)
    divHtml.appendChild(pSenioridade)
    divHtml.appendChild(pTecnologias)
    divHtml.appendChild(pexperiencia)
    divBtn.appendChild(buttonEditar)
    divBtn.appendChild(buttonApagar)
    divHtml.appendChild(divBtn)
    listaUsuarios.appendChild(divHtml)
    console.log(listaUsuarios);
}