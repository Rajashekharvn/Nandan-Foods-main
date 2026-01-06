import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
    return (
        <div className="bg-gray-50 min-h-[80vh] py-12 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-emerald-800 to-emerald-500 bg-clip-text text-transparent mb-3 tracking-tight">
                        Get in Touch
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto font-medium">
                        We'd love to hear from you. Visit our store, give us a call, or drop an email.
                    </p>
                    <div className="h-1.5 w-16 bg-emerald-500 mx-auto rounded-full mt-5 opacity-80"></div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

                    {/* Visual / Image Section - Matches height of right column */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full h-full min-h-[300px] md:min-h-0 group border border-gray-100 order-last md:order-first">
                        <img
                            className='w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110'
                            src={assets.contact_img || "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop"}
                            alt="Contact Us"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
                            <div>
                                <h3 className="text-white text-2xl font-bold mb-1">Nandan Foods</h3>
                                <p className="text-emerald-50 text-base font-medium tracking-wide opacity-90">Always fresh, always best.</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info Cards */}
                    <div className="flex flex-col gap-5 h-full justify-center">

                        {/* Location Card */}
                        <div className="bg-white p-7 rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-emerald-100 transition-all duration-300 group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                            <div className="relative flex items-start gap-5">
                                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">Visit Our Store</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4 text-sm font-medium">
                                        Nirmal Jothi Nilaya, near New Bus Stand<br />
                                        Jaynagar, Shiggaon - 581205
                                    </p>
                                    <a
                                        href="https://maps.app.goo.gl/TFktq6DKmnjw7Nvx8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-emerald-600 font-bold hover:text-emerald-700 hover:underline gap-1.5 text-sm group/link"
                                    >
                                        View on Google Maps
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Details Grid (Phone & Email) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {/* Phone Card */}
                            <div className="bg-white p-6 rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-blue-100 transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                <div className="relative">
                                    <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">Call Us</h4>
                                    <div className="space-y-2">
                                        <div>
                                            <p className='text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5'>Store 1</p>
                                            <a href="tel:+919380031861" className="block text-gray-700 font-semibold hover:text-blue-600 transition-colors text-sm hover:translate-x-1 duration-200 inline-block">+91 93800 31861</a>
                                        </div>
                                        <div>
                                            <p className='text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5'>Store 2</p>
                                            <a href="tel:+916362981088" className="block text-gray-700 font-semibold hover:text-blue-600 transition-colors text-sm hover:translate-x-1 duration-200 inline-block">+91 63629 81088</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div className="bg-white p-6 rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-purple-100 transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                <div className="relative h-full flex flex-col">
                                    <div className="w-10 h-10 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">Email Us</h4>
                                    <div className="mt-auto">
                                        <p className="text-xs text-gray-400 mb-1 font-medium">For inquiries & support</p>
                                        <a href="mailto:nandanfoods@yahoo.com" className="text-gray-700 hover:text-purple-600 transition-colors break-all font-semibold text-sm hover:underline decoration-purple-200 underline-offset-2">nandanfoods@yahoo.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
