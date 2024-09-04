import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaCopyright } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
            <footer className='bg-[#080808] text-white'>
                <div className='flex py-[14px] justify-center gap-8 '>
                    <a className='ancher rounded-full border-2 p-[7px] border-[#00ff51] text-[#00ff51] hover:text-white
                            hover:bg-[#00ff51]
                            hover:transition ease-in-out duration-1000 scale-100' href="https://www.linkedin.com/in/akmal-hussain-26804b2b6/"><FaLinkedin /></a>
                    <a className='ancher rounded-full border-2 p-[7px] border-[#00ff51] text-[#00ff51] hover:text-white
                            hover:transition ease-in-out duration-1000 scale-100 hover:bg-[#00ff51]' href="https://github.com/Pro-Xrammer"><FaGithub /></a>
                    <a className='ancher rounded-full border-2 p-[7px] border-[#00ff51]  text-[#00ff51] hover:text-white
                            hover:transition ease-in-out duration-1000 scale-100 hover:bg-[#00ff51]' href="https://www.instagram.com/akmalhussain270/"><BsInstagram /></a>
                    <a className='ancher rounded-full border-2 p-[7px] border-[#00ff51]  text-[#00ff51] hover:text-white hover:transition ease-in-out duration-1000 scale-100 hover:bg-[#00ff51]' href="https://www.facebook.com/profile.php?id=100026242774614"><FaFacebook /></a>
                </div>
                <div className=' md:w-[20%] font-semibold w-[60%]  justify-between flex mx-auto'>
                <h2><a href="">FAQ</a></h2>
                <h2><a href="">Services</a></h2>
                <h2><a href="">About</a></h2>
                <h2><a href="">Contact</a></h2>
                </div>
                <div className='flex justify-center text-[14px] py-[10px] items-center gap-2'>
                    <h2 className=''><FaCopyright /></h2>
                    <h2 className=''>Akmal Hussain | all rights reserved</h2>
                </div>
            </footer>
        </>
    )
}

export default Footer