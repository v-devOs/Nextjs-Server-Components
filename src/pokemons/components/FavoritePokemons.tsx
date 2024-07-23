'use client';
import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid"
import { SimplePokemon } from "../interfaces/simple-pokemon";

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
  const pokemons = getPokemons(pokemonsState)
  
  return (
    <>
      <PokemonGrid pokemons={pokemons}/>
    </>
  )
}
