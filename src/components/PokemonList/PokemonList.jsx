import { useEffect, useState } from "react";
import axios from 'axios'
import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../hooks/usePokemonList";

function PokemonList(){

  /*  useEffect(()=>{
        console.log("effect called")
    },[])
    const [x,setX] = useState(0)
    const [y,setY]= useState(0)
return(
<>
    <div>
       x:{x} <button onClick={()=>{
        setX(x+1)
       }}>inc</button> 
    </div>
    <div>
       y:{y} <button onClick={()=>{
        setY(y+1)
       }}>inc</button> 
    </div>
</>

)*/
// const[pokemonList,setPokemonList]=useState([])
// const[isLoading,setLoading]=useState([true])
// const [PokedexUrl,setPokedexUrl]=useState('https://pokeapi.co/api/v2/pokemon')
// const [nextUrl,setnextUrl]=useState('')
// const [prevUrl,setprevUrl]=useState('')


// const[pokemonListState, setPokemonListState] =useState({

//     pokemonList:[],
//     isLoading:true,
//     PokedexUrl: 'https://pokeapi.co/api/v2/pokemon',
//     nextUrl:'',
//     prevUrl:''
// })














// async function downloadPokemon(){
//     //setLoading(true)
// setPokemonListState({...pokemonListState,isLoading:true})

//     const response = await axios.get(pokemonListState.PokedexUrl)
//     const pokemonResult =response.data.results
//     console.log("response",response)
// console.log("reponseData",response.data)
// console.log("Result",pokemonResult)

// setPokemonListState((state)=>({
//     ...state,
//     nextUrl:response.data.next,
//     prevUrl:response.data.previous
// })
    
//    )
// //setprevUrl(response.data.previous)

//     const pokemonResultPromise= pokemonResult.map((pokemon)=>axios.get(pokemon.url))
//     const pokemonData = await axios.all(pokemonResultPromise)
//     console.log( "PokemonData",pokemonData)
//     const pokeListResult=pokemonData.map((pokeData)=>{
//         const pokemon = pokeData.data
//        return{
//         id:pokemon.id,
//         names: pokemon.name,
//         image: (pokemon.sprites.other)?pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny
//        }
//     })
//     console.log( "pokeListResult",pokeListResult)
//     setPokemonListState(
//         (state)=>({
//             ...state,
//             pokemonList:pokeListResult,
//             isLoading:false
//         })
//         )
//     //setLoading(false)
// }
// useEffect(()=>{
// downloadPokemon();
// },[pokemonListState.PokedexUrl])

const [pokemonListState,setPokemonListState] = usePokemonList('https://pokeapi.co/api/v2/pokemon')

return(

<div className="pokemon-list-wrapper">
  <div> pokemon list</div>

  <div className="pokemon-wrapper">


 
   {(pokemonListState.isLoading)?'Loading...':
   pokemonListState.pokemonList.map((p)=><Pokemon name={p.names} image={p.image} key={p.id} id={p.id} />)
   
   }
   </div>
   <div className="control">
<button disabled={pokemonListState.prevUrl==null} onClick={()=>{
    const urltoset = pokemonListState.prevUrl
    setPokemonListState({...pokemonListState,PokedexUrl:urltoset})
}}>Prev</button>



<button disabled={pokemonListState.nextUrl==null} onClick={()=>{
    const urltoset =pokemonListState.nextUrl


setPokemonListState({...pokemonListState,PokedexUrl:urltoset})}}>Next</button>
   </div>
</div>

)
}
export default PokemonList;