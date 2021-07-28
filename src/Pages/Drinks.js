import React, {useEffect} from 'react'

export default function Drinks() {
    // scroll to top on page change
    useEffect(() => {
        window.scroll(0,0)
    }, [])

    return (
        <h1>
            Drinks
        </h1>
    )
}
