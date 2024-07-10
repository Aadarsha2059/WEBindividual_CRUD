import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBox, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/contact.css';

function Contact() {
  return (
    <div className="contact-box">
      <section className="contact">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> <strong>Email:</strong> <a href="mailto:donorsnepal123456@gmail.com">donorsnepal123456@gmail.com</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faBox} /> <strong>Post Box:</strong> 980098
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> <strong>Phone:</strong> 98000000000
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
