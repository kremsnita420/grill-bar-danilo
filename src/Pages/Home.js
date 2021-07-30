import React, { useEffect } from 'react'
import AboutIntro from '../components/about/AboutIntro'
import Hero from '../components/hero/Hero'
import Specials from '../components/specials/Specials'
import Banner from '../components/banner/Banner'
import {ProductDataTwo} from '../ProductsData'


export default function Home() {
    // scroll to top on page change
    useEffect(() => {
        window.scroll(0,0)
    }, [])

    return (
        <>
            <Hero />
            <AboutIntro />
            <Specials heading='Choose your favorite' data={ProductDataTwo} />
            <Banner />
        </>
    )
}
