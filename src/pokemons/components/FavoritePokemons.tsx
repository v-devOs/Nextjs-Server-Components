'use client';
import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid"
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

interface PokemonsState{
  [key: string]: SimplePokemon
}

const getPokemons = (pokemonsFromState: PokemonsState) => {
  let pokemons: SimplePokemon[] = [];

  for(const pokemon in pokemonsFromState){
    pokemons.push( pokemonsFromState[pokemon])
  }

  return pokemons;
}


export const FavoritePokemons = () => {

  const pokemonsState = useAppSelector( state => state.pokemons)
  const [pokemons, setPokemons] = useState(getPokemons(pokemonsState))
  
  return (
    <>
      {
        pokemons.length === 0 
          ? (<NoFavorites/>)
          : (<PokemonGrid pokemons={pokemons}/>)
      }
    </>
  )
}

export const NoFavorites = () =>{
  return(
    <div className="flex flex-col h-[50vh] items-center justify-center ">
      <IoHeartOutline size={100} className="text-red-500"/>
      <span>No hay favoritos</span>
    </div>
  )
}