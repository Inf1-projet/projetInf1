import './style.css';

const Button = ({ 
    textButton,
    
    onCLick,
    type = "b-p3",
}) => {
    
    return (
            <button
            onClick={() => console.log("clique !")}
            className={`${type}`}
        >{textButton}
        </button>
        
    )
}

export default Button;