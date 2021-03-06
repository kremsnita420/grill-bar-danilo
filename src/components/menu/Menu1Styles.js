import styled from 'styled-components'

export const SectionTitle = styled.h1`
	letter-spacing: 3px;
	font-weight: 600;
	font-size: 2rem;
	text-align: center;
	color: red;
	margin-top: 2rem;
	margin-bottom: 1rem;
`

export const MenuWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (min-width: 765px) {
		flex-direction: row;
		flex-wrap: wrap;
	}
`

export const MenuContainer = styled.div`
	width: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #fff;
	border-radius: 5px;
	margin: 1rem;
`

export const MenuImg = styled.img`
	background-color: white;
	width: 25%;
	height: 25%;
	object-fit: cover;
	border-radius: 50%;
	margin: 1rem;
	align-self: center;
`

export const MenuContent = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.5rem;
`

export const ContentHeading = styled.div`
	display: flex;
	justify-content: space-between;
`

export const ContentName = styled.h3`
	margin-right: 1rem;
`

export const ContentPrice = styled.h3`
	color: #e31500;
`

export const ContentDesc = styled.p`
	width: 90%;
`
