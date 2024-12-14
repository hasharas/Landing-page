import React from 'react';
import Background from '../asset/background.png';

const CompanyVision = () => {
  return (
    <div>
      <img src={Background} alt="background image" className='w-full' />
      <div className='xl:w-[630px] rounded-lg bg-gradient-to-r from-[#a0bea0] to-[#426842] flex flex-col items-start gap-[20px] px-[40px] pt-[24px] pb-[32px] xl:absolute xl:left-[80px] xl:top-[354px] w-full'>
        <p className='font-[700] text-[48px] text-white text-left'>We Crush Your Competitors, Goals, And Sales Records - Without The B.S.</p>
        <button className='bg-[#06583a] text-xs rounded-[4px] py-[12px] px-[20px] text-white'>GET FREE CONSULTATION</button>
      </div>
    </div>
  )
}

export default CompanyVision