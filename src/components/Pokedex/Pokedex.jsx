
import { useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";

import './pokedex.css'
function Pokedex(){
    const [searchTerm ,setsearchTerm] =useState("")
return(
    <div className="pokedex-wrapper">

<Search updateSearchTerm={setsearchTerm}/>
{/* {searchTerm} */}
{(searchTerm.length==0)?<PokemonList/>:""}

    </div>
)





}
export default Pokedex;