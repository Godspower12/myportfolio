import AboutMe from "./pages/AboutMe";
import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav';
import ContactMe from './pages/ContactMe';

import MyWork from "./pages/MyWork";
import {Routes, Route, useLocation} from 'react-router-dom'
import TopScroll from './components/topScroll';
// Animation 
import { AnimatePresence } from 'framer-motion';
import Footer from "./components/Footer";
import Cv from "./pages/Cv";

function App() {
  const location = useLocation();

  return (
    
    <div >
      <GlobalStyle/>
      <Nav/>
      <AnimatePresence exitBeforeEnter>
      <Routes location = {location} key= {location.pathname} >
     <Route path="/" element={<AboutMe/>}/>
     <Route path="/mywork" element={<MyWork/>}/>
     <Route path="/contactme" element={<ContactMe/>}/>
     <Route path="/cv" element={<Cv/>}/>
    </Routes>
    </AnimatePresence>
    <Footer/> 
    <TopScroll/>
    </div>
  );
}

export default App;
