import React from 'react'

import { FooterWrapper, 
         FooterColumn, 
         FooterHeadings, 
         FooterParagraph, 
         FooterParagraphRoute,
         IconsContainer, 
         FbIcon,
         IgIcon
    } from './FooterStyles'
import { InfoContainerLink } from '../about/AboutMainStyles'

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterColumn>
                <FooterHeadings>Contact Info</FooterHeadings>
                <FooterParagraph>
                    Delicious Cafe, 1649 Norman Street,  Los Angeles, 90011
                </FooterParagraph>
                <FooterParagraph>
                    Working hours <br></br> Tuesday-Sunday  11:00-22:00 <br></br>
                                              Monday Closed
                </FooterParagraph>
                <InfoContainerLink href="mailto:insertemailhere@xyz.com">samplemail@email.com</InfoContainerLink>

                <IconsContainer>
                    <FooterParagraphRoute to='/contact'>
                        <FbIcon />
                    </FooterParagraphRoute>
                    <FooterParagraphRoute to='/contact'>
                        <IgIcon />
                    </FooterParagraphRoute>
                    <FooterParagraphRoute to='/contact'>
                        <FbIcon />
                    </FooterParagraphRoute>
                </IconsContainer>

                <FooterParagraph>
                    <InfoContainerLink href="tel:+38640123456" >+386 40 8677777</InfoContainerLink>
                </FooterParagraph>
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
