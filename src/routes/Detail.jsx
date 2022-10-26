import Header from "../component/Header/Header";
import { useEffect, useState } from "react";
import Card2 from "../component/Card2/Card2";
import Text from "../component/Text/Text";
import './detail.css';

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
    setPokemonType(pokemon.types.map(type =>({
        types : `${type.type.name}`,
    })));
    setPokemonAbilite(pokemon.abilites.map(abilite =>({
        abilites : `${abilite.ability.name}`,
    })));

  
  }
  useEffect(() => {
    fetchDetail();
  }, [])

  
  return (
    
      <>
      <Header/>
     
      <div>
               <Card2 image={pokemonImage} nom={pokemonName} type={pokemonType} abilite={pokemonAbilite} poids={pokemonPoids}></Card2>
            
             </div>  
      
    
      </>


    
   
    
    
   
    
  );

}
export default Detail;