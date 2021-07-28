import React, { useEffect } from 'react'
import Hero from '../components/hero/Hero'

export default function Home() {
    // scroll to top on page change
    useEffect(() => {
        window.scroll(0,0)
    }, [])

    return (
        <Hero />
    )
}
