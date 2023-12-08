import React from 'react';
import '../styles/Footer.css';

function Footer() { //a footer functional component 
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-x-twitter"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-linkedin"></i>
        </div>
        <p> &copy; 2023 sdtech.com</p>
    </div>
  );
}

export default Footer;