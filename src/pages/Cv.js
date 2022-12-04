import React from 'react';
import "../components/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cvpic from "../img/cvpic.jpg"
import { faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
//animation 

import {motion} from 'framer-motion';
import { pageAnimation} from "../components/Animation"
function Cv() {
    return (
        <motion.div exit = "exit" variants={pageAnimation} initial ="hidden" animate = "show">       
       <div className="cv-container">
       <div className="cv-contents">

       
       <div className="cv-header">
       <div className = "designation">
        <h1>Godspower Felix .O</h1>
        <h5>Frontend Web Developer</h5>
       </div>
       <div className = "image">
   <img src={cvpic} alt="cvpic" />
       </div>
       </div>
       <div className="cv-body">
        <div className="first-paragraph">
            <div className="contact">
             <h4>My Contact</h4>
             <hr />
             <div className="icon">
                     <FontAwesomeIcon icon = {faEnvelope} color = "red" size="lg" />
                   <h5>ogbudhugodspower@gmail.com</h5>
                     </div>
             <div className="icon">
                     <FontAwesomeIcon icon = {faPhone} color = "black" size="lg" />
                   <h5>+2348062122835</h5>
                     </div>
             <div className="icon">
                     <FontAwesomeIcon icon = {faLocationDot} color = "black" size="lg" />
                   <h5>Abuja, Nigeria</h5>
                     </div>
            </div>
            <div className="career-objective">
                <h4>Career Objective</h4>
                <hr />
                <h5>
            To obtain a responsible and challenging Front End Developer’s position where my 
            education and work experience will have valuable application.  
                </h5>
            </div>
        </div>
        <div className="second-paragraph">
            <div className="hard-skills">
             <h4>Hard Skill</h4>
             <hr />
             <ul>
                <li>Html5, Css, Scss, Bootstrap</li>
                <li>Vanilla Javascript, es6</li>
                <li>Reactjs, Redux</li>
             </ul>
             
            </div>
            <div className="Educational-background">
                <h4>Educational Background</h4>
                <hr />
                <h5>
                2013-2017	University of Benin, Benin City, Edo State         B.sc Accounting
                </h5>
                <h4>
                2007 – 2013	      Uyi Secondary school, Benin City, Edo State
West Africa Senior School Certificate Examination
                </h4>
            </div>
        </div>

        <div className="third-paragraph">
            <div className="soft-skills">
             <h4>Soft Skills</h4>
             <hr />
             <ul>
                <li>Fast Learner</li>
                <li>Good Team Player</li>
                <li>Passionate</li>
             </ul>
             
            </div>
            <div className="work-experience">
            <h4>Work Experience</h4>
            <hr />

            <h4>
            -Jan. 2022- April 2022: Frontend Web developer(Intern), RadicalX Virtual Internship Programme.
               </h4>
               <h4>Responsibilities</h4>
               <hr />
               <ul>
                <li> Using markup languages like HTML to create user-friendly web pages.</li>
                <li>Maintaining and improving websites appearance and functionality.</li>
                <li>Optimizing applications for maximum speed</li>
                <li>Designing mobile-based features</li>
                <li>Collaborating with back-end developers and web designers to improve usability</li>
                <li>Collecting various articles from students and teachers for weekly publications and for the school’s magazine.</li>
                <li>Creating quality mockups and prototypes</li>
                <li>Helping back-end developers with coding and troubleshooting</li>
                
               </ul>
    
                
               <h4>
               -June. 2020-November 2021 : Website and social media manager, Titsall Global Schools, Wuse 2, Abuja.
               </h4>
               <h4>Responsibilities</h4>
               <hr />
               <ul>
                <li>Managing the school’s website and Social media (Facebook and instagram) handles.</li>
                <li>Optimizing the contents on the school’s website to rank high in search engines.</li>
                <li>Carrying out sponsored advertising across social media</li>
                <li>Designing flyers and stickers for the school</li>
                <li>Maintaining and enhancing the school’s brand</li>
                <li>Collecting various articles from students and teachers for weekly publications and for the school’s magazine.</li>
               </ul>
               <hr />

             <h4>-September. 2019 – June 2020: Coding tutor/Instructor, Titsall Global Schools, Wuse 2, Abuja.</h4>
             <h4>Responsibilities</h4>
             <hr />
             <ul>
                <li>Introducing coding with scratch to learners of various classes (coding for kids).</li>
                <li>Teaching and mentoring students on projects game development, Cartoon creation/story-telling and artificial intelligence.</li>
                <li>Introducing learners to advanced coding with HTML.CSS AND JAVASCRIPT for web development.</li>
                <li>Supervising various projects done by students.</li>

             </ul>
            </div>
        </div>
       </div>
       </div>
       </div>
        </motion.div>
    )
}

export default Cv;
