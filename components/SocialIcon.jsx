import React from 'react'
import {RiFacebookFill,RiInstagramFill,RiGithubFill,RiLinkedinFill} from 'react-icons/ri'
import Link from 'next/link'

export default function SocialIcon() {
  return (
    <div className='flex gap-4 lg:gap-6 pr-4'>
        <Link href={'https://www.facebook.com/?locale=fr_FR'} 
        className='bg-[#08d9d6] p-2 text-primary text-lg rounded-full rounded-bl-noune hover:bg-white hover:text-blue-600 hover:-translate-y-1 transition-all duration-500'>
            <RiFacebookFill/>
        </Link>

        <Link href={'https://www.instagram.com/sorourrahem/'} 
        className='bg-[#ff2e63] p-2 text-primary text-lg rounded-full rounded-bl-noune hover:bg-white hover:text-orange-700 hover:-translate-y-1 transition-all duration-500'>
            <RiInstagramFill />
        </Link>

        <Link href={'https://github.com/rahemSorour'} 
        className='bg-[#f08a5d] p-2 text-primary text-lg rounded-full rounded-bl-noune hover:bg-white hover:text-gray-700 hover:-translate-y-1 transition-all duration-500'>
            <RiGithubFill/>
        </Link>

        <Link href={'https://www.linkedin.com/in/sorour-rahem-93483a202/'} 
        className='bg-[#6a2c70] p-2 text-primary text-lg rounded-full rounded-bl-noune hover:bg-white hover:text-blue-600 hover:-translate-y-1 transition-all duration-500'>
            <RiLinkedinFill/>
        </Link>
    </div>
  )
}
