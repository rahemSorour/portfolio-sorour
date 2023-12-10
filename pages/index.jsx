import SocialIcon from '@/components/SocialIcon';
import {Typewriter} from 'react-simple-typewriter';
import Image from 'next/image';
import { motion } from 'framer-motion';
import sorour from '/public/sorour.png'
export default function Home() {
  return (
    <section className="padding-container max-container page flex flex-col gap-2 flexCenter pb-32 py-20 lg:flex-row lg:gap-32">
        <div className="flex-1 flexCenter flex-col gap-2 lg:items-start">
            <h2 className='h3'> Hi Im <span className='text-secondary font-extrabold'>SOROUR RAHEM</span></h2>
            <h4 className="bold-24">A
            <span className="pl-2">
                <Typewriter
                words={['Frontend Developer']}
                loop={true}
                cursor
                cirsorStyle={'_'}
                typeSpeed={90}
                deleteSpeed={90}
                delaySpeed={1000}
                />
            </span>
            </h4>
            <p className='py-4'>hdeslkdddddddddddddddddddddddddddddddd</p>
            <SocialIcon/>
        </div>
        <div className='flex flex-1 relative'>
        <Image src={sorour} alt='picture' width={400} height={400} className='w-[277px] h-auto lg:w-full relative'/>
        <motion.span className='bg-secondary h-60 w-60 lg:h-[400px] lg:w-[400px] xl:h-[420px] xl:w-[500px] absolute top-4 right-0 mr-2 rounded-br-none rounded-full -z-10 lg:top-10 lg:right-10'
        animate={{background:['#08d9d6','#252a34','#ff2e63','#eaeaea','#f08a5d','#b835e','#6a2c70'],
        transition:{duration:10, repeat:Infinity, ease:'easeInOut'}
         }}
         >
        </motion.span>
        </div>
    </section>
    
  )
}
