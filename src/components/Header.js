import React, { useEffect, useState } from 'react';
import TopNavigation, { HamburgerMenu } from './TopNavigation';
import { IoMenu } from "react-icons/io5";
//import LOGO from '../asset/logo.svg';

const Header = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleWindowWidth)
    });

    return (
        <div className='w-full h-[77px] flex justify-between items-center px-[80px] py-[26px] bg-[#2f4f4f]'>
            <h2 className='text-white text-[35px] font-serif tracking-widest font-semibold'>MY LAND</h2>
            {windowWidth > 768 ? <TopNavigation /> :
                <div>
                    <IoMenu className='text-white text-4xl' onClick={() => setIsActive(true)} />
                    <HamburgerMenu isActive={isActive} setIsActive={setIsActive} />
                </div>}

        </div>
    )
}

export default Header