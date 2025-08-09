import { useState } from "react";
import {IoMdClose} from "react-icons/io";
import {CgMenuRight} from "react-icons/cg";


import {Link} from 'react-router-dom';

import { motion } from "framer-motion";

// Variant

const menuVariants = {
    hidden: {
        x: "100%",
        transition: {type: "spring", stiffness: 300, damping: 30}
    },
    show: {
        x: 0,
        transition: {
          ease: "easeInOut",
        }
    }
}


const MobileNav = () => {
   const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="text-primary dark:text-gray-300 xl:hidden">
        <div onClick={() => setIsOpen(!isOpen)} className="text-3xl cursor-pointer ">
            <CgMenuRight />
        </div>

        <motion.div 
        variants={menuVariants}
        initial="hidden"
        animate={isOpen ? "show" : ""}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20">
                <div onClick={() => setIsOpen(false)} className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer">
                    <IoMdClose />
                </div>
                <ul className="h-full flex flex-col items-center justify-center gap-y-8 text-primary font-primary font-bold text-3xl">
                    <li className="text-2xl font-bold mb-8">
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className="text-2xl font-bold mb-8">
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li className="text-2xl font-bold mb-8">
                        <Link to={'/portfolio'}>Portfolio</Link>
                    </li>
                    <li className="text-2xl font-bold mb-8">
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>
        </motion.div>
    </nav>
  );
}

export default MobileNav;


