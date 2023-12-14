import React from 'react'
import CountUp from 'react-countup';
import { aboutData } from '@/app/constants/data';
import { useState } from 'react';

export default function About() {
  const [index,setIndex]=useState(0);
  console.log(index)
  return (


<div className=' h-full bg-primary/30 text-center  xl:text-left xl:py-36'>
<div className='padding-container mx-auto h-full flex flex-col items-center  xl:flex-row gap-x-6'>
<div className='flex-1 flex flex-col justify-center xl:mb-56'>
 <h3
  className='h3 font-bold '> Frontend <span className='text-secondary'>Developer</span>
 </h3> 
 <p className=' max-w-[560px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 '>
 Aspiring Frontend Developer with a touch of AI curiosity. Proficient in HTML, CSS, and
JavaScript, react, dedicated to crafting visually appealing and user-friendly websites.
Eager to explore the intersection of frontend development and AI, bringing a creative
and adaptable approach to enhance digital experiences. Keen on continuous learning
and contributing to innovative projects.
 </p>
</div>

<div className='flex flex-col w-full xl:max-w-[48%] h-[480px] '>
  <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
    {aboutData.map((item,itemInedx)=>(
      <div key={itemInedx} className={`${index === itemInedx && 'text-secondary after:w-[100%] after:bg-accent after:transition-all after:duration-300'}cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:botton-1 after:left-0`}
      onClick={()=>setIndex(itemInedx)}>
        {item.title}
      </div>
    )
    )}
  </div>
  <div className='py-1 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start '>
    {aboutData[index].info.map((item,itemIndex)=>(
    <div key={itemIndex} className='flex-1 flex flex-col max-w-max gap-x-2 items-center text-white/60'>
      <div className='font-light mb-4 md:mb-2'>{item.title}</div>
      <div className=''>{item.stage}</div>
      <div className='flex gap-x-4  '>
        {item.icons?.map((icon,itemIndex)=>{
          
         return <div key={itemIndex} className='text-3xl'>{icon}</div>
        })}

      </div>
      </div>
  ))}
  </div>
</div>
</div>
</div>

  )
}
