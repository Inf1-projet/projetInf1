import Header from "../../component/Header/Header";
import { useEffect, useState } from "react";
import Card2 from "../../component/Card2/Card2";
import { useParams } from "react-router-dom";
import Footer from "../../component/Footer/Footer";
import './detail.css';
import { useNavigate } from "react-router-dom";



function Detail() {

  const navigate = useNavigate();

  const params = useParams();

  console.log(params);

    const [pokemonImage, setPokemonImage] = useState([]);
    const [pokemonName, setPokemonName] = useState([]);
    const [pokemonType, setPokemonType] = useState([]);
    const [pokemonPoids, setPokemonPoids] = useState([]);
    const [pokemonTaille, setPokemonTaille] = useState([]);

    const [pokemonAbilite, setPokemonAbilite] = useState([]);

    let typePoke = [];
    let abilitesPoke = [];

  const fetchDetail = async () => {
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    const pokemon = await response.json();

    setPokemonImage(pokemon.sprites.front_default);
    setPokemonName(pokemon.name);
    setPokemonTaille(pokemon.height);
    setPokemonPoids(pokemon.weight);

    console.log(pokemon);
    typePoke=pokemon.types.map((index)=>({
      type : `${index.type.name}`
     }) );
    setPokemonType(typePoke);

    abilitesPoke=pokemon.abilities.map(index => ({
      ability : `${index.ability.name}`
    }));
    setPokemonAbilite(abilitesPoke);
  }
  useEffect(() => {
    fetchDetail();
  }, [])

  
  return (
    
      <>
      <Header/>
     
      <div>
        
          <Card2
           image={pokemonImage} 
          nom={pokemonName} 
          taille={"taille : " + pokemonTaille} 
          type={"type(s) : "+`${ pokemonType.map((pokemon) => {
                              return (` ${pokemon.type}`);})}`}

          abilite={"Abilitée(s) : "+`${ pokemonAbilite.map((pokemon) => {
            return (` ${pokemon.ability}`);})}`}
          poids= {"poids : " + pokemonPoids}>
            </Card2>      
      </div>  


      <Footer link="https://pokeapi.co" name="Link to the Pokemon API" onClick={() => navigate("/")}></Footer>    
      </>


    
   
    
    
   
    
  );

}
export default Detail;
