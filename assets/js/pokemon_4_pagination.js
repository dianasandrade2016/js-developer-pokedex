const url3 = `https://pokeapi.co/api/v2/pokemon/4/`

const onglets1 = document.querySelectorAll(".onglets1");
const contenu1 = document.querySelectorAll(".contenu1");

fetch(url3)
.then(response => response.json())
.then(data3 =>{
    const info = document.querySelector("#tela3")
    const card = document.createElement("span")
    card.classList.add("card")
    const img = document.createElement("img")
    img.src = data3.sprites.other.dream_world.front_default
    img.alt = data3.name
    card.appendChild(img)
    info.appendChild(card)


    const info1 = document.querySelector("#info1_species")
    const list1 = document.createElement("h3")
    list1.classList.add("list1")
    const species = document.createElement("species")   
    species.textContent = data3.species.name
    list1.appendChild(species)
    info1.appendChild(list1)

    const info2_stats_name = document.querySelector('#info2_stats_name'); 
    var stats_name = new Array
    stats_name =  data3.stats.map((stat)=>{return stat.stat.name})
    for(var i=0; i< stats_name.length; i++){
        const item1 = document.createElement('h3');
        item1.appendChild(document.createTextNode(stats_name[i]));
        info2_stats_name.appendChild(item1);
    }

    const info2_base_stat = document.querySelector('#info2_base_stat'); 

    var contador = 0
    var base_stat = new Array
    base_stat =  data3.stats.map((base_stat)=>{return base_stat.base_stat})

    for(var i=0; i< base_stat.length; i++){
        const item2 = document.createElement('h3');
        item2.appendChild(document.createTextNode(base_stat[i]));
        info2_base_stat.appendChild(item2);
        contador = contador + base_stat[i]
    }

    document.getElementById('total').innerHTML = contador
})

onglets1.forEach(onglet =>{
            onglet.addEventListener('click',()=>{
                if(onglet.classList.contains("active")){
                    return;
                }else{ 
                    onglet.classList.add("active");
                }

                let index1=0;
                index1 = onglet.getAttribute("data-anim");
                console.log('teste3');
                console.log(index1);

                for(i=0; i<onglets1.length; i++){
                    if(onglets1[i].getAttribute("data-anim") !=index1) {
                        onglets1[i].classList.remove("active");
                    }
                }

                for(j=0; j<contenu1.length; j++){
                    if(contenu1[j].getAttribute("data-anim")==index1){
                        contenu1[j].classList.add("activeContenu");
                    }else{
                        contenu1[j].classList.remove("activeContenu");
                    }
                }
            })
        })