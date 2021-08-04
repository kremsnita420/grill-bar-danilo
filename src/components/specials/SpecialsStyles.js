import styled from 'styled-components';

export const ProductsContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
`;

export const ProductWrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  
`;

export const ProductCard = styled.div`
  margin: 1rem auto;
  line-height: 2;
  width: 90vw;
  background: rgba(255,255,255, .3);
  padding: 1rem;
`;

export const ProductImg = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  box-shadow: 5px 5px #e31500;
`;

export const ProductsHeading = styled.h1`
position: relative;
  font-size: 2rem;
  text-align: center;
  color: red;
  margin-bottom: 2rem;

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
 
`;

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
  margin: 0;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
  margin-top: .5rem;
`;

export const ProductButton = styled.button`
  width: 100%;
  font-size: 1rem;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  border: 2px solid transparent;

  &:hover {
        background: transparent;
        color: #e31500;
        border: 2px solid #e31500;
  }
`;