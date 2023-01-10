import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'; 

import "./styles.css";
const Footer = () => {
  return (
     <div className="footer-container">
      
    <div className='footer'>
      
        <div className="linkedin">
        <a href = "https://www.linkedin.com/in/godspower-felix-ogbudhu-642813162/">
        <FontAwesomeIcon icon = {faLinkedinIn} color = "#28A4D9" size="lg"/>
        </a>
        </div>
        <div className="github">
        <a href = "https://github.com/Godspower12">
        <FontAwesomeIcon icon = {faGithubAlt} color = "#fff" size="lg"/>
        </a>
        </div>
        <div className="twitter">
        <a href = "https://twitter.com/osirime_felix">
        <FontAwesomeIcon icon = {faTwitter} color = "#28A4D9" size="lg"/>
        </a>
        
        </div>

        
    </div>

    <div className="copyright">
    <p><FontAwesomeIcon icon = {faCopyright} color = "#28A4D9" size="sm"/>
            2023 Godspower Felix. All rights reserved</p>
        </div>
     </div>
  )
}

export default Footer