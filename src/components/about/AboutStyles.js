import styled from 'styled-components';

import LeftColImg from '../../images/calamari-1.jpg'

export const AboutIntroWrapper = styled.div`
    margin:   auto;
    width: 80vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem auto;
`

export const About = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;    
`

export const Title = styled.div`
    width: 100%;
    padding-top: 1rem;
    color: red;
    text-align: center;
    margin: 0;

    h1 {
        margin: .5rem;
    }

    &::before {
        content: 'Grill in Bar';
        font-family: 'Style Script', cursive;
        font-size: 1.5rem;
        border-bottom: double 4px #e31837;
    }
`

export const Paragraph = styled.div`
    text-align: left;
    font-size: clamp(1rem, 1vw, 1.5rem);
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
    padding: 0 0 2rem 0;
`

export const LeftCol = styled.div`
    background: url(${LeftColImg});
    background-size: cover;
    background-position: center;
    flex: 2;
    height: 60%;
    max-width: 100%;
    transform: translateX(10%);
    box-shadow: 5px 5px #e31500;;
`

export const RightColContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
    border: 1px solid;
    height: 100%;
`

export const RightCol = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    background-color: darkgray;
    flex: 3;
    height: 80vh;
`

