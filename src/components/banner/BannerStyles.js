import styled from 'styled-components'
import WoodImg from '../../images/wood-pattern1.jpg'
import StarIcon from '@material-ui/icons/Star'

export const BannerWrapper = styled.div`
	background-color: black;
	background: url(${WoodImg});
	width: 100vw;
	padding: 2rem 0;
	margin: 3rem auto;
`

export const BannerContainer = styled.div`
	max-width: 100%;
	display: flex;
	flex-direction: column;
	height: 100%;
	max-width: 100%;
	object-fit: cover;

	@media (min-width: 756px) {
		flex-direction: row;
	}
`

export const BannerLeftCol = styled.div`
	max-width: 90%;
	margin: 1rem auto 0;

	@media (min-width: 756px) {
		width: 40vw;
		height: 30vw;
		margin: auto;
		transform: translateX(20%);
	}
`

export const BannerLeftColImg = styled.img`
	max-width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 50%;
	border: 3px solid #e31500;
`

export const BannerRightCol = styled.div`
	flex: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const BannerRightColHeading = styled.h1`
	text-align: center;
`

export const BannerRightColParagraph = styled.p`
	text-align: center;
	width: 50%;
	margin-bottom: 2rem;
`
export const BannerRightColStarsContainer = styled.div`
	display: flex;
`

export const BannerRightColStars = styled(StarIcon)`
	color: goldenrod;
	display: flex;
	justify-content: center;
	align-items: center;
`
