import React from 'react'

const Footer = () => {
    return (
        <>
            <section id="footer" className='bg-[#000000] text-white py-10 sm:py-20'>
                <div className="footer container-1 ">
                    <div className="max-w-[400px] sm:max-w-none m-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-10">

                        <div className="1">
                            <h3 className='font-bold text-[22px] mb-8'>
                                About
                            </h3>
                            <ul className='text-[#ffffffb3] mb-8'>
                                <li>
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                </li>
                            </ul>
                            <div className="icons flex gap-4">
                                <a href='https://www.instagram.com/karan._.mistry/' title='Instagram' className="instagram hover:bg-[#3a3a3a]  duration-300 bg-[#212121] cursor-pointer rounded-full p-2.5 h-[48px] w-[48px] flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill='#ffffff' height="30px" width="40px" id="instagram"><path d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"></path><path d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"></path><circle cx="12.3" cy="3.7" r=".533"></circle></svg>
                                </a>
                                <a href='https://www.facebook.com/karan.mistry.946954' title='Facebook' className="facebook hover:bg-[#3a3a3a]  duration-300 bg-[#212121] cursor-pointer rounded-full p-2.5 h-[48px] w-[48px] flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="40px" width="40px" fill='#ffffff' id="facebook"><path fill-rule="evenodd" d="M12 5.5H9v-2a1 1 0 0 1 1-1h1V0H9a3 3 0 0 0-3 3v2.5H4V8h2v8h3V8h2l1-2.5z" clip-rule="evenodd"></path></svg>
                                </a>
                                <a href='https://www.linkedin.com/in/karan-mistry-506a83238/' title='Linkedin' className="linkedin hover:bg-[#3a3a3a] duration-300  bg-[#212121] cursor-pointer rounded-full p-3 h-[48px] w-[48px] flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" fill='#ffffff' viewBox="0 5 1036 990" id="linkedin"><path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"></path></svg>
                                </a>
                            </div>
                        </div>

                        <div className="2 sm:order-3 lg:order-none">
                            <h3 className='font-bold text-[22px] mb-8'>
                                Links
                            </h3>
                            <ul className='text-[#ffffffb3] mb-8 flex flex-col gap-3'>
                                <li>
                                    <a href="#home" className='flex items-center gap-2 hover:text-white duration-300 hover:font-semi-bold'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffffb3" width="20px" height="20px" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Line" class="icon flat-line"><line id="primary" x1="3" y1="12" x2="21" y2="12" style={{ fill: 'none', stroke: '#ffffffb3', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }} /><polyline id="primary-2" data-name="primary" points="18 15 21 12 18 9" style={{ fill: 'none', stroke: '#ffffffb3', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' }} /></svg>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#about-me" className='flex items-center gap-2 hover:text-white duration-300 hover:font-semi-bold'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffffb3" width="20px" height="20px" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Line" class="icon flat-line"><line id="primary" x1="3" y1="12" x2="21" y2="12" style={{ fill: 'none', stroke: '#ffffffb3', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }} /><polyline id="primary-2" data-name="primary" points="18 15 21 12 18 9" style={{ fill: 'none', stroke: '#ffffffb3', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' }} /></svg>
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#resume" className='flex items-center gap-2 hover:text-white duration-300 hover:font-semi-bold'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffffb3" width="20px" height="20px" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Line" class="icon flat-line"><line id="primary" x1="3" y1="12" x2="21" y2="12" style={{ fill: 'none', stroke: '#ffffffb3', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }} /><polyline id="primary-2" data-name="primary" points="18 15 21 12 18 9" style={{ fill: 'none', stroke: '#ffffffb3', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' }} /></svg>
                                        Resume
                                    </a>
                                </li>
                                <li>
                                    <a href="#services" className='flex items-center gap-2 hover:text-white duration-300 hover:font-semi-bold'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffffb3" width="20px" height="20px" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Line" class="icon flat-line"><line id="primary" x1="3" y1="12" x2="21" y2="12" style={{ fill: 'none', stroke: '#ffffffb3', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }} /><polyline id="primary-2" data-name="primary" points="18 15 21 12 18 9" style={{ fill: 'none', stroke: '#ffffffb3', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' }} /></svg>
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className='flex items-center gap-2 hover:text-white duration-300 hover:font-semi-bold'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffffb3" width="20px" height="20px" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Line" class="icon flat-line"><line id="primary" x1="3" y1="12" x2="21" y2="12" style={{ fill: 'none', stroke: '#ffffffb3', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }} /><polyline id="primary-2" data-name="primary" points="18 15 21 12 18 9" style={{ fill: 'none', stroke: '#ffffffb3', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' }} /></svg>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="3">
                            <h3 className='font-bold text-[22px] mb-8'>
                                Services
                            </h3>
                            <ul className='text-[#ffffffb3] mb-8 flex flex-col gap-3'>
                                <li>
                                    <a href="#services" className='flex items-center gap-2 hover:text-white duration-300 hover:font-semi-bold'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffffb3" width="20px" height="20px" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Line" class="icon flat-line"><line id="primary" x1="3" y1="12" x2="21" y2="12" style={{ fill: 'none', stroke: '#ffffffb3', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }} /><polyline id="primary-2" data-name="primary" points="18 15 21 12 18 9" style={{ fill: 'none', stroke: '#ffffffb3', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' }} /></svg>
                                        Python Developer
                                    </a>
                                </li>
                                <li>
                                    <a href="#services" className='flex items-center gap-2 hover:text-white duration-300 hover:font-semi-bold'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffffb3" width="20px" height="20px" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Line" class="icon flat-line"><line id="primary" x1="3" y1="12" x2="21" y2="12" style={{ fill: 'none', stroke: '#ffffffb3', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }} /><polyline id="primary-2" data-name="primary" points="18 15 21 12 18 9" style={{ fill: 'none', stroke: '#ffffffb3', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' }} /></svg>
                                        Django Developer
                                    </a>
                                </li>
                                <li>
                                    <a href="#services" className='flex items-center gap-2 hover:text-white duration-300 hover:font-semi-bold'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffffb3" width="20px" height="20px" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Line" class="icon flat-line"><line id="primary" x1="3" y1="12" x2="21" y2="12" style={{ fill: 'none', stroke: '#ffffffb3', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }} /><polyline id="primary-2" data-name="primary" points="18 15 21 12 18 9" style={{ fill: 'none', stroke: '#ffffffb3', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' }} /></svg>
                                        Full Stack Developer
                                    </a>
                                </li>
                                <li>
                                    <a href="#services" className='flex items-center gap-2 hover:text-white duration-300 hover:font-semi-bold'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffffb3" width="20px" height="20px" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Line" class="icon flat-line"><line id="primary" x1="3" y1="12" x2="21" y2="12" style={{ fill: 'none', stroke: '#ffffffb3', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }} /><polyline id="primary-2" data-name="primary" points="18 15 21 12 18 9" style={{ fill: 'none', stroke: '#ffffffb3', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' }} /></svg>
                                        Frappe Developer
                                    </a>
                                </li>
                                <li>
                                    <a href="#services" className='flex items-center gap-2 hover:text-white duration-300 hover:font-semi-bold'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffffb3" width="20px" height="20px" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Line" class="icon flat-line"><line id="primary" x1="3" y1="12" x2="21" y2="12" style={{ fill: 'none', stroke: '#ffffffb3', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }} /><polyline id="primary-2" data-name="primary" points="18 15 21 12 18 9" style={{ fill: 'none', stroke: '#ffffffb3', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' }} /></svg>
                                        ERPNext Developer
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="4 sm:order-4 lg:order-none">
                            <h3 className='font-bold text-[22px] mb-8'>
                                Have a Questions?
                            </h3>
                            <ul className='text-[#ffffffb3] mb-8 flex flex-col gap-3'>
                                <li className='flex items-start gap-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.0" id="Layer_1" width="40px" height="40px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xmlSpace="preserve">
                                        <path fill="#ffffff" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24  C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24  C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z" />
                                    </svg>
                                    <p>
                                        203 Fake St. Mountain View, San Francisco, California, USA
                                    </p>
                                </li>
                                {/* <li className='flex items-center gap-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                                        <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#ffffff" />
                                    </svg>
                                    <p>
                                        +91 9857894852
                                    </p>
                                </li> */}
                                <li className='flex items-center gap-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="24px" height="24px" viewBox="0 0 24 24"><path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z" /></svg>
                                    <p>
                                        ksmistry007@gmail.com
                                    </p>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="copyright text-center mt-4 sm:mt-8 text-[#ffffffb3] text-sm sm:text-base">
                        <p className='sm:inline'>
                            Designed and Developed by <a href="" className='font-bold text-white'>Karan Mistry</a>
                        </p>
                        <span className='hidden sm:inline'> | </span>
                        <p className='sm:inline'>
                            Designed Inspired By <a href="https://colorlib.com/" className='font-bold text-white'>Colorlib</a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer