import React from 'react'
import CountUp from 'react-countup';

export default function About() {
  return (
    <section className='padding-container max-container flex flex-col gap-4 py-8 lg:flex-row
    lg:py-40 xl:gap-12'>
<div className='flex flex-1 flex-col flexCenter lg:jestify-start'>
<h3 className='h3'>Web Developer</h3>
      <p className=' text-start '>hhh hhhhh hhhhh hhhhhhhhh hhhhhhh</p>
      <div>
        <div className='hidden lg:flex flex-1 mt-8'>
          <h4>
            <CountUp
            start={750}
            end={800}
            duration={5}
            delay={1}
              />
              K+
          </h4>
        </div>
      </div>
</div>

      <div className='flex flex-col w-full xl:max-w-[47%] h-[488px]'></div>
    </section>
  )
}
