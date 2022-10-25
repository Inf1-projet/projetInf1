import { useEffect } from "react";
function Game() {
  
  const fetchPokemons = async () => {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/2`);
    const pokemons = await response.json();

    console.log(pokemons);

  }
  
  useEffect(() => {
    fetchPokemons();
  }, [])
  
  return (
    <h1>title</h1>
  );
  }

export default Game;
