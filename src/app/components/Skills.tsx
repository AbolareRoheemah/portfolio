import React from 'react'
import { PersonalVideo } from '@mui/icons-material';
import { Grid2 } from '@mui/material';

export default function Skills() {
  return (
    <div className='skill-bg flex flex-col items-center justify-start gap-2 pt-2 px-20 pb-20 h-screen'>
        <div className=''>
            <h1 className='text-center text-[98px] font-medium text-[#6df2db]'>&lt;/&gt;</h1>
        </div>
        <div className='flex flex-col items-center justify-start gap-2 text-center'>
            <div className="relative inline-block">
              <p className='text-[46px] font-medium text-[#6df2db]'>Skills</p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6df2db] rounded-full">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-1 h-1 bg-[#6df2db] rounded-full"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-1 h-1 bg-[#6df2db] rounded-full"></div>
              </div>
            </div>
            <p className='text-[16px] text-[#a9acae]'>Here are some of the skills I have acquired over the years.</p>
            <div className='flex items-center justify-center gap-20 mt-10 mb-14'>
                <div className='flex flex-col items-center justify-center gap-2 bg-[#6bf6fb] border-l-4 border-l-[#fff] rounded-lg p-4 w-[300px]'>
                    <p className='cursor-pointer'><PersonalVideo className='text-[#000]' /></p>
                    <h3 className='text-[#000]'>Frontend Development</h3>
                    <p className='text-[#6DA8A2]'>JavaScript, TypeScript, React, Next, Vue, Nuxt, Tailwind, Git</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-2 bg-[#6bf6fb] border-l-4 border-l-[#fff] rounded-lg p-4 w-[300px]'>
                    <p className='cursor-pointer'><PersonalVideo className='text-[#000]' /></p>
                    <h3 className='text-[#000]'>Blockchain Development</h3>
                    <p className='text-[#6DA8A2]'>Solidity, Web3, Ethereum, ethers.js, Solidity</p>
                </div>
            </div>
                <div className='flex items-center justify-center gap-10 flex-wrap mb-20'>
                    <div>
                        <div className='flex items-center justify-center rounded-full mx-6 p-4 w-[80px] h-[80px] bg-[#e54f2d]'>
                            <img src="./html5.svg" alt="" />
                        </div>
                        <p className='mt-2 text-[#e54f2d]'>HTML</p>
                    </div>
                    <div>
                        <div className='flex items-center justify-center rounded-full mx-6 p-4 w-[80px] h-[80px] bg-[#1e72b8]'>
                            <img src="./css3.svg" alt="" />
                        </div>
                        <p className='mt-2 text-[#1e72b8]'>CSS</p>
                    </div>
                    <div>
                        <div className='flex items-center justify-center rounded-full mx-6 p-4 w-[80px] h-[80px] bg-[#e8a02e]'>
                            <img src="./nodedotjs.svg" alt="" />
                        </div>
                        <p className='mt-2 text-[#e8a02e]'>JS</p>
                    </div>
                    <div>
                        <div className='flex items-center justify-center rounded-full mx-6 p-4 w-[80px] h-[80px] bg-[#3eaae1]'>
                            <img src="./preact.svg" alt="" />
                        </div>
                        <p className='mt-2 text-[#3eaae1]'>React</p>
                    </div>
                    <div>
                        <div className='flex items-center justify-center rounded-full mx-6 p-4 w-[80px] h-[80px] bg-[#ffffff]'>
                            <img src="./nextdotjs.svg" alt="" />
                        </div>
                        <p className='mt-2 text-[#fff]'>Next</p>
                    </div>
                    <div>
                        <div className='flex items-center justify-center rounded-full mx-6 p-4 w-[80px] h-[80px] bg-[#4FC08D]'>
                            <img src="./vuedotjs.svg" alt="" />
                        </div>
                        <p className='mt-2 text-[#4FC08D]'>Vue</p>
                    </div>
                    <div>
                        <div className='flex items-center justify-center rounded-full mx-6 p-4 w-[80px] h-[80px] bg-[#00DC82]'>
                            <img src="./nuxtdotjs.svg" alt="" />
                        </div>
                        <p className='mt-2 text-[#00DC82]'>Nuxt</p>
                    </div>
                    <div>
                        <div className='flex items-center justify-center rounded-full mx-6 p-4 w-[80px] h-[80px] bg-[#06B6D4]'>
                            <img src="./tailwindcss.svg" alt="" />
                        </div>
                        <p className='mt-2 text-[#06B6D4]'>Tailwind</p>
                    </div>
                    <div>
                        <div className='flex items-center justify-center rounded-full mx-6 p-4 w-[80px] h-[80px] bg-[#363636]'>
                            <img src="./solidity.svg" alt="" />
                        </div>
                        <p className='mt-2 text-[#363636]'>Solidity</p>
                    </div>
                </div>
        </div>

    </div>
  )
}
