```javascript
import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
    return (
        <div className="bg-gray-50 min-h-[80vh] py-10 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent mb-3">
                        Get in Touch
                    </h2>
                    <p className="text-gray-600 text-base max-w-2xl mx-auto">
                        We'd love to hear from you. Visit us at our store, give us a call, or send us an email.
                    </p>
                    <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full mt-4"></div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    
                    {/* Visual / Image Section */}
                    <div className="relative rounded-2xl overflow-hidden shadow-xl h-[300px] md:h-auto min-h-[400px] group">
                         <img 
                            className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105' 
                            src={assets.contact_img || "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop"} 
                            alt="Contact Us" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                            <p className="text-white text-lg font-medium tracking-wide">Always fresh, always Nandan.</p>
                        </div>
                    </div>

                    {/* Contact Info Cards */}
                    <div className="flex flex-col gap-4">
                        
                        {/* Location Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
                             <div className="flex items-start gap-4">
                                 <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0 group-hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                 </div>
                                 <div>
                                     <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Store</h3>
                                     <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                                        Nirmal Jothi Nilaya, near New Bus Stand<br/>
                                        Jaynagar, Shiggaon - 581205
                                     </p>
                                     <a 
                                        href="https://maps.app.goo.gl/TFktq6DKmnjw7Nvx8" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 hover:underline gap-2 text-sm"
                                     >
                                        View on Google Maps
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                     </a>
                                 </div>
                             </div>
                        </div>

                        {/* Contact Details Grid (Phone & Email) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                             {/* Phone Card */}
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
                                <div className="w-9 h-9 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-3 group-hover:bg-blue-100 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4.5 h-4.5">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                </div>
                                <h4 className="text-base font-bold text-gray-900 mb-1">Call Us</h4>
                                <div className="space-y-0.5">
                                    <p className='text-[10px] text-gray-400 font-medium uppercase'>Store 1</p>
                                    <a href="tel:+919380031861" className="block text-gray-700 font-medium hover:text-emerald-600 transition-colors text-sm">+91 93800 31861</a>
                                    <p className='text-[10px] text-gray-400 font-medium uppercase mt-1'>Store 2</p>
                                    <a href="tel:+916362981088" className="block text-gray-700 font-medium hover:text-emerald-600 transition-colors text-sm">+91 63629 81088</a>
                                </div>
                            </div>

                             {/* Email Card */}
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
                                <div>
                                    <div className="w-9 h-9 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mb-3 group-hover:bg-purple-100 transition-colors">
                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4.5 h-4.5">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <h4 className="text-base font-bold text-gray-900 mb-1">Email Us</h4>
                                    <a href="mailto:nandanfoods@yahoo.com" className="text-gray-600 hover:text-emerald-600 transition-colors break-words font-medium text-sm">nandanfoods@yahoo.com</a>
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
