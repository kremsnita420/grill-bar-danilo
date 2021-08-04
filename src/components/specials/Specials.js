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
         } from './SpecialsStyles'
import { CarouselRouteInverted } from '../hero/HeroStyles'

export default function Specials({data}) {


    return (
        <ProductsContainer>
            <ProductsHeading>Specialities</ProductsHeading>
            <ProductWrapper>
                {data.map((product,index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <CarouselRouteInverted to='/menu'>Menu</CarouselRouteInverted>
                            </ProductInfo>
                            
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}
