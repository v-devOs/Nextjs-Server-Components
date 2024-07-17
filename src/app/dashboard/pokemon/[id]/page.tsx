import { Pokemon } from "@/pokemons";
import { Metadata } from 'next';

interface Props{
  params: { id: string }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {

  const { id, name } = await getPokemon(params.id)

  return {
    title: `#${id} - ${name}`,
    description: `Pagina del pokemon ${name}`
  }
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const pokemon: Pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache' // TODO: Cambiar esto en un futuro
  })
  .then( resp => resp.json())

  return pokemon;
}

export default async function PokemonPage( {params}: Props) {

  const pokemon = await getPokemon(params.id)

  return (
    <div>
      <h1>Pokemon {params.id}</h1>
    </div>
  );
}

