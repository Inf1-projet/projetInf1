import Text from "../component/Text/Text";
import { useEffect, useState } from "react";
import Image from "../component/Image/Image";
import Header from "../component/Header/Header";
  function Game() {
  
    const [pokemonImage, setPokemonImage] = useState([]);
    const [pokemonName, setPokemonName] = useState([]);
    const fetchPokemons = async () => {
      const randomNumber = Math.floor(Math.random() * 160);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
      const pokemonImage = await response.json();  
      setPokemonImage(pokemonImage.sprites.front_default);
      setPokemonName(pokemonImage.name);
  
    }
    
    useEffect(() => {
      fetchPokemons();
    }, [])
    
    return (
          <>
            <Header />
            <div>
            <Image taille="large" image={pokemonImage}/>
            <Text>{pokemonName}</Text>
            </div>
          </>
    );
    }
  
  export default Game;
  