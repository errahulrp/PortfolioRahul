import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [menu, setMenu] = useState('close');

    const handleOnClick = (option) => {
        setMenu(option);
    }

    return (
        <div>
            <div className='sm:hidden bg-[#121212] px-8 pt-8 pb-10 '>
                <div className=' text-white ' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={() => handleOnClick('open')} className={` w-6 h-6 ${menu === 'open' ? 'hidden' : ''}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div className=' text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" onClick={() => handleOnClick('close')} stroke="currentColor" className={`w-6 h-6 ${menu === 'close' ? 'hidden' : ''}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className={` fixed z-50 bg-[#121212] w-full h-[330px] -ml-11  ${menu === 'close' ? 'hidden' : ''}`}>
                    <ul className={`  text-white text-xl font-Bellefair px-10 pt-8   ${menu === 'close' ? 'hidden' : ''}`}>
                        <li className='cursor-pointer'>About Me</li>
                        <li className=' mt-3 cursor-pointer'>Experience</li>
                        <li className=' mt-3 cursor-pointer'>Education</li>
                        <li className=' mt-3 cursor-pointer'>Projects</li>
                        <li className=' mt-3 cursor-pointer'>Skills</li>
                        <li className=' mt-3 cursor-pointer'>Contact</li>
                    </ul>
                </div>
            </div>
            <div className=''>
                <div className=' hidden sm:block bg-[#121212] sm:px-16 sm:py-20 md:px-20 md:py-20 lg:px-28 lg:py-28  '>
                    <ul className=' fixed text-white text-3xl font-Bellefair '>
                        <li className='cursor-pointer'> <a href="#AboutMe">About Me</a></li>
                        <li className=' mt-3 cursor-pointer'><a href="#Experience"> Experience</a></li>
                        <li className=' mt-3 cursor-pointer'><a href="#Education">Education</a></li>
                        <li className=' mt-3 cursor-pointer'><a href="#Projects">Projects</a></li>
                        <li className=' mt-3 cursor-pointer'><a href="#Skills">Skills</a></li>
                        <li className=' mt-3 cursor-pointer'><a href="#Contact">Contact</a></li>
                    </ul>
                    <div className=' hidden sm:block '>
                        <div className=' fixed flex gap-6 mt-72 mb-2 items-center '>
                            <div className=' hover:scale-110 '>
                                <a href="https://www.linkedin.com/in/rahul-patil-02b2a2273/" target='_blank' rel='noopener noreferrer'>
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className=' w-6 h-6 '>
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003" fill="#FFFFFF" />
                                    </svg>
                                </a>
                            </div>
                            <div className=' hover:scale-110 '>
                                <a href="https://twitter.com/Raulbyte" target='_blank' rel='noopener noreferrer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className=' w-7 h-7'>
                                        <path d="M 2.8671875 3 L 9.7363281 12.818359 L 2.734375 21 L 5.3808594 21 L 10.919922 14.509766 L 15.460938 21 L 21.371094 21 L 14.173828 10.697266 L 20.744141 3 L 18.138672 3 L 12.996094 9.0097656 L 8.7988281 3 L 2.8671875 3 z" fill="#FFFFFF" />
                                    </svg>
                                </a>
                            </div>
                            <div className=' hover:scale-110 '>
                                <a href="https://github.com/errahulrp" target='_blank' rel='noopener noreferrer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className=' w-7 h-7'>
                                        <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" fill="#FFFFFF" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className='fixed sm:w-36 md:w-36 lg:w-44 mt-[336px]  border border-b-0 border-white rounded-3xl  '></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
