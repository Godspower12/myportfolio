
import home1 from '../img/me.jpg';
import {About, Description, Image, Hide} from "../style"
import {Link} from 'react-router-dom';
import styled from "styled-components";
// framer motion 
import  {motion} from 'framer-motion';
import {titleAnim, fade, photoAnim} from "./Animation";
import Wave from '../components/Wave';
function AboutSection() {
    
    return (
        <Abt>
            <Description>
                <motion.div>
                    <Hd>
                    <motion.h3 variants={fade}><span >&lt;h1&gt;</span></motion.h3>
                        <motion.h2 variants={titleAnim}>Hi, I am</motion.h2>
                    </Hd>
                     <Hd>
                     <motion.h2 variants={titleAnim} 
                     ><span> Godspower Felix </span>
                     </motion.h2>
                     <motion.h3 variants={fade}><span className = "top-tag">&lt;/h1&gt;</span></motion.h3>
                    </Hd>
                     <Hd>
                     <motion.h2 variants={titleAnim} 
                        ></motion.h2>
                    </Hd>
                </motion.div>
                <motion.h4 variants={fade}> UI/UX Designer and frontend web developer</motion.h4>
               <Btn>
               <Link to ='/contactMe'><motion.button variants={fade}>Contact Me</motion.button></Link>
                <Link to ='/cv'><motion.button variants={fade}>CV</motion.button></Link>
               </Btn>
            </Description>
            <Img>
                <motion.img variants={photoAnim} src={home1} alt="power" />
            </Img>
            <Wave/>
        </Abt>
    )
}

// // styled component
const Abt = styled(About)`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: white;

h4 {
    color: white;
    font-size: 2rem
}
@media (max-width: 425px){
    display: flex;
    flex-direction: column;
`;

const Img = styled(Image)`
flex- 1;
overflow: hidden;
img {
   width: 100%;
   height:90vh;
   object-fit: cover;

   @media screen and (max-width: 425px){
  width: 100%;
  height:50%; 
  border: 1px solid;
  border-radius: 20%; 
}
}
`;
const Hd = styled(Hide)`
 overflow: hidden;
`
const Btn = styled(motion.div)`
 display: flex;
justify-content: space-evenly;
 button{
 border-radius: 10px;
 margin-right: 20px
  
 @media screen and (max-width: 425px){
       font-size: 10px; 
       justify-content: space-between;  
}
 @media screen and (max-width: 375px){
       font-size: 10px; 
       margin-left: 10px;  
}
}
`

export default AboutSection
 
