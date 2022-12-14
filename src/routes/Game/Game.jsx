import Title from "../../component/Title/Title"
import { useEffect, useState } from "react";
import Image from "../../component/Image/Image";
import Header from "../../component/Header/Header";
import './game.css'
import Layout from "../../component/Layout/Layout";
import Text from "../../component/Text/Text";
import { reactLocalStorage } from 'reactjs-localstorage';
import Button from "../../component/Button/Button";

function resetScore() {
  reactLocalStorage.set("score", 0);
  document.location.reload(true);
}

function showResponse() {
  document.getElementById("pokemonName").style.display = "block";
  document.getElementById("input").disabled = true;
  document.getElementById("input").placeholder = "FF15, go Next";
}

function Game() {

  const [pokemonImage, setPokemonImage] = useState([]);
  const [pokemonName, setPokemonName] = useState([]);
  const [input, setInput] = useState([]);
  const [score, setScore] = useState(reactLocalStorage.get("score"));

  const pokemonNameSubmited = function (e) {

    if (input === pokemonName) {
      const temp = reactLocalStorage.get("score");
        if (document.getElementById("input").disabled !== true) {
          reactLocalStorage.set("score", Number(temp) + 1);
          setScore(reactLocalStorage.get("score"));
        }
    }
    input.reset();
    setInput();
    fetchPokemons();
    e.preventDefault();

  }

  const fetchPokemons = async () => {
    const randomNumber = Math.floor(Math.random() * 150);
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
          <Title children="Who's that Pokemon ?" size="large"></Title>
          <Text children={score} className="score" hidden="none"></Text>
        </div>
        <div className="pokemon">
          <form onSubmit={pokemonNameSubmited}>
            <Image taille="large" image={pokemonImage} />
            <Text children={pokemonName} id="pokemonName" classText="hidden"></Text>
            <Layout
              showResponseText="Show"
              showResponseButton={() => showResponse()}
              submitButtonText="Submit"
              labelInput="Guess the pokemon"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              id="input"
            >
            </Layout>
            <Button textButton="Reset" onClick={() => resetScore()} type="reset-button"></Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Game;