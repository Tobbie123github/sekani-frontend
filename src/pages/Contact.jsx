import { FaFacebook, FaWhatsapp, FaInstagram  } from "react-icons/fa";
import ContactImg from '../images/freepik__upload__18606.png'
import { motion } from "framer-motion";
import {transition1} from '../../transitions';

const Contact = () => {
  return (
    
    <motion.section
  
  initial={{ opacity: 0, y: 120 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -120 }}
  transition={transition1}

    className="section relative h-screen overflow-hidden">
        <div className="container mx-auto h-full">
          <div className=" flex flex-col lg:flex-row h-full items-center justify-start lg:pt-12 pt-24  gap-x-8 text-center lg:text-left">
          
                {/* <div className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-0 -z-10"></div> */}


                <div className="lg:flex-1 lg:pt-28 px-4 relative ">
                  <h1 className="h1 flex items-center justify-center lg:justify-start
                  dark:text-gray-300">Contact me <img src={ContactImg} alt="Contact" className="w-[90px]  lg:hidden"/></h1>
                  <p className="dark:text-gray-200 mb-12"> I would love to get suggestions from you!</p>


                  <form className="">
                    
                    <div className="flex flex-col gap-y-10">
                      <input type="text" placeholder="Your Name" className="outline-none dark:border-b-gray-300 border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] " />
                       <textarea type="text" placeholder="Your Message" className="outline-none border-b dark:border-b-gray-300 border-b-primary bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] " />
                      
                    </div>

                  </form>
                  
                  {/* SOCIALS */}

                  <div className='xl:flex mt-20 '>
                        <ul className='flex gap-x-10'>
                          <li className='dark:text-gray-300 text-4xl text-primary hover:text-secondary transition'>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer
                  ">
                              <FaFacebook />
                            </a>
                          </li>
                          <li className='dark:text-gray-300 text-4xl text-primary hover:text-secondary transition'>
                            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                              <FaWhatsapp />
                            </a>
                          </li>
                          <li className='dark:text-gray-300 text-4xl text-primary hover:text-secondary transition'>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                              <FaInstagram />
                            </a>
                          </li>
                        </ul>
                      </div>

                </div>

                <div className="lg:flex-1 hidden lg:block">
                <img src={ContactImg} alt="Contact"  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:grayscale" />
                </div>

          </div>


        </div>

    </motion.section>
  )
}

export default Contact;