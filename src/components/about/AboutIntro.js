import React from 'react'
import {
	About,
	Paragraph,
	LeftCol,
	RightCol,
	RightColContainer,
} from './AboutIntroStyles'
import { Section, Title } from '../../GlobalStyles'
import { CarouselRoute } from '../../GlobalStyles'

export default function AboutIntro() {
	return (
		<Section>
			<Title>Predstavitev</Title>
			<About>
				<LeftCol />

				<RightCol>
					<RightColContainer>
						<Paragraph>
							Aenean et tortor at risus viverra adipiscing at. Mattis
							rhoncus urna neque viverra justo nec ultrices dui. Amet
							consectetur adipiscing elit pellentesque habitant. Eget
							magna fermentum iaculis eu non diam phasellus Aenean et
							tortor at risus viverra adipiscing at. Mattis rhoncus urna
							neque viverra justo nec ultrices dui. Amet consectetur
							adipiscing. Aenean et tortor at risus viverra adipiscing
							at. Mattis rhoncus urna neque viverra justo nec ultrices
							dui. Amet consectetur adipiscing.
						</Paragraph>
					</RightColContainer>
					<CarouselRoute
						style={{ transform: 'translateY(-40px)' }}
						to='/about'
					>
						Read More
					</CarouselRoute>
				</RightCol>
			</About>
		</Section>
	)
}
