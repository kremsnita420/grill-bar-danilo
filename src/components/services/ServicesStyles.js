import styled from 'styled-components'

export const ServicesContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
`

export const ServiceCard = styled.div`
	width: 300px;
	display: flex;
	flex-direction: column;
	margin: auto;

	@media (min-width: 765px) {
		flex-direction: column;
		flex-wrap: wrap;
	}
`

export const ServicesTitle = styled.h1`
	letter-spacing: 3px;
	width: 100%;
	font-weight: 600;
	position: relative;
	font-size: 2rem;
	text-align: center;
	color: red;
	position: relative;

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

export const ServiceImg = styled.img`
	height: 70px;
	width: 70px;
	background-color: #fff;
	border-radius: 50%;
	padding: 0.5rem;
	margin: 0 auto;
`

export const ServiceInfo = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
`

export const ServiceTitle = styled.h2`
	margin: 0.5rem;
`

export const ServiceDescription = styled.p`
	font-size: 0.85rem;
`
