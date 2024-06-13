
import { useParams } from "react-router-dom"
 import axios from "axios";
import { useEffect, useState } from "react";
import usePokemonList from "../hooks/usePokemonList";
function PokemonDetail(){
    const {id} = useParams(); // iski help se id mil rha hai
    const [pokemon,setpokemon] = useState({})
async function downloadPokemon(){
   
const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
console.log(response.data)
setpokemon({
    name:response.data.name,
    image:response.data.sprites.other.dream_world.front_default,
    weight:response.data.weight,
    height:response.data.height,
    types:response.data.types.map((t) =>t.type.name)
})
}

const [pokemonListState ] =usePokemonList(`https://pokeapi.co/api/v2/type/fire` ,true)




useEffect(() =>{
 downloadPokemon()
 console.log("list",pokemonListState)
} ,[])
return(
<div className="pokemon-details-wrapper">

<div className="pokemon-name">name:{pokemon.name}</div>
<img className="pokemon-image" src={pokemon.image}/>
<div>Height: {pokemon.height}</div>
<div> Weight: {pokemon.weight}</div>


{pokemon.types && <div>
    <h1>More {pokemon.types[0]} type Pokemon</h1>
    <ul>
        {pokemonListState.pokemonList && pokemonListState.pokemonList.map((p)=> <li key={p.pokemon.url}>{p.pokemon.name}</li>)}
    </ul>
</div>}


</div>
)





}
export default PokemonDetail