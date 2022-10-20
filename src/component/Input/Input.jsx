import React from 'react';
import './style.css'

const Input = ({
 placeholder = "Entrez un pays",
    
}) => {

    return (
        <input type="text" name="country" id='country' className='input' placeholder= {placeholder}>  
            </input>
           
    )
}
export default Input;