import styled from 'styled-components';
import WoodImg from '../../images/wood-pattern1.jpg'
import StarIcon from '@material-ui/icons/Star';

export const BannerWrapper = styled.div`
    background-color: black;
    background: url(${WoodImg});
    width: 100vw;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3rem auto;
`

export const BannerContainer = styled.div`
width: 80vw;
    display: flex;
   
   height: 100%;
   object-fit: cover;
`

export const BannerLeftCol = styled.div`
    flex: 1;
`

export const BannerLeftColImg = styled.img`
    width: 100%;
    height:100%;
    object-fit: cover;
    border-radius: 50%;
    border:3px solid #e31500;
`

export const BannerRightCol = styled.div`
flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

export const BannerRightColHeading = styled.h1`
    text-align: center;
`

export const BannerRightColParagraph = styled.p`
    text-align: center;
    width: 60%;
`
export const BannerRightColStarsContainer = styled.div`
    display: flex;
`

export const BannerRightColStars = styled(StarIcon)`
color: goldenrod;
  display: flex;
  justify-content: center;
  align-items: center;
`;
