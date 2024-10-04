import React from 'react'
import { GitHub } from '@mui/icons-material';
import Image from "next/image";

export default function Footer() {
  return (
    <div className='flex items-center justify-between px-20 py-6 border-t border-t-[#a9acae]'>
        <div>
            <p className='text-[16px] text-[#a9acae]'>&copy; 2024 AbolareRoheemah. All Rights Reserved</p>
        </div>
        <div className='flex items-center justify-center gap-4 cursor-pointer'>
            <Image src="/x.svg" alt="Twitter logo" width={20} height={20} />
            <Image src="/linkedin.svg" alt="LinkedIn logo" width={20} height={20} />
            <GitHub className='text-[#6AECD9] w-8' />
        </div>
        <div className='text-[16px] text-[#a9acae]'>Developed by <span className='underline text-[#2f7267]'>AbolareRoheemah</span></div>
    </div>
  )
}
