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
                <SidebarLink onClick={toggle} to="/desserts">Desserts</SidebarLink>
                <SidebarLink onClick={toggle} to="/drinks">Drinks</SidebarLink>
            </SidebarMenu>

            <SideBtnWrap>
                <SidebarRoute to='/profile'>Book a table</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer> 
    )
}

export default Sidebar


