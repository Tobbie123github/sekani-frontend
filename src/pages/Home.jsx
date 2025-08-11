import { Link } from "react-router-dom";
import sekani from "../images/freepik__upload__70788.png";
import { motion } from "framer-motion";
import { transition1 } from "../../transitions";
import { BiSolidArrowFromLeft } from "react-icons/bi";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section h-screen overflow-hidden hero"
    >
      <div className="md:container mx-auto h-full relative">
        <div className="md:container flex md:flex-row h-screen relative">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
            className="flex flex-col items-center md:mt-[8rem]  mt-[7rem] w-[80%] mx-auto md:w-[50%] md:mx-0 md:items-start md:pl-10"
          >
            <h1 className="h1 dark:text-gray-300 text-center md:text-left">
              Capturing 
              Moments
            </h1>
            <p className="text-[16px] md:text-[19px] font-primary mb-4 md:mb-9  text-center md:text-start dark:text-gray-200">
              Embark on a visual journey with our photography, where moments are
              not just captured but crafterd into timeless stories
            </p>

            <Link to="/portfolio" className="btn mt-2">
              My Works <BiSolidArrowFromLeft className="ml-2 text-xl" />
            </Link>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -120 }}
            transition={transition1}
            className="design2 md:block w-full top-[18rem] absolute right-0  md:top-0 md:w-[70%] lg:w-1/2 h-screen"
          >
            <img
              src={sekani}
              alt=""
              className="w-full h-full md:h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
