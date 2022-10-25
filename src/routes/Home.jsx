import Header from "../component/Header/Header";
import { useEffect, useState } from "react";
import Card1 from "../component/Card1/Card1";
import Text from "../component/Text/Text";

function Home() {


 // const [pokemonList, setpokemonList] = useState([]);
  const [pokemonImage, setPokemonImage] = useState([]);
    const [pokemonName, setPokemonName] = useState([]);

  const fetchPokemons = async () => {
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=30`);
    const pokemons = await response.json();
    const res = pokemons.results;
    const listPoke = []
    for(var i=0 ; i<res.length ; i++){
      const response_2 = await fetch(`${res[i].url}`);
      const result = await response_2.json();
      listPoke.push(result);
    
    
      setPokemonImage(listPoke.sprites.front_default);
      setPokemonName(listPoke.name);
    }

    console.log(listPoke);
 
    

  }

  
  useEffect(() => {
    fetchPokemons();
  }, [])

  return (
    <>
    <Header />
    array.forEach(e =&gt; {
      <div>
        <Card1 image ={pokemonImage}></Card1>
        <Text children={pokemonName}></Text>
      </div>
    });
    </>
    
    
    
  );
}

export default Home;
