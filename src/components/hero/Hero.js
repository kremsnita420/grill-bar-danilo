import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import RestaurantImg from '../../images/restaurant-outside.JPG'
import CalamariImg from '../../images/calamari-1.jpg'
import PizzaImg from '../../images/pizza-1.jpg'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

import {
	CarouselContainer,
	CarouselItem,
	CarouselImg,
	CarouselLegend,
	CarouselRoutes,
	Heading,
	Paragraph,
	CarouselLegendText,
} from '../hero/HeroStyles'

import { CarouselRoute, CarouselRouteInverted } from '../../GlobalStyles'

export default function Hero() {
	return (
		<CarouselContainer>
			<Carousel
				autoPlay={true}
				interval={5000}
				infiniteLoop={true}
				showThumbs={false}
			>
				<CarouselItem>
					<CarouselImg src={RestaurantImg} />
					<CarouselLegend>
						<CarouselLegendText>
							<Heading>Welcome</Heading>
							<Paragraph>The best food experience around</Paragraph>
							<CarouselRoutes>
								<CarouselRoute to='/contact'>
									Book a table
								</CarouselRoute>
								<CarouselRouteInverted to='/menu'>
									Menu
								</CarouselRouteInverted>
							</CarouselRoutes>
						</CarouselLegendText>
					</CarouselLegend>
				</CarouselItem>

				<CarouselItem>
					<CarouselImg src={CalamariImg} />
					<CarouselLegend>
						<CarouselLegendText>
							<Heading>Welcome</Heading>
							<Paragraph>Excellent Calamari</Paragraph>
							<CarouselRoutes>
								<CarouselRoute to='/contact'>
									Book a table
								</CarouselRoute>
								<CarouselRouteInverted to='/menu'>
									Menu
								</CarouselRouteInverted>
							</CarouselRoutes>
						</CarouselLegendText>
					</CarouselLegend>
				</CarouselItem>

				<CarouselItem>
					<CarouselImg src={PizzaImg} />
					<CarouselLegend>
						<CarouselLegendText>
							<Heading>Welcome</Heading>
							<Paragraph>The best pizza around</Paragraph>
							<CarouselRoutes>
								<CarouselRoute to='/contact'>
									Book a table
								</CarouselRoute>
								<CarouselRouteInverted to='/menu'>
									Menu
								</CarouselRouteInverted>
							</CarouselRoutes>
						</CarouselLegendText>
					</CarouselLegend>
				</CarouselItem>
			</Carousel>
		</CarouselContainer>
	)
}
