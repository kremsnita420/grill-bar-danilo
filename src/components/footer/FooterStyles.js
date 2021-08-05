import styled from 'styled-components'
import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'

export const FooterWrapper = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-top: 1rem;

	@media (min-width: 765px) {
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-around;
	}
`

export const FooterColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
`
export const FooterHeadings = styled.h3`
	text-transform: uppercase;
`
export const FooterParagraph = styled.p`
	padding: 0.5rem;
`

export const FooterParagraphRoute = styled(Link)`
	color: red;
	padding: 0.5rem;
`

export const IconsContainer = styled.div`
	display: flex;
	margin: 2rem 0 0;
`

export const FbIcon = styled(FacebookIcon)`
	display: block;
	top: 50%;
	left: 50%;
`
export const IgIcon = styled(InstagramIcon)`
	display: block;
	top: 50%;
	left: 50%;
`
export const YtIcon = styled(YouTubeIcon)`
	display: block;
	top: 50%;
	left: 50%;
`
