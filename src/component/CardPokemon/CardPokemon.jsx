import Image from '../Image/Image';
import './styleCardPokemon.css';

const CardPokemon = ({
    image,
    onClick
}) => {
    return (

        <section className="cardPokemon" onClick={onClick}>
            <Image taille="small" image={image}></Image>
        </section>
    )
}

export default CardPokemon;