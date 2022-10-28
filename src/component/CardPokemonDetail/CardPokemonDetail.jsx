import Image from '../Image/Image';
import Text from '../Text/Text';
import Title from '../Title/Title';
import './styleCardPokemonDetail.css';

const CardPokemonDetail = ({
    image,
    nom = 'pikachu',
    type = 'electrique', //ici on mettre une liste car on peu avoir plusieurs types
    taille,  //
    poids,
    abilite

}) => {
    return (

        <div className='container'>
            <div className="CardPokemonDetail">
                <div className="top-container">
                    <Title children={nom} size="medium"></Title>
                </div>
                <Image taille="detail-img" image={image}></Image>
                <div className="bottom-container">
                    <Text children={type}></Text>
                    <Text children={abilite}></Text>
                    <Text children={poids}></Text>
                    <Text children={taille}></Text>

                </div>


            </div>
        </div>
    )
}

export default CardPokemonDetail;