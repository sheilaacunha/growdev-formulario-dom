const usuariosCadastrados = JSON.parse(localStorage.getItem('listaCadastro')) ?? [] // buscando


document.addEventListener('DOMContentLoaded', () => {
    for (const usuario of usuariosCadastrados) {
        usuariosNoHtml(usuario)
    }

})

function usuariosNoHtml(usuario) {
    const listaUsuarios = document.getElementById('listaUsuarios')

    const divHtml = document.createElement('tr')
    divHtml.id = usuario.id

    const pId = document.createElement('td')
    pId.innerHTML = usuario.id

    const pNome = document.createElement('td')
    pNome.innerHTML = usuario.nome


    const pEmail = document.createElement('td')
    pEmail.innerHTML = usuario.email

    const pWhats = document.createElement('td')
    pWhats.innerHTML = usuario.whats

    const pPretSalarial = document.createElement('td')
    pPretSalarial.innerHTML = usuario.pretSalarial

    const pAreaAtuacao = document.createElement('td')
    pAreaAtuacao.innerHTML = usuario.areaAtuacao

    const pSenioridade = document.createElement('td')
    pSenioridade.innerHTML = usuario.senioridade


    let tecnologiasHtml = usuario.tecnologias.reduce((acc, prox) => {
        return acc + ', ' + prox

    })
    const pTecnologias = document.createElement('td')
    pTecnologias.innerHTML = tecnologiasHtml

    const pexperiencia = document.createElement('td')
    pexperiencia.innerHTML = usuario.experiencia

    const divBtn = document.createElement('td')

    const buttonEditar = document.createElement('button')
    buttonEditar.classList.add('btn')
    buttonEditar.innerText = 'Editar'
    buttonEditar.addEventListener('click', () => {
        editar(usuario.id)
    })

    const buttonApagar = document.createElement('button')
    buttonApagar.classList.add('btn')
    buttonApagar.innerText = 'Apagar'
    buttonApagar.addEventListener('click', () => {
        apagar(usuario.id)
    })

    divHtml.appendChild(pId)
    divHtml.appendChild(pNome)
    divHtml.appendChild(pEmail)
    divHtml.appendChild(pWhats)
    divHtml.appendChild(pPretSalarial)
    divHtml.appendChild(pAreaAtuacao)
    divHtml.appendChild(pSenioridade)
    divHtml.appendChild(pTecnologias)
    divHtml.appendChild(pexperiencia)

    divBtn.appendChild(buttonEditar)
    divBtn.appendChild(buttonApagar)

    divHtml.appendChild(divBtn)
    listaUsuarios.appendChild(divHtml)
}

function apagar(idUsuario) {

    console.log(idUsuario);

    const indiceUsuarioCadastrado = usuariosCadastrados.findIndex((valor) => valor.id === idUsuario)
    if (indiceUsuarioCadastrado === -1) {
        alert('Não foi encontrado esse indice')
        return
    }

    let trExcluir = document.getElementById(idUsuario)
    let confirmaExclusaoTr = confirm(`Deseja realmente excluir? ${idUsuario}`)

    if (confirmaExclusaoTr) {
        trExcluir.remove()
        usuariosCadastrados.splice(indiceUsuarioCadastrado, 1)
        localStorage.setItem('listaCadastro', JSON.stringify(usuariosCadastrados))
    } else {
        alert('Usuario não exluido .')
    }
}


function editar(usuario) {
    console.log(usuario);

    const indiceUsuarioCadastrado = usuariosCadastrados.findIndex((valor) => valor.id === usuario)
    if (indiceUsuarioCadastrado === -1) {
        alert('Não foi encontrado esse indice')
        return
    }
    let confirmaEditar = confirm(`Deseja realmente editar o recado? ${usuario}`)
    if (confirmaEditar) {
        const novoNome = prompt('Digite o novo nome:', usuariosCadastrados[indiceUsuarioCadastrado].nome)
        const novaPretencao = Number(prompt('Digite a nova pretenção salarial: ', usuariosCadastrados[indiceUsuarioCadastrado].pretSalarial))

        usuariosCadastrados[indiceUsuarioCadastrado].nome = novoNome
        usuariosCadastrados[indiceUsuarioCadastrado].pretSalarial = novaPretencao

        localStorage.setItem('listaCadastro', JSON.stringify(usuariosCadastrados))
    }
        location.reload()
}