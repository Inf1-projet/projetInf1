import Image from '../Image/Image';
import './styleCard1.css';

const Card1 = ({
    image
}) => {
    return (

        <section class="card1">
            <Image taille="small" image={image}></Image>
        </section>
    )
}

export default Card1;