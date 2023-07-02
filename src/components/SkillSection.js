import React from 'react'
import styled from "styled-components";
import {scrollReveal} from '../components/Animation'
import {useScroll} from './useScroll'
import {About} from "../style"

const SkillSection = () => {

    const [element, control] = useScroll();
  return (
    
<Services variants={scrollReveal} animate = {control} initial = 'hidden' ref={element}> 
        
             <Cards>
                <Card>     
                <h2>UI/UX Designer</h2>    
                <p>I value simple content structure, clean design patterns, and thoughtful interactions. </p>

                <p><span>Things i enjoy designing:</span></p>
                <p>UI, UX, Web, Apps, Logos</p>
                <p><span>Design Tools:</span></p>
                <p>Figma</p>
                <p>Adobe XD</p>
                <p>Photoshop</p>
                <p>Fontawesome</p>

                </Card>            
               
             
              
              <Card> 
                <h2>Frontend Developer</h2>
              
                <p>I like to code things from the scratch, and enjoy bringing ideas to life in the browser. </p> 

<p><span>Language I speak:</span></p>
<p>HTML, CSS, Javascript, Sass, Git</p>
<p><span>Dev Tools:</span></p>
<p>Bitbucket</p>
<p>Vscode</p>
<p>Github</p>
<p>Atom</p>

              </Card>
                 
                
             </Cards>

             
             </Services>

    
  )
}

export default SkillSection



 


const Services = styled.div`
height: 50%;
display: flex;
justify-content: space-around;
// align-items: center;
text-align: center;
h2 {
  color: black;
  font-size: 2rem;
  margin-top: 10px;
}

span {
  font-size: 1.5rem;
}

// @media (max-width: 425px){
//   display: flex;
//   flex-direction: column;
  `;
  
  
  const Cards = styled.div`
  width: 100%;
  margin: 10%; 
  // height: 100%;
  display: flex;
  justify-content: space-between;
  
  
  

  @media (max-width: 425px){
   

    };

      `;

const Card = styled.div`
background: white;
border-radius: 10%;
margin-bottom: 40px;
padding-bottom: 40px;
padding: 0px 20px;
width: 35%;

h2 {
  color: black;
  margin-top: 10px;
  font-size: 1.5rem;
}


 @media (max-width: 425px){
      padding: 5px;
      margin-left: 10px;
      width: 45%;

      };
      p {
        color: black;
        margin-bottom: -20px;
        
      }
}`;
