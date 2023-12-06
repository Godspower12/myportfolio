import React from 'react'
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/servicesSection';
import SkillSection from '../components/SkillSection';
//animation 

import {motion} from 'framer-motion';
import { pageAnimation} from "../components/Animation"
import Blogpost from '../components/Blogpost';
import Testimonial from '../components/Testimonial';
import Recent from '../components/Recent';
function AboutMe() {
    return (
        <motion.div exit = "exit" variants={pageAnimation} initial ="hidden" animate = "show">       
        <AboutSection/>
       <ServicesSection/>
       <SkillSection/>
       <Recent/>
        </motion.div>
    )
}

export default AboutMe
