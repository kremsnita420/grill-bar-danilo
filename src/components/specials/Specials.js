import React from 'react'
import {
	ProductWrapper,
	ProductTitle,
	ProductCard,
	ProductImg,
	ProductInfo,
	ProductDesc,
	ProductPrice,
} from './SpecialsStyles'
import { CarouselRouteInverted, Section, Title } from '../../GlobalStyles'

export default function Specials({ data }) {
	return (
		<Section>
			<Title>Specialities</Title>
			<ProductWrapper>
				{data.map((product, index) => {
					return (
						<ProductCard key={index}>
							<ProductImg src={product.img} alt={product.alt} />
							<ProductInfo>
								<ProductTitle>{product.name}</ProductTitle>
								<ProductDesc>{product.desc}</ProductDesc>
								<ProductPrice>{product.price}</ProductPrice>
								<CarouselRouteInverted to='/menu'>
									Menu
								</CarouselRouteInverted>
							</ProductInfo>
						</ProductCard>
					)
				})}
			</ProductWrapper>
		</Section>
	)
}
