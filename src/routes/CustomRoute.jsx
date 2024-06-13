import { Routes,Route } from "react-router-dom"
import PokemonDetail from "../components/pokemonDetail/PokemonDetail";
import Pokedex from "../components/Pokedex/Pokedex";
function CustomRoute(){

return(

<Routes>

<Route path="/" element={<Pokedex/>} />

<Route path="/pokemon/:id" element={<PokemonDetail/>} />

</Routes>

);


}

export default CustomRoute