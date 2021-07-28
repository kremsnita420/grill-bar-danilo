import React, {useEffect} from 'react'

export default function Desserts() {
    // scroll to top on page change
    useEffect(() => {
        window.scroll(0,0)
    }, [])

    return (
        <h1>
            Desserts
        </h1>
    )
}
