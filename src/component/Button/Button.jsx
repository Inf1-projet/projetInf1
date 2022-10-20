import React, { useState } from 'react';
import './style.css';

const Button = ({ 
    text = 'Button',
    
    onCLick,
    type = "b-p3",
}) => {
    
    return (
            <button
            onClick={() => console.log("clique !")}
            className={`${type}`}
        >{text}
        </button>
        
    )
}

export default Button;