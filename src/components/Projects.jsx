import React from 'react'
import image from '../Images/Architecture.jpg'
import HomeBase from '../Images/HomeBase.jpg'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <div>
            <div className=' bg-[#121212]' id='Projects'>
                <div className='-mt-1 mr-4 sm:mr-6 md:mr-10 lg:mr-20 ml-4 sm:ml-60 md:ml-64 lg:ml-96 py-4 sm:py-6 md:py-8 lg:py-10 text-white'>
                    <div className=' flex items-center gap-3'>
                        <h1 className='font-Garamond text-xl'>Projects</h1>

                        <h3 className=' ml-[40%] sm:ml-[55%] font-Garamond text-lg'> <Link to='/projectsMain'>See all Projects </Link></h3>
                        <Link to='/projectsMain'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg></Link>

                    </div>
                    <div className=' mt-3 w-[80%] border border-b-0 border-white'></div>

                    <div className=' sm:flex items-center mt-8 sm:mt-10 md:mt-16 lg:mt-20'>
                        <a href="https://shreearchitectures.netlify.app/" target='_blank'>    <img src={image} alt="project Image" className='  w-60 sm:w-48 md:w-60 lg:w-80 h-36 sm:h-48 md:h-60 lg:h-80 object-cover active:scale-105 active:shadow-2xl duration-500 active:shadow-white sm:hover:scale-105 sm:duration-700 rounded-lg ml-2' /></a>
                        <div className='mt-3 sm:mt-0 ml-2 sm:ml-5'>
                            <h3 className=' font-Asul text-gray-300 text-sm sm:text-base '>Website Building</h3>
                            <h1 className=' font-Asul text-xl sm:text-3xl mt-1'>Shree Architecture Website</h1>
                            <p className=' font-Asul text-sm sm:text-base mt-2 text-gray-400'>This website is built using React, HTML, and Tailwind CSS.</p>
                        </div>
                    </div>

                    <div className=' sm:flex items-center mt-8 sm:mt-10 md:mt-16 lg:mt-20'>
                        <a href="https://github.com/errahulrp/TezosHomebase.io" target='_blank'><img src={HomeBase} alt="project Image" className='  w-60 sm:w-48 md:w-60 lg:w-80 h-36 sm:h-48 md:h-60 lg:h-80 object-cover active:scale-105 active:shadow-2xl duration-500 active:shadow-white sm:hover:scale-105 sm:duration-700 rounded-lg ml-2' /></a>
                        <div className='mt-3 sm:mt-0 ml-2 sm:ml-5'>
                            <h3 className=' font-Asul text-gray-300 text-sm sm:text-base '>Automation Testing</h3>
                            <h1 className=' font-Asul text-xl sm:text-3xl mt-1'>Tezos Homebase blockChain</h1>
                            <p className=' font-Asul text-sm sm:text-base mt-2 text-gray-400'>This website has been tested using JavaScript, Playwright, and MongoDB.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
