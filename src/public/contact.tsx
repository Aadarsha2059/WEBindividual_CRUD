import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/contact.css';

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="contact-box">
      {/* <header>
        <h1>Book Donors Nepal</h1>
        <nav>
          <ul>
            <li><a onClick={() => navigate("/home")}>Home</a></li>
            <li><a onClick={() => navigate("/singupdonar")}>About Us</a></li>
            <li><a onClick={() => navigate("/signupseeker")}>Donate Books</a></li>
            
          </ul>
        </nav>
      </header> */}
      <main>
        <section className="contact">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <p><strong>Email:</strong> <a href="mailto:donorsnepal123456@gmail.com">donorsnepal123456@gmail.com</a></p>
            <p><strong>Post Box:</strong> 980098</p>
            <p><strong>WhatsApp Number:</strong> <a href="https://wa.me/98000000000" target="_blank" rel="noopener noreferrer">98000000000</a></p>
          </div>
        </section>
      </main>
      {/* <footer>
        <p>&copy; Website by Dhakal Aadarsha Babu.</p>
      </footer> */}
    </div>
  );
}

export default Contact;
