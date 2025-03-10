import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#698b69] text-white flex flex-col justify-between items-center px-[60px] pt-[40px] pb-[20px] gap-[40px] mt-20' >
            <div className=' flex max-md:flex-col justify-between items-start bg-[#698b69] text-white max-md:gap-[60px]'>
                <div className='w-1/3 text-left text-white flex flex-col items-start gap-[20px] max-md:w-2/3'>
                    <img src="LOGO" alt='logo' className='h-[25px]' />
                    <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                </div>
                <div className='w-1/2 flex justify-between max-md:w-3/4 max-sm:flex-col max-sm:gap-[40px]'>
                    <div className='flex flex-col items-start gap-[20px]'>
                        <h3 className='text-[21px]'>Our Technologies</h3>
                        <div className='flex flex-col gap-[12px]'>
                            <p>ReactJS</p>
                            <p>Gatsby</p>
                            <p>NextJS</p>
                            <p>NodeJS</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-[20px] text-left'>
                        <h3 className='text-[21px]'>Our Services</h3>
                        <div className='flex flex-col gap-[12px]'>
                            <p>	Social Media Marketing</p>
                            <p>	Web & Mobile App Development</p>
                            <p>	Data & Analytics</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[630px] border-t-2 border-white height-[25px] pt-2 flex items-end justify-center gap-[8px]'>
                <a href='#'>Privacy Policy</a>
                <p className='font-semibold'>|</p>
                <a href='#'>Terms and Conditions</a>
            </div>
        </div>
    )
}

export default Footer