import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const FAQ = () => {
  return (
    <div className='mx-auto text-center'>
        <h2 className='text-[27px] text-[#1f3e3e] poppins-semibold mt-24 mb-10'>Frequently asked questions</h2>
        <FAQCard title={"Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"} text={"Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."} />
        <FAQCard title={"Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"} text={"Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."} />
        <FAQCard title={"Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"} text={"Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."} />
    </div>
  )
}

const FAQCard = ({title, text}) => {
    const [isActive, setIsActive] = useState(false);

    const handleActive = () => {
        setIsActive(!isActive);
    }

    return (
        <div className={`bg-[#FAF8FF] ${isActive?"text-[#1f3e3e] h-[150px] ":"text-black h-[80px]"}  transition-all duration-300 lg:w-[896px] w-full p-[24px] mx-auto flex flex-col gap-[13px]`}>
            <div className='flex justify-between items-center cursor-pointer' onClick={handleActive}>
                <h3 className="text-left">{title}</h3>
                {isActive?<FaMinus />:<FaPlus />}
            </div>
            {isActive?<p className='text-[#9bcd9b] text-justify fadeIn'>{text}</p>:<></>}
        </div>
    )
}

export default FAQ