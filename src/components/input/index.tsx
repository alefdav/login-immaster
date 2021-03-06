import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container, Error } from './style';
import { FiAlertCircle } from 'react-icons/fi';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest}) => {
    const inputRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const{fieldName, error, registerField} = useField(name);
    
    useEffect( () => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    }, [fieldName, registerField]);

    return(
    <Container isErrored={!!error} isFocused ={isFocused}>
    {Icon && <Icon size={20}/>}
    <input
     onFocus={() => setIsFocused(true)} 
     onBlur={() => setIsFocused(false)} 
     ref={inputRef} 
     { ...rest}
     />
      {error && 
        <Error title={error}>
        <FiAlertCircle color= "red" size={20}/>
        </Error>}
    </Container>
    );
};

export default Input;