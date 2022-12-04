import styled from "styled-components";
import {motion} from 'framer-motion';
// styled component
export const About = styled(motion.div)`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 5rem;
color: white;

@media (max-width: 800px){
        display: block;
        text-align: center;
        padding: 2rem 2rem;
        margin-left: 10%;

        @media (max-width: 800px){
        display: block;
        text-align: center;
        padding: 2rem 2rem;
        margin-left: 10%;
`;
export const Description = styled.div`
flex: 1;
padding-right: 5rem;
z-index: 2;
h2 {
    font-weight: bold;
};
@media (max-width: 800px){
        margin: 2rem 0rem 5rem 0rem;
`;
export const Image = styled.div`
z-index: 2;
flex: 1;
overflow: hidden;
img {
   width: 100%;
   height:90vh;
   object-fit: cover;  
}
`;
export const Hide = styled.div`
 overflow: hidden;
`
