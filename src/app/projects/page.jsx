import React from 'react'
import { PersonalVideo, LocationOnOutlined, WorkOutlineOutlined } from '@mui/icons-material';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className='flex flex-col items-center justify-start gap-2 pt-2 px-4 md:px-20 pb-20 h-screen relative'>
        <div className=''>
            <h1 className='text-center text-[60px] md:text-[98px] font-medium text-[#6df2db]'>&lt;/&gt;</h1>
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
                <Link href="https://vizientcoop.com/">
                    <div className="relative group">
                        <div className="absolute top-0 left-0 w-[95%] h-full bg-[#9BF9F3] rounded-tl-[100px] rounded-br-[100px] -z-10 transform -translate-x-[4px] -translate-y-[4px]"></div>
                        <div className="leaf-shaped pt-8 pb-12 px-4 md:px-6 border-2 flex flex-col items-left justify-start bg-[#0D1117] rounded-tl-[100px] rounded-br-[100px] relative z-10 w-[95%] md:w-[360px]">
                            <div className='flex flex-col items-center justify-start'>
                            <div className="w-full h-[200px] md:h-[250px] rounded-tl-[100px] rounded-br-[100px] opacity-80 group-hover:opacity-100 bg-cover bg-center bg-no-repeat border-2 border-[#6EF4E6] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer" style={{backgroundImage: "url('/portfolio-sc.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                            </div>
                            <div className='mt-6 text-[#9B9EA1]'>
                                <div className='flex items-start justify-start mb-4 gap-2'> 
                                    <p><WorkOutlineOutlined className='text-[#6AECD9]' /></p>
                                    <p className='text-left'><span className='text-[#6df2db] text-[16px]'>My portfolio</span> - Assets management and investment platform</p>
                                </div>
                                <div className='flex items-start justify-start gap-4 mb-4'>
                                    <img src="/link.svg" alt="" width={24} height={24} />
                                        https://vizientcoop.com
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="https://reablock.com/">
                    <div className="relative group">
                        <div className="absolute top-0 left-0 w-[95%] h-full bg-[#9BF9F3] rounded-tl-[100px] rounded-br-[100px] -z-10 transform -translate-x-[4px] -translate-y-[4px]"></div>
                    <div className="leaf-shaped pt-8 pb-12 px-4 md:px-6 border-2 flex flex-col items-left justify-start bg-[#0D1117] rounded-tl-[100px] rounded-br-[100px] relative z-10 w-[95%] md:w-[360px]">
                        <div className='flex flex-col items-center justify-start'>
                            <div className="w-full h-[200px] md:h-[250px] rounded-tl-[100px] rounded-br-[100px] opacity-80 group-hover:opacity-100 bg-cover bg-center bg-no-repeat border-2 border-[#6EF4E6] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer" style={{backgroundImage: "url('/reablock.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            </div>
                        </div>
                        <div className='mt-6 text-[#9B9EA1]'>
                            <div className='flex items-start justify-start mb-4 gap-2'> 
                                <p><WorkOutlineOutlined className='text-[#6AECD9]' /></p>
                                <p className='text-left'><span className='text-[#6df2db] text-[16px]'>Reablock</span> - Real estate management website</p>
                            </div>
                            <div className='flex items-start justify-start gap-4 mb-4'>
                                <img src="/link.svg" alt="" width={24} height={24} />
                                    https://reablock.com
                            </div>
                        </div>
                    </div>
                    </div>
                </Link>

                <Link href="https://vizientcoop.com/">
                    <div className="relative group">
                        <div className="absolute top-0 left-0 w-[95%] h-full bg-[#9BF9F3] rounded-tl-[100px] rounded-br-[100px] -z-10 transform -translate-x-[4px] -translate-y-[4px]"></div>
                        <div className="leaf-shaped pt-8 pb-12 px-4 md:px-6 border-2 flex flex-col items-left justify-start bg-[#0D1117] rounded-tl-[100px] rounded-br-[100px] relative z-10 w-[95%] md:w-[360px]">
                            <div className='flex flex-col items-center justify-start'>
                                <div className="w-full h-[200px] md:h-[250px] rounded-tl-[100px] rounded-br-[100px] opacity-80 group-hover:opacity-100 bg-cover bg-center bg-no-repeat border-2 border-[#6EF4E6] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer" style={{backgroundImage: "url('/vizientCoop.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                                </div>
                            </div>
                            <div className='mt-6 text-[#9B9EA1]'>
                                <div className='flex items-start justify-start mb-4 gap-2'> 
                                    <p><WorkOutlineOutlined className='text-[#6AECD9]' /></p>
                                    <p className='text-left'><span className='text-[#6df2db] text-[16px]'>Vizient Coop</span> - Assets management and investment platform</p>
                                </div>
                                <div className='flex items-start justify-start gap-4 mb-4'>
                                    <img src="/link.svg" alt="" width={24} height={24} />
                                        https://vizientcoop.com
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-20 mb-14'>

                <Link href="https://web3-learner.vercel.app/">
                    <div className="relative group">
                        <div className="absolute top-0 left-0 w-[95%] h-full bg-[#9BF9F3] rounded-tl-[100px] rounded-br-[100px] -z-10 transform -translate-x-[4px] -translate-y-[4px]"></div>
                    <div className="leaf-shaped pt-8 pb-12 px-4 md:px-6 border-2 flex flex-col items-left justify-start bg-[#0D1117] rounded-tl-[100px] rounded-br-[100px] relative z-10 w-[95%] md:w-[360px]">
                        <div className='flex flex-col items-center justify-start'>
                            <div className="w-full h-[200px] md:h-[250px] rounded-tl-[100px] rounded-br-[100px] opacity-80 group-hover:opacity-100 bg-cover bg-center bg-no-repeat border-2 border-[#6EF4E6] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer" style={{backgroundImage: "url('/web3L.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            </div>
                        </div>
                        <div className='mt-6 text-[#9B9EA1]'>
                            <div className='flex items-start justify-start mb-4 w-full  gap-2'>
                                <p><WorkOutlineOutlined className='text-[#6AECD9]' /></p>
                                <p className='text-left'><span className='text-[#6df2db] text-[16px]'>Web3Learner</span> - The UI of a  platform to learn web3 technologies and languages</p>
                            </div>
                            <div className='flex items-start justify-start gap-4 mb-4'>
                                <img src="/link.svg" alt="" width={24} height={24} />
                                    https://web3-learner.vercel.app
                            </div>
                        </div>
                    </div>
                    </div>
                </Link>

                <Link href="https://smart-word-web.vercel.app/">
                    <div className="relative group">
                        <div className="absolute top-0 left-0 w-[95%] h-full bg-[#9BF9F3] rounded-tl-[100px] rounded-br-[100px] -z-10 transform -translate-x-[4px] -translate-y-[4px]"></div>
                        <div className="leaf-shaped pt-8 pb-12 px-4 md:px-6 border-2 flex flex-col items-left justify-start bg-[#0D1117] rounded-tl-[100px] rounded-br-[100px] relative z-10 w-[95%] md:w-[360px]">
                            <div className='flex flex-col items-center justify-start'>
                                <div className="w-full h-[200px] md:h-[250px] rounded-tl-[100px] rounded-br-[100px] opacity-80 group-hover:opacity-100 bg-cover bg-center bg-no-repeat border-2 border-[#6EF4E6] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer" style={{backgroundImage: "url('/smartword.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                                </div>
                            </div>
                            <div className='mt-6 text-[#9B9EA1]'>
                                <div className='flex items-start justify-start mb-4 gap-2'> 
                                    <p><WorkOutlineOutlined className='text-[#6AECD9]' /></p>
                                    <p className='text-left'><span className='text-[#6df2db] text-[16px]'>Vizient Coop</span> - Assets management and investment platform</p>
                                </div>
                                <div className='flex items-start justify-start gap-4 mb-4'>
                                    <img src="/link.svg" alt="" width={24} height={24} />
                                        https://smart-word-web.vercel.app
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="https://e-volt-drl8.vercel.app/">
                    <div className="relative group">
                        <div className="absolute top-0 left-0 w-[95%] h-full bg-[#9BF9F3] rounded-tl-[100px] rounded-br-[100px] -z-10 transform -translate-x-[4px] -translate-y-[4px]"></div>
                    <div className="leaf-shaped pt-8 pb-12 px-4 md:px-6 border-2 flex flex-col items-left justify-start bg-[#0D1117] rounded-tl-[100px] rounded-br-[100px] relative z-10 w-[95%] md:w-[360px]">
                        <div className='flex flex-col items-center justify-start'>
                            <div className="w-full h-[200px] md:h-[250px] rounded-tl-[100px] rounded-br-[100px] opacity-80 group-hover:opacity-100 bg-cover bg-center bg-no-repeat border-2 border-[#6EF4E6] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer" style={{backgroundImage: "url('/e-vot.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            </div>
                        </div>
                        <div className='mt-6 text-[#9B9EA1]'>
                            <div className='flex items-start justify-start mb-4 gap-2'> 
                                <p><WorkOutlineOutlined className='text-[#6AECD9]' /></p>
                                <p className='text-left'><span className='text-[#6df2db] text-[16px]'>Reablock</span> - Real estate management website</p>
                            </div>
                            <div className='flex items-start justify-start gap-4 mb-4'>
                                <img src="/link.svg" alt="" width={24} height={24} />
                                    https://e-volt-drl8.vercel.app
                            </div>
                        </div>
                    </div>
                    </div>
                </Link>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-20 mb-14'>

            <Link href="https://goshen.vercel.app/">
                <div className="relative group">
                    <div className="absolute top-0 left-0 w-[95%] h-full bg-[#9BF9F3] rounded-tl-[100px] rounded-br-[100px] -z-10 transform -translate-x-[4px] -translate-y-[4px]"></div>
                    <div className="leaf-shaped pt-8 pb-12 px-4 md:px-6 border-2 flex flex-col items-left justify-start bg-[#0D1117] rounded-tl-[100px] rounded-br-[100px] relative z-10 w-[95%] md:w-[360px]">
                        <div className='flex flex-col items-center justify-start'>
                            <div className="w-full h-[200px] md:h-[250px] rounded-tl-[100px] rounded-br-[100px] opacity-80 group-hover:opacity-100 bg-cover bg-center bg-no-repeat border-2 border-[#6EF4E6] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer" style={{backgroundImage: "url('/goshen.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            </div>
                        </div>
                        <div className='mt-6 text-[#9B9EA1]'>
                            <div className='flex items-start justify-start mb-4 w-full  gap-2'>
                                <p><WorkOutlineOutlined className='text-[#6AECD9]' /></p>
                                <p className='text-left'><span className='text-[#6df2db] text-[16px]'>Goshen</span> - A platform to learn non-technical web3 technologies and skills</p>
                            </div>
                            <div className='flex items-start justify-start gap-4 mb-4'>
                                <img src="/link.svg" alt="" width={24} height={24} />
                                    https://goshen.vercel.app
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            </div>
        </div>

    </div>
  )
}
