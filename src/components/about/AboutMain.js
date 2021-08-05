import React from 'react'
import {
	SectionWrapper,
	SectionImg,
	SectionText,
	SectionHeading,
	SectionParagraph,
	Grid,
	GridItem,
	CtaButtons,
	InfoWrapper,
	InfoContainer,
	InfoContainerImg,
	InfoContainerLink,
} from '../about/AboutMainStyles'
import { CarouselRoute, CarouselRouteInverted, Title } from '../../GlobalStyles'
import { FooterParagraphRoute } from '../footer/FooterStyles'

import LocationImg from '../../images/location-icon.png'
import PhoneImg from '../../images/phone-icon.png'
import MailImg from '../../images/mail-icon.png'
import ChatImg from '../../images/chat-icon.png'

export default function AboutMain({ data }) {
	return (
		<SectionWrapper>
			<Title>About</Title>
			<SectionImg />
			<SectionText>
				<SectionHeading>Made with love</SectionHeading>
				<SectionParagraph>
					Fish is one of the most wholesome foods that man can eat. In
					fact, people have been eating fish throughout human history.
					These days, many cooks yearn to add fish to their repertoire, but
					the whole process of cleaning and filleting. Fish is one of the
					most wholesome foods that man can eat. In fact, people have been
					eating fish throughout human history. These days, many cooks
					yearn to add fish to their repertoire, but the whole process of
					cleaning and filleting. Fish is one of the most wholesome foods
					that man can eat. In fact, people have been eating fish
					throughout human history. These days, many cooks yearn to add
					fish to their repertoire, but the whole process of cleaning and
					filleting
				</SectionParagraph>
				<Grid>
					{data.map((product, index) => {
						return <GridItem key={index} src={product.img} />
					})}
				</Grid>
				<CtaButtons>
					<CarouselRoute to='/contact'>Book a table</CarouselRoute>
					<CarouselRouteInverted to='/menu'>Menu</CarouselRouteInverted>
				</CtaButtons>

				<InfoWrapper>
					<InfoContainer>
						<InfoContainerImg src={PhoneImg} />
						<InfoContainerLink href='tel:+38640123456'>
							+386 40 8677777
						</InfoContainerLink>
					</InfoContainer>
					<InfoContainer>
						<InfoContainerImg src={ChatImg} />
						<FooterParagraphRoute to='/contact'>
							Contact
						</FooterParagraphRoute>
					</InfoContainer>
					<InfoContainer>
						<InfoContainerImg src={MailImg} />
						<InfoContainerLink href='mailto:insertemailhere@xyz.com'>
							insertemailhere@xyz.com
						</InfoContainerLink>
					</InfoContainer>
					<InfoContainer>
						<InfoContainerImg src={LocationImg} />
						<InfoContainerLink href='https://www.google.si/maps/place/Okrep%C4%8Devalnica+Grill+Danilo+Karmen+Primc+s.p./@45.5584934,14.2409155,17z/data=!4m5!3m4!1s0x4764b4bd94206663:0xb476c80191cfebba!8m2!3d45.5585006!4d14.2430724?hl=sl'>
							Delicious Cafe, 1649 Norman Street, Los Angeles, 90011
						</InfoContainerLink>
					</InfoContainer>
				</InfoWrapper>
			</SectionText>
		</SectionWrapper>
	)
}
