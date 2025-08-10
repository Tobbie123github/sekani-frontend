import { useState, useEffect } from "react";
import {IoMdClose} from "react-icons/io";
import {CgMenuRight} from "react-icons/cg";
import { useAuth } from "../context/AuthContext";

import {Link} from 'react-router-dom';
import { IoColorPalette } from "react-icons/io5";

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

    const {user} = useAuth()

   const [isOpen, setIsOpen] = useState(false);
const [darkMode, setDarkMode] = useState(() => {
    
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="text-primary dark:text-gray-300 xl:hidden">
        <div onClick={() => setIsOpen(!isOpen)} className="text-3xl cursor-pointer ">
            <CgMenuRight />
        </div>

        

        <motion.div 
        variants={menuVariants}
        initial="hidden"
        animate={isOpen ? "show" : ""}
        className="bg-white shadow-2xl  w-full absolute top-0 right-0 max-w-xs h-screen z-20">
                <div onClick={() => setIsOpen(false)} className="text-4xl flex gap-3 items-center absolute z-30 left-4 top-14 text-primary cursor-pointer">
                    <IoMdClose /> 
         
         
         <div className="cursor-pointer text-black dark:text-white p-6">
               <IoColorPalette className="cursor text-3xl text-[#AF4C0F]"  onClick={() => setDarkMode(!darkMode)} />
        </div>
                </div>
               <ul className="h-full flex flex-col items-center justify-center gap-y-8 text-primary font-primary font-bold text-3xl">
  <li className="text-2xl font-bold mb-8">
    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
  </li>
  <li className="text-2xl font-bold mb-8">
    <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
  </li>
  <li className="text-2xl font-bold mb-8">
    <Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
  </li>
  <li className="text-2xl font-bold mb-8">
    <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
  </li>

 {
    user && (
         <li className="text-2xl font-bold mb-8">
    <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
  </li>
    )
 }
 

</ul>
        </motion.div>
    </nav>
  );
}

export default MobileNav;


