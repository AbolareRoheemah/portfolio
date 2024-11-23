"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
export default function Blogs() {
    const router = useRouter();

    const handleRoute = () => {
        router.push("/blogs");
    }

  return (
    <div className='flex flex-col items-center justify-start gap-2 pt-2 md:px-20 px-8 pb-20 min-h-screen relative'>
        <div className='absolute inset-0 bg-[#0a0a0a] opacity-80'></div>
        <div className="flex flex-col items-center justify-center my-12 relative z-10">
            <div className="w-6 h-10 border-2 border-[#6df2db] rounded-full shadow-lg flex items-start justify-center cursor-pointer">
            <div className='w-[1vw] h-[1vw] md:w-[0.5vw] md:h-[0.5vw] mt-2 rounded-full bg-[#6df2db]'></div>
            </div>
            <div className="w-px h-10 border-l-2 border-dashed border-white-400 mt-2"></div>
            <div className='w-[1vw] h-[1vw] md:w-[0.5vw] md:h-[0.5vw] mt-2 rounded-full bg-white'></div>
        </div>
        <div className='flex flex-col items-center justify-start gap-2 text-center relative z-10 w-full'>
            <div className="relative inline-block">
              <p className='text-[34px] md:text-[46px] font-medium text-[#6df2db]' data-aos="fade-up">Blogs</p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6df2db] rounded-full">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-1 h-1 bg-[#6df2db] rounded-full"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-1 h-1 bg-[#6df2db] rounded-full"></div>
              </div>
            </div>
            <p className='text-[16px] text-[#a9acae]' data-aos="fade-up">Here are some of the articles I have written over the years.</p>
            <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-y-2 border-[#696E71] py-10 mt-10'>
                <div>
                    <img src="/erc20pic.jpg" alt="" className='min-w-[20vw] md:w-[25vw] md:h-[35vh] w-full h-full rounded-md' data-aos="flip-up" />
                </div>
                <div className='text-left'>
                    <h3 className='text-[34px] text-[#6df2db] md:py-6' data-aos="fade-up">Understanding ERC20 tokens</h3>
                    <p className='text-sm text-[#8b9093] mb-8' data-aos="fade-up" data-aos-delay="10">ERC-20 (Ethereum Request for Comments-20) is the name used in the Ethereum community to refer to a standard (set of rules and functions) that guides the creation of fungible tokens on the Ethereum blockchain. Fungible tokens are tokens that are identical and can be exchanged on a one-for-one basis. In this article, I will go through the different functions contained in an ERc20 token standard and how they are used...</p>
                    <Link href="https://rhorheeymarh.hashnode.dev/unpacking-erc-20-tokens-understanding-their-functions-and-their-uses" className='flex items-center justify-start cursor-pointer' data-aos="fade-up" data-aos-delay="20">
                        <p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>Read More</p>
                        <img src="/readmore.svg" alt="" className='w-6 h-4' />
                    </Link>
                </div>
            </div>
            <button className='flex items-center justify-between gap-4 bg-[#6ff6d7] py-4 px-8 text-[#000] rounded-full font-medium mt-14 transition-transform transform hover:scale-105' onClick={handleRoute} data-aos="fade-up" data-aos-delay="40">
                <p>View More</p>
                <img src="/view.svg" alt="" width={24} height={24} />
            </button>
        </div>

    </div>
  )
}
