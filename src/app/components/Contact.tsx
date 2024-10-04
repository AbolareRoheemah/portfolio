'use client'
import React, { useState, ChangeEvent } from 'react';
import { PersonalVideo, LocationOnOutlined, WorkOutlineOutlined } from '@mui/icons-material';
import Link from 'next/link';
import { useAppContext } from "../state/AppContext";

export default function Contact() {
    const topic = useAppContext;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className='flex flex-col items-center justify-start gap-2 pt-2 px-20 pb-20 min-h-screen relative bg-[#0D1117]'>
            <div className='absolute inset-0 bg-[#0a0a0a] opacity-80'></div>
            <div className="flex flex-col items-center justify-center my-12 relative z-10">
                <div className="w-6 h-10 border-2 border-[#6df2db] rounded-full shadow-lg flex items-start justify-center cursor-pointer">
                    <div className='w-[0.5vw] h-[0.5vw] mt-2 rounded-full bg-[#6df2db]'></div>
                </div>
                <div className="w-px h-10 border-l-2 border-dashed border-white-400 mt-2"></div>
                <div className='w-[0.5vw] h-[0.5vw] mt-2 rounded-full bg-white'></div>
            </div>
            <div className='flex flex-col items-center justify-start gap-2 text-center w-full relative z-10'>
                <div className="relative inline-block">
                    <p className='text-[46px] font-medium text-[#6df2db]'>Contact</p>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6df2db] rounded-full">
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-1 h-1 bg-[#6df2db] rounded-full"></div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-1 h-1 bg-[#6df2db] rounded-full"></div>
                    </div>
                </div>
                <p className='text-[16px] text-[#a9acae]'>Have an amazing project? Reach out, let's talk!</p>
                <div className='flex flex-col items-center w-full'>
                    <div className='rounded-tl-[50px] rounded-br-[50px] border-2 border-[#6df2db] w-[max-content] py-2 px-8 mt-10 mb-8'>
                        <h3 className='text-[40px] text-[#6df2db]'>Send Me A Message</h3>
                    </div>
                    <form className='w-[65%] mt-10'>
                        <div className='flex items-center justify-between gap-24 w-full'>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="name" className='text-left mb-4 text-[#2f7267]'>Your name*</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder='Enter your name' 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    className='border-b border-[#6df2db] bg-transparent focus:outline-none text-[#a9acae]'
                                />
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="email" className='text-left mb-4 text-[#2f7267]'>Your email*</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder='Enter your email' 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    className='border-b border-[#6df2db] bg-transparent focus:outline-none text-[#a9acae]'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col w-full mt-10'>
                            <label htmlFor="message" className='text-left mb-4 text-[#2f7267]'>Your message*</label>
                            <textarea 
                                name="message" 
                                placeholder='Enter your message' 
                                value={formData.message} 
                                onChange={handleChange} 
                                className='border-b border-[#6df2db] bg-transparent focus:outline-none text-[#a9acae]'
                            />
                        </div>

                        <div className='flex justify-center mt-14'>
                            <button type='submit' className='flex items-center justify-between gap-4 bg-[#6ff6d7] py-4 px-8 text-[#000] rounded-full font-medium cursor-pointer'>
                                <p>Send Message</p>
                                <img src="/view.svg" alt="" width={24} height={24} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
