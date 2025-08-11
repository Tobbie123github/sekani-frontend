import { Link } from 'react-router-dom';
import sekani from '../images/sekani.png';
import { motion } from "framer-motion";
import {transition1} from '../../transitions';
import { BiSolidArrowFromLeft} from "react-icons/bi";
import Footer from '../components/Footer';
const About = () => {
  return (
    <motion.section
    initial={{opacity: 0, y: '100%'}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: '100%'}}
    transition={transition1}
    className="h-screen  relative mt-10"
    >
     <div className="container mx-auto pt-[80px] flex flex-col-reverse md:flex-row-reverse lg:flex-row h-full items-center justify-center  md:gap-x-24 text-center lg:pt-16">

    {/* IMAGE */}
    
    
     <motion.div 
    initial={{opacity: 0, y: '-80%'}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: '-80%'}}
    transition={transition1}
    className='design relative flex-1 lg:h-full order-2 lg:order-none overflow-hidden'>
  <img 
    src={sekani} 
    alt="sekani" 
    className='design w-full h-[40vh] md:mb-0 
    mb-9 md:h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out 
    '
  />
</motion.div>



        {/* TEXT */}
     <motion.div 
      className='flex-1 md:pt-36 md:pb-14 lg:pt-0 lg:w-auto flex flex-col justify-center items-center lg:items-start'>
     <h1 className='h1 dark:text-gray-300'>About Me</h1>
      <p className='dark:text-gray-200 mb-5 md:mb-12 max-w-sm md:text-start'>I’m Sekani, a passionate photographer with an eye for the moments most people overlook. My work blends creativity and storytelling, turning everyday scenes into timeless images. Whether it’s a fleeting smile, the glow of golden hour, or the quiet details in between, I aim to capture not just what you see, but what you feel.

</p>
       <Link to={"/contact"} className='btn mb-10 md:mb-0'>Contact Me<BiSolidArrowFromLeft className="ml-2 text-xl" /> </Link>

        </motion.div>



      </div>

      <Footer />
      </motion.section>
  );
}

export default About;