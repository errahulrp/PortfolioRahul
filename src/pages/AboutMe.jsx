import React from 'react'
import { Link } from 'react-router-dom'
import image from '../Images/Portfolio.jpg'

const AboutMe = () => {
    return (
        <div>
            <div className=' bg-[#121212] h-auto  '>
                <h1 className=' flex justify-center text-2xl sm:text-3xl mg:text-5xl lg:text-6xl font-Aladin text-white pt-10 sm:pt-20 md:pt-24 lg:pt-28 lg:mr-48 md:mr-40 sm:mr-32 mr-16'> Rahul Patil</h1>
                <div className=' md:flex mx-5 mt-4 '>
                    <div className=' '>
                        <img src={image} alt=" profile image" className=' w-[800px] h-auto object-cover' />
                    </div>
                    <div className='ml-2 lg:ml-5 lg:w-[500px] text-white '>
                        <h3 className=' font-truculenta text-2xl text-gray-400 pt-3 sm:pt-0'>React Developer</h3>
                        <p className=' mt-3 font-truculenta text-xl'>I'm a Software Development Engineer in Test (SDET) with extensive expertise in cutting-edge
                            automation testing tools, API testing, and performance testing across diverse applications. My
                            experience spans iOS mobile apps, web applications, blockchain projects, and data scraping.
                            <br />
                            <div className=' mt-1'></div>
                            I specialize in leveraging trending automation testing tools to ensure top-notch software quality
                            and have a knack for optimizing API and performance testing strategies. My proficiency extends to
                            handling varied application types, ensuring their seamless functionality, reliability, and
                            performance.
                        </p>
                        <p className='mt-3 font-truculenta text-xl hidden lg:block '>
                            With a robust background in quality assurance and a penchant for exploring emerging technologies, I
                            bring a wealth of experience in delivering superior testing solutions to drive efficiency and
                            reliability across software projects.
                        </p>
                    </div>
                </div>
                <div className=' absolute top-10 right-10 text-white'>
                    <Link to='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
