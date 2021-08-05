import React from 'react'

import {
	MenuContainer,
	MenuImg,
	MenuContent,
	ContentHeading,
	ContentName,
	ContentPrice,
	ContentDesc,
	MenuWrapper,
} from './Menu1Styles'

export default function Menu1({ data }) {
	return (
		<MenuWrapper>
			{data.map((product, index) => {
				return (
					<MenuContainer key={index}>
						<MenuImg src={product.img} />
						<MenuContent>
							<ContentHeading>
								<ContentName>{product.name}</ContentName>
								<ContentPrice>{product.price}</ContentPrice>
							</ContentHeading>
							<ContentDesc>{product.desc}</ContentDesc>
						</MenuContent>
					</MenuContainer>
				)
			})}
		</MenuWrapper>
	)
}
