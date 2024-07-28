import { useState } from 'react';
import logo from "../assets/logo.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute top-0 w-full h-[100px] text-white flex justify-between items-center px-5 md:px-20">
      {/* <span className="text-3xl md:text-5xl font-extrabold tracking-wide">ISRO</span> */}
      <img src={ logo } alt="LOGO" className='w-32' />
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
      <ul className={`w-full md:flex md:justify-center font-semibold ${isOpen ? 'block' : 'hidden'} md:block`}>
        <li className="uppercase px-5 md:px-10 hover:bg-white/30 duration-300 hover:duration-300 py-2 md:py-4 rounded cursor-pointer">home</li>
        <li className="uppercase px-5 md:px-10 hover:bg-white/30 duration-300 hover:duration-300 py-2 md:py-4 rounded cursor-pointer">missions</li>
        <li className="uppercase px-5 md:px-10 hover:bg-white/30 duration-300 hover:duration-300 py-2 md:py-4 rounded cursor-pointer">activities</li>
        <li className="uppercase px-5 md:px-10 hover:bg-white/30 duration-300 hover:duration-300 py-2 md:py-4 rounded cursor-pointer">prorammes</li>
        <li className="uppercase px-5 md:px-10 hover:bg-white/30 duration-300 hover:duration-300 py-2 md:py-4 rounded cursor-pointer">resources</li>
        <li className="uppercase px-5 md:px-10 hover:bg-white/30 duration-300 hover:duration-300 py-2 md:py-4 rounded cursor-pointer">contact us</li>
      </ul>
    </div>
  );
}

export default Navbar;