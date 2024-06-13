
import { useState } from 'react';
import './Search.css'

function Search({updateSearchTerm}){

return(
<div className='Search-wrapper'>

    <input 
    id="pokemon-name-search"
    type="text"  placeholder="pokemon "
onChange={(e) =>updateSearchTerm(e.target.value)}



    />
    
</div>

)

}
export default Search;