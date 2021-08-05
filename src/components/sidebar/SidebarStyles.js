import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation'

export const SidebarContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 350px;
	height: 100%;
	background: rgb(0, 0, 0);
	display: grid;
	align-items: center;
	top: 0;
	transition: 0.6s ease-in-out;
	right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

	@media screen and (max-width: 400px) {
		width: 100%;
	}
`

export const CloseIcon = styled(CancelPresentationIcon)`
	font-size: 2rem !important;
	color: #fff;
	display: block;
	&:hover {
		color: #e31500;
	}
`

export const Icon = styled.div`
	position: absolute;
	top: 1.75rem;
	right: 1.5rem;
	background: transparent;
	border: transparent;

	cursor: pointer;
	outline: none;
`

export const SidebarMenu = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(3, 80px);
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(3, 60px);
	}
`

export const SidebarLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	color: #fff;
	cursor: pointer;

	&:hover {
		color: #e31500;
		transition: 0.2s ease-in-out;
	}
`

export const SideBtnWrap = styled.div`
	display: flex;
	justify-content: center;
`
