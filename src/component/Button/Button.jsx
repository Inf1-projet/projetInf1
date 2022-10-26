import './style.css';

const Button = ({ 
    textButton,
    
    onCLick,
    type = "b-p3",
}) => {
    
    return (
            <button
            onClick={onCLick}
            className={`${type}`}
        >{textButton}
        </button>
        
    )
}

export default Button;