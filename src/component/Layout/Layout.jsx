import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './style.css';

const Layout =({
    showResponseText,
    showResponseButton,
    submitButtonText,
    resetButtonText,
    resetButton,
    labelInput,
    value,
    onChange,
    
}) =>{

    const[clicked, onClick] = useState(false);

    return (
        <>
        <div className='layout'>
        <Button disabled={clicked} textButton={showResponseText} onClick={showResponseButton} buttonType="button"></Button>
        <Input placeholder={labelInput} value={value} onChange={onChange}></Input>
        <Button disabled={clicked} textButton={submitButtonText} ></Button>
        <Button disabled={clicked} textButton={resetButtonText} onClick={resetButton}></Button>
        </div>
        </>
    );
}

export default Layout;

