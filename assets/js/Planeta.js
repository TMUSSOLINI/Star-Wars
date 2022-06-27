const nome = document.getElementById('nome')
const gravidade = document.getElementById('gravidade')
const populacao = document.getElementById('populacao')
const terra = document.getElementById('terra')
const btnPlaneta = document.getElementById('pesquisa__btn')
const iptPlaneta= document.getElementById('inputPersonagem')

btnPlaneta.addEventListener('click', prevencao)

function prevencao(event){
    event.preventDefault()
    const planeta =iptPlaneta.value
    pegaInfo(planeta)
}

function pegaInfo(id){
    fetch(`https://swapi.dev/api/planets/${id}/`)
    .then(response => response.json())
    .then(json => {
        nome.innerHTML= json.name
        gravidade.innerHTML = json.gravity
        populacao.innerHTML = json.population
        terra.innerHTML = json.terrain
    })
}