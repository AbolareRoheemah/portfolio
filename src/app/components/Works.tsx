'use client'
import React from 'react'
import { PersonalVideo, LocationOnOutlined, WorkOutlineOutlined } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Works() {
    const router = useRouter()
  return (
    <div className='works-bg flex flex-col items-center justify-start gap-2 pt-2 px-4 md:px-20 pb-20 h-screen relative'>
        <div className='absolute inset-0 bg-[#0a0a0a] opacity-80'></div>
        <div className="flex flex-col items-center justify-center my-12 relative z-10">
            <div className="w-6 h-10 border-2 border-[#6df2db] rounded-full shadow-lg flex items-start justify-center cursor-pointer">
            <div className='w-[1vw] h-[1vw] md:w-[0.5vw] md:h-[0.5vw] mt-2 rounded-full bg-[#6df2db]'></div>
            </div>
            <div className="w-px h-10 border-l-2 border-dashed border-white-400 mt-2"></div>
            <div className='w-[1vw] h-[1vw] md:w-[0.5vw] md:h-[0.5vw] mt-2 rounded-full bg-white'></div>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 text-center relative z-10'>
            <div className="relative inline-block">
              <p className='text-[34px] md:text-[46px] font-medium text-[#6df2db]'>Projects</p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6df2db] rounded-full">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-1 h-1 bg-[#6df2db] rounded-full"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-1 h-1 bg-[#6df2db] rounded-full"></div>
              </div>
            </div>
            <p className='text-[16px] text-[#a9acae]'>Here are some of the projects I have worked on over the years.</p>
            <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-20 mt-10 mb-14'>
                <div className="relative">
                    <div className="absolute top-0 left-0 w-[95%] h-full bg-[#9BF9F3] rounded-tl-[100px] rounded-br-[100px] -z-10 transform -translate-x-[4px] -translate-y-[4px]"></div>
                <div className="leaf-shaped py-8 px-4 md:px-10 border-2 flex flex-col items-left justify-start bg-[#0D1117] rounded-tl-[100px] rounded-br-[100px] relative z-10 w-[95%] md:w-[400px]">
                            <div className='flex flex-col items-center justify-start'>
                                <div className="w-full h-[200px] md:h-[250px] rounded-tl-[100px] rounded-br-[100px] bg-cover bg-center bg-no-repeat border-2 border-[#6EF4E6]" style={{backgroundImage: "url('/vizientCoop.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                                </div>
                            </div>
                            <div className='mt-6 text-[#9B9EA1]'>
                                <div className='flex items-start justify-start mb-4 gap-2'> 
                                    <p><WorkOutlineOutlined className='text-[#6AECD9]' /></p>
                                    <p className='text-left'><span className='text-[#6df2db] text-[16px]'>Vizient Coop</span> - Assets management and investment platform</p>
                                </div>
                                <div className='flex items-start justify-start gap-4 mb-4'>
                                    <img src="/link.svg" alt="" width={24} height={24} />
                                    <Link href="https://vizientcoop.com/">
                                        https://vizientcoop.com
                                    </Link>
                                </div>
                            </div>
                </div>
                </div>
                <div className="relative">
                    <div className="absolute top-0 left-0 w-[95%] h-full bg-[#9BF9F3] rounded-tl-[100px] rounded-br-[100px] -z-10 transform -translate-x-[4px] -translate-y-[4px]"></div>
                <div className="leaf-shaped py-8 px-4 md:px-10 border-2 flex flex-col items-left justify-start bg-[#0D1117] rounded-tl-[100px] rounded-br-[100px] relative z-10 w-[95%] md:w-[400px]">
                            <div className='flex flex-col items-center justify-start'>
                                <div className="w-full h-[200px] md:h-[250px] rounded-tl-[100px] rounded-br-[100px] bg-cover bg-center bg-no-repeat border-2 border-[#6EF4E6]" style={{backgroundImage: "url('/reablock.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                                </div>
                            </div>
                            <div className='mt-6 text-[#9B9EA1]'>
                                <div className='flex items-start justify-start mb-4 gap-2'> 
                                    <p><WorkOutlineOutlined className='text-[#6AECD9]' /></p>
                                    <p className='text-left'><span className='text-[#6df2db] text-[16px] md:text-[26px]'>Reablock</span> - Real estate management website</p>
                                </div>
                                <div className='flex items-start justify-start gap-4 mb-4'>
                                    <img src="/link.svg" alt="" width={24} height={24} />
                                    <Link href="https://reablock.com/">
                                        https://reablock.com
                                    </Link>
                                </div>
                            </div>
                </div>
                </div>
                <div className="relative">
                    <div className="absolute top-0 left-0 w-[95%] h-full bg-[#9BF9F3] rounded-tl-[100px] rounded-br-[100px] -z-10 transform -translate-x-[4px] -translate-y-[4px]"></div>
                <div className="leaf-shaped py-8 px-4 md:px-10 border-2 flex flex-col items-left justify-start bg-[#0D1117] rounded-tl-[100px] rounded-br-[100px] relative z-10 w-[95%] md:w-[400px]">
                            <div className='flex flex-col items-center justify-start'>
                                <div className="w-full h-[200px] md:h-[250px] rounded-tl-[100px] rounded-br-[100px] bg-cover bg-center bg-no-repeat border-2 border-[#6EF4E6]" style={{backgroundImage: "url('/web3L.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                                </div>
                            </div>
                            <div className='mt-6 text-[#9B9EA1]'>
                                <div className='flex items-start justify-start mb-4 w-full  gap-2'>
                                    <p><WorkOutlineOutlined className='text-[#6AECD9]' /></p>
                                    <p className='text-left'><span className='text-[#6df2db] text-[16px] md:text-[26px]'>Web3Learner</span> - The UI of a  platform to learn web3 technologies and languages</p>
                                </div>
                                <div className='flex items-start justify-start gap-4 mb-4'>
                                    <img src="/link.svg" alt="" width={24} height={24} />
                                    <Link href="https://web3-learner.vercel.app/">
                                        https://web3-learner.vercel.app
                                    </Link>
                                </div>
                            </div>
                </div>
                </div>
            </div>
        <button onClick={() => {router.push("/projects")}} className='flex items-center justify-between gap-4 bg-[#6ff6d7] py-4 px-8 text-[#000] rounded-full font-medium mt-4 cursor-pointer'>
            <p>View More</p>
            <img src="/view.svg" alt="" width={24} height={24} />
        </button>
        </div>

    </div>
  )
}
