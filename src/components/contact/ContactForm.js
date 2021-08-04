import React from "react";
import "./ContactStyles";
import {
  Section,
  SectionTitle,
  SectionText,
  Label,
  Input,
  Form,
  Textarea,
  Button,
} from "../contact/ContactStyles";
import emailjs from 'emailjs-com';

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_q7mgzib', 'template_nev001k', e.target, 'user_E9AtReBeYQcKTiY7iOkvV')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}

export default function ContactForm() {
  return (
    <Section id="contact">
      <SectionTitle>Contact</SectionTitle>
      <SectionText>
        Fill the contact form and <br />
        send me a message.
      </SectionText>
      <Form onSubmit={sendEmail}>
        <Label>Subject</Label>
        <Input type="text" name="subject" />
        <Label>Name</Label>
        <Input type="text" name="user_name" />
        <Label>Email</Label>
        <Input type="email" name="user_email" />
        <Label>Message</Label>
        <Textarea name="message" />
        <Button type="submit" value="Send">
          Send
        </Button>
      </Form>
    </Section>
  );
}
