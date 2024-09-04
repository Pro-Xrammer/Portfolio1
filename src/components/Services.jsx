import React from 'react'
import { DiCode } from "react-icons/di";
import { FaMobile } from "react-icons/fa6";
import { SiPagekit } from "react-icons/si";
const Services = () => {
    return (
        <>
            <section id='services' className='bg-[#080808] py-[5rem]'>
                <h2 className='pb-[4rem] text-center text-[44px]  font-bold text-[#00ff51] '>
                    Services
                </h2>
                <div className='flex flex-wrap justify-center gap-8'>
                    <div className='w-[90%] sm:w-[70%] md:w-[45%] lg:w-[27%] border-2 rounded-2xl p-4 border-[#00ff51] hover:bg-black hover:text-[#00ff51] bg-[#00ff51] text-black  hover:transition ease-in-out duration-100  text-center cards'>
                        <div className='flex justify-center pt-4 text-[70px]'>
                            <DiCode />
                        </div>
                        <h2 className='text-[33px] font-bold pt-[10px] leading-[2.4rem]'>API Integration and Customization</h2>
                        <p className='pb-[20px] pt-[44px] mx-auto'>Seamlessly connect your website with third-party services through our custom API integration and customization services. We ensure smooth data exchange and functionality between your site and external platforms</p>
                    </div>
                    <div className='w-[90%] sm:w-[70%] md:w-[45%] lg:w-[27%] border-2 rounded-2xl p-4 border-[#00ff51] hover:bg-black hover:text-[#00ff51]  bg-[#00ff51] text-black  hover:transition ease-in-out duration-100 
                    text-center cards'>
                        <div className='flex justify-center pt-8 text-[50px]'>
                            <FaMobile />
                        </div>
                        <h2 className='text-[33px] font-bold py-[10px]'>Responsive Web Design</h2>
                        <p className='pb-[20px] pt-[15px] mx-auto'>Deliver an exceptional user experience on any device with our responsive web design services. We create websites that seamlessly adapt to various screen sizes and orientations, ensuring your content looks stunning and functions flawlessly on desktops, tablets, and smartphones</p>
                    </div>
                    <div className='w-[90%] sm:w-[70%] md:w-[45%] lg:w-[27%] border-2 rounded-2xl p-4 border-[#00ff51] hover:bg-black hover:text-[#00ff51]  bg-[#00ff51] text-black  hover:transition ease-in-out duration-100 
                    text-center cards'>
                        <div className='flex justify-center pt-8 text-[50px]'>
                            <SiPagekit />
                        </div>
                        <h2 className='text-[33px] font-bold py-[10px]'>Single Page Applications</h2>
                        <p className='pb-[20px] pt-[15px] mx-auto'>Experience the future of web development with our Single Page Applications (SPAs) services. We specialize in creating SPAs that deliver seamless and dynamic user experiences by loading content dynamically without refreshing the entire page.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services