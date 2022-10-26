import Header from "../component/Header/Header";
import { useEffect, useState } from "react";
import Card1 from "../component/Card1/Card1";
import Text from "../component/Text/Text";
import './home.css';

function Detail() {



    const [pokemonImage, setPokemonImage] = useState([]);
    const [pokemonName, setPokemonName] = useState([]);
    const [pokemonType, setPokemonType] = useState([]);
    const [pokemonPoids, setPokemonPoids] = useState([]);
    const [pokemonAbilite, setPokemonAbilite] = useState([]);

  const fetchDetail = async () => {
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json();

    setPokemonImage(pokemon.sprites.front_default);
    setPokemonName(pokemon.name);
    setPokemonPoids(pokemon.weight);
    setPokemonType(pokemon.types);
    setPokemonAbilite(pokemon.abilites  )
  }
 
  useEffect(() => {
    fetchDetail();
  }, [])

  
  return (
    
      <>
      <Header/>
     

      
    
      </>


    
   
    
    
   
    
  );

}
export default Detail;
