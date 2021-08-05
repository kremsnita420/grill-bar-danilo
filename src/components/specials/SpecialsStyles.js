import styled from 'styled-components'

export const ProductWrapper = styled.div`
	max-width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	margin-bottom: 2rem;

	@media (min-width: 765px) {
		justify-content: center;
		align-items: stretch;
	}
`

export const ProductCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	line-height: 1.6;
	width: 90vw;
	max-width: 300px;
	background: rgba(255, 255, 255, 0.3);
	padding: 1rem;
	margin: 1rem;
`

export const ProductImg = styled.img`
	width: 100%;
	max-height: 275px;
	object-fit: cover;
	box-shadow: 5px 5px #e31500;
`

export const ProductsHeading = styled.h1`
	position: relative;
	font-size: 2rem;
	text-align: center;
	color: red;
	margin-bottom: 2rem;

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

export const ProductTitle = styled.h2`
	font-weight: 500;
	font-size: 1.5rem;
	margin: 0;
`

export const ProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	text-align: center;
`

export const ProductDesc = styled.p``

export const ProductPrice = styled.p`
	font-size: 2rem;
	margin: 1rem;
`
