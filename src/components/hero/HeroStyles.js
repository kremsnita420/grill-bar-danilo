import styled from 'styled-components';

export const CarouselContainer = styled.div`
    height: calc(100vh - 80px);
`


export const CarouselItem = styled.div`
    width: 100%;
    height: calc(100vh - 80px);

    
`

export const CarouselImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
`

export const CarouselLegend = styled.div`
    position: absolute;
    width: 400px;
    bottom: 25%;
    left: 100px;
    background: rgba(0,0,0, .7);
    color: #eee;
    padding: 2rem;

    font-size: 2rem;

    
`



