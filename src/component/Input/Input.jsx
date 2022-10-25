import React from 'react';
import './style.css'

const Input = ({
 placeholder = "Entrez un pokemon !",
 onChange,
 value
    
}) => {

    return (
        <input type="text" className='input' placeholder= {placeholder} onChange={onChange} value={value}>  
            </input>
           
    )
}
export default Input;