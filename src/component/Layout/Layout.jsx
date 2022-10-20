import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './style.css';

const Layout =({
    textButton,
    labelInput
}) =>{

    const[clicked, onChange] = useState(false);


    return (
        <>
        <div className='layout'>
        <Input placeholder={labelInput}></Input>
        <Button disabled={clicked} >{textButton}</Button>
        </div>
        </>
    );
}

export default Layout;

