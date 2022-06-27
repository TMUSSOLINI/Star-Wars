 const nome = document.getElementById('nome')
 const data = document.getElementById('data')
 const sexo = document.getElementById('sexo')
 const altura = document.getElementById('altura')
 const btnperson = document.getElementById('pesquisa__btn')
 const iptPersona= document.getElementById('inputPersonagem')

 btnperson.addEventListener('click', prevent)

function prevent(event){
    event.preventDefault();
    const personagem = iptPersona.value;
    buscaInfo(personagem)
}

function buscaInfo(id){
    fetch(`https://swapi.dev/api/people/${id}/`)
    .then(response => response.json())
    .then(json =>{
        nome.innerHTML = json.name
        data.innerHTML = json.birth_year
        sexo.innerHTML = json.gender
        altura.innerHTML = json.height
    })
}



//  fetch('https://swapi.dev/api/people/1/')
//  .then(response => response.json())
//  .then(json => {
//     console.log(json.name)
//     planets.innerHTML = json.name
//  })