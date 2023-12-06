import React from 'react'
import styled from "styled-components";
import {scrollReveal} from '../components/Animation'
import {useScroll} from './useScroll'
import {About} from "../style"

const SkillSection = () => {

    const [element, control] = useScroll();
  return (
    
<Services variants={scrollReveal} animate = {control} initial = 'hidden' ref={element}> 
        
           <ul>
            <li>Html</li>
            <li>Css</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Vue</li>
            <li>Angular</li>
            <li>React</li>
            <li>Typescript</li>
            <li>Nextjs</li>
           </ul>
             
             </Services>

    
  )
}

export default SkillSection



 


const Services = styled.div`
height: 50%;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
padding: 20px 20px;
flex-wrap: wrap;
overflow: hidden;

// text-align: center;


ul {
  display: flex;
  margin-left: 10%
  flex-wrap: wrap;
}
li {
  // list-style: none;
  color: white;
  width: 8rem
  // font-size: 10rem;
 
}

@media (max-width: 425px){
  width: 100%;
  flex-wrap: wrap;
  display: flex;
justify-content: center;
align-items: center;
margin-bottom: 10%;
margin-left: 10px;

li {
  font-size: 7px;
  width: 5rem
}
};

  `;
  
 
