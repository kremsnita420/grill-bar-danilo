import React from 'react'
import { Nav, NavLink, NavIcon, Bars } from './NavbarStyle'

export default function Navbar({toggle}) {
    return (
        <>
            <Nav>
                <NavLink to='/' exact>Pizza</NavLink>
                <NavIcon onClick={toggle} >
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}
