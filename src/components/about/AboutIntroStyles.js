import styled from 'styled-components'

import LeftColImg from '../../images/calamari-1.jpg'

export const Text = styled.h4``

export const About = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (min-width: 765px) {
		flex-direction: row;
		height: 80vh;
	}
`

export const LeftCol = styled.img`
	background: url(${LeftColImg});
	background-size: cover;
	background-position: center;
	height: 30vh;
	width: 115%;
	@media (min-width: 765px) {
		width: 60vw;
		height: 50vh;
		transform: translateX(10%) translateY(-5%);
	}
`

export const RightCol = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: rgba(255, 255, 255, 0.3);
	text-align: center;

	@media (min-width: 450px) {
		margin: 1rem;
	}

	@media (min-width: 765px) {
		width: 60vw;
		height: 70vh;
		padding-top: 1rem;
	}
`

export const RightColContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid;
	height: 100%;
	padding-bottom: 1rem;
	margin: 1rem;
`

export const Paragraph = styled.p`
	text-align: center;
	font-size: 0.95rem;
	width: 90%;
	padding: 2rem 0 3rem;

	@media (min-width: 765px) {
		max-width: 75%;
	}
`
