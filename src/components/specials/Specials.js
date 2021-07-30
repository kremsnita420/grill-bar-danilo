import React from 'react'
import { ProductsContainer,
        ProductWrapper,
        ProductsHeading,
        ProductTitle,
        ProductCard,    
        ProductImg,
        ProductInfo,
        ProductDesc,
        ProductPrice,
        ProductButton, } from './SpecialsStyles'

export default function Specials({heading, data}) {


    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {data.map((product,index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>Click</ProductButton>
                            </ProductInfo>
                            
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}
