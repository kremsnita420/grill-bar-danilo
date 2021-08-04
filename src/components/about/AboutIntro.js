import React from "react";
import {
  AboutIntroWrapper,
  About,
  Title,
  Paragraph,
  LeftCol,
  RightCol,
  RightColContainer,
} from "./AboutIntroStyles";
import { CarouselRoute } from '../hero/HeroStyles'

export default function AboutIntro() {
  return (
    <AboutIntroWrapper>
      <Title>Predstavitev</Title>
      <About>
        <LeftCol />

        <RightCol>
          <RightColContainer>
            <Paragraph>
              Aenean et tortor at risus viverra adipiscing at. Mattis rhoncus
              urna neque viverra justo nec ultrices dui. Amet consectetur
              adipiscing elit pellentesque habitant. Eget magna fermentum
              iaculis eu non diam phasellus Aenean et tortor at risus viverra
              adipiscing at. Mattis rhoncus urna neque viverra justo nec
              ultrices dui. Amet consectetur adipiscing. Aenean et tortor at
              risus viverra adipiscing at. Mattis rhoncus urna neque viverra
              justo nec ultrices dui. Amet consectetur adipiscing.
              
            </Paragraph>
            
          </RightColContainer>
          <CarouselRoute to="/about">Read More</CarouselRoute>
        </RightCol>
        
      </About>
    </AboutIntroWrapper>
  );
}
