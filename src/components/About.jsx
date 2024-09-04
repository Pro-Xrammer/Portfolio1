import React from 'react'
import profile from '../assets/images/profile.jpeg'
const About = () => {
    return (
        <>
            <section id='about' className='flex md:flex-row flex-col py-[8rem]  bg-[#080808]'>

                <div className='md:w-[50%] w-[100%] flex md:justify-end justify-center  items-center md:pr-[2.6rem] pr-[0px]'>
                    <div className=' image rounded-full md:w-[400px] h-[300px]   sm:w-[400px] w-[300px] sm:h-[400px]'>
                        <img className='md:w-[400px] h-[300px] sm:w-[400px] w-[300px] sm:h-[400px] rounded-full' src={profile} alt="profile" />
                    </div>
                </div>

                <div className='md:w-[50%] w-[100%]  flex flex-col  justify-center'>
                    <div>
                        <h2 className='md:pb-[5px] pb-[10px] md:pt-[0px] pt-[10px] text-[49px] md:text-left text-center font-bold'>About <span className='text-[#00ff51]'>Me</span></h2>
                    </div>
                    <div className='pb-[18px] md:w-[80%] w-[97%] leading-6'>
                        <p className='md:text-left text-center'>HTML, CSS, and JavaScript is the beginning of my web development adventure served as the basis for my knowledge base. My area of expertise lies on utilizing frameworks like ReactJS and design libraries like Tailwind CSS to develop modern, responsive websites that satisfy both functional and visual requirements.

                            I enjoy working with teams to produce solutions that go above and beyond.. I welcome you to look through my portfolio and see how my abilities can benefit your upcoming web development project, regardless of whether you're here to see my previous work or to talk about possible partnerships.</p>
                    </div>
                    <div className='flex  md:justify-start justify-center'>
                        <button className=' hire border-2 border-[#00ff51] py-[6px] px-[22px] font-semibold rounded-full text-black bg-[#00ff51]'>Read More</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About