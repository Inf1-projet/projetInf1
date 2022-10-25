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

    const [score, setScore] = useState(0);;
    

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
            <div className="body">
              <div className="top-body">
              <Title children="Who's that Pokemon !" size="large"></Title>
              <Text children={score} className="score"></Text>
              </div>
              <div className="pokemon">
                <Image taille="large" image={pokemonImage}/>
                <Layout textButton="Submit" labelInput="Guess the pokemon"></Layout>
              </div>
            </div>
          </>
    );
    }
  
  export default Game;
  