import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
    text-align: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    place-content: center;
    width: 100%;
    max-width: 100%;

    form{
        margin: 80px 0;
        width: 340px;
        text-align: center;
        
        h1 {
            margin-bottom: 24px;
        }
        a{
            color: #F2CE1B;
            text-decoration: none;
            display: block;
            transition: color 0.2s;
            
            display:block;
            align-items: center;

            &:hover{
                color: #F2A922;
            }
        }
        #forgot{
            display: block;
            margin-top: 10px;
            margin-bottom: 50px;
        }        
    }
`;
