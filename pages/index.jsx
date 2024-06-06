import SocialIcon from '@/components/SocialIcon';
import {Typewriter} from 'react-simple-typewriter';
import Image from 'next/image';
import { motion } from 'framer-motion';
import srr from '/public/srr.png'

export default function Home() {
  return (
    <section >
      <div className='flex flex-col flexBetween py-8 px-8 lg:flex-row lg:px-12 lg:py-16  gap-4'>
        <div className="flex-1 flexStart flex-col gap-4 ">
            <h2 className='h3'> Hi Im <span className='text-secondary font-extrabold'>SOROUR RAHEM .</span></h2>
            <h4 className="bold-24">An aspiring
            <span className="pl-2 text-start">
                <Typewriter
                words={[' Frontend Developer']}
                loop={true}
                cursor
                cirsorStyle={'_'}
                typeSpeed={90}
                deleteSpeed={90}
                delaySpeed={1000}
                />
            </span>
            </h4>
            <div className=''><p className='py-2  '>Skilled in HTML, CSS, JavaScript, React, and more. Crafting vibrant, user-friendly websites and sparking innovation in every project. Lets embark on a journey of creativity! </p></div>
            
            <SocialIcon/>
        </div>
        <div className='flex flexCenter flex-1 relative mb-8'>
        {/* <Image src={srr} alt='picture' width={360} height={360} className='w-[340px] h-[300px] absolute bottom-10'/> */}
        {/* <motion.span className='bg-gray-400 h-80 w-80 rounded-full '
        animate={{background:['#6a2c70'],
        transition:{duration:10, repeat:Infinity, ease:'easeInOut'}
         }}
         >
        </motion.span> */}
        </div>
        </div>
    </section>
    
  )
}
