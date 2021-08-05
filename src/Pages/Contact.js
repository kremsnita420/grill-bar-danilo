import React, { useEffect } from 'react'
import ContactForm from '../components/contact/ContactForm'
import { Section } from '../GlobalStyles'
import { Title } from '../GlobalStyles'
import { ContactWrapper } from '../components/contact/ContactStyles'

export default function Contact() {
	// scroll to top on page change
	useEffect(() => {
		window.scroll(0, 0)
	}, [])

	return (
		<Section>
			<Title>Contact</Title>
			<ContactWrapper>
				<ContactForm />
			</ContactWrapper>

			<iframe
				title='Intentionally blank'
				frameBorder='0'
				style={{
					width: '115%',
					height: '500px',
					border: '0',
					allowFullScreen: '',
					loading: 'lazy',
				}}
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.5939424856974!2d14.24091551576917!3d45.55849343516732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4764b4bd94206663%3A0xb476c80191cfebba!2sOkrep%C4%8Devalnica%20Grill%20Danilo%20Karmen%20Primc%20s.p.!5e0!3m2!1ssl!2ssi!4v1627980448781!5m2!1ssl!2ssi'
			></iframe>
		</Section>
	)
}
