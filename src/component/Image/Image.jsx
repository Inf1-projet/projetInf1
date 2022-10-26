import './styleImage.css';

const Image = ({
    taille = "small" || "medium" || "large",
    image
}) => {
    return (

        <img src={image} className={taille} alt="image">
        
        </img>
    )
}

export default Image;