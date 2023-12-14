import Link from 'next/link'
import { HiArrowDown } from 'react-icons/hi2'
export default function Header() {
  return (
    <header className='padding-container max-container flex gap-4 flexBetween py-4'>
      <Link href={'/'} className='bold-28'> Rahem <span className='regular-28 text-secondary'>SOROUR.</span>
      </Link>
      {/* <button className='btn_dark_rounded px-8 py-2 rounded-full flexCenter gap-4 animate-pulse'>
       <span className='bold-14'>Hire me</span> 
       <span className='h-5 w-5 border border-white rounded-full flexCenter animate-bounce'><HiArrowDown/></span> 
        </button> */}
    </header>
  )
}
