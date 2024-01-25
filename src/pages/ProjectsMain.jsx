import React from 'react'
import { Link } from 'react-router-dom'
import GoogleLighthouse from '../Images/GoogleLightHouse.jpg'
import Dog from '../Images/Dogs.jpg'
import Upwork from '../Images/Upwork.jpg'
import acres from '../Images/99acres.jpg'

const ProjectsMain = () => {
  return (
    <div>
      <div className=' bg-[#121212] h-auto '>
        <div>
          <h1 className=' flex justify-center text-2xl sm:text-3xl mg:text-4xl lg:text-5xl font-Aladin text-white pt-10 sm:pt-20 md:pt-24 lg:pt-28 lg:mr-[680px] md:mr-96 sm:mr-60 mr-16'> Projects</h1>
          <h1 className=' flex justify-center text-xs sm:text-base mg:text-lg font-Asul text-white pt-1 sm:pt-2 md:pt-4 lg:pt-3 lg:mr-[768px] md:mr-[520px] sm:mr-[378px] mr-40'> Collection of my latest projects</h1>
        </div>


        <div className=' flex flex-wrap justify-center'>

          <div className=' flex sm:flex-col items-center  text-white '>
            <a href="https://github.com/errahulrp/GoogleLighthouse" target='_blank'>   <img src={GoogleLighthouse} alt="Project Image" className='w-28 sm:w-44 md:w-72 lg:w-96 h-28 sm:h-44 md:h-72 lg:h-96 object-cover m-10 sm:mb-5 mr-3 sm:mr-0 hover:scale-105 duration-700 rounded-3xl' /> </a>
            <div className=' sm:ml-9'>
              <h3 className=' sm:ml-9   font-truculenta text-sm sm:text-base'>Automation Performance Testing</h3>
              <h1 className=' text-2xl sm:text-3xl font-Asul'>Google LightHouse</h1>
            </div>
          </div>

          <div className=' flex sm:flex-col items-center  text-white '>
            <a href="https://github.com/errahulrp/Dog-s" target='_blank'>   <img src={Dog} alt="Project Image" className='w-28 sm:w-44 md:w-72 lg:w-96 h-28 sm:h-44 md:h-72 lg:h-96 object-cover m-10 sm:mb-5 mr-3 sm:mr-0 hover:scale-105 duration-700 rounded-3xl' /> </a>
            <div className=' sm:ml-9'>
              <h3 className='  font-truculenta text-sm sm:text-base'>Dog's Informative Website</h3>
              <h1 className=' sm:ml-9 text-2xl sm:text-3xl font-Asul'>Dog's</h1>
            </div>
          </div>

          <div className=' flex sm:flex-col items-center  text-white '>
            <img src={Upwork} alt="Project Image" className='w-28 sm:w-44 md:w-72 lg:w-96 h-28 sm:h-44 md:h-72 lg:h-96 object-cover m-10 sm:mb-5 mr-3 sm:mr-0 hover:scale-105 duration-700 rounded-3xl' />
            <div className=' sm:ml-9'>
              <h3 className=' sm:ml-4 font-truculenta text-sm sm:text-base'>Job Scraper</h3>
              <h1 className=' text-2xl sm:text-3xl font-Asul'>Upwork</h1>
            </div>
          </div>

          <div className=' flex sm:flex-col flex-row-reverse ml-[10%] sm:ml-0 items-center  text-white '>
            <img src={acres} alt="Project Image" className='w-28 sm:w-44 md:w-72 lg:w-96 h-28 sm:h-44 md:h-72 lg:h-96 object-cover m-10 sm:mb-5 mr-3 sm:mr-0 hover:scale-105 duration-700 rounded-3xl' />
            <div className=' sm:ml-9'>
              <h3 className=' sm:ml-11 font-truculenta text-sm sm:text-base'>Estate Scraper</h3>
              <h1 className=' sm:ml-8 text-2xl sm:text-3xl font-Asul'>99acres</h1>
            </div>
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

export default ProjectsMain
