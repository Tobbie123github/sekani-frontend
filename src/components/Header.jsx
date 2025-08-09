import Socials from './Socials';
import React, { useState, useEffect } from 'react';
import MobileNav from './MobileNav';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';


const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 w-full px-[30px] lg:px-[100px] z-30 h-[100px] flex items-center transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-800 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full">
        <h2 className="lg:max-w-[100px] max-w-[80px]">
          <Link to={'/'}>
            <img src={Logo} alt="logo" />
          </Link>
        </h2>

        <nav className="hidden xl:flex gap-x-12">
          <Link to="/" className="dark:text-gray-300 text-[#000000] hover:text-primary transition">
            Home
          </Link>
          <Link
            to="/about"
            className="text-[#000000] dark:text-gray-300 hover:text-primary transition"
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="text-[#000000] dark:text-gray-300 hover:text-primary transition"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="text-[#000000] dark:text-gray-300 hover:text-primary transition"
          >
            Contact
          </Link>
        </nav>
      </div>

      <Socials />
      <MobileNav />
   
    </header>
  );
};

export default Header;
