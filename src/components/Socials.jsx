
import { FaFacebook, FaWhatsapp, FaInstagram  } from "react-icons/fa";
import { IoColorPalette } from "react-icons/io5";
 import React, { useState, useEffect } from 'react';

const Socials = () => {


const [darkMode, setDarkMode] = useState(() => {
    // Load from localStorage (default to false if nothing saved)
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
    <div className='hidden xl:flex ml-24 items-center justify-center gap-x-6'>
      <ul className='flex gap-x-6 '>
        <li className='text-3xl dark:text-gray-300 text-primary hover:text-secondary transition'>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer
">
            <FaFacebook />
          </a>
        </li>
        <li className='text-3xl dark:text-gray-300 text-primary hover:text-secondary transition'>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </li>
        <li className='text-3xl dark:text-gray-300 text-primary hover:text-secondary transition'>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </li>

      
      </ul>
    <div className="cursor-pointer text-black dark:text-white p-6">
       <IoColorPalette className="cursor text-3xl dark:text-gray-300"  onClick={() => setDarkMode(!darkMode)} />
    </div>
    </div>
  );
}

export default Socials;