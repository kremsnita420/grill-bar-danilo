import React from "react";
import {
  SectionWrapper,
  MenuContainer,
  MenuImg,
  MenuContent,
  ContentHeading,
  ContentName,
  ContentPrice,
  ContentDesc
} from "./Menu1Styles";

export default function Menu1({ data }) {
  return (
    <>
      {data.map((product, index) => {
        return (
          <SectionWrapper key={index}>
            <MenuContainer >
              <MenuImg src={product.img} />
              <MenuContent>
                <ContentHeading>
                  <ContentName>{product.name}</ContentName>
                  <ContentPrice>{product.price}</ContentPrice>
                </ContentHeading>
                <ContentDesc>{product.desc}</ContentDesc>
              </MenuContent>
            </MenuContainer>
            
            
          </SectionWrapper>
        );
      })}
    </>
  );
}
