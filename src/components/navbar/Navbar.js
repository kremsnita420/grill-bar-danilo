import React from 'react'
import { Nav, NavLink, NavIcon, Bars, Fork } from './NavbarStyle'

export default function Navbar({toggle}) {
    return (
        <>
            <Nav>
                <NavLink to='/' exact><Fork />Grill Bar <span>Danilo</span></NavLink>
                <NavIcon onClick={toggle} >
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}
