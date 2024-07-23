import React from 'react';
import Header from './Header';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      <h2>Contact Us</h2>
      <ContactForm />
    </div>
  );
};

export default Contact;
