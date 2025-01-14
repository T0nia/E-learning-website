import React from 'react';
import {IoMdMenu} from "react-icons/io";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 1,
    title: "Services",
    path: "#",
  },
   {
    id: 1,
    title: "About Us",
    path: "#",
  },
  {
    id: 4,
    title: "Our Team",
    path: "#",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "#",
  },
]

const Navbar = () => {
  return (
    <nav>
    <div className="container py-10 flex justify-between items-center">
      {/* logo */}
      <div>
        <h1 className='font-bold text-2xl'>The Learning Curve</h1>
      </div>
      {/* menu */}
      <div className='hidden lg:block'>
<ul className='flex items-center gap-3'>
  {
    NavbarMenu.map( (menu) => (
<li key={menu.id}>
<a href={menu.path}>{menu.title}</a>
</li>
    )
    )
  }
</ul>
      </div>
      {/* hamburger */}
      
      </div>  
    </nav>
  );
};

export default Navbar;
