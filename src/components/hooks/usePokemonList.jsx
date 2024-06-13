

import React, { useState ,useEffect } from 'react'
import axios from 'axios'

function usePokemonList(url,type) {

    const[pokemonListState, setPokemonListState] =useState({

        pokemonList:[],
        isLoading:true,
        PokedexUrl: url,
        nextUrl:'',
        prevUrl:''
    })

    async function downloadPokemon(){
        //setLoading(true)
    setPokemonListState((state) =>( {...state ,isLoading:true}))
    
        const response = await axios.get(pokemonListState.PokedexUrl)
        const pokemonResult =response.data.results
        console.log("response",response)
    console.log("reponseData",response.data)
    console.log("Result",pokemonResult)
    
    setPokemonListState((state)=>({
        ...state,
        nextUrl:response.data.next,
        prevUrl:response.data.previous
    })
        
       )
    //setprevUrl(response.data.previous)
    
if(type){
setPokemonListState((state)=>({
    ...state,
    pokemonList: response.data.pokemon.slice(0,6)
}))
}else{
    const pokemonResultPromise= pokemonResult.map((pokemon)=>axios.get(pokemon.url))
    const pokemonData = await axios.all(pokemonResultPromise)
    console.log( "PokemonData",pokemonData)
    const pokeListResult=pokemonData.map((pokeData)=>{
        const pokemon = pokeData.data
       return{
        id:pokemon.id,
        names: pokemon.name,
        image: (pokemon.sprites.other)?pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny
       }
    })
    console.log( "pokeListResult",pokeListResult)
    setPokemonListState(
        (state)=>({
            ...state,
            pokemonList:pokeListResult,
            isLoading:false
        })
        )
    //setLoading(false)
}
}

       
    useEffect(()=>{
    downloadPokemon();
    },[pokemonListState.PokedexUrl])
   
   



  return [
    pokemonListState,setPokemonListState
  ]
  


}

export default usePokemonList
