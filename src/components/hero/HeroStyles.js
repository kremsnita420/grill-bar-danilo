import styled from 'styled-components';

export const CarouselContainer = styled.div`
    height: calc(100vh - 80px);
`


export const CarouselItem = styled.div`
    width: 100%;
    height: calc(100vh - 80px);

    
`

export const CarouselImg = styled.img`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    
`

export const CarouselLegend = styled.div`
    position: absolute;
    max-width: 400px;
    max-height: 200px;
    bottom: 40%;
    left: 40%;
    background: rgba(0,0,0, .7);
    color: #eee;
    padding: 2rem;

    font-size: 2rem;

    
`



