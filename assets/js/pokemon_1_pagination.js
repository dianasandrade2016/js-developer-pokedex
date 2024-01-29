const url2 = `https://pokeapi.co/api/v2/pokemon/1/`
const onglets = document.querySelectorAll(".onglets");
const contenu = document.querySelectorAll(".contenu");


fetch(url2)
.then(response => response.json())
.then(data2 =>{

    const teste = document.querySelector("#tela2")
    const card = document.createElement("span")
    card.classList.add("card")
    const img = document.createElement("img")
    img.src = data2.sprites.other.dream_world.front_default
    img.alt = data2.name
    card.appendChild(img)
    teste.appendChild(card)


    const teste1 = document.querySelector("#contenu_container1")
    const h1 = document.createElement("h3")
    h1.classList.add("h1")
    const species = document.createElement("species")   
    species.textContent = data2.species.name
        h1.appendChild(species)
    teste1.appendChild(h1)

    const teste2 = document.querySelector("#contenu_container2")
    const h2 = document.createElement("h3")   
    h2.classList.add("h2")
    const height = document.createElement("height")    
    height.textContent = data2.height
    h2.appendChild(height)
    teste2.appendChild(h2)

    const teste3 = document.querySelector("#contenu_container3")
    const h3 = document.createElement("h3")
    h3.classList.add("h3")
    const weight = document.createElement("weight")   
    weight.textContent = data2.weight
    h3.appendChild(weight)
    teste3.appendChild(h3)

    const teste4 = document.querySelector("#contenu_container4")
    const h4 = document.createElement("h3")
    h4.classList.add("h4")
    const ability = document.createElement("abilities")  
    ability.textContent = data2.abilities.map((ability)=>{return ability.ability.name})
    h4.appendChild(ability)
    teste4.appendChild(h4)

})

onglets.forEach(onglet =>{
    onglet.addEventListener('click',()=>{
        if(onglet.classList.contains("active")){
            return;
        }else{ 
            onglet.classList.add("active");
        }

        let index=0;
        index = onglet.getAttribute("data-anim");
        console.log('teste2');
        console.log(index);

        for(i=0; i<onglets.length; i++){
            if(onglets[i].getAttribute("data-anim") !=index) {
                onglets[i].classList.remove("active");
            }
        }

        for(j=0; j<contenu.length; j++){
            if(contenu[j].getAttribute("data-anim")==index){
                contenu[j].classList.add("activeContenu");
            }else{
                contenu[j].classList.remove("activeContenu");
            }
        }
    })
})