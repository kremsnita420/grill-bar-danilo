import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'

export const Nav = styled.nav`
	position: relative;
	background-color: rgb(0, 0, 0, 1);
	height: 80px;
	display: flex;
	justify-content: flex-start;
	font-weight: 700;

	@media (min-width: 765px) {
		height: 110px;
	}
`

export const NavLink = styled(Link)`
	font-family: 'Style Script', cursive;
	font-weight: 400;
	letter-spacing: 3px;
	background-color: rgb(0, 0, 0, 1);
	top: 0.5rem;
	left: 0.5rem;
	position: absolute;
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	cursor: pointer;
	z-index: 3;
	text-align: center;
	display: block;

	@media (min-width: 765px) {
		font-size: 1.25rem;
	}

	span {
		display: block;
		font-size: 2rem;
		font-family: 'Vast Shadow', cursive;
		color: #e31837;
		line-height: 1;

		@media (min-width: 765px) {
			font-size: 4rem;
		}
	}
`

export const NavIcon = styled.div`
	position: absolute;
	z-index: 100;
	top: 50%;
	right: 0;
	cursor: pointer;
	color: #fff;

	&:hover {
		color: #e31837;
	}
`

export const Bars = styled(MenuIcon)`
	font-size: 2rem !important;
	top: 50%;
	right: 50%;
	transform: translate(-50%, -50%);
	margin-right: 0.5rem;

	@media (min-width: 765px) {
		font-size: 3rem !important;
	}
`
