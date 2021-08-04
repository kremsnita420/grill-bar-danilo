import React from 'react'
import { Nav, NavLink, NavIcon, Bars } from './NavbarStyle'

export default function Navbar({toggle}) {
    return (
        <>
            <Nav>
                <NavLink to='/' exact>-Grill & Bar- <span>Danilo</span></NavLink>
                <NavIcon onClick={toggle} >
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}
