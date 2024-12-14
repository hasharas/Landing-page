import React, { useState } from 'react';
import { ImCross } from "react-icons/im";

const TopNavigation = () => {
  return (
    <div className='w-[381px] h-[17px] text-white flex justify-between items-center' >

      <a href='#' id='SERVICES'>SERVICES</a>
      <a href='#'>ABOUT US</a>
      <a href='#'>CONTACT US</a>
      <a href='#'>CAREERS</a>
    </div>

  )
}

export const HamburgerMenu = ({ isActive, setIsActive }) => {
  return (
    <div className={`fixed px-[20px] py-[16px] top-0 ${isActive ? "right-0" : "right-[-100%]"}  transition-all duration-300 flex flex-col gap-[36px] items-start h-[312px] w-[275px] bg-emerald-900`}>
      <div className='flex w-full justify-between items-start'>
        <a href='#'>HOME</a>
        <ImCross onClick={() => setIsActive(false)} />
      </div>
      <a href='#'>SERVICES</a>
      <a href='#'>ABOUT US</a>
      <a href='#'>CONTACT US</a>
      <a href='#'>CAREERS</a>
    </div>
  )
}

export default TopNavigation