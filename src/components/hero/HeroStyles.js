import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CarouselContainer = styled.div`
    height: calc(100vh - 80px);
    width: 100vw;
    
`


export const CarouselItem = styled.div`
margin: 0;
    padding: 0;
    width: 100vw;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: -1rem;
`

export const CarouselImg = styled.img`
    height: calc(100vh - 80px);
    object-fit: cover;
    width: 100vw;
`

export const CarouselLegend = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 102%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0, .7);
    color: #eee;
    padding: 1rem;
`

export const CarouselRoutes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 4rem;

    @media (min-width: 765px) {
        flex-direction: row;
    }
`

export const CarouselRoute = styled(Link)`
    background-color: #fff;
    color: #000;
    padding: 1rem 1.5rem;
    outline: none;
    border-radius: .5rem;
    cursor: pointer;
    transition: 0.4s ease-in-out;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 2rem;
    width: 220px;
    border: 2px transparent solid;

    &:hover {
        background: transparent;
        color: #fff;
        border: 2px solid white;
  }

  @media (min-width: 765px) {
        margin-bottom: unset;
        margin-right: 1rem;
    }
`

export const CarouselRouteInverted = styled(Link)`
    background: #e31500;
    padding: 1rem 1.5rem;
    color: #fff;
    outline: none;
    border: none;
    border-radius: .5rem;
    cursor: pointer;
    transition: 0.4s ease-in-out;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    width: 220px;
    border: 2px transparent solid;

    &:hover {
        background: transparent;
        color: #e31500;
        border: 2px solid #e31500;
  }

  @media (min-width: 765px) {
        
        margin-left: 1rem;
    }
`

export const CarouselLegendText = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const Heading = styled.h1`
    position: relative;
    font-size: 3.5rem;
    text-transform: uppercase;
    margin-bottom: 0;

    &::after {
        position: absolute;
        content: '-Grill & Bar-';
        font-family: 'Style Script', cursive;
        font-size: 1.5rem;
        color: #e31500;
        letter-spacing: 5px;
        text-transform: capitalize;
        width: 100%;
        top: -2rem;
        left: 0;

        @media (min-width: 765px) {
        font-size: 2rem;
    }
    }

    @media (min-width: 765px) {
        font-size: 6rem;
    }
`

export const Paragraph = styled.p`
    font-size: 1.5rem;
    margin: -5rem 0 0 0;

    @media (min-width: 765px) {
        font-size: 2.5rem;
    }
`



