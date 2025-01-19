import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Services", link: "/Serices" },
  { id: 3, title: "About Us", link: "#" },
  { id: 4, title: "Our Team", link: "#" },
  { id: 5, title: "Contact Us", link: "#" },
];

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility on mobile
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-6 sm:py-10 flex justify-between font-semibold"
      >
        {/* Logo section*/}
        <div className="flex items-center">
          <h1 className="font-bold text-2xl sm:text-3xl text-secondary">CodeVibe</h1>
        </div>

        {/* Menu section for desktop (hidden on mobile) */}
        <div className="hidden sm:block">
          <ul className="flex items-center gap-6 ">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-4 hover:text-secondary relative group cursor-pointer"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger menu (visible on mobile) */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <IoMdClose className="text-4xl text-secondary" />
            ) : (
              <IoMdMenu className="text-4xl text-secondary" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile menu: Visible when hamburger is clicked */}
      {isMenuOpen && (
        <div className="sm:hidden bg-gray-200 py-4">
          <ul className="flex flex-col items-center gap-2">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-4 hover:text-secondary"
                  onClick={() => setIsMenuOpen(false)} 
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

    
      <div className="sm:hidden bg-secondary h-6"></div>
    </nav>
  );
};

export default Navbar;
