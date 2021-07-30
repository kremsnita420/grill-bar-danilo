import styled from 'styled-components';

export const ProductsContainer = styled.div`
  width: 80vw;
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
  margin: 2rem;
  line-height: 2;
  width: 300px;
  
`;

export const ProductImg = styled.img`
  height: 300px;
  width: 300px;
  max-width: 100%;
  box-shadow: 5px 5px #e31500;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
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

  &:hover {
    background: #fff;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;