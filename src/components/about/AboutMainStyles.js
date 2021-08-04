import styled from "styled-components";
import PizzaImg from '../../images/Pizzza.jpg'

export const SectionWrapper = styled.div`
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:auto;
    text-align: center;
`

export const SectionImg = styled.img`
    height: 30vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-image: url(${PizzaImg});
`

export const SectionText = styled.div`
    display: flex;
    flex-direction: column;

`

export const SectionHeading = styled.h2`
    margin: 1rem 0;
`

export const SectionParagraph = styled.p`
    margin: 0;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: .5rem;
    margin: 2rem 0;
`

export const GridItem = styled.img`
    width: 45vw;
    background: #fff;
    background-size: cover;
    background-position: center;
`

export const CtaButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 4rem auto;
`

export const InfoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #fff;
    margin-bottom: 1rem;
    padding: 1rem;
`

export const InfoContainerImg = styled.img`
    width: 50%;
    height: 50%;
`

export const InfoContainerText = styled.p`
    padding: 1rem;
`

export const InfoContainerLink = styled.a`
    color:red;
    padding: .5rem;
`
