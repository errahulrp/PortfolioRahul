import React from 'react'

const Experience = () => {
    return (
        <div className=' bg-[#121212]' id='Experience'>
            <div className='-mt-1 mr-4 sm:mr-6 md:mr-10 lg:mr-20 ml-4 sm:ml-60 md:ml-64 lg:ml-96 py-4 sm:py-6 md:py-8 lg:py-10 text-white'>
                <h1 className='font-Garamond text-lg sm:text-xl'>Professional Experience</h1>
                <div className=' mt-3 w-[80%] border border-b-0 border-white'></div>
                <div className=' mt-10 font-Asul text-sm text-gray-300'>W3Dev Private Limited, Noida</div>
                <h1 className=' mt-2 font-Asul text-xl sm:text-3xl font-bold'>Software Developer Engineer in Test</h1>
                <p className=' mt-3 font-Asul text-sm text-gray-300'>June 2023-Nov 2023</p>
                <ul className=' mt-5 ml-1 sm:ml-4 text-sm sm:text-base text-gray-400 font-Asul'>
                    <li >~Utilizes automation testing tools such as Playwright, Cypress, Puppeteer, and Selenium.</li>
                    <li >~Excels in Agile and Waterfall methodologies, ensuring timely project delivery.</li>
                    <li >~Skilled in Java, JavaScript, and API Testing for effective testing.</li>
                    <li >~Proficient in project workflow management using Jira, GitHub, and GitLab.</li>
                </ul>
            </div>
        </div>
    )
}

export default Experience
