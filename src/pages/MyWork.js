//imgs
// import {Link} from 'react-router-dom';
import  styled  from "styled-components";
import "../components/styles.css";
import {motion} from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer} from "../components/Animation"
import {useScroll} from '../components/useScroll';
import Snap from "../img/desktop-design.jpg"
import ChatPic from "../img/chatapp.png"
import ProductImg from "../img/desktop-design1.jpg"
import Nike from "../img/nike.png"

const MyWork = () => {
  const [element, control] = useScroll();
  const [element1, control1] = useScroll();
  const [element2, control2] = useScroll();
  const [element3, control3] = useScroll();
  const [element4, control4] = useScroll();
  const [element5, control5] = useScroll();
    return (
        
         <Work exit = "exit" variants={pageAnimation} 
         initial = "hidden" 
         animate = "show"
         style = {{background : "#fff"}}>
             <motion.div variants = {sliderContainer}>
             <Frame1 variants={slider}></Frame1>
             <Frame2 variants={slider}></Frame2>
             <Frame3 variants={slider}></Frame3>
             <Frame4 variants={slider}></Frame4>
             </motion.div>
             

            
             <Movie ref = {element} variants = {fade} animate = {control} initial = 'hidden'>
                 <motion.h2 variants={fade}>Nike-E-commerce</motion.h2>
                 <motion.h4 variants={fade}>E-commerce Website</motion.h4>
                 <motion.div variants={lineAnim} className="line"></motion.div>
                 
                <Hide>
                    <div className='apple-mart'>
                      <div className="image-container">
                 <img variants={photoAnim} src={Nike} alt='nike'/>
                      
                 <div className='apple-overview'>
                   <div className="apple-overview-contents">
                    <div className="about-project">
                        <p>Nike is an e-commerce website for sales of Nike products</p>
                    </div>
                    <div className="btn">
                    <a href='https://gp-nike.vercel.app/'><button>Preview</button></a>
                    <a href='https://github.com/Godspower12/nike'><button>Source Code</button></a>
                   

                    </div>
                   </div>
                 </div>
                 </div>
                 </div>
                 </Hide>
        
            
                
                 
           </Movie>
             <Movie ref = {element1} variants = {fade} animate = {control1} initial = 'hidden'>
                 <motion.h2 variants={fade}>Apple Mart- E-commerce</motion.h2>
                 <motion.h4 variants={fade}>E-commerce Website</motion.h4>
                 <motion.div variants={lineAnim} className="line"></motion.div>
                 
                <Hide>
                    <div className='apple-mart'>
                      <div className="image-container">
                 <img variants={photoAnim} src="https://i.gyazo.com/357d98cb3b252b25c32da8d7565a1f71.png" alt='apple-mart'/>
                      
                 <div className='apple-overview'>
                   <div className="apple-overview-contents">
                    <div className="about-project">
                        <p>Apple mart is an e-commerce website for sales of apple products</p>
                    </div>
                    <div className="btn">
                    <a href='https://apple-marts.netlify.app/'><button>Preview</button></a>
                    <a href='https://github.com/Godspower12/apple-marts/'><button>Source Code</button></a>
                   

                    </div>
                   </div>
                 </div>
                 </div>
                 </div>
                 </Hide>
        
            
                
                 
           </Movie>

           

            


            <Movie ref = {element2} variants = {fade} animate = {control2} initial = 'hidden'>
                <h2>Chat messenger</h2>
                <motion.div variants = {lineAnim} className="line"></motion.div>
               
               
               
                <div className='apple-mart'>
                      <div className="image-container">
                      <img src="https://i.gyazo.com/0c8e685df39b2e90f6bee253e363ad0f.png" alt='Chat-messenger'/>
                      
                 <div className='apple-overview'>
                   <div className="apple-overview-contents">
                   <div className="about-project">
                        <p>Chat messenger is a social web app that enables users performs real time chat, users with the link can create new account and when logged in can see various users and can decide to chat with any user of their choice.</p>
                    </div>
                    <div className="btn">
                    <a href='https://chatmessenger-app.netlify.app/'><button>Preview</button></a>
                    <a href='https://github.com/Godspower12/apple-mart/'><button>Source Code</button></a>
                   </div>
                 </div>
                 </div>
                 </div>
                 </div>


            </Movie> 
            <Movie ref = {element3} variants = {fade} animate = {control3} initial = 'hidden'>
                <h2>E-Commerce Product</h2>
                <motion.div variants = {lineAnim} className="line"></motion.div>
               
               
               
                <div className='apple-mart'>
                      <div className="image-container">
                      <img src= {ProductImg} alt='Chat-messenger'/>
                      
                 <div className='apple-overview'>
                   <div className="apple-overview-contents">
                   <div className="about-project">
                        <p>E-commerce product page is a simple product page that gives 
                          description to a product.</p>
                    </div>
                    <div className="btn">
                    <a href='https://gp-e-commerce-page.netlify.app/'><button>Preview</button></a>
                    <a href='https://github.com/Godspower12/E-commerce-product/'><button>Source Code</button></a>
                   </div>
                 </div>
                 </div>
                 </div>
                 </div>


            </Movie> 
           





       <Movie ref = {element4} variants = {fade} animate = {control4} initial = 'hidden'>
                 <motion.h2 variants={fade}>Snap Website </motion.h2>
                 <motion.div variants={lineAnim} className="line"></motion.div>
                 
                <Hide>
                    <div className='apple-mart'>
                      <div className="image-container">
                 <img variants={photoAnim} src={Snap} alt='snap'/>
                      
                 <div className='apple-overview'>
                   <div className="apple-overview-contents">
                    <div className="about-project">
                        <p>A simple and user friendly website</p>
                    </div>
                    <div className="btn">
                    <h1 className="progress">In progress...</h1>
                    {/* <a href='https://intro-sections.netlify.app/'><button>Preview</button></a>
                    <a href='https://github.com/Godspower12/intro-section/'><button>Source Code</button></a> */}
                   </div>
                   </div>
                 </div>
                 </div>
                 </div>
                 </Hide>
        
            
                
                 
           </Movie>

       <Movie ref = {element5} variants = {fade} animate = {control5} initial = 'hidden'>
                 <motion.h2 variants={fade}>Group chat app UI </motion.h2>
                 <motion.div variants={lineAnim} className="line"></motion.div>
                 
                <Hide>
                    <div className='apple-mart'>
                      <div className="image-container">
                 <img variants={photoAnim} src={ChatPic} alt='snap'/>
                      
                 <div className='apple-overview'>
                   <div className="apple-overview-contents">
                    <div className="about-project">
                        <p>A simple and user friendly design for a group chat app</p>
                    </div>
                    <div className="btn">
                    <h1 className="progress">In progress...</h1>
                    {/* <a href='https://chatappuis.netlify.app/'><button>Preview</button></a>
                    <a href='https://github.com/Godspower12/chatapp-ui/'><button>Source Code</button></a> */}
                   </div>
                   </div>
                 </div>
                 </div>
                 </div>
                 </Hide>
        
            
                
                 
           </Movie>

            
          
         </Work>

    );
};

const Work = styled(motion.div)`
min-height: 100vh;
overflow: hidden;
/* padding: 5rem 10rem; */
@media (max-width: 375px) {
    /* padding: ; */
}

h2{
    padding: 1rem 0rem;
}
`;

const Movie = styled(motion.div)`
padding: 5rem 5rem;
padding-bottom: 10rem;
.line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
}

span {
  color: grey;
  font-size: 3rem;
}
img {

    width: 100%;
    height: 70vh;
     object-fit: cover;
     cursor: pointer;
}

.image-container {
    position: relative;

}
.image-container  img {
    width: 100%;
    height: 70vh;
     object-fit: cover;
     cursor: pointer;
     transition: 0.5s ease-in-out all;
     
    }
    .apple-overview {
    transition: 0.5s ease;
    background: rgba(0,0,0,0.7);
    position: absolute;
    width: 100%;
    top: -10px;
    height: 100%;
    opacity:0;
     object-fit: cover; 
     cursor: pointer
     text-align: center;
     border-radius: 10px;
     padding: 20px;
}
.apple-overview-contents {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.apple-overview-contents button {
margin-left: 10px;
border-radius: 10px;
}

.image-container:hover .image-container {
    opacity: 0.4;
 }
 .image-container:hover .apple-overview{
   opacity: 1
 }
`;

const Hide = styled.div`
overflow: hidden;
`;


// frame animation 
const Frame1 = styled(motion.div)`
position: fixed;
left: 0;
top: 10%;
width: 100%;
height: 100vh;
background: #fffebf;
z-index: 2;
`;

const Frame2 = styled(Frame1)`
background: #ff8efb;`

const Frame3 = styled(Frame1)`
background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
background: #8effa0;
`



export default MyWork;