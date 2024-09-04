import React from 'react'
import { HiOutlineMenu } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { useState } from 'react';
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    function counter() {
        setToggle(!toggle);
    }

    return (
        <>
            <section className=' navbar p-6  bg-[#080808] z-10 fixed w-full'>
                <nav className='flex md:justify-between justify-around items-center md:flex-row flex-col text-center gap-14'>
                    <div className='transition-all ease-out duration-500 hover:scale-110'>
                        <h2 className=' text-[32px] md:pl-[2.5rem] pl-[0px] tracking-wider font-semibold'><span className='text-[#00ff51]'>A</span>kmal</h2>
                    </div>
                    <div className={`  ${toggle ? 'flex md:flex-row flex-col  justify-between font-semibold text-[18px] "} ' : " md:flex justify-around font-medium text-[20px] hidden"} bg gap-[2rem] md:pr-[7rem] pr-[10px]`}>

                        <a className=' hover:text-[#00ff51] hover:transition-all ease-in-out duration-500' href="#home">Home</a>
                        <a className=' hover:text-[#00ff51] hover:transition-all ease-in-out duration-500' href="#about">About</a>
                        <a className='hover:text-[#00ff51] hover:transition-all ease-in-out duration-500' href="#services">Services</a>
                        <a className='hover:text-[#00ff51] hover:transition-all ease-in-out duration-500' href="#testimonials">Testimonials</a>
                        <a className='hover:text-[#00ff51] hover:transition-all ease-in-out duration-500' href="#contact">Contact</a>
                    </div>
                </nav>
                <div className={'absolute top-8 right-8 md:hidden block'} onClick={counter}>
                    {toggle ? <ImCross /> : <HiOutlineMenu />}
                </div>
            </section>

        </>
    )
}

export default Navbar