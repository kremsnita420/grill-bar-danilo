import React from 'react'
import { BannerWrapper, BannerContainer, BannerLeftCol, BannerLeftColImg, BannerRightCol, BannerRightColHeading, BannerRightColParagraph, BannerRightColStars, BannerRightColStarsContainer } from './BannerStyles'
import PizzaImg from '../../images/product-1.jpg'


export default function Banner() {
    return (
        <BannerWrapper>
            <BannerContainer>
                <BannerLeftCol>
                    <BannerLeftColImg src={PizzaImg} />
                </BannerLeftCol>
                
                <BannerRightCol>
                    <BannerRightColStarsContainer>
                        <BannerRightColStars style={{ fontSize: "2rem" }}  />
                        <BannerRightColStars style={{ fontSize: "3rem" }} />
                        <BannerRightColStars style={{ fontSize: "4rem" }} />
                        <BannerRightColStars style={{ fontSize: "3rem" }}  />
                        <BannerRightColStars style={{ fontSize: "2rem" }}  />
                    </BannerRightColStarsContainer>
                    
                    <BannerRightColHeading>Delicious Pizza <br></br>from <br></br> Stone Oven</BannerRightColHeading>
                    <BannerRightColParagraph>
                        lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor 
                      lorem ipsum dolorlorem ipsum dolorlorem ipsum dolor
                    </BannerRightColParagraph>
                </BannerRightCol>
            </BannerContainer>
        </BannerWrapper>
    )
}
