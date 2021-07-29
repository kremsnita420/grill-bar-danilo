import React, { useEffect } from 'react'
import AboutIntro from '../components/about/AboutIntro'
import Hero from '../components/hero/Hero'
import Specials from '../components/specials/Specials'

import sweet1 from '../../src/images/sweet3.jpg';
import sweet2 from '../../src/images/sweet-2.jpg';
import sweet3 from '../../src/images/sweet-3.jpg';

export default function Home() {
    // scroll to top on page change
    useEffect(() => {
        window.scroll(0,0)
    }, [])

    const productDataTwo = [
        {
          img: sweet2,
          alt: 'Donuts',
          name: 'Doughlicious',
          desc:
            'Belgian chocolate glazed donuts covered in icing with sprinkles on top',
          price: '$9.99',
          button: 'Add to Cart'
        },
        {
          img: sweet3,
          alt: 'Ice Cream',
          name: 'Caramel Wonder',
          desc:
            'Vanilla ice cream covered with caramel and chocolate glaze topped with a coco',
          price: '$12.99',
          button: 'Add to Cart'
        },
        {
          img: sweet1,
          alt: 'Brownie',
          name: 'Brownie Bunch',
          desc:
            'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
          price: '$9.99',
          button: 'Add to Cart'
        }
        
      ];

    return (
        <>
            <Hero />
            <AboutIntro />
            <Specials heading='Choose your favorite' data={productDataTwo} />
        </>
    )
}
