'use client'
import Link from 'next/link'
import React, { useState } from 'react';
import { GitHub } from '@mui/icons-material';
import Image from "next/image";
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`px-4 md:px-20 flex items-center justify-between py-8 border-b-[2px] border-[#31363D] ${isMenuOpen ? 'mb-[20vh]':''}`}>
        <Link href="/">
            <span className='text-[20px] text-[#6AECD9] font-bold'>&lt;A.R.A /&gt;</span>
        </Link>
        <div className='md:flex hidden items-center justify-between gap-8'>
            <Link href="/" className='relative group pb-1'>
                <span className={`${pathname === "/" ? "text-[#6AECD9]": 'text-white hover:text-[#6AECD9]'}`}>Home</span>
                <span className={`absolute bottom-0 left-0 h-[2px] bg-[#6AECD9] ${pathname === "/" ? 'w-full': 'w-0 transition-all duration-300 group-hover:w-full'}`}></span>
            </Link>
            <Link href="/projects" className='relative group pb-1'>
                <span className={`${pathname === "/projects" ? "text-[#6AECD9]": 'text-white hover:text-[#6AECD9]'}`}>Projects</span>
                <span className={`absolute bottom-0 left-0 h-[2px] bg-[#6AECD9] ${pathname === "/projects" ? 'w-full': 'w-0 transition-all duration-300 group-hover:w-full'}`}></span>
            </Link>
            <Link href="/blogs" className='relative group pb-1'>
                <span className={`${pathname === "/blogs" ? "text-[#6AECD9]": 'text-white hover:text-[#6AECD9]'}`}>Blogs</span>
                <span className={`absolute bottom-0 left-0 h-[2px] bg-[#6AECD9] ${pathname === "/blogs" ? 'w-full': 'w-0 transition-all duration-300 group-hover:w-full'}`}></span>
            </Link>
        </div>
        <div className='md:flex hidden items-center justify-between gap-8'>
            <div className='flex items-center justify-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-110'>
            <Link href="https://x.com/Rhorheeymarh"><Image src="/x.svg" alt="Twitter logo" width={20} height={20} /></Link>
                Twitter
            </div>
            <div className='flex items-center justify-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-110'>
                <Link href="https://www.linkedin.com/in/abolareroheemah/"><Image src="/linkedin.svg" alt="LinkedIn logo" width={20} height={20} /></Link>
                LinkedIn
            </div>
            <div className='flex items-center justify-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-110'>
                <Link href="https://github.com/AbolareRoheemah"><GitHub className='text-[#6AECD9] w-6' /></Link>
                GitHub
            </div>
        </div>
        <div className='md:hidden flex items-center'>
            <button onClick={toggleMenu} className='text-[#6AECD9] focus:outline-none'>
                <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                    <span className="block w-8 h-1 bg-[#6AECD9] mb-1"></span>
                    <span className="block w-8 h-1 bg-[#6AECD9] mb-1"></span>
                    <span className="block w-8 h-1 bg-[#6AECD9]"></span>
                </div>
            </button>
        </div>
        {isMenuOpen && (
            <div className='absolute top-16 left-0 right-0 bg-[#0D1117] p-4 flex flex-col items-center'>
                <Link href="/" className={`${pathname === "/" ? "text-[#6AECD9]": 'text-white py-2'}`}>Home</Link>
                <Link href="/projects" className={`${pathname === "/projects" ? "text-[#6AECD9]": 'text-white py-2'}`}>Projects</Link>
                <Link href="/blogs" className={`${pathname === "/blogs" ? "text-[#6AECD9]": 'text-white py-2'}`}>Blogs</Link>
                <div className='flex items-center mt-4 gap-4'>
                    <div className='flex items-center justify-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-110'>
                    <Link href="https://x.com/Rhorheeymarh"><Image src="/x.svg" alt="Twitter logo" width={20} height={20} /></Link>
                        Twitter
                    </div>
                    <div className='flex items-center justify-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-110'>
                        <Link href="https://www.linkedin.com/in/abolareroheemah/"><Image src="/linkedin.svg" alt="LinkedIn logo" width={20} height={20} /></Link>
                        LinkedIn
                    </div>
                    <div className='flex items-center justify-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-110'>
                        <Link href="https://github.com/AbolareRoheemah"><GitHub className='text-[#6AECD9] w-6' /></Link>
                        GitHub
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}
