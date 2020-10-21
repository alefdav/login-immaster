import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    span{
        width: 220px;
        height: 50px;
        background: #161C40;
        padding: 8px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        opacity: 0;
        transition: opacity 0.4s;
        visibility: hidden;
        white-space:nowrap;

        position: absolute;
        bottom: calc(100% + 12px);
        left:50%;
        transform: translateX(-50%);

        &::before{
            content: '';
            border-style: solid;
            border-color: #F2CE1B transparent;
            border-width: 6px 6px 0 6px;
            top:100%;
            position: absolute;
            left:50%;
            transform: translateX(-50%);
            
        }
         
    }
    &:hover span{
            opacity: 1;
            visibility: visible;
        }  
    @media(max-width: 800px){
            span{
            bottom: calc(100% + 12px);
            right: 90%;
            transform: translateX(-90%);
            
            &::before{
            content: '';
            border-style: solid;
            border-color: #F2CE1B transparent;
            border-width: 6px 6px 0 6px;
            top:100%;
            position: absolute;
            left:90%;
            transform: translateX(-50%);
            }
        }
        

    &:hover span{
            opacity: 1;
            visibility: visible;
        }
    }
`;