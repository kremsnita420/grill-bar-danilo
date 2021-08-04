import React from "react";
import "./ServicesStyles";
import {
  ServicesContainer,
  ServicesWrapper,
  ServiceCard,
  ServicesTitle,
  ServiceImg,
  ServiceInfo,
  ServiceTitle,
  ServiceDescription,
} from "./ServicesStyles";

export default function Services({ data }) {
  return (
    <ServicesWrapper>
      <ServicesTitle>Services</ServicesTitle>
      <ServicesContainer>
        
        {data.map((product, index) => {
          return (
            <ServiceCard key={index}>
              <ServiceImg src={product.img} alt={product.alt} />
              <ServiceInfo>
                <ServiceTitle>{product.alt}</ServiceTitle>
                <ServiceDescription>{product.desc}</ServiceDescription>
              </ServiceInfo>
            </ServiceCard>
          );
        })}
      </ServicesContainer>
    </ServicesWrapper>
  );
}
