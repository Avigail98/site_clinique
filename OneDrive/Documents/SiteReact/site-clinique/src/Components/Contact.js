import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css' 

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l09gvys', 'template_16m3hyn', form.current, 'YKtBVIqoeaRoWSWHM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  <div><br></br><br></br><br></br>
    <h1>Contact Us</h1><br></br>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input required type="text" name="user_name" />
      <label >Email</label>
      <input required type="email" name="user_email" />
      <label>Message</label>
      <textarea required name="message" /><br></br><br></br><br></br>
      <input type="submit" value="Send" />
    </form>
    
    </div>
  );
}
 
export default Contact;


