import React from 'react'
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/servicesSection';

//animation 

import {motion} from 'framer-motion';
import { pageAnimation} from "../components/Animation"
function AboutMe() {
    return (
        <motion.div exit = "exit" variants={pageAnimation} initial ="hidden" animate = "show">       
        <AboutSection/>
       <ServicesSection/>
        </motion.div>
    )
}

export default AboutMe
