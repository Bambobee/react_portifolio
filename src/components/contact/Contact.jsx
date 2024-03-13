import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineMailOutline } from "react-icons/md";
import { LiaFacebookMessenger } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa6";
import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

    emailjs
      .sendForm('service_0z6vuqf', 'template_y1u2c5a', form.current, {
        publicKey: 'rqrF8_jwz8QelGIrm',
      })
      .then(
        () => {
          alert('Email sent successfuly');
          e.target.reset()
        },
        (error) => {
          alert('Email failed...', error.text);
        },
      );
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ssewankamboderick@gmail.com</h5>
            <a href="mailto:ssewankamboderick@gmail.com" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <LiaFacebookMessenger className="contact__option-icon" />
            <h4>Messager</h4>
            <h5>Derick Rick</h5>
            <a href="https://m.me/" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+256 754532031</h5>
            <a href="https://api.whatsapp.com/send?phone=+256754532031" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        {/* END of Contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <input type="text" name='subject' placeholder='Your Subject' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <input className='btn btn-primary' type="submit" value="Send" />
        
        </form>
      </div>
    </section>
  )
}

export default Contact;
