import React from 'react';
import person1 from '../assets/images/person1.jfif';
import person2 from  '../assets/images/person2.jfif'
import person3 from  '../assets/images/person3.jfif'
import { FaStar } from 'react-icons/fa';

const Testmonials = () => {
    return (
        <>
            <section id='testimonials' className='bg-[#001005] py-[5rem]'>
                <h2 className='pb-[4rem] text-center text-[44px] font-bold text-white'>
                    Testimonials
                </h2>
                <div className='flex flex-wrap justify-center gap-8'>
                    <div className='w-[90%] sm:w-[70%] md:w-[45%] lg:w-[27%] border-[4px] rounded-2xl p-4 border-[#00ff51] hover:bg-[#00ff51] hover:text-black hover:transition ease-in-out duration-100 cards'>
                        <div className='w-[30%] h-[40%] md:w-[45%] md:h-[40%] mx-auto my-[1rem]'>
                            <img className='rounded-full w-[100%] h-[100%]' src={person1} alt="profile" />
                        </div>
                        <h1 className='text-[33px] text-center'>Julia</h1>
                        <div className='flex justify-center text-[20px] pb-[15px] text-[#FFFF00]'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className='flex mx-auto w-[80%] pb-[1rem]'>
                            <p className='text-center text-[12px] sm:text-[20px] md:text-[16px] lg:text-[14px]'>
                            Akmal's front-end designs are exceptional. His attention to detail and creativity brought our project to life. Highly recommend!
                            </p>
                        </div>
                    </div>
                    <div className='w-[90%] sm:w-[70%] md:w-[45%] lg:w-[27%] border-[4px] rounded-2xl p-4 border-[#00ff51] hover:bg-[#00ff51] hover:text-black hover:transition ease-in-out duration-100 cards'>
                        <div className='w-[30%] h-[40%] md:w-[45%] md:h-[40%] mx-auto my-[1rem]'>
                            <img className='rounded-full w-[100%] h-[100%]' src={person2} alt="profile" />
                        </div>
                        <h1 className='text-[33px] text-center'>David</h1>
                        <div className='flex justify-center text-[20px] pb-[15px] text-[#FFFF00]'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className='flex mx-auto w-[80%] '>
                            <p className='text-center text-[12px] sm:text-[20px] mb-[12px] md:text-[16px] lg:text-[14px]'>
                            Working with Akmal was a game-changer. His expertise in front-end development transformed our user experience. Outstanding work!
                            </p>
                        </div>
                    </div>
                    <div className='w-[90%] sm:w-[70%] md:w-[45%] lg:w-[27%] border-[4px] rounded-2xl p-4 border-[#00ff51] hover:bg-[#00ff51] hover:text-black hover:transition ease-in-out duration-100 cards'>
                        <div className='w-[30%] h-[40%]  md:w-[45%]  md:h-[40%] mx-auto my-[1rem]'>
                            <img className='rounded-full w-[100%] h-[100%]' src={person3} alt="profile" />
                        </div>
                        <h1 className='text-[33px] text-center'>Michael</h1>
                        <div className='flex justify-center text-[20px] pb-[15px] text-[#FFFF00]'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className='flex mx-auto w-[80%] pb-[4rem]'>
                            <p className='text-center  text-[12px] sm:text-[20px] md:text-[16px] lg:text-[14px]'>
                            Akmal's skills in front-end development are top-notch. He delivered a beautiful, responsive design that exceeded our expectations. Great job!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testmonials;
