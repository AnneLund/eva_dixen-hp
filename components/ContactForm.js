import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/Home.module.scss'

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs.sendForm('service_7bbxv1w', 'template_3t3i0eb', form.current, '3fkWKlIXOTJ-6HhgN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    alert("Din besked blev sendt")
  };

  return (
    <section>
    <h3>Send mig en besked via nedenstående formular:</h3>
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="first">Navn</label>
      <input type="text" id="first" name="user_first" required />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="user_email" required />

      <label htmlFor="text">Besked</label>
      <textarea name="message" required/>

      <button type="submit" id="submit" name="submit"value="Send">Send</button>
    </form>
    </section>
  );
};

export default ContactUs;