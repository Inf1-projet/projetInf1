import React from 'react';
import './style.css'

const Input = ({
 placeholder = "Entrez un pokemon !",
 onChange,
 value,
 id,
 name
    
}) => {

    return (
        <input type="text" className='input' id={id} name={id} placeholder= {placeholder} onChange={onChange} value={value}>  
            </input>
           
    )
}
export default Input;