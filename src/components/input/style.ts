import styled, { css } from 'styled-components';

import Tooltip from '../tooltip';

interface ContainerProps{
    isFocused: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
            
            border-radius: 10px;
            border: 2px solid #73612C;
            padding: 5px 10px;
            width: 100%;

            display: flex;
            align-items: center;

            & + div{
                margin-top: 8px;    
            } 
            ${props => props.isErrored && css`
                border-color: red;
            `};
            ${props => props.isFocused && css`
                color:black;
                background: #F2CE1B;
                border-color: #F2CE1B;
            `};
            
            
        input{
            flex: 1;
            border: 0;
            background: transparent;
            color: white;
            
            

            &:focus{
                color:black;
                background: #F2CE1B;
            }
        }

        svg{
            margin-right: 5px;
        }

`;

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;
    svg{
        margin: 0;
    }

    span{
        background: red;
        color:white;

        &::before{
            border-color: red transparent;
        }
    }
`;