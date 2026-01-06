import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
    return (
        <div className='flex flex-col justify-center items-center py-10 md:py-16 bg-white min-h-[60vh]'>

            <div className='text-center mb-10 md:mb-16'>
                <p className='text-3xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mb-3'>
                    Contact Us
                </p>
                <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
            </div>

            <div className='flex flex-col md:flex-row justify-center gap-10 md:gap-20 mb-20 max-w-6xl w-full px-6'>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[450px]">
                    <img className='w-full h-full object-cover' src={assets.contact_img || "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop"} alt="Contact Us" />
                </div>

                <div className='flex flex-col justify-center items-start flex-1 gap-8'>
                    <div className='space-y-4'>
                        <h3 className='font-bold text-2xl text-gray-800 flex items-center gap-2'>
                            <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </span>
                            Our Store
                        </h3>
                        <div className='text-gray-600 ml-10'>
                            <p><a href="https://maps.app.goo.gl/TFktq6DKmnjw7Nvx8" target="_blank" rel="noopener noreferrer">
                               Nirmal Jothi Nilaya<br/>
                               near New Bus Stand, Jaynagar<br/>
                               Shiggaon -581205</a></p>
                        </div>
                        <div className='text-gray-600 ml-10 space-y-1'>
                            <p className='flex items-center gap-2'>
                                <span className='font-medium text-gray-800'> Store 1: <a href="tel:+919380031861">+91 93800 31861</a></span>
                            </p>
                            <p className='flex items-center gap-2'>
                                <span className='font-medium text-gray-800'>Store 2: <a href="tel:+916362981088">+91 63629 81088</a></span>
                            </p>
                            <p className='flex items-center gap-2'>
                                <span className='font-medium text-gray-800'>Email: <a href="mailto:nandanfoods@yahoo.com">nandanfoods@yahoo.com</a></span>
                            </p>
                        </div>
                    </div>

                    {/* <div className='w-full h-px bg-gray-200'></div> */}

                    {/* <div className='space-y-4'>
                        <h3 className='font-bold text-2xl text-gray-800 flex items-center gap-2'>
                            <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.632-1.242a2.201 2.201 0 0 1-.672-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                </svg>
                            </span>
                            Careers at Nandan Foods
                        </h3>
                        <p className='text-gray-600 ml-10'>
                            Learn more about our teams and job openings.
                        </p>
                        <button className='ml-10 border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg text-sm font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 transform hover:scale-105'>
                            Explore Jobs
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Contact
