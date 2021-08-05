import React from 'react'
import { CarouselRouteInverted } from '../../GlobalStyles'
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
} from './SidebarStyles'

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>

			<SidebarMenu>
				<SidebarLink onClick={toggle} to='/'>
					Home
				</SidebarLink>
				<SidebarLink onClick={toggle} to='/menu'>
					Menu
				</SidebarLink>
				<SidebarLink onClick={toggle} to='/about'>
					About
				</SidebarLink>
				<SidebarLink onClick={toggle} to='/contact'>
					Contact
				</SidebarLink>
			</SidebarMenu>

			<SideBtnWrap>
				<CarouselRouteInverted onClick={toggle} to='/contact'>
					Book a table
				</CarouselRouteInverted>
			</SideBtnWrap>
		</SidebarContainer>
	)
}

export default Sidebar
