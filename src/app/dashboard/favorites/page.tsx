
import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { notFound } from "next/navigation";

export const metadata = {
  title: 'Favoritos',
  description: 'Pagina de pokemons favoritos'

}


export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Pokemons favoritos<small className="text-blue-500">Global state</small></span>

      <PokemonGrid pokemons={[]}/>
      
    </div>
  );
}