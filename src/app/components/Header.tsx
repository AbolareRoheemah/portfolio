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

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div className={`fixed top-0 left-0 z-50 w-full bg-[#010101] px-4 md:px-20 flex items-center justify-between py-8 border-b-[2px] border-[#31363D] ${isMenuOpen ? 'mb-[20vh]':''}`}>
        <Link href="/">
            <span className='text-[20px] text-[#6AECD9] font-bold'>&lt;A.R.A /&gt;</span>
        </Link>
        <div className='md:flex hidden items-center justify-between gap-8'>
            <Link href="/" className='relative group pb-1' onClick={handleLinkClick}>
                <span className={`${pathname === "/" ? "text-[#6AECD9]": 'text-white hover:text-[#6AECD9]'}`}>Home</span>
                <span className={`absolute bottom-0 left-0 h-[2px] bg-[#6AECD9] ${pathname === "/" ? 'w-full': 'w-0 transition-all duration-300 group-hover:w-full'}`}></span>
            </Link>
            <Link href="/projects" className='relative group pb-1' onClick={handleLinkClick}>
                <span className={`${pathname === "/projects" ? "text-[#6AECD9]": 'text-white hover:text-[#6AECD9]'}`}>Projects</span>
                <span className={`absolute bottom-0 left-0 h-[2px] bg-[#6AECD9] ${pathname === "/projects" ? 'w-full': 'w-0 transition-all duration-300 group-hover:w-full'}`}></span>
            </Link>
            <Link href="/blogs" className='relative group pb-1' onClick={handleLinkClick}>
                <span className={`${pathname === "/blogs" ? "text-[#6AECD9]": 'text-white hover:text-[#6AECD9]'}`}>Blogs</span>
                <span className={`absolute bottom-0 left-0 h-[2px] bg-[#6AECD9] ${pathname === "/blogs" ? 'w-full': 'w-0 transition-all duration-300 group-hover:w-full'}`}></span>
            </Link>
        </div>
        <div className='md:flex hidden items-center justify-between gap-8'>
            <Link href="https://x.com/Rhorheeymarh" onClick={handleLinkClick}>
                <div className='flex items-center justify-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-110'>
                <Image src="/x.svg" alt="Twitter logo" width={20} height={20} />
                    Twitter
                </div>
            </Link>
            <Link href="https://www.linkedin.com/in/abolareroheemah/" onClick={handleLinkClick}>
                <div className='flex items-center justify-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-110'>
                    <Image src="/linkedin.svg" alt="LinkedIn logo" width={20} height={20} />
                    LinkedIn
                </div>
            </Link>
            <Link href="https://github.com/AbolareRoheemah" onClick={handleLinkClick}>
                <div className='flex items-center justify-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-110'>
                    <GitHub className='text-[#6AECD9] w-6' />
                    GitHub
                </div>
            </Link>
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
                <Link href="/" className={`${pathname === "/" ? "text-[#6AECD9]": 'text-white py-2'}`} onClick={handleLinkClick}>Home</Link>
                <Link href="/projects" className={`${pathname === "/projects" ? "text-[#6AECD9]": 'text-white py-2'}`} onClick={handleLinkClick}>Projects</Link>
                <Link href="/blogs" className={`${pathname === "/blogs" ? "text-[#6AECD9]": 'text-white py-2'}`} onClick={handleLinkClick}>Blogs</Link>
                <div className='flex items-center mt-4 gap-4'>
                    <Link href="https://x.com/Rhorheeymarh" onClick={handleLinkClick}>
                        <div className='flex items-center justify-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-110'>
                        <Image src="/x.svg" alt="Twitter logo" width={20} height={20} />
                            Twitter
                        </div>
                    </Link>
                    <Link href="https://www.linkedin.com/in/abolareroheemah/" onClick={handleLinkClick}>
                        <div className='flex items-center justify-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-110'>
                            <Image src="/linkedin.svg" alt="LinkedIn logo" width={20} height={20} />
                            LinkedIn
                        </div>
                    </Link>
                    <Link href="https://github.com/AbolareRoheemah" onClick={handleLinkClick}>
                        <div className='flex items-center justify-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-110'>
                            <GitHub className='text-[#6AECD9] w-6' />
                            GitHub
                        </div>
                    </Link>
                </div>
            </div>
        )}
    </div>
  )
}
