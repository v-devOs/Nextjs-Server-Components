import { Pokemon } from "@/pokemons";


interface Props{
  params: { id: string }
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

