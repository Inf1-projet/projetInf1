import Image from '../Image/Image';
import Text from '../Text/Text';
import Title from '../Title/Title';
import './styleCard2.css';

const Card2 = ({
    image,
    nom='pikachu',
    type='electrique', //ici on mettre une liste car on peu avoir plusieurs types
    abilite='tonerre',  //ici aussi
    poids= '10'

}) => {
    return (

        <div className='container'>
        <div className="card2">
            <div className="top-container">
                <Title children={nom} size="medium"></Title>
                <Text children={poids}></Text>
            </div>
            
            <Image taille="large" image={image}></Image>
            <div className="bottom-container">
                <Text children={type}></Text>
                <Text children={abilite}></Text>
            </div>
            
           
        </div>
        </div>
    )
}

export default Card2;