import React from 'react'

export default function About() {
  return (
    <div className='about-ctn pt-2 px-20 pb-20'>
      <div className='z-10'>
        <div className="flex flex-col items-center justify-center mt-12">
            <div className="w-6 h-10 border-2 border-[#6bf6fb] rounded-full shadow-lg flex items-start justify-center cursor-pointer">
            <div className='w-[0.5vw] h-[0.5vw] mt-2 rounded-full bg-[#6bf6fb]'></div>
            </div>
            <div className="w-px h-10 border-l-2 border-dashed border-white-400 mt-2"></div>
            <div className='w-[0.5vw] h-[0.5vw] mt-2 rounded-full bg-white'></div>
        </div>
        <div className='flex items-end justify-between gap-20'>
            <div>
                <div className=' rounded-tl-[50px] rounded-br-[50px] border-2 border-[#6bf6fb] w-[max-content] py-2 px-8 bg-[#0D1117]'>
                    <h3 className='text-[40px]'>About Me</h3>
                </div>
                <div className='bg-[#0D1117] py-6 px-8 mt-10 rounded-[40px]'>
                    <p className='text-sm text-[#6AECD9] mb-4'>&lt;p&gt;</p>
                    <h5 className='text-[#6bf6fb] text-xl font-bold mb-2 ml-4'>Hello!</h5>
                    <p className='mt-4 text-[#979A9D] text-md font-bold ml-4'>My name is Roheemah and I'm a skilled frontend developer. I have about 3 years experience working with languages such as <span className='text-[#6bf6fb]'>HTML, CSS, JS, TS</span> and JS frameworks like <span className='text-[#6bf6fb]'>React, Next, Vue and Nuxt</span></p>
                    <p className='mt-4 text-[#979A9D] text-md font-bold ml-4'>
                        I'm also a blockchain developer. I utilize the <span>solidity</span> language in building secure <span>smart contracts</span>.
                    </p>
                    <p className='mt-4 text-[#979A9D] text-md font-bold ml-4'>
                        I'm a technical/content writer too. Technical writing helps me understand complex topics but generally, writing, for me, is the best way to express myself.
                    </p>
                    <p className='mt-4 text-[#979A9D] text-md font-bold ml-4'>If the opportunity arises, I am also a public speaker. I've had the opportunity to speak at a couple of events, including a tech event organized by the Google Devlopers Students Club (GDSC) in my university</p>
                    <p className='mt-4 text-[#979A9D] text-md font-bold ml-4'>
                        I hate mediocrity, I love travelling, reading self-help books and of course meeting and connecting with people.
                    </p>
                    <p className='text-sm text-[#6AECD9] mt-4'>&lt;/p&gt;</p>
                </div>
            </div>
            <div className='about-me rounded-2xl'>

            </div>
        </div>
      </div>
    </div>
  )
}
