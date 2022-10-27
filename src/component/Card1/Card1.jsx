import Image from '../Image/Image';
import './styleCard1.css';

const Card1 = ({
    image,
    onClick
}) => {
    return (

        <section className="card1" onClick={onClick}>
            <Image taille="small" image={image}></Image>
        </section>
    )
}

export default Card1;