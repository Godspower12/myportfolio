import {motion} from 'framer-motion';
import { pageAnimation, titleAnim } from "../components/Animation";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'

const ContactMe = () => {
    return (
        <ContactStyle
        exit = "exit" variants={pageAnimation} 
        initial = "hidden" animate = "show"
        style = {{background: '#fff'}}
        >
           
            <Contact>
            <SocialMsg>
            <Title>
               <Hide>
                 <motion.h1 variants= {titleAnim}>Get in touch</motion.h1>  
                   </Hide> 
            </Title>
                <Hide>
                <Social variants = {titleAnim}>
                <FontAwesomeIcon icon = {faEnvelope} color = "red" size="lg" />
                   <h3>ogbudhugodspower@gmail.com</h3>
                </Social>
                </Hide>
          <Hide>
            <Social variants = {titleAnim}>
            <FontAwesomeIcon icon = {faPhone} color = "black" size="lg" />
                   <h2>+2348062122835</h2>
            </Social>
            </Hide>
               <Hide>
                <Social variants = {titleAnim}>
                <FontAwesomeIcon icon = {faLocationDot} color = "black" size="lg" />
                   <h2>Abuja, Nigeria</h2>
              </Social>
              </Hide>
            </SocialMsg>
           
            </Contact>
        </ContactStyle>
    ) 

    }

const ContactStyle = styled(motion.div)`
padding: 5rem 10rem;
color: #353535;
min-height: 90vh;
`;
const Title = styled.div`
margin-bottom: 4rem;

h1 {
  color: #23d997;
}
`;

const SocialMsg = styled.div`

h2 {
  font-size: 3rem;
  display: flex;
  align-items: center;
  margin-left: 5px;
}
h1 {
  font-size: 4rem;
}
`;
const Contact = styled.div`
display:flex;
justify-content: space-between;
width: 100%;


@media screen and (max-width: 425px){
  display: flex;
  flex-direction: column;
  
}
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
display: flex;
align-items: center;
margin-bottom: 20px;
h3 {
  font-size: 2rem;
  color: #353535;
  margin-left: 5px;
 }
`;

export default ContactMe;