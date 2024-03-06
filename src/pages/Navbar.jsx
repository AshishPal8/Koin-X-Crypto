import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative w-full h-[10vh] bg-white flex justify-between items-center px-2 md:px-12">
      <div>
        <img className="w-[80px] md:w-[120px]" src="./coin.jpg" alt="" />
      </div>
      <div className="hidden md:block">
        <div className="flex justify-center items-center gap-7">
          <ul className="flex items-center justify-center gap-7 font-bold">
            <li>Crypto Taxes</li>
            <li>Free Tools</li>
            <li>Resource Center</li>
          </ul>
          <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-5 py-2 rounded-lg text-white font-bold">
            Get Started
          </button>
        </div>
      </div>
      <div className="block md:hidden" onClick={toggleMenu}>
        <IoMenu size={25} />
      </div>
      {menuOpen && (
        <div className="bg-gray-300 absolute top-12 right-2 rounded-lg block md:hidden p-2">
          <ul className="flex flex-col gap-2 font-bold">
            <li>Crypto Taxes</li>
            <li>Free Tools</li>
            <li>Resource Center</li>
          </ul>
          <button className="mt-5 bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-5 py-2 rounded-lg text-white font-bold">
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
