import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = (props) => (
  <div id="about-sidebar">
    <a href="https://github.com/AlanDai/SlapCloud"><FontAwesomeIcon icon={faGithub} /></a>
    <a href="https://www.linkedin.com/in/alanxudai/"><FontAwesomeIcon icon={faLinkedin} /></a>
  </div>
)

export default About;