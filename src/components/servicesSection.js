import React from 'react'
import {About, Description, Hide} from "../style"
import styled from "styled-components";
import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';
import {scrollReveal} from '../components/Animation'
import {useScroll} from './useScroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import "./spinner.css";

const ServicesSection = () => {
  const [element, control] = useScroll();
  
  return (
    
     <Services variants={scrollReveal} animate = {control} initial = 'hidden' ref={element}> 
         <Desc>
            <h2>My <span>Skills</span></h2> 
             <Cards>
                 <Card>
                     <div className="icon">
                     <FontAwesomeIcon icon = {faHtml5} color = "#F06529" size="lg" spin/>
                    <h3>HTML5</h3>
                     </div>
                  
                 </Card>
                 <Card>
                     <div className="icon">
                     <FontAwesomeIcon icon = {faCss3} color = "#28A4D9" size="lg" spin/>
                   <h3>CSS</h3>
                     </div>
                     
                 </Card>
                 <Card>
                     <div className="icon">
                     <FontAwesomeIcon icon = {faJsSquare} color = "#EFD81D" size="lg" spin/>
                   <h3>JAVASCRIPT</h3>
                     </div>
                 </Card>
                 <Card>
                     <div className="icon">
                     <FontAwesomeIcon icon = {faReact} color = "#5ED4F4" size="lg" spin/>
                   <h3>React/Angular/vue</h3>
                     </div>
                 </Card>
                
             </Cards>
             </Desc>
             <Div>

                <div className="stage-cube-cont">
                  <div className="cubespinner">
                    <div className="face1">
                      <FontAwesomeIcon icon = {faAngular} color = "#DD0031"/>
                    </div>
                    <div className="face2">
                      <FontAwesomeIcon icon = {faHtml5} color = "#F06529"/>
                    </div>
                    <div className="face3">
                      <FontAwesomeIcon icon = {faCss3} color = "#28A4D9"/>
                    </div>
                    <div className="face4">
                      <FontAwesomeIcon icon = {faReact} color = "#5ED4F4"/>
                    </div>
                    <div className="face5">
                      <FontAwesomeIcon icon = {faJsSquare} color = "#EFD81D"/>
                    </div>
                    <div className="face6">
                      <FontAwesomeIcon icon = {faGitAlt} color = "#EC4D28"/>
                    </div>
                    
                  </div>
                </div>
             </Div>
             </Services> 
    )
}


const Services = styled(About)`
h2 {
  padding-bottom : 5rem; 
}

p {
  width : 70%;
padding: 2rem 0rem 4rem 0rem
}

@media (max-width: 425px){
  display: flex;
  flex-direction: column;
`;
const Desc = styled.div`
width: 50%

`;


const Cards = styled.div`
display: flex;
 flex-wrap: wrap;
 @media (max-width: 800px){
        justify-content: center;
        margin-left: -50px; 
      };

 `;

const Card = styled.div`
flex-basis: 15rem;
margin-bottom: 20px;
@media (max-width: 800px){
        margin-left: 10%; 
      };
.icon {
 display:flex;
 align-items: center;
 justify-item: center;
 h3 {
   margin-left: 1rem;
   background: white;
   padding: 1rem;
   color: black;

 }
}`

const Div = styled.div`
margin-left: 10px;
width: 50%;
height: 100%;
z-index: 2;
`;
export default ServicesSection;
