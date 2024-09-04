import React from 'react';

const Contact = () => {
    return (
        <>
            <section id='contact' className='py-[4rem] bg-[#001005]'>
                <h2 className='text-[44px] font-bold text-center'>
                    Contact <span className='text-[#00ff51]'>Me</span>
                </h2>

                <div className='flex flex-col md:flex-row  w-[90%] md:w-[65%] mx-auto justify-between py-2 mt-[4rem] px-4 md:px-[3.5rem] my-[1rem]'>
                    <div className='flex-1 md:pr-[2rem]'>
                        <form>
                            <input
                                type="text"
                                placeholder='Full Name'
                                className='border-[#00ff51] bg-black rounded-lg border-2 py-4 pr-[4.9rem]  pl-[10px] w-full my-[1rem]'
                            />
                            <input
                                type="email"
                                placeholder='Email'
                                className='border-[#00ff51] bg-black rounded-lg border-2 py-4  pr-[4.9rem]  pl-[10px] w-full my-[1rem]'
                            />
                            <input
                                type="text"
                                placeholder='Phone No'
                                className='border-[#00ff51] bg-black rounded-lg border-2 py-4 pr-[4.9rem]  pl-[10px] w-full my-[1rem]'
                            />
                            <input
                                type="text"
                                placeholder='Subject'
                                className='border-[#00ff51] bg-black rounded-lg border-2 py-4  pr-[4.9rem]  pl-[10px] w-full my-[1rem]'
                            />
                        </form>
                    </div>

                    <div className='flex flex-col flex-1 md:pl-[2rem] mt-[1rem] md:mt-0'>
                        <textarea
                            placeholder='Your Message'
                            className='bg-black border-2 border-[#00ff51] rounded-lg md:pb-[5rem] pb-0 md:mt-[1rem] mt-0 px-4 mb-[1rem]  md:w-[100%] w-full'
                            rows="6"
                        />
                        <div className='flex justify-center'>
                            <button
                                className='hire border-2 text-center border-[#00ff51] py-[6px] mt-[2rem] font-bold  md:w-[75%] w-[50%] rounded-full text-black bg-[#00ff51]'
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
