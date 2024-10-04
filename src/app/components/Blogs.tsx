import React from 'react'
import { PersonalVideo, LocationOnOutlined, WorkOutlineOutlined } from '@mui/icons-material';
import Link from 'next/link';
import {useAppContext} from "../state/AppContext"
export default function Blogs() {
    const topic = useAppContext;

  return (
    <div className='flex flex-col items-center justify-start gap-2 pt-2 px-20 pb-20 min-h-screen relative'>
        <div className='absolute inset-0 bg-[#0a0a0a] opacity-80'></div>
        <div className="flex flex-col items-center justify-center my-12 relative z-10">
            <div className="w-6 h-10 border-2 border-[#6df2db] rounded-full shadow-lg flex items-start justify-center cursor-pointer">
            <div className='w-[0.5vw] h-[0.5vw] mt-2 rounded-full bg-[#6df2db]'></div>
            </div>
            <div className="w-px h-10 border-l-2 border-dashed border-white-400 mt-2"></div>
            <div className='w-[0.5vw] h-[0.5vw] mt-2 rounded-full bg-white'></div>
        </div>
        <div className='flex flex-col items-center justify-start gap-2 text-center relative z-10'>
            <div className="relative inline-block">
              <p className='text-[46px] font-medium text-[#6df2db]'>Blogs</p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6df2db] rounded-full">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-1 h-1 bg-[#6df2db] rounded-full"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-1 h-1 bg-[#6df2db] rounded-full"></div>
              </div>
            </div>
            <p className='text-[16px] text-[#a9acae]'>Here are some of the articles I have written over the years.</p>
            <div className='flex items-start justify-start gap-10 border-y-2 border-[#696E71] py-10 mt-10'>
                <div>
                    <img src="/erc20pic.jpg" alt="" className='w-[25vw] h-[35vh] rounded-md' />
                </div>
                <div className='text-left'>
                    <h3 className='text-[34px] text-[#6df2db] py-6'>Understanding ERC20 tokens</h3>
                    <p className='text-sm text-[#8b9093] mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dignissimos amet suscipit dicta illum, reprehenderit laboriosam et ipsa dolore dolor eum unde tempore fuga at porro, sequi ea veniam quae.</p>
                    <div className='flex items-center justify-start cursor-pointer'>
                        <p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>Read More</p>
                        <img src="/readmore.svg" alt="" className='w-6 h-4' />
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between gap-4 bg-[#6ff6d7] py-4 px-8 text-[#000] rounded-full font-medium mt-14 cursor-pointer'>
                <p>View More</p>
                <img src="/view.svg" alt="" width={24} height={24} />
            </div>
        </div>

    </div>
  )
}
