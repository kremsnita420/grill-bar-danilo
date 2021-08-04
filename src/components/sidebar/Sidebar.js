import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap,
 } from './SidebarStyles'



const Sidebar = ({ isOpen, toggle }) => {
    
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarMenu>
                <SidebarLink onClick={toggle} to="/">Home</SidebarLink>
                <SidebarLink onClick={toggle} to="/menu">Menu</SidebarLink>
                <SidebarLink onClick={toggle} to="/about">About</SidebarLink>
                <SidebarLink onClick={toggle} to="/contact">Contact</SidebarLink>
            </SidebarMenu>

            <SideBtnWrap>
                <SidebarRoute onClick={toggle} to='/contact'>Book a table</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer> 
    )
}

export default Sidebar


