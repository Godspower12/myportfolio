import React from 'react'
import styled from "styled-components";
import {scrollReveal} from '../components/Animation'
import {useScroll} from './useScroll'


const Testimonial = () => {
    const [element, control] = useScroll();
  return (
    <div>

<Services variants={scrollReveal} animate = {control} initial = 'hidden' ref={element}> 
<h1><span> Testimonial</span> </h1>
<Body>
    <Heading>
     {/* <img src = {} alt = "testimonial"/> */}
    <div className="testimonial-test">
    <h4>Bimbo Bolujoko</h4>
    <p>Managing Director Titsall Ventures Nig. Ltd</p>
    </div>
    </Heading>

    <div className="contents">
        Godspower is a highly skilled and passionate developer, He is highly proactive and efficient 
    </div>
</Body>
             </Services> 



    </div>
  )
}

const Services = styled.div`
display: flex;
height: 100%;
width: 100%;
margin-left: 10%;
margin-right: 10%;
margin-bottom: 5%;
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
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: -5%;
`;
const Body = styled.div`
display: flex;   
height: 30vh; 
width: 80%; 
margin: 10%; 
margin-left: 20%;
border-radius: 10px;
background: grey;
`;
const Heading = styled.div`
 color: white;
`
export default Testimonial;