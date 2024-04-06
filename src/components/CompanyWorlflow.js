import React from 'react';
import ComputerImage from '../asset/computer.png';
import SearchImage from '../asset/search.png';

const CompanyWorlflow = () => {
  return (
    <div className='p-[20px]'>
        <div className='flex max-sm:flex-col items-center md:w-[896px] gap-[20px] mx-auto w-full max-sm:mb-[40px]'>
            <img src={ComputerImage} className='h-[346px]' />
            <WorkflowCard title={"Web & Mobile App Development"} text={"Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online."} />
        </div>
        <div className='flex max-sm:flex-col-reverse items-center md:w-[896px] gap-[20px] mx-auto w-full'>
            <WorkflowCard title={"Digital Strategy Consulting"} text={"Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business."} /> 
            <img src={SearchImage } className='h-[346px]' />
        </div>
    </div>
  )
}

const WorkflowCard = ({title, text}) => {
      return(
          <div className='text-left flex flex-col gap-[20px] items-start max-sm:items-center'>
              <h2 className='text-[27px] text-[#6B3CC9] poppins-semibold'>{title}</h2>
              <p className='text-xs'>{text}</p>
              <button className='bg-[#F28D35] text-xs rounded-[4px] py-[12px] px-[20px] text-white'>LEARN MORE</button>
          </div>
      )
  }

export default CompanyWorlflow