import React from 'react'
import './ContactStyles'
import {
	SectionTitle,
	SectionText,
	Label,
	Input,
	Form,
	Textarea,
	RightCol,
	LeftCol,
	ContactWrapper,
} from '../contact/ContactStyles'
import emailjs from 'emailjs-com'

import { Button } from '../../GlobalStyles'

function sendEmail(e) {
	e.preventDefault()

	emailjs
		.sendForm(
			'service_q7mgzib',
			'template_nev001k',
			e.target,
			'user_E9AtReBeYQcKTiY7iOkvV'
		)
		.then(
			(result) => {
				console.log(result.text)
			},
			(error) => {
				console.log(error.text)
			}
		)
	e.target.reset()
}

export default function ContactForm() {
	return (
		<ContactWrapper id='contact'>
			<LeftCol>
				<SectionTitle>Contact Form</SectionTitle>
				<SectionText>
					Fill the contact form and <br />
					send me a message.
				</SectionText>
			</LeftCol>
			<RightCol>
				<Form onSubmit={sendEmail}>
					<Label>Subject</Label>
					<Input type='text' name='subject' />
					<Label>Name</Label>
					<Input type='text' name='user_name' />
					<Label>Email</Label>
					<Input type='email' name='user_email' />
					<Label>Message</Label>
					<Textarea name='message' />
					<Button type='submit' value='Send'>
						Send
					</Button>
				</Form>
			</RightCol>
		</ContactWrapper>
	)
}
