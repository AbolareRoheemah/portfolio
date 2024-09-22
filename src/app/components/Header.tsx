import Link from 'next/link'
import React from 'react';
import { GitHub } from '@mui/icons-material';
import Image from "next/image";

export default function Header() {
  return (
    <div className='flex items-center justify-between py-8 border-b-[2px] border-[#31363D]'>
        <Link href="/">
            <span className='text-[20px] text-[#6AECD9] font-bold'>&lt;A.R.A /&gt;</span>
            {/* <span className='text-[20px]'> AbolareRoheemah</span> */}
        </Link>
        <div className='flex items-center justify-between gap-8'>
            <Link href="/" className='relative group pb-1'>
                <span className='text-[#6AECD9]'>Home</span>
                <span className='absolute bottom-0 left-0 w-full h-[2px] bg-[#6AECD9]'></span>
            </Link>
            <Link href="/projects" className='relative group pb-1'>
                <span className='text-white hover:text-[#6AECD9]'>Projects</span>
                <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#6AECD9] transition-all duration-300 group-hover:w-full'></span>
            </Link>
            <Link href="/articles" className='relative group pb-1'>
                <span className='text-white hover:text-[#6AECD9]'>Articles</span>
                <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#6AECD9] transition-all duration-300 group-hover:w-full'></span>
            </Link>
        </div>
        <div className='flex items-center justify-between gap-8'>
            <div className='flex items-center justify-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-110'>
                <Image src="/x.svg" alt="Twitter logo" width={20} height={20} />
                Twitter
            </div>
            <div className='flex items-center justify-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-110'>
                <Image src="/linkedin.svg" alt="LinkedIn logo" width={20} height={20} />
                LinkedIn
            </div>
            <div className='flex items-center justify-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-110'>
                <GitHub className='text-[#6AECD9] w-8' />
                GitHub
            </div>
        </div>
    </div>
  )
}
