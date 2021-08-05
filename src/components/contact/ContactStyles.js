import styled from 'styled-components'

export const ContactWrapper = styled.div`
	width: 90vw;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	margin-bottom: 2rem;

	@media (min-width: 765px) {
		flex-direction: row;
	}
`

export const RightCol = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
`

export const LeftCol = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;

	@media (min-width: 765px) {
		transform: translateY(-50%);
	}
`

export const SectionTitle = styled.h2``

export const SectionText = styled.p`
	margin: 1rem 0 2rem;
`

export const Label = styled.label`
	padding: 0.25rem;
`

export const Input = styled.input`
	width: 100%;
	height: 2rem;
`

export const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`

export const Textarea = styled.textarea`
	min-width: 100%;
	min-height: 10rem;
	margin-bottom: 1rem;
`
