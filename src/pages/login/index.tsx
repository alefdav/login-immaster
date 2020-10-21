import React, { useRef, useCallback} from 'react';

import { FiMail, FiLock} from 'react-icons/fi';
import {FormHandles} from '@unform/core';
import {Form} from '@unform/web';
import * as Yup from 'yup';


import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Content} from '../login/style';

interface SignInFormData{
    email: string;
    password: string;
}

const SingIn: React.FC = () =>{
    const formRef = useRef<FormHandles>(null);


   const handleSubmit = useCallback(async (data: SignInFormData) =>{
    try{
        formRef.current?.setErrors({ });

        const schema = Yup.object().shape({
            user: Yup.string().email('Digite um email válido').required('Campo Email obrigatório'),
            password: Yup.string().min(4, 'No mínimo 4 dígitos'),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

    } catch (err){
        if(err instanceof Yup.ValidationError){
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
        }
        
    }
   }, []);   


    return(
    <Container>
        <Content>
            <Form ref={formRef} onSubmit= {handleSubmit}> 
                <h1>LOGIN</h1>
                <Input name="user" icon={FiMail} placeholder="Usuário"/>
                <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
                
                <Button type="submit">Acessar</Button>
            </Form>
                
        </Content>
        
    </Container>
);
}

export default SingIn; 