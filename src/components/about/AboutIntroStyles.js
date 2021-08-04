import styled from 'styled-components';

import LeftColImg from '../../images/calamari-1.jpg'



export const Text = styled.h4`
`

export const AboutIntroWrapper = styled.div`
    width: 100vw;
    margin: 0;
    padding: 0;
    margin-top: 2rem;
    
`

export const About = styled.div`
    height: 100%;
    width: 100%;  
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    
`

export const LeftCol = styled.img`
    background: url(${LeftColImg});
    background-size: cover;
    background-position: center;
    height: 30vh;
    width: 100%;
`

export const RightCol = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    padding-bottom: 2rem;
    background: rgba(255,255,255, .3);
    text-align: center;
`

export const RightColContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    border: 1px solid;
    height: 100%;
    padding-top: 0;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
`

export const Title = styled.h1`
    letter-spacing: 3px;
    width: 100%;
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
    color: red;
    position: relative;
    margin-top: 0;
    &::before {
        position: absolute;
        top: 0%;
        left: 50%;
        transform: translate(-50%,-50%);
        content: 'Grill & Bar';
        font-family: 'Style Script', cursive;
        color: #fff;
        font-size: 1.5rem;
    }
`

export const Paragraph = styled.p`
    text-align: center;
    font-size: .95rem;
    width: 90%;
    margin: auto;
`
