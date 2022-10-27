import Header from "../component/Header/Header";
import { useEffect, useState } from "react";
import Card1 from "../component/Card1/Card1";
import Text from "../component/Text/Text";
import './home.css';
import { Link, redirect } from "react-router-dom";
import Button from "../component/Button/Button";

function Home() {


 const [pokemonList, setpokemonList] = useState([]);

  const pokemonImage= [];
    const pokemonName = [];
    let listPokemon = [];

  const fetchPokemons = async () => {
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=40`);
    const pokemons = await response.json();
    const res = pokemons.results;
    const listPoke = []
    for(var i=0 ; i<res.length ; i++){
      const response_2 = await fetch(`${res[i].url}`);
      const result = await response_2.json();

      listPoke.push(result);
   
      pokemonName.push(listPoke[i].name);
      pokemonImage.push(listPoke[i].sprites.front_default);
      
    }
    

   console.log(listPoke);
 // console.log(pokemonName);
 //   console.log(pokemonImage);

     listPokemon = listPoke.map((poke) => (
      {
      nom : `${poke.name}`,
      image : `${poke.sprites.front_default}`,
      id : `${poke.id}`,
    })) ;

    setpokemonList(listPokemon);
  
  }

 
  useEffect(() => {
    fetchPokemons();
  }, [])

  
  return (
      <>
      <Header/>
      <div class="main-div" >


        {pokemonList.length > 0 && pokemonList.map((pokemon,index) => {
          return (
               <div key={index}>
                <Card1 image={pokemon.image} ></Card1>
                <Text children={pokemon.nom} hidden="false"></Text>
                <Link to={`/detail/${pokemon.id}`}>Here</Link>
              </div>     
          );
        })}
          </div>
      </>
  );
}

export default Home;
