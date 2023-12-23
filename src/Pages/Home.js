import React, { useEffect, useState, useRef } from 'react'
import './Home.css'
import AboutImage from "../Images/karan.jpg"
import Pythonlogo from "../Images/python.png"
import Djangologo from "../Images/django.png"
import Reactlogo from "../Images/react.png"
import Frappelogo from "../Images/frappe.png"
import Erpnextlogo from "../Images/erpnext.png"


const Home = () => {
    return (
        <section id="home">
            {/* banner section  */}
            <section id="banner" className='h-screen flex flex-col justify-center items-center relative'>
                <div className="caption font-[900] text-center">
                    <h6 className="text-[#3e64ff]">
                        HEY! I AM
                    </h6>
                    <h1 className="text-7xl mb-2">
                        Karan <br className='md:hidden' /> Mistry
                    </h1>
                    <h3 className="text-typing text-lg sm:text-2xl">
                        I'm a <span className='text-[#3e64ff] underline underline-offset-4'>Full-Stack Developer.</span>
                    </h3>
                    <button onClick={(e) => {
                        document.querySelector("#resume").scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }} className="btn mt-5 h-20 w-20 bg-[#ebefff] rotate-[45deg] justify-center items-center relative">
                        <span className='w-full h-full flex justify-center items-center down-arrow'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='rotate-180' width="20px" fill='#3e64ff' viewBox="0 0 32 32"><path d="M3.41 2H16V0H1a1 1 0 0 0-1 1v16h2V3.41l28.29 28.3 1.41-1.41z" data-name="7-Arrow Up" /></svg>
                        </span>
                    </button>
                </div>
                <div className="overlay bg-[#ebefff] h-screen w-1/2 absolute z-[-1] top-0 left-0">
                </div>
            </section>

            {/* about me section  */}
            <section id="about-me">
                <div className="container-1 ">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="1 w-full self-start mt-5 md:m-0">
                            <img className='object-cover w-[100%] ml-auto' src={AboutImage} alt="" />
                        </div>
                        <div className="2 w-full">
                            <div className="my-5 md:my-0 md:px-10">
                                <h2 className="text-3xl sm:text-5xl font-bold lg:mb-5">
                                    About Me
                                </h2>
                                <p className="my-2.5 md:my-0 text-[#999999] lg:my-5">
                                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                </p>

                                <table className='my-2.5 md:my-0 text-left lg:my-5'>
                                    <tbody>

                                        <tr>
                                            <th className='pr-2.5 sm:pr-5 pb-2.5'>
                                                Name:
                                            </th>
                                            <td className='text-[#999999]'>
                                                Karan Mistry
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className='pr-2.5 sm:pr-5 pb-2.5'>
                                                Date of birth:
                                            </th>
                                            <td className='text-[#999999]'>
                                                January 25, 2002
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className='pr-2.5 sm:pr-5 pb-2.5'>
                                                Address:
                                            </th>
                                            <td className='text-[#999999]'>
                                                Ahmedabad Gujrat
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className='pr-2.5 sm:pr-5 pb-2.5'>
                                                Email:
                                            </th>
                                            <td className='text-[#999999]'>
                                                ksmistry007@gmail.com
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className='pr-2.5 sm:pr-5 pb-2.5'>
                                                Phone:
                                            </th>
                                            <td className='text-[#999999]'>
                                                +91 7485966965
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <h6 className="my-2.5 text-xl font-medium lg:my-5">
                                    <span className='text-[#3e64ff]'>120</span> Project complete
                                </h6>

                                <button className="my-2.5 md:my-0 cv mt-5 bg-[#3e64ff] border border-[#3e64ff] hover:bg-white hover:text-[#3e64ff] transition-all duration-300 p-4 rounded-full text-white font-bold text-sm ">
                                    DOWNLOAD CV
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" grid justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-5 md:my-10">
                        <a href="">
                            <img className='' src={Pythonlogo} alt="" />
                        </a>
                        <a href="">
                            <img className='' src={Djangologo} alt="" />
                        </a>
                        <a href="">
                            <img className='' src={Reactlogo} alt="" />
                        </a>
                        <a href="">
                            <img className='' src={Frappelogo} alt="" />
                        </a>
                        <a href="">
                            <img className='' src={Erpnextlogo} alt="" />
                        </a>
                    </div>
                </div>
            </section>


            {/* resume section  */}
            <section id="resume">
                <div className="container-1">
                    <div className="flex">

                        {/* <div className="left-bar flex flex-col font-bold gap-4">
                            <a href="" className="education">
                                Education
                            </a>
                            <a href="" className="experience">
                                Experience
                            </a>
                            <a href="" className="skills">
                                Skills
                            </a>
                            <a href="" className="awards">
                                Awards
                            </a>
                        </div> */}

                        <div className="content w-full">
                            <div id="education">
                                <h2 className="text-[#3e64ff] font-bold text-3xl my-10">
                                    Education
                                </h2>
                                <div className="1 flex gap-2 sm:gap-5 flex-col sm:flex-row my-5 lg:my-8">
                                    <div className="bg-[#3e64ff] w-fit h-fit p-3 rounded-full">
                                        <svg width="24" height="24" className='scale-[1.2]' fill='white' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12.5 17.52c1.415-1.054 3.624-1.846 5.5-2v6.479c-1.739.263-3.755 1.104-5.5 2v-6.479zm-1 0c-1.415-1.054-3.624-1.846-5.5-2v6.479c1.739.263 3.755 1.104 5.5 2v-6.479zm-6.5 2.917c-2.049-.674-2.996-1.437-2.996-1.437l-.004-2.025c-.008-2.127.088-3.344 2.648-3.909 2.805-.619 5.799-1.317 4.241-3.521-3.901-5.523-.809-9.545 3.111-9.545 3.921 0 6.996 3.991 3.11 9.545-1.529 2.185 1.376 2.888 4.242 3.521 2.57.568 2.657 1.791 2.647 3.934l-.003 2s-.947.763-2.996 1.437v-6.003l-1.082.089c-2.054.169-4.36 1.002-5.918 2.128-1.559-1.126-3.863-1.959-5.918-2.128l-1.082-.089v6.003z" /></svg>
                                    </div>
                                    <div className="text">
                                        <h6 className="text-[#3e64ff] font-extrabold ">
                                            2017-2018
                                        </h6>
                                        <h2 className='text-3xl font-bold'>
                                            Secondary School Certificate
                                        </h2>
                                        <h6 className='font-bold text-lg sm:mt-2'>
                                            NUTAN VIDHYA VIHAR HIGHER SECONDRY SCHOOL
                                        </h6>
                                        <p className='text-[#999999]'>
                                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                        </p>
                                    </div>
                                </div>

                                <div className="2 flex gap-2 sm:gap-5 flex-col sm:flex-row my-5 lg:my-8">
                                    <div className="bg-[#3e64ff] w-fit h-fit p-3 rounded-full">
                                        <svg width="24" height="24" className='scale-[1.2]' xmlns="http://www.w3.org/2000/svg" fill='white'><path d="M24 21h-3l1-3h1l1 3zm-12.976-4.543l8.976-4.575v6.118c-1.007 2.041-5.607 3-8.5 3-3.175 0-7.389-.994-8.5-3v-6.614l8.024 5.071zm11.976.543h-1v-7.26l-10.923 5.568-11.077-7 12-5.308 11 6.231v7.769z" /></svg>
                                    </div>
                                    <div className="text">
                                        <h6 className="text-[#3e64ff] font-extrabold ">
                                            2018-2019
                                        </h6>
                                        <h2 className='text-3xl font-bold'>
                                            Higher Secondary School Certificate
                                        </h2>
                                        <h6 className='font-bold text-lg sm:mt-2'>
                                            NUTAN VIDHYA VIHAR HIGHER SECONDRY SCHOOL
                                        </h6>
                                        <p className='text-[#999999]'>
                                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                        </p>
                                    </div>
                                </div>

                                <div className="3 flex gap-2 sm:gap-5 flex-col sm:flex-row my-5 lg:my-8">
                                    <div className="bg-[#3e64ff] w-fit h-fit p-3 rounded-full">
                                        <svg width="24" height="24" className='scale-[1.2]' fill='white' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.517 24h-11.646c.522-3.035.897-6.162-.422-8.028-1.666-2.357-2.43-4.742-2.449-6.883-.045-5.19 4.231-9.114 10.203-9.089 7.236.03 9.328 6.156 9.773 7.943.34 1.369-.898 1.869-.166 2.702.596.679 1.035 1.364 1.789 2.177.292.315.405.646.401.943-.006.434-.291.798-.748.958-.429.15-.76.32-1.215.443-.145 1.16-.521 2.572-.798 3.557-.737 2.62-2.896 1.059-3.881 2.607-.426.668-.64 1.738-.841 2.67zm-3.844-19h-1.346c-.243.681-.312 1.122-.842 1.341-.53.22-.888-.041-1.545-.353l-.952.952c.311.654.573 1.015.353 1.545-.219.53-.66.599-1.341.841v1.347c.68.242 1.122.312 1.341.842.222.534-.047.902-.353 1.544l.952.952c.652-.309 1.015-.573 1.545-.353v.001c.529.219.599.657.842 1.341h1.346c.243-.682.313-1.121.845-1.343h.001c.526-.219.883.042 1.541.354l.952-.952c-.31-.651-.573-1.014-.354-1.544.219-.529.662-.6 1.342-.842v-1.347c-.688-.244-1.123-.313-1.341-.841-.22-.53.041-.89.353-1.545l-.952-.952c-.651.31-1.014.573-1.545.353-.529-.219-.598-.657-.842-1.341zm-.673 6.667c-.92 0-1.667-.747-1.667-1.667 0-.921.747-1.667 1.667-1.667s1.667.746 1.667 1.667c0 .92-.747 1.667-1.667 1.667z" /></svg>
                                    </div>
                                    <div className="text">
                                        <h6 className="text-[#3e64ff] font-extrabold ">
                                            2019-2023
                                        </h6>
                                        <h2 className='text-3xl font-bold '>
                                            Electronics and Comminication Engineering
                                        </h2>
                                        <h6 className='font-bold text-lg sm:mt-2'>
                                            L.J. INSTITUTE OF ENGINEERING AND TECHNOLOGY
                                        </h6>
                                        <p className='text-[#999999]'>
                                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div id="experience">
                                <h2 className="text-[#3e64ff] font-bold text-3xl my-10">
                                    Experience
                                </h2>
                                <div className="1 flex gap-2 sm:gap-5 flex-col sm:flex-row my-5 lg:my-8">
                                    <div className="bg-[#3e64ff] w-fit h-fit p-3 rounded-full">
                                        <svg width="24" height="24" className='scale-[1.2]' fill='white' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12.5 17.52c1.415-1.054 3.624-1.846 5.5-2v6.479c-1.739.263-3.755 1.104-5.5 2v-6.479zm-1 0c-1.415-1.054-3.624-1.846-5.5-2v6.479c1.739.263 3.755 1.104 5.5 2v-6.479zm-6.5 2.917c-2.049-.674-2.996-1.437-2.996-1.437l-.004-2.025c-.008-2.127.088-3.344 2.648-3.909 2.805-.619 5.799-1.317 4.241-3.521-3.901-5.523-.809-9.545 3.111-9.545 3.921 0 6.996 3.991 3.11 9.545-1.529 2.185 1.376 2.888 4.242 3.521 2.57.568 2.657 1.791 2.647 3.934l-.003 2s-.947.763-2.996 1.437v-6.003l-1.082.089c-2.054.169-4.36 1.002-5.918 2.128-1.559-1.126-3.863-1.959-5.918-2.128l-1.082-.089v6.003z" /></svg>
                                    </div>
                                    <div className="text">
                                        <h6 className="text-[#3e64ff] font-extrabold ">
                                            2022 Jun-July
                                        </h6>
                                        <h2 className='text-3xl font-bold'>
                                            Web Development
                                        </h2>
                                        <h6 className='font-bold text-lg sm:mt-2'>
                                            SoftCoding Solutions
                                        </h6>
                                        <p className='text-[#999999]'>
                                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                        </p>
                                    </div>
                                </div>

                                <div className="2 flex gap-2 sm:gap-5 flex-col sm:flex-row my-5 lg:my-8">
                                    <div className="bg-[#3e64ff] w-fit h-fit p-3 rounded-full">
                                        <svg width="24" height="24" className='scale-[1.2]' xmlns="http://www.w3.org/2000/svg" fill='white'><path d="M24 21h-3l1-3h1l1 3zm-12.976-4.543l8.976-4.575v6.118c-1.007 2.041-5.607 3-8.5 3-3.175 0-7.389-.994-8.5-3v-6.614l8.024 5.071zm11.976.543h-1v-7.26l-10.923 5.568-11.077-7 12-5.308 11 6.231v7.769z" /></svg>
                                    </div>
                                    <div className="text">
                                        <h6 className="text-[#3e64ff] font-extrabold ">
                                            2023 Feb-May
                                        </h6>
                                        <h2 className='text-3xl font-bold'>
                                            Python and Django
                                        </h2>
                                        <h6 className='font-bold text-lg sm:mt-2'>
                                            Unnati Informatics LLP
                                        </h6>
                                        <p className='text-[#999999]'>
                                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                        </p>
                                    </div>
                                </div>

                                <div className="3 flex gap-2 sm:gap-5 flex-col sm:flex-row my-5 lg:my-8">
                                    <div className="bg-[#3e64ff] w-fit h-fit p-3 rounded-full">
                                        <svg width="24" height="24" className='scale-[1.2]' fill='white' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.517 24h-11.646c.522-3.035.897-6.162-.422-8.028-1.666-2.357-2.43-4.742-2.449-6.883-.045-5.19 4.231-9.114 10.203-9.089 7.236.03 9.328 6.156 9.773 7.943.34 1.369-.898 1.869-.166 2.702.596.679 1.035 1.364 1.789 2.177.292.315.405.646.401.943-.006.434-.291.798-.748.958-.429.15-.76.32-1.215.443-.145 1.16-.521 2.572-.798 3.557-.737 2.62-2.896 1.059-3.881 2.607-.426.668-.64 1.738-.841 2.67zm-3.844-19h-1.346c-.243.681-.312 1.122-.842 1.341-.53.22-.888-.041-1.545-.353l-.952.952c.311.654.573 1.015.353 1.545-.219.53-.66.599-1.341.841v1.347c.68.242 1.122.312 1.341.842.222.534-.047.902-.353 1.544l.952.952c.652-.309 1.015-.573 1.545-.353v.001c.529.219.599.657.842 1.341h1.346c.243-.682.313-1.121.845-1.343h.001c.526-.219.883.042 1.541.354l.952-.952c-.31-.651-.573-1.014-.354-1.544.219-.529.662-.6 1.342-.842v-1.347c-.688-.244-1.123-.313-1.341-.841-.22-.53.041-.89.353-1.545l-.952-.952c-.651.31-1.014.573-1.545.353-.529-.219-.598-.657-.842-1.341zm-.673 6.667c-.92 0-1.667-.747-1.667-1.667 0-.921.747-1.667 1.667-1.667s1.667.746 1.667 1.667c0 .92-.747 1.667-1.667 1.667z" /></svg>
                                    </div>
                                    <div className="text">
                                        <h6 className="text-[#3e64ff] font-extrabold ">
                                            2023 July-November
                                        </h6>
                                        <h2 className='text-3xl font-bold '>
                                            Python Developer Trainee
                                        </h2>
                                        <h6 className='font-bold text-lg sm:mt-2'>
                                            Sanskar Technolab
                                        </h6>
                                        <p className='text-[#999999]'>
                                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                        </p>
                                    </div>
                                </div>

                                <div className="4 flex gap-2 sm:gap-5 flex-col sm:flex-row my-5 lg:my-8">
                                    <div className="bg-[#3e64ff] w-fit h-fit p-3 rounded-full">
                                        <svg width="24" height="24" className='scale-[1.2]' fill='white' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.517 24h-11.646c.522-3.035.897-6.162-.422-8.028-1.666-2.357-2.43-4.742-2.449-6.883-.045-5.19 4.231-9.114 10.203-9.089 7.236.03 9.328 6.156 9.773 7.943.34 1.369-.898 1.869-.166 2.702.596.679 1.035 1.364 1.789 2.177.292.315.405.646.401.943-.006.434-.291.798-.748.958-.429.15-.76.32-1.215.443-.145 1.16-.521 2.572-.798 3.557-.737 2.62-2.896 1.059-3.881 2.607-.426.668-.64 1.738-.841 2.67zm-3.844-19h-1.346c-.243.681-.312 1.122-.842 1.341-.53.22-.888-.041-1.545-.353l-.952.952c.311.654.573 1.015.353 1.545-.219.53-.66.599-1.341.841v1.347c.68.242 1.122.312 1.341.842.222.534-.047.902-.353 1.544l.952.952c.652-.309 1.015-.573 1.545-.353v.001c.529.219.599.657.842 1.341h1.346c.243-.682.313-1.121.845-1.343h.001c.526-.219.883.042 1.541.354l.952-.952c-.31-.651-.573-1.014-.354-1.544.219-.529.662-.6 1.342-.842v-1.347c-.688-.244-1.123-.313-1.341-.841-.22-.53.041-.89.353-1.545l-.952-.952c-.651.31-1.014.573-1.545.353-.529-.219-.598-.657-.842-1.341zm-.673 6.667c-.92 0-1.667-.747-1.667-1.667 0-.921.747-1.667 1.667-1.667s1.667.746 1.667 1.667c0 .92-.747 1.667-1.667 1.667z" /></svg>
                                    </div>
                                    <div className="text">
                                        <h6 className="text-[#3e64ff] font-extrabold ">
                                            2023 November-Present
                                        </h6>
                                        <h2 className='text-3xl font-bold '>
                                            Full-Stack Developer
                                        </h2>
                                        <h6 className='font-bold text-lg sm:mt-2'>
                                            Sanskar Technolab
                                        </h6>
                                        <p className='text-[#999999]'>
                                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </section>

    )
}

export default Home
