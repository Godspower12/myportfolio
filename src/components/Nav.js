import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useState } from "react"
import { NavLink } from "react-router-dom"
import {motion} from 'framer-motion';
import {useLocation} from 'react-router-dom';
import "../App.css";
const Nav = ({show, setShow, showSignup, setShowSignup}) => {
    const {pathname} = useLocation();

    const [checked, setChecked] = useState(false);


    function toggle(value){
      return !value;
    }
    return (
        <StyledNav>
            <h1>
                <Link to ='/' id='logo'>Power</Link>
            </h1>
            <div className="test">

            
            <ul>
                <li>
                <Link to ='/'>About Me</Link>
                  <Line transition = {{duration: 0.75}} initial = {{width: '0%'}} animate = {{width: pathname === '/' ? '50%': '0%'}}/>  
                </li>
                <li>
                <Link to ='/mywork'>Projects</Link>
                <Line transition = {{duration: 0.75}} initial = {{width: '0%'}} animate = {{width: pathname === '/mywork' ? '50%': '0%'}}/>
                </li>
                <li>
                <Link to ='/contactme'>Contact</Link>
                <Line transition = {{duration: 0.75}} initial = {{width: '0%'}} animate = {{width: pathname === '/contactme' ? '50%': '0%'}}/>
                </li>
            </ul>
            </div>
            

            <div className="header-container">
       <div className="hamburger-container">
        <input type="checkbox" 
        checked={checked}
        onChange={() => setChecked(toggle)}
        className="checkbox" />
        <div className="hamburger-box">
          
          <div className="hamburger"></div>

        </div>
        <div onClick={() => setChecked(toggle)} className="menu-background">
        </div>
        

        <div className="hamburger-cont">
        <div className="hamburger-contents">

        <ul>
                <li onClick={() => setChecked(toggle)}>
                <Link to ='/'>About Me</Link>
                  <Line transition = {{duration: 0.75}} initial = {{width: '0%'}} animate = {{width: pathname === '/' ? '50%': '0%'}}/>  
                </li>
                <li onClick={() => setChecked(toggle)}>
                <Link to ='/mywork'>Projects</Link>
                <Line transition = {{duration: 0.75}} initial = {{width: '0%'}} animate = {{width: pathname === '/mywork' ? '50%': '0%'}}/>
                </li>
                <li onClick={() => setChecked(toggle)}>
                <Link to ='/contactme'>Contact</Link>
                <Line transition = {{duration: 0.75}} initial = {{width: '0%'}} animate = {{width: pathname === '/contactme' ? '50%': '0%'}}/>
                </li>
                <li></li>
            </ul>

        </div>
       </div>

       
        </div>
    
      </div>
       
       
        </StyledNav>
    )
}

const StyledNav = styled.nav`
 min-height: 10vh;
 display: flex;
 margin: auto;
 justify-content: space-between;
 align-items: center;
 padding: 1rem 5rem;
 background: #282828;
 position: sticky;
 z-index: 10;
  top: 0;
  h1 {
    font-size: 40px
    font-weight: 100px

  }
 a {
     color: white;
     text-decoration : none;
 }
 ul {
    display: flex;
 list-style: none;
 }
 .test  {
     display: flex;
     list-style: none;


      @media (max-width: 425px){
     display: none
     
 }
  
}


 #logo {
     font-size: 1.5rem;
     font-family: 'Lobster', cursive;
     font-weight: lighter;
 }
 li {
     padding-left: 10rem;
     position: relative; 
 }
 @media (max-width: 800px){
        flex-direction: column; 
        padding: 2rem 1rem;
        #logo {
            display: inline-block;
            margin: 2rem;
        }
        ul {
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
            li {
                padding: 0;
                /* margin-left: 15px */
            }
        }
      };
`;

const Line = styled(motion.div)`
height: 0.1rem;
background: #23d997;
width: 0%;
position: absolute;
bottom: -80%;
left: 60%;
@media (max-width: 375px){
        left: 25%;
        
        justify-content: center;
`;

export default Nav;

