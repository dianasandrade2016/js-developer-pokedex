const url = `https://pokeapi.co/api/v2/pokemon/1/`
const tela = document.getElementById("tela");

fetch(url)
.then(response => response.json())
.then(data =>{
  
    const info =
        `<li class="tela">
            <span class="name">${data.name}</span>
            <span class="number">#00${data.order}</span>

            <div  class="detail">
                <ol class="types">${data.types.map((type) => `<li class="type ${type.type.name}">${type.type.name}</li>` ).join('')}</ol>
            </div>   
            
        `

    tela.innerHTML += info

}).catch(error => { 
    var tela = document.getElementById("tela");
    tela.innerHTML = '<p> Pokemon ERROR! </p>'
})
