// cadastro do formulario
const formularioCadastro = document.getElementById('formularioCadastro')

formularioCadastro.addEventListener('submit', (event) => {
    event.preventDefault();

    const usuariosCadastrados = JSON.parse(localStorage.getItem('listaCadastro')) ?? [] // buscando

    let nomeCompleto = document.getElementById('nomeCompleto')
    let email = document.getElementById('email')
    let whats = document.getElementById('whats')
    let senioridade = document.getElementById('senioridade')
    let pretSalarial = document.getElementById('pretSalarial')
    let experiencia = document.getElementById('experiencia')

    let areaAtuacao = document.querySelector('input[name="areaAtuacao"]:checked');
    let tecnologias = document.querySelectorAll('input[name="tecnologias"]:checked');
    let tecnologiasAux = [];

    tecnologias.forEach((valor) => tecnologiasAux.push(valor.value))

    const validarRetorno = validarCampo(tecnologias)

    if (validarRetorno) {

        const usuario = {
            id: ultimoId(),
            nome: nomeCompleto.value,
            email: email.value,
            whats: whats.value,
            senioridade: senioridade.value,
            pretSalarial: pretSalarial.value,
            areaAtuacao: areaAtuacao.value,
            tecnologias: tecnologiasAux,
            experiencia: experiencia.value
        };

        let existeUsuario = usuariosCadastrados.some((valor) => valor.email === email.value)
        if (existeUsuario) {
            alert('ja existe esse usuario')
            return
        }

        usuariosCadastrados.push(usuario)
        localStorage.setItem('listaCadastro', JSON.stringify(usuariosCadastrados)) // setItem => cria  
        localStorage.setItem('ultimoId', usuario.id)
        alert('cadastro realizado com sucesso')
        formularioCadastro.reset()
    }

})

function validarCampo(tecnologias) {
    if (tecnologias.length === 0) {
        alert('selecione pelo menos uma tecnologia')
        return false
    }
    return true

}
function ultimoId() {
    let ultimoId = Number(localStorage.getItem('ultimoId') ?? '0') 
    console.log(ultimoId)
    return ++ultimoId
}