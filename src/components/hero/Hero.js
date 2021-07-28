import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import PizzaImg from '../../images/pizza-1.jpg'
import CalamariImg from '../../images/calamari-1.jpg'
import DessertImg from '../../images/dessert-1.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { CarouselContainer,
         CarouselItem,
         CarouselImg,
         CarouselLegend
} from '../hero/HeroStyles'

export default function Hero() {

    
    return (
        <CarouselContainer>
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>

                <CarouselItem>
                    <CarouselImg src={PizzaImg}/>
                    <CarouselLegend className="legend"> legend1</CarouselLegend>
                </CarouselItem>

                <CarouselItem>
                    <CarouselImg src={CalamariImg}/>
                    <CarouselLegend className="legend"> legend2</CarouselLegend>
                </CarouselItem>

                <CarouselItem>
                    <CarouselImg src={DessertImg}/>
                    <CarouselLegend className="legend"> legend3</CarouselLegend>
                </CarouselItem>
                
            </Carousel>
        </CarouselContainer>
    )
}
