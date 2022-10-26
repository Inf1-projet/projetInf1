import './style.css';

const Button = ({ 
    textButton,
    onClick,
    buttonType,
    type = "b-p3",
}) => {
    
    return (
            <button
            type={buttonType}
            onClick={onClick}
            className={`${type}`}
        >{textButton}
        </button>
        
    )
}

export default Button;