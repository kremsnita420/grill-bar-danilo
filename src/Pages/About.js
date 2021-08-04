import React, {useEffect} from 'react'
import AboutMain from '../components/about/AboutMain'
import { LunchData } from '../ProductsData'


export default function About( {data} ) {
    // scroll to top on page change
    useEffect(() => {
        window.scroll(0,0)
    }, [])

    return (
        <AboutMain data={LunchData} />
    )
}
