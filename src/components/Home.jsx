import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className=' bg-[#121212]'  >
            <div className=' flex flex-col justify-center  mr-4 sm:mr-6 md:mr-10 lg:mr-20 ml-4 sm:ml-60 md:ml-64 lg:ml-96 -mt-5 sm:-mt-20 md:-mt-20 lg:-mt-[108px] text-white 'id='AboutMe' >
                <div className=' font-Garamond text-md text-gray-400 '>Software Developer React</div>
                <h1 className=' mt-3 text-3xl sm:text-4xl font-truculenta'> Rahul Patil</h1>
                <p className=' font-Asul mt-4 mr-4 sm:mr-6 md:mr-10 text-gray-400 text-sm sm:text-base'>
                    Hello! I'm a Software Development Engineer in Test with a year of hands-on experience in both
                    Automation and Manual testing realms. Within Automation Testing, I've honed my skills in Playwright,
                    Cypress, and Puppeteer using JavaScript, alongside wielding the Selenium Testing Tool with Java.

                    My passion lies in consistently delivering uncompromising software quality. I'm driven by a
                    commitment to excellence and thrive on ensuring seamless, robust, and top-tier software solutions.
<br />
                    Let's embark on a journey of flawless software quality together!
                </p>
                <div className='mt-5 font-Asul text-gray-400'>
                    <Link to='/AboutMe'> <p className=' flex items-center gap-3'> Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg></p>  </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
