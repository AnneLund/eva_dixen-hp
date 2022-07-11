import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
    <form ref={form} onSubmit={sendEmail}>
        <h3>Send mig en besked via nedenstående formular:</h3>
      <label>Navn</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Besked</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;