"use client";
import Link from "next/link";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";

const Header = () => {
    const [scrolling, setScrolling] = useState(false);
    const [showMenu, setShowMenu] = useState(false)
    const handleMenu = () => {
        setShowMenu(!showMenu)
    }


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `bg-${scrolling ? 'teal-500' : 'transparent'} dark:bg-${scrolling ? 'dark' : 'transparent'} dark:bg-opacity-30 bg-opacity-30 lg:px-[166px] md:px-[80px] px-2 py-3 flex justify-between items-center fixed shadow-md w-full z-50 `;
    
  
  return (
        <section className={navbarClasses}>  
            <div className="flex gap-12 items-center">
                <h2 className="text-[24px] font-bold dark:text-teal-500 text-[#161C2D]">Brainwave.io</h2>
                <ul className="lg:flex hidden text-[15px] font-bold gap-6">
                    <li><Link href="/" >Demo</Link></li>
                    <li><Link href="/" >Pages</Link></li>
                    <li><Link href="/" >Support</Link></li>
                    <li><Link href="/" >Contact</Link></li>
                </ul>
            </div>
            <div className="flex gap-5 items-center">
            <button className="lg:flex hidden py-[13px] px-[15px] rounded-xl text-center bg-[#473BF0] text-white text-[17px] font-bold">Get Started a Project</button>
            {
                !showMenu ? 
                <IoMdMenu onClick={handleMenu} className="mr-2 text-[24px] cursor-pointer lg:hidden flex" />
                :<IoMdClose onClick={handleMenu} className="mr-2 text-[24px] cursor-pointer lg:hidden flex" />
            }
                <ThemeToggle/>
            </div>
            <ul className={`${showMenu ? 'flex':'hidden'} flex-col text-[15px] font-bold gap-6 absolute top-14 left-0 bg-teal-500 dark:bg-[#161C2D] w-full p-4 text-center bg-opacity-50`}>
                    <li  onClick={handleMenu}><Link href="/" >Demo</Link></li>
                    <li  onClick={handleMenu}><Link href="/" >Pages</Link></li>
                    <li  onClick={handleMenu}><Link href="/" >Support</Link></li>
                    <li  onClick={handleMenu}><Link href="/" >Contact</Link></li>
            </ul>
        </section>
    );
};

export default Header;