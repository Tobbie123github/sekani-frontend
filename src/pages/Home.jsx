import { Link } from "react-router-dom";
import sekani from '../images/freepik__upload__70788.png';
import { motion } from "framer-motion";
import {transition1} from '../../transitions';
import { BiSolidArrowFromLeft} from "react-icons/bi";

const Home = () => {
  return (
    <motion.section 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={transition1}

    className="section h-screen overflow-hidden ">
      <div className="md:container mx-auto h-full relative">

        <div className="flex md:flex-row h-screen relative">
  {/* Left content */}
  <motion.div 
  initial={{opacity: 0, y:'-50%'}}
  animate={{ opacity: 1, y:0}}
  exit={{opacity: 0, y:'-50%'}}
  transition={transition1}
  className="mt-[-9rem]  md:mt-0 md:ml-11 md:w-[45%] z-10 flex flex-col justify-center items-center md:items-start p-8">
          <h1 className="h1 dark:text-gray-300">Capturing <br />Moments</h1>
    <p className="text-[16px] md:text-[19px] font-primary mb-4 md:mb-9  text-center md:text-start dark:text-gray-200">
      Embark on a visual journey with our photography, where moments are not just captured but crafterd into timeless stories
    </p> 
  
    <Link to="/portfolio" className="btn mt-2">My Works <BiSolidArrowFromLeft className="ml-2 text-xl" /></Link>
  </motion.div>

  {/* Right image */}
  <motion.div 
  initial={{ opacity: 0, y: 120 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -120 }}
  transition={transition1}

  className="design2 md:block w-full top-[18rem] absolute right-0  md:top-0 md:w-[70%] lg:w-1/2 h-screen">
  
    <img 
      src={sekani} 
      alt="" 
      className="w-full h-full md:h-auto object-cover" 
    />
  </motion.div>
</div>
      </div>

    </motion.section>
  )
}

export default Home;