const url1 = `https://pokeapi.co/api/v2/pokemon/4/`
const tela1 = document.getElementById("tela1");

fetch(url1)
.then(response => response.json())
.then(data1 =>{

    const info1 =
    `<li class="tela1">
        <div class="name">${data1.name}</div>
        <div class="number">#00${data1.order}</div>
        <div  class="detail">
            <ol class="types">${data1.types.map((type) => `<li class="type ${type.type.name}">${type.type.name}</li>` ).join('')}</ol>
        </div> 
    </li>`
    
    tela1.innerHTML += info1  

}).catch(error => { 
    var tela1 = document.getElementById("tela1");
    tela1.innerHTML = '<p> Pokemon ERROR! </p>'
})