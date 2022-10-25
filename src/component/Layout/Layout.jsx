import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './style.css';

const Layout =({
    buttonName,
    labelInput,
    value,
    onChange
}) =>{

    const[clicked, onClick] = useState(false);

    return (
        <>
        <div className='layout'>
        <Input placeholder={labelInput} value={value} onChange={onChange}></Input>
        <Button disabled={clicked} textButton={buttonName}></Button>
        </div>
        </>
    );
}

export default Layout;

