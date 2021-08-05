import React from 'react'

import {
	FooterWrapper,
	FooterColumn,
	FooterHeadings,
	FooterParagraph,
	FooterParagraphRoute,
	IconsContainer,
	FbIcon,
	IgIcon,
	YtIcon,
} from './FooterStyles'
import { InfoContainerLink } from '../about/AboutMainStyles'

export default function Footer() {
	return (
		<FooterWrapper>
			<FooterColumn>
				<FooterHeadings>Contact Info</FooterHeadings>
				<InfoContainerLink href='https://www.google.si/maps/place/Okrep%C4%8Devalnica+Grill+Danilo+Karmen+Primc+s.p./@45.5584934,14.2409155,17z/data=!4m5!3m4!1s0x4764b4bd94206663:0xb476c80191cfebba!8m2!3d45.5585006!4d14.2430724?hl=sl'>
					Delicious Cafe <br /> 1649 Norman Street
					<br /> Los Angeles, 90011
				</InfoContainerLink>
				<InfoContainerLink href='mailto:insertemailhere@xyz.com'>
					samplemail@email.com
				</InfoContainerLink>

				<FooterParagraph>
					<InfoContainerLink href='tel:+38640123456'>
						+386 40 8677777
					</InfoContainerLink>
				</FooterParagraph>
			</FooterColumn>

			<FooterColumn>
				<FooterHeadings>Working Hours</FooterHeadings>
				<FooterParagraph>
					Working hours <br /> Tuesday-Sunday 11:00-22:00 <br />
					Monday Closed
				</FooterParagraph>
				<IconsContainer>
					<InfoContainerLink href='https://www.google.si'>
						<FbIcon />
					</InfoContainerLink>
					<InfoContainerLink href='https://www.google.si'>
						<IgIcon />
					</InfoContainerLink>
					<InfoContainerLink href='https://www.google.si'>
						<YtIcon />
					</InfoContainerLink>
				</IconsContainer>
			</FooterColumn>

			<FooterColumn>
				<FooterHeadings>Navigation</FooterHeadings>
				<FooterParagraphRoute to='/'>Home</FooterParagraphRoute>
				<FooterParagraphRoute to='/menu'>Menu</FooterParagraphRoute>
				<FooterParagraphRoute to='/about'>About</FooterParagraphRoute>
				<FooterParagraphRoute to='/contact'>Contact</FooterParagraphRoute>
			</FooterColumn>
		</FooterWrapper>
	)
}
