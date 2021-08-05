import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
        width: 100vw;
        padding: 0;
        margin: 0 auto;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        line-height: 1.6;
        background: #000;
        color: #fff;
        box-sizing: border-box;
        overflow-x: hidden;
    }
`

//Typography

export const Title = styled.h1`
	letter-spacing: 3px;
	width: 100%;
	font-weight: 600;
	font-size: 2rem;
	text-align: center;
	color: red;
	position: relative;
	margin-top: 1rem;
	&::before {
		position: absolute;
		top: 0%;
		left: 50%;
		transform: translate(-50%, -50%);
		content: 'Grill & Bar';
		font-family: 'Style Script', cursive;
		color: #fff;
		font-size: 1.5rem;
	}
`
//Sections

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 90vw;
	max-width: 1000px;
	margin: 0 auto;
`
// Buttons

export const CarouselRoute = styled(Link)`
	background-color: #fff;
	color: #000;
	padding: 1rem;
	outline: none;
	border-radius: 0.5rem;
	cursor: pointer;
	transition: 0.4s ease-in-out;
	text-decoration: none;
	text-transform: uppercase;
	text-align: center;
	font-weight: 600;
	letter-spacing: 1px;
	margin-bottom: 2rem;
	width: 200px;
	border: 2px transparent solid;

	&:hover {
		background: transparent;
		color: #fff;
		border: 2px solid white;
	}

	@media (min-width: 765px) {
		margin-bottom: unset;
		margin-right: 1rem;
	}
`

export const CarouselRouteInverted = styled(Link)`
	background: #e31500;
	padding: 1rem;
	color: #fff;
	outline: none;
	border: none;
	border-radius: 0.5rem;
	cursor: pointer;
	transition: 0.4s ease-in-out;
	text-decoration: none;
	text-transform: uppercase;
	text-align: center;
	font-weight: 600;
	letter-spacing: 1px;
	width: 200px;
	border: 2px transparent solid;

	&:hover {
		background: transparent;
		color: #e31500;
		border: 2px solid #e31500;
	}

	@media (min-width: 765px) {
		margin-left: 1rem;
	}
`

export const Button = styled.button`
	background: #e31500;
	padding: 1rem 1.5rem;
	color: #fff;
	outline: none;
	border: none;
	border-radius: 0.5rem;
	cursor: pointer;
	transition: 0.4s ease-in-out;
	text-decoration: none;
	text-transform: uppercase;
	text-align: center;
	font-weight: 600;
	letter-spacing: 2px;
	width: 220px;
	border: 2px transparent solid;
	align-self: center;

	&:hover {
		background: transparent;
		color: #e31500;
		border: 2px solid #e31500;
	}
`
