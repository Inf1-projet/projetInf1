import Title from "../component/Title/Title"
import { useEffect, useState } from "react";
import Image from "../component/Image/Image";
import Header from "../component/Header/Header";
import './game.css'
import Layout from "../component/Layout/Layout";
import Text from "../component/Text/Text";

  function Game() {
  
    const [pokemonImage, setPokemonImage] = useState([]);
    const [pokemonName, setPokemonName] = useState([]);
    const [input, setInput] = useState([]);

    const [score, setScore] = useState(0);;
    
    const pokemonNameSubmited = function (e) {
      console.log(input);
      if(input.toLowerCase() === pokemonName){
        score = score + 1;
      }
      console.log(score);
      e.preventDefault();

    }

    

    const fetchPokemons = async () => {
      const randomNumber = Math.floor(Math.random() * 160);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
      const pokemon = await response.json();  
      setPokemonImage(pokemon.sprites.front_default);
      setPokemonName(pokemon.name);
  
    }

 
    useEffect(() => {
      fetchPokemons();
    }, [])
    
    return (
          <>
            <Header />
            <div className="body">
              <div className="top-body">
              <Title children="Who's that Pokemon !" size="large"></Title>
              <Text children={score} className="score"></Text>
              </div>
              <div className="pokemon">
                <form onSubmit={pokemonNameSubmited}>
                <Image taille="large" image={pokemonImage}/>
                <Text children={pokemonName}></Text>
                <Layout buttonName="Submit"   labelInput="Guess the pokemon" value={input} onChange={(e) => setInput(e.target.value)}></Layout>
                </form>
              </div>
            </div>
          </>
    );
    }
  
  export default Game;