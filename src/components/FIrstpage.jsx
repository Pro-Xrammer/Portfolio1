import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import profile from '../assets/images/profile.jpeg'
const FIrstpage = () => {
    return (
        <>
            <section id='home' className='bg-[#001005] pt-[3.9rem] pb-[4rem]'>

                <div className='flex md:flex-row flex-col-reverse pb-[3rem] justify-between'>

                    <div className=' md:w-[48%] w-[100%] md:pl-[4rem] pl-[1rem] md:text-right text-center '>


                        <h1 className=' md:mt-[10rem] mt-[1rem] flex md:justify-end justify-center pb-[0px] text-[44px] font-bold '>HI It's <span className='text-[#00ff51] pl-[9px] md:text-right text-center'>Akmal</span></h1>
                        <h2 className=' sm:text-[25px] text-[23px] flex md:justify-end justify-center font-semibold pb-[8px]'>I'm a <span className='text-[#00ff51] pl-[9px]'>Frontend developer</span></h2>
                        <p className='pb-[1.4rem]'>I am Akmal Hussain, a devoted Front End Web Developer. I have a love for creating captivating and user-friendly digital experiences, along with over two years of professional expertise in the sector.</p>



                        <div className='flex  md:justify-end justify-center gap-8 pl-2 pb-[1.6rem] '>
                            <a className='ancher rounded-full border-2 p-[7px] border-[#00ff51] text-[#00ff51] hover:text-white
                            hover:bg-[#00ff51]
                            hover:transition ease-in-out duration-1000 scale-100' href="https://www.linkedin.com/in/akmal-hussain-26804b2b6/"><FaLinkedin /></a>
                            <a className='ancher rounded-full border-2 p-[7px] border-[#00ff51] text-[#00ff51] hover:text-white
                            hover:transition ease-in-out duration-1000 scale-100 hover:bg-[#00ff51]' href="https://github.com/Pro-Xrammer"><FaGithub /></a>
                            <a className='ancher rounded-full border-2 p-[7px] border-[#00ff51]  text-[#00ff51] hover:text-white
                            hover:transition ease-in-out duration-1000 scale-100 hover:bg-[#00ff51]' href="https://www.instagram.com/akmalhussain270/"><BsInstagram /></a>
                            <a className='ancher rounded-full border-2 p-[7px] border-[#00ff51]  text-[#00ff51] hover:text-white hover:transition ease-in-out duration-1000 scale-100 hover:bg-[#00ff51]' href="https://www.facebook.com/profile.php?id=100026242774614"><FaFacebook /></a>
                        </div>


                        <div className='flex md:justify-end justify-center gap-8 font-semibold'>
                            <button className='hire border-2 border-[#00ff51] py-[6px] px-[22px] rounded-full text-black bg-[#00ff51]'>Hire</button>
                            <button className='contact border-2 border-[#00ff51] py-[6px] px-[22px] rounded-full  hover:bg-[#00ff51] hover:text-black hover:transition-all ease-in-out duration-500'>Contact</button>
                        </div>
                    </div>

                    <div className='md:w-[48%] w-[100%]  md:mt-[7rem] mt-[3rem] flex  md:justify-start justify-center align-center'>
                        <div className=' image rounded-full md:w-[400px] h-[300px]   sm:w-[400px] w-[300px] sm:h-[400px]'>
                            <img className='md:w-[400px] h-[300px]   sm:w-[400px] w-[300px] sm:h-[400px] rounded-full' src={profile} alt="profile" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FIrstpage