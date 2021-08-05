import React from 'react'
import './ServicesStyles'
import {
	ServicesContainer,
	ServiceCard,
	ServiceImg,
	ServiceInfo,
	ServiceTitle,
	ServiceDescription,
} from './ServicesStyles'
import { Section, Title } from '../../GlobalStyles'

export default function Services({ data }) {
	return (
		<Section>
			<Title>Services</Title>
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
					)
				})}
			</ServicesContainer>
		</Section>
	)
}
