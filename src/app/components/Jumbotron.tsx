'use client'
import React from 'react';
import { MailOutlined, LocationOnOutlined } from '@mui/icons-material';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Jumbotron() {
    const isMobile = useMediaQuery('(max-width:768px)', { noSsr: true });

    return (
        <div className='min-h-screen flex flex-col md:flex-row items-top justify-start gap-16 pt-2 px-4 md:px-20'>
            <div className='flex-1'>
                <div className='flex flex-col md:flex-row items-start justify-start gap-14 mt-20'>
                    <div className="relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-[#9BF9F3] rounded-tl-[100px] rounded-br-[100px] -z-10 transform -translate-x-[4px] -translate-y-[4px]"></div>
                        <div className="leaf-shaped py-8 px-6 md:px-10 border-2 flex flex-col items-left justify-start bg-[#0D1117] rounded-tl-[100px] rounded-br-[100px] relative z-10">
                            <div className='flex flex-col items-center justify-start'>
                                <div className="w-24 h-24 rounded-full bg-cover bg-center bg-no-repeat border-2 border-[#6EF4E6]" style={{backgroundImage: "url('/profile-image.jpg')"}}>
                                </div>
                                <p className='text-[24px] font-normal'>Roheemah</p>
                                <p className='text-md text-[#9B9EA1]'>Frontend & Blockchain Dev</p>
                            </div>
                            <div className='mt-6 text-[#9B9EA1]'>
                                <div className='flex items-center justify-start gap-4 mb-4'>
                                    <p><MailOutlined className='text-[#6AECD9]' /></p>
                                    <span>abolareroheemah@gmail.com</span>
                                </div>
                                <div className='flex items-center justify-start gap-4 mb-4'>
                                    <p><LocationOnOutlined className='text-[#6AECD9]' /></p>
                                    <span>Lagos, Nigeria</span>
                                </div>
                                <div className='flex items-center justify-start gap-4 mb-4'>
                                    <img src="/link.svg" alt="" width={24} height={24} />
                                    <span>Lagos, Nigeria</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-between flex-wrap gap-2 mt-2'>
                                <p className='bg-[#9BF9F3] text-[#000] text-sm px-2 py-[1px] basis-2/12 rounded-full'>HTML/CSS</p>
                                <p className='bg-[#9BF9F3] text-[#000] text-sm px-2 py-[1px] basis-2/12 rounded-full'>JS</p>
                                <p className='bg-[#9BF9F3] text-[#000] text-sm px-2 py-[1px] basis-2/12 rounded-full'>REACT</p>
                                <p className='bg-[#9BF9F3] text-[#000] text-sm px-2 py-[1px] basis-2/12 rounded-full'>NEXT</p>
                                <p className='bg-[#9BF9F3] text-[#000] text-sm px-2 py-[1px] basis-2/12 rounded-full'>VUE</p>
                                <p className='bg-[#9BF9F3] text-[#000] text-sm px-2 py-[1px] basis-2/12 rounded-full'>NUXT</p>
                                <p className='bg-[#9BF9F3] text-[#000] text-sm px-2 py-[1px] basis-2/12 rounded-full'>SOLIDITY</p>
                                <p className='bg-[#9BF9F3] text-[#000] text-sm px-2 py-[1px] basis-2/12 rounded-full'>RUST</p>
                            </div>
                            <div className='flex items-center justify-between gap-4 bg-white py-4 px-8 text-[#000] rounded-full font-medium mt-10 cursor-pointer'>
                                <p>Download CV</p>
                                <img src="/download.svg" alt="" width={24} height={24} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row md:items-start md:justify-start gap-10 pt-10'>
                        <div className=''>
                            <div>
                                <p className='text-sm text-[#6AECD9]'>&lt;h1&gt;</p>
                                <p className='text-[34px] md:text-[46px] pl-4 leading-[50px] font-medium'>Hey👋</p>
                                <p className='text-[34px] md:text-[46px] pl-4 leading-[50px] font-medium'>I&apos;m <span className='text-[#6AECD9]'>Roheemah</span>,</p>
                                <TypeAnimation
                                    sequence={[
                                        'Frontend Developer',
                                        1000,
                                        'Blockchain Developer',
                                        1000,
                                        'Technical Writer',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    className='text-[34px] md:text-[46px] leading-[50px] font-medium ml-[1rem]'
                                    repeat={Infinity}
                                />
                                <p> <span className='text-sm text-[#6AECD9]'>&lt;/h1&gt;</span></p>
                            </div>
                            <div className='mt-8'>
                                <p className='text-sm text-[#6AECD9]'>&lt;p&gt;</p>
                                <p className='pl-4 text-md font-bold text-[#9B9EA1]'>I build user-friendly and visually appealing web applications. I also design, implement and maintain blockchain based applications. I hate mediocrity.</p>
                                <p className='text-sm text-[#6AECD9]'>&lt;/p&gt;</p>
                            </div>
                            <div className='flex items-center justify-start gap-4 mt-6'>
                                <p className='text-[34px] text-[#6AECD9]'>Let&apos;s Talk</p>
                                <Link href="#contact" className='bg-[#464647] w-8 h-8 flex items-center justify-center p-4 rounded-full text-[#6AECD9] cursor-pointer'><MailOutlined /></Link>
                            </div>
                        </div>
                        <div className='py-10 px-8 bg-[#1A1E23] rounded-lg md:rounded-full'>
                            <div className='flex items-center justify-start md:items-center md:justify-center gap-4 mt-8'>
                                <p className='text-[#6AECD9] text-[50px] font-medium'>4</p>
                                <p className=' text-md font-bold text-[#9B9EA1]'>Programming Languages</p>
                            </div>
                            <div className='flex items-center justify-start md:items-center md:justify-center gap-4 mt-8'>
                                <p className='text-[#6AECD9] text-[50px] font-medium'>6</p>
                                <p className=' text-md font-bold text-[#9B9EA1]'>Development Tools</p>
                            </div>
                            <div className='flex items-center justify-start md:items-center md:justify-center gap-4 mt-8'>
                                <p className='text-[#6AECD9] text-[50px] font-medium'>3</p>
                                <p className=' text-md font-bold text-[#9B9EA1]'>Years of Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
