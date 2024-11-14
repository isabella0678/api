const ALEATORIA = document.getElementById('imagenAleatoria');
const NOMBREP = document.getElementById('nombre');
const BUTTON_API = document.getElementById('button');
const pokemonInfoDiv = document.getElementById("pokemonInfoDiv");
let entradaPokemon = document.getElementById("entradaPokemon");

const llamarPokemon = () => {
    const id = entradaPokemon.value; 
    if (!id) return;
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`) // URL envuelta en backticks
        .then(res => {     
            if (!res.ok) {
                throw new Error('No hubo conexión, lo siento'); // Error lanzado si no hay conexión
            }
            return res.json();
        })
        .then(data => {
            let div = document.createElement("div");
            console.log(data);
            let nombreParrafo = document.createElement("p");
            nombreParrafo.textContent = `Pokémon #${id}: ${data.name}`; // Cambiado a backticks y corregido texto
            div.appendChild(nombreParrafo);

            let imagen = document.createElement("img");
            imagen.src = data.sprites.front_default;
            imagen.alt = data.name;
            div.appendChild(imagen);

            pokemonInfoDiv.appendChild(div);
        })
        .catch(error => {
            console.error("Error:", error);
        });
};

BUTTON_API.addEventListener('click', llamarPokemon);
