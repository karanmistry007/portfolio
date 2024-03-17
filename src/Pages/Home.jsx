import React, { useEffect, useState, useRef } from 'react'
import './Home.css'
import AboutImage from "../Images/karan.jpg"
import Pythonlogo from "../Images/python.jpg"
import Djangologo from "../Images/django.jpg"
import Reactlogo from "../Images/react.jpg"
import Frappelogo from "../Images/frappe.jpg"
import Erpnextlogo from "../Images/erpnext.jpg"


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
            <section id="about-me" className='my-8 md:my-0'>
                <div className="container-1 ">
                    <div className="flex flex-col-reverse md:flex-row items-center">
                        <div className="1 w-full self-start">
                            <img className='object-cover w-[100%] ml-auto' src={AboutImage} alt="" />
                        </div>
                        <div className="2 w-full">
                            <div className="md:my-0 md:px-10">
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
                                            <td className='text-[#999999] text-sm sm:text-base'>
                                                Karan Mistry
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className='pr-2.5 sm:pr-5 pb-2.5'>
                                                Date of birth:
                                            </th>
                                            <td className='text-[#999999] text-sm sm:text-base'>
                                                January 25, 2002
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className='pr-2.5 sm:pr-5 pb-2.5'>
                                                Address:
                                            </th>
                                            <td className='text-[#999999] text-sm sm:text-base'>
                                                Ahmedabad Gujrat
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className='pr-2.5 sm:pr-5 pb-2.5'>
                                                Email:
                                            </th>
                                            <td className='text-[#999999] text-sm sm:text-base'>
                                                ksmistry007@gmail.com
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className='pr-2.5 sm:pr-5 pb-2.5'>
                                                Phone:
                                            </th>
                                            <td className='text-[#999999] text-sm sm:text-base'>
                                                +91 7485966965
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <h6 className="my-2.5 text-xl font-medium lg:my-5">
                                    <span className='text-[#3e64ff]'>120</span> Project complete
                                </h6>

                                <button className="mt-2.5 mb-8 md:my-0  sm:mt-5 bg-[#3e64ff] border border-[#3e64ff] hover:bg-white hover:text-[#3e64ff] transition-all duration-300 p-3 sm:p-4 rounded-full text-white font-bold text-sm ">
                                    DOWNLOAD CV
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[70%] m-auto sm:max-w-none grid justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-5 my-8 md:my-16">
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
            <section id="resume" className='my-8 md:my-16'>
                <div className="container-1">
                    <div className="flex">
                        <div className="content w-full">
                            <div id="education">
                                <h2 className="text-[#3e64ff] font-bold text-3xl mb-5 sm:mb-10">
                                    Education
                                </h2>
                                <div className="1 flex gap-2 sm:gap-5 flex-col sm:flex-row my-8 lg:my-12">
                                    <div className="bg-[#3e64ff] w-fit h-fit p-3 rounded-full">
                                        <svg width="24" height="24" className='scale-[1.2]' fill='white' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12.5 17.52c1.415-1.054 3.624-1.846 5.5-2v6.479c-1.739.263-3.755 1.104-5.5 2v-6.479zm-1 0c-1.415-1.054-3.624-1.846-5.5-2v6.479c1.739.263 3.755 1.104 5.5 2v-6.479zm-6.5 2.917c-2.049-.674-2.996-1.437-2.996-1.437l-.004-2.025c-.008-2.127.088-3.344 2.648-3.909 2.805-.619 5.799-1.317 4.241-3.521-3.901-5.523-.809-9.545 3.111-9.545 3.921 0 6.996 3.991 3.11 9.545-1.529 2.185 1.376 2.888 4.242 3.521 2.57.568 2.657 1.791 2.647 3.934l-.003 2s-.947.763-2.996 1.437v-6.003l-1.082.089c-2.054.169-4.36 1.002-5.918 2.128-1.559-1.126-3.863-1.959-5.918-2.128l-1.082-.089v6.003z" /></svg>
                                    </div>
                                    <div className="text">
                                        <h6 className="text-[#3e64ff] font-extrabold ">
                                            2017-2018
                                        </h6>
                                        <h2 className='text-2xl sm:text-3xl font-bold'>
                                            Secondary School Certificate
                                        </h2>
                                        <h6 className='font-bold sm:text-lg sm:mt-2'>
                                            NUTAN VIDHYA VIHAR HIGHER SECONDRY SCHOOL
                                        </h6>
                                        <p className='text-[#999999] text-sm sm:text-base'>
                                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                        </p>
                                    </div>
                                </div>

                                <div className="2 flex gap-2 sm:gap-5 flex-col sm:flex-row my-8 lg:my-12">
                                    <div className="bg-[#3e64ff] w-fit h-fit p-3 rounded-full">
                                        <svg width="24" height="24" className='scale-[1.2]' xmlns="http://www.w3.org/2000/svg" fill='white'><path d="M24 21h-3l1-3h1l1 3zm-12.976-4.543l8.976-4.575v6.118c-1.007 2.041-5.607 3-8.5 3-3.175 0-7.389-.994-8.5-3v-6.614l8.024 5.071zm11.976.543h-1v-7.26l-10.923 5.568-11.077-7 12-5.308 11 6.231v7.769z" /></svg>
                                    </div>
                                    <div className="text">
                                        <h6 className="text-[#3e64ff] font-extrabold ">
                                            2018-2019
                                        </h6>
                                        <h2 className='text-2xl sm:text-3xl font-bold'>
                                            Higher Secondary School Certificate
                                        </h2>
                                        <h6 className='font-bold sm:text-lg sm:mt-2'>
                                            NUTAN VIDHYA VIHAR HIGHER SECONDRY SCHOOL
                                        </h6>
                                        <p className='text-[#999999] text-sm sm:text-base'>
                                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                        </p>
                                    </div>
                                </div>

                                <div className="3 flex gap-2 sm:gap-5 flex-col sm:flex-row my-8 lg:my-12">
                                    <div className="bg-[#3e64ff] w-fit h-fit p-3 rounded-full">
                                        <svg width="24" height="24" className='scale-[1.2]' fill='white' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.517 24h-11.646c.522-3.035.897-6.162-.422-8.028-1.666-2.357-2.43-4.742-2.449-6.883-.045-5.19 4.231-9.114 10.203-9.089 7.236.03 9.328 6.156 9.773 7.943.34 1.369-.898 1.869-.166 2.702.596.679 1.035 1.364 1.789 2.177.292.315.405.646.401.943-.006.434-.291.798-.748.958-.429.15-.76.32-1.215.443-.145 1.16-.521 2.572-.798 3.557-.737 2.62-2.896 1.059-3.881 2.607-.426.668-.64 1.738-.841 2.67zm-3.844-19h-1.346c-.243.681-.312 1.122-.842 1.341-.53.22-.888-.041-1.545-.353l-.952.952c.311.654.573 1.015.353 1.545-.219.53-.66.599-1.341.841v1.347c.68.242 1.122.312 1.341.842.222.534-.047.902-.353 1.544l.952.952c.652-.309 1.015-.573 1.545-.353v.001c.529.219.599.657.842 1.341h1.346c.243-.682.313-1.121.845-1.343h.001c.526-.219.883.042 1.541.354l.952-.952c-.31-.651-.573-1.014-.354-1.544.219-.529.662-.6 1.342-.842v-1.347c-.688-.244-1.123-.313-1.341-.841-.22-.53.041-.89.353-1.545l-.952-.952c-.651.31-1.014.573-1.545.353-.529-.219-.598-.657-.842-1.341zm-.673 6.667c-.92 0-1.667-.747-1.667-1.667 0-.921.747-1.667 1.667-1.667s1.667.746 1.667 1.667c0 .92-.747 1.667-1.667 1.667z" /></svg>
                                    </div>
                                    <div className="text">
                                        <h6 className="text-[#3e64ff] font-extrabold ">
                                            2019-2023
                                        </h6>
                                        <h2 className='text-2xl sm:text-3xl font-bold '>
                                            Electronics and Comminication Engineering
                                        </h2>
                                        <h6 className='font-bold sm:text-lg sm:mt-2'>
                                            L.J. INSTITUTE OF ENGINEERING AND TECHNOLOGY
                                        </h6>
                                        <p className='text-[#999999] text-sm sm:text-base'>
                                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div id="experience">
                                <h2 className="text-[#3e64ff] font-bold text-3xl mt-8 md:mt-16 mb-5 sm:mb-10">
                                    Experience
                                </h2>
                                <div className="1 flex gap-2 sm:gap-5 flex-col sm:flex-row my-8 lg:my-12">
                                    <div className="bg-[#3e64ff] w-fit h-fit p-3 rounded-full">
                                        <svg width="24" height="24" className='scale-[1.2]' fill='white' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12.5 17.52c1.415-1.054 3.624-1.846 5.5-2v6.479c-1.739.263-3.755 1.104-5.5 2v-6.479zm-1 0c-1.415-1.054-3.624-1.846-5.5-2v6.479c1.739.263 3.755 1.104 5.5 2v-6.479zm-6.5 2.917c-2.049-.674-2.996-1.437-2.996-1.437l-.004-2.025c-.008-2.127.088-3.344 2.648-3.909 2.805-.619 5.799-1.317 4.241-3.521-3.901-5.523-.809-9.545 3.111-9.545 3.921 0 6.996 3.991 3.11 9.545-1.529 2.185 1.376 2.888 4.242 3.521 2.57.568 2.657 1.791 2.647 3.934l-.003 2s-.947.763-2.996 1.437v-6.003l-1.082.089c-2.054.169-4.36 1.002-5.918 2.128-1.559-1.126-3.863-1.959-5.918-2.128l-1.082-.089v6.003z" /></svg>
                                    </div>
                                    <div className="text">
                                        <h6 className="text-[#3e64ff] font-extrabold ">
                                            2022 Jun-July
                                        </h6>
                                        <h2 className='text-2xl sm:text-3xl font-bold'>
                                            Web Development
                                        </h2>
                                        <h6 className='font-bold sm:text-lg sm:mt-2'>
                                            SoftCoding Solutions
                                        </h6>
                                        <p className='text-[#999999] text-sm sm:text-base'>
                                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                        </p>
                                    </div>
                                </div>

                                <div className="2 flex gap-2 sm:gap-5 flex-col sm:flex-row my-8 lg:my-12">
                                    <div className="bg-[#3e64ff] w-fit h-fit p-3 rounded-full">
                                        <svg width="24" height="24" className='scale-[1.2]' xmlns="http://www.w3.org/2000/svg" fill='white'><path d="M24 21h-3l1-3h1l1 3zm-12.976-4.543l8.976-4.575v6.118c-1.007 2.041-5.607 3-8.5 3-3.175 0-7.389-.994-8.5-3v-6.614l8.024 5.071zm11.976.543h-1v-7.26l-10.923 5.568-11.077-7 12-5.308 11 6.231v7.769z" /></svg>
                                    </div>
                                    <div className="text">
                                        <h6 className="text-[#3e64ff] font-extrabold ">
                                            2023 Feb-May
                                        </h6>
                                        <h2 className='text-2xl sm:text-3xl font-bold'>
                                            Python and Django
                                        </h2>
                                        <h6 className='font-bold sm:text-lg sm:mt-2'>
                                            Unnati Informatics LLP
                                        </h6>
                                        <p className='text-[#999999] text-sm sm:text-base'>
                                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                        </p>
                                    </div>
                                </div>

                                <div className="3 flex gap-2 sm:gap-5 flex-col sm:flex-row my-8 lg:my-12">
                                    <div className="bg-[#3e64ff] w-fit h-fit p-3 rounded-full">
                                        <svg width="24" height="24" className='scale-[1.2]' fill='white' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.517 24h-11.646c.522-3.035.897-6.162-.422-8.028-1.666-2.357-2.43-4.742-2.449-6.883-.045-5.19 4.231-9.114 10.203-9.089 7.236.03 9.328 6.156 9.773 7.943.34 1.369-.898 1.869-.166 2.702.596.679 1.035 1.364 1.789 2.177.292.315.405.646.401.943-.006.434-.291.798-.748.958-.429.15-.76.32-1.215.443-.145 1.16-.521 2.572-.798 3.557-.737 2.62-2.896 1.059-3.881 2.607-.426.668-.64 1.738-.841 2.67zm-3.844-19h-1.346c-.243.681-.312 1.122-.842 1.341-.53.22-.888-.041-1.545-.353l-.952.952c.311.654.573 1.015.353 1.545-.219.53-.66.599-1.341.841v1.347c.68.242 1.122.312 1.341.842.222.534-.047.902-.353 1.544l.952.952c.652-.309 1.015-.573 1.545-.353v.001c.529.219.599.657.842 1.341h1.346c.243-.682.313-1.121.845-1.343h.001c.526-.219.883.042 1.541.354l.952-.952c-.31-.651-.573-1.014-.354-1.544.219-.529.662-.6 1.342-.842v-1.347c-.688-.244-1.123-.313-1.341-.841-.22-.53.041-.89.353-1.545l-.952-.952c-.651.31-1.014.573-1.545.353-.529-.219-.598-.657-.842-1.341zm-.673 6.667c-.92 0-1.667-.747-1.667-1.667 0-.921.747-1.667 1.667-1.667s1.667.746 1.667 1.667c0 .92-.747 1.667-1.667 1.667z" /></svg>
                                    </div>
                                    <div className="text">
                                        <h6 className="text-[#3e64ff] font-extrabold ">
                                            2023 July-November
                                        </h6>
                                        <h2 className='text-2xl sm:text-3xl font-bold '>
                                            Python Developer Trainee
                                        </h2>
                                        <h6 className='font-bold sm:text-lg sm:mt-2'>
                                            Sanskar Technolab
                                        </h6>
                                        <p className='text-[#999999] text-sm sm:text-base'>
                                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                        </p>
                                    </div>
                                </div>

                                <div className="4 flex gap-2 sm:gap-5 flex-col sm:flex-row my-8 lg:my-12">
                                    <div className="bg-[#3e64ff] w-fit h-fit p-3 rounded-full">
                                        <svg width="24" height="24" className='scale-[1.2]' fill='white' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.517 24h-11.646c.522-3.035.897-6.162-.422-8.028-1.666-2.357-2.43-4.742-2.449-6.883-.045-5.19 4.231-9.114 10.203-9.089 7.236.03 9.328 6.156 9.773 7.943.34 1.369-.898 1.869-.166 2.702.596.679 1.035 1.364 1.789 2.177.292.315.405.646.401.943-.006.434-.291.798-.748.958-.429.15-.76.32-1.215.443-.145 1.16-.521 2.572-.798 3.557-.737 2.62-2.896 1.059-3.881 2.607-.426.668-.64 1.738-.841 2.67zm-3.844-19h-1.346c-.243.681-.312 1.122-.842 1.341-.53.22-.888-.041-1.545-.353l-.952.952c.311.654.573 1.015.353 1.545-.219.53-.66.599-1.341.841v1.347c.68.242 1.122.312 1.341.842.222.534-.047.902-.353 1.544l.952.952c.652-.309 1.015-.573 1.545-.353v.001c.529.219.599.657.842 1.341h1.346c.243-.682.313-1.121.845-1.343h.001c.526-.219.883.042 1.541.354l.952-.952c-.31-.651-.573-1.014-.354-1.544.219-.529.662-.6 1.342-.842v-1.347c-.688-.244-1.123-.313-1.341-.841-.22-.53.041-.89.353-1.545l-.952-.952c-.651.31-1.014.573-1.545.353-.529-.219-.598-.657-.842-1.341zm-.673 6.667c-.92 0-1.667-.747-1.667-1.667 0-.921.747-1.667 1.667-1.667s1.667.746 1.667 1.667c0 .92-.747 1.667-1.667 1.667z" /></svg>
                                    </div>
                                    <div className="text">
                                        <h6 className="text-[#3e64ff] font-extrabold ">
                                            2023 November-Present
                                        </h6>
                                        <h2 className='text-2xl sm:text-3xl font-bold '>
                                            Full-Stack Developer
                                        </h2>
                                        <h6 className='font-bold sm:text-lg sm:mt-2'>
                                            Sanskar Technolab
                                        </h6>
                                        <p className='text-[#999999] text-sm sm:text-base'>
                                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="skills">
                                <h2 className="text-[#3e64ff] font-bold text-3xl  mt-8 md:mt-16 mb-5 sm:mb-10">
                                    Skills
                                </h2>
                                <div className="1 grid gap-5 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center my-8 lg:my-12">

                                    <div className="card bg-white px-12 py-8 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-full max-w-[400px] md:max-w-[350px] lg:max-w-[300px] ">
                                        <h6 className='text-center text-xl font-bold mb-5'>
                                            Python
                                        </h6>
                                        <div className="percentage w-fit m-auto">
                                            <div className="progress-bar">
                                                <div className="progress-circle-1" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                <div className="font-bold text-3xl absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] progress-text bg-white h-[145px] w-[145px] rounded-full flex justify-center items-center">80%</div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center mt-5 text-center">
                                            <div className="left">
                                                <h3 className='font-bold text-xl'>
                                                    50%
                                                </h3>
                                                <p className='text-xs text-[#999999] font-semibold'>
                                                    Last Week
                                                </p>
                                            </div>
                                            <div className="line bg-[#999999] h-10 w-[1px]"></div>
                                            <div className="right">
                                                <h3 className='font-bold text-xl'>
                                                    75%
                                                </h3>
                                                <p className='text-xs text-[#999999] font-semibold'>
                                                    Last Month
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card bg-white px-12 py-8 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-full max-w-[400px] md:max-w-[350px] lg:max-w-[300px] ">
                                        <h6 className='text-center text-xl font-bold mb-5'>
                                            Django
                                        </h6>
                                        <div className="percentage w-fit m-auto">
                                            <div className="progress-bar">
                                                <div className="progress-circle-2" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                <div className="font-bold text-3xl absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] progress-text bg-white h-[145px] w-[145px] rounded-full flex justify-center items-center">75%</div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center mt-5 text-center">
                                            <div className="left">
                                                <h3 className='font-bold text-xl'>
                                                    75%
                                                </h3>
                                                <p className='text-xs text-[#999999] font-semibold'>
                                                    Last Week
                                                </p>
                                            </div>
                                            <div className="line bg-[#999999] h-10 w-[1px]"></div>
                                            <div className="right">
                                                <h3 className='font-bold text-xl'>
                                                    60%
                                                </h3>
                                                <p className='text-xs text-[#999999] font-semibold'>
                                                    Last Month
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card bg-white px-12 py-8 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-full max-w-[400px] md:max-w-[350px] lg:max-w-[300px] ">
                                        <h6 className='text-center text-xl font-bold mb-5'>
                                            Frappe
                                        </h6>
                                        <div className="percentage w-fit m-auto">
                                            <div className="progress-bar">
                                                <div className="progress-circle-3" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                <div className="font-bold text-3xl absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] progress-text bg-white h-[145px] w-[145px] rounded-full flex justify-center items-center">70%</div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center mt-5 text-center">
                                            <div className="left">
                                                <h3 className='font-bold text-xl'>
                                                    45%
                                                </h3>
                                                <p className='text-xs text-[#999999] font-semibold'>
                                                    Last Week
                                                </p>
                                            </div>
                                            <div className="line bg-[#999999] h-10 w-[1px]"></div>
                                            <div className="right">
                                                <h3 className='font-bold text-xl'>
                                                    50%
                                                </h3>
                                                <p className='text-xs text-[#999999] font-semibold'>
                                                    Last Month
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div id="skills-2" className=' mt-8 md:mt-16 mb-5 sm:mb-10'>
                                <div className="grid md:grid-cols-2 gap-x-10 gap-y-3 sm:gap-y-5 max-w-[400px] sm:max-w-none m-auto">
                                    <div className="1">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-base font-medium ">HTML</span>
                                            <span className="text-sm font-medium  ">85%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                            <div className="bg-[#3e64ff] h-2.5 rounded-full w-[85%]"></div>
                                        </div>
                                    </div>

                                    <div className="1">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-base font-medium ">CSS</span>
                                            <span className="text-sm font-medium  ">80%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                            <div className="bg-[#3e64ff] h-2.5 rounded-full w-[85%]"></div>
                                        </div>
                                    </div>

                                    <div className="1">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-base font-medium ">Reactjs</span>
                                            <span className="text-sm font-medium  ">65%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                            <div className="bg-[#3e64ff] h-2.5 rounded-full w-[65%]"></div>
                                        </div>
                                    </div>

                                    <div className="1">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-base font-medium ">Astrojs</span>
                                            <span className="text-sm font-medium  ">70%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                            <div className="bg-[#3e64ff] h-2.5 rounded-full w-[70%]"></div>
                                        </div>
                                    </div>



                                    <div className="1">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-base font-medium ">SQL</span>
                                            <span className="text-sm font-medium  ">70%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                            <div className="bg-[#3e64ff] h-2.5 rounded-full w-[70%]"></div>
                                        </div>
                                    </div>

                                    <div className="1">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-base font-medium ">ERPNext</span>
                                            <span className="text-sm font-medium  ">60%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                            <div className="bg-[#3e64ff] h-2.5 rounded-full w-[60%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </section>


            <section id="services">
                <div className="px-5 sm:px-0 sm:max-w-[90%] m-auto">
                    <h2 className="text-3xl sm:text-5xl font-bold lg:mb-5 text-center">
                        Services
                    </h2>
                    <p className=" text-[#999999] text-lg text-center mt-3 lg:mt-8">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 text-center my-16">
                        <div className="card cursor-pointer ease-in-out duration-300 p-8 w-full flex flex-col justify-center items-center shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
                            <div className="icon mb-4">
                                <svg className='max-w-[160px] sm:max-w-none' width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M50.976 73.832C49.048 73.832 47.488 72.2643 47.488 70.3262C47.488 68.3881 49.048 66.8242 50.976 66.8242C52.904 66.8242 54.464 68.3881 54.464 70.3262C54.464 72.2643 52.904 73.832 50.976 73.832ZM40.288 80C60.6 80 59.332 71.1465 59.332 71.1465L59.308 61.9746H39.928V59.2207H67.004C67.004 59.2207 80 60.7045 80 40.1055C80 19.5063 68.66 20.2324 68.66 20.2324H61.8879V29.7949C61.8879 29.7949 62.252 41.1934 50.728 41.1934H31.504C31.504 41.1934 20.704 41.022 20.704 51.6895V69.3242C20.704 69.3242 19.064 80 40.288 80ZM29.028 6.16797C30.956 6.16797 32.512 7.73575 32.512 9.67383C32.512 11.6119 30.956 13.1758 29.028 13.1758C27.1 13.1758 25.54 11.6119 25.54 9.67383C25.54 7.73575 27.1 6.16797 29.028 6.16797ZM39.712 0C19.404 0 20.672 8.85352 20.672 8.85352L20.696 18.0254H40.076V20.7793H12.996C12.996 20.7793 0 19.2955 0 39.8945C0 60.4937 11.344 59.7676 11.344 59.7676H18.1121V50.2051C18.1121 50.2051 17.748 38.8066 29.276 38.8066H48.496C48.496 38.8066 59.296 38.978 59.296 28.3105V10.6758C59.296 10.6758 60.936 0 39.712 0Z" fill="#3E64FF" />
                                </svg>
                            </div>
                            <h3 className='mb-4'>
                                PYTHON DEVELOPER
                            </h3>
                            <div className="line block h-0.5 rounded-lg w-10 bg-[#3e64ff] mb-8"></div>
                            <p className='text-[#999999]'>
                                A small river named Duden flows by their place and supplies it with the necessary regelialia.
                            </p>
                        </div>

                        <div className="card cursor-pointer ease-in-out duration-300 p-8 w-full flex flex-col justify-center items-center shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
                            <div className="icon mb-4">
                                <svg className='max-w-[160px] sm:max-w-none' width="229" height="55" viewBox="0 0 229 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M173.028 18.5254C178.396 18.5254 183.356 19.0941 189.374 20.3137L185.086 29.3464C181.752 28.6959 184.819 29.2593 182.299 29.0154V30.3168L182.461 35.6014L182.542 42.4325C182.623 44.1394 182.623 45.8475 182.705 47.555V50.9705C182.705 61.7043 181.811 66.7455 179.128 70.8923C175.224 76.9916 168.475 80 158.88 80C154.001 80 149.773 79.2682 145.382 77.5602V66.0137H145.382C149.774 68.2904 154.165 69.3469 158.799 69.3469C167.011 69.3469 170.508 66.0137 170.508 58.0444V57.8005C168.069 59.0196 165.629 59.5079 162.377 59.5079C151.4 59.5079 144.405 52.2709 144.405 40.8057C144.405 26.5745 154.733 18.5254 173.028 18.5254ZM59.4408 19.3385V48.3675C59.4408 58.3696 58.709 63.1669 56.5137 67.3142C54.4804 71.2994 51.7967 73.8194 46.2676 76.5845L34.6394 71.0549C40.1689 68.453 42.8521 66.1769 44.5596 62.679C46.3489 59.1014 46.9186 54.9541 46.9186 44.0581V19.3385H59.4408ZM208.814 18.2815C221.336 18.2815 228.98 26.1695 228.98 38.9356C228.98 52.028 221.012 60.2408 208.326 60.2408C195.803 60.2408 188.078 52.3527 188.078 39.6679C188.078 26.4937 196.048 18.2815 208.814 18.2815ZM83.5934 18.4446C90.0173 18.4446 94.2454 20.1516 96.116 23.4858C97.1725 25.3559 97.4978 27.7952 97.4978 33.0001V58.4509C91.8864 59.264 84.8125 59.8337 79.6087 59.8337C69.1192 59.8337 64.4022 56.1732 64.4022 48.0423C64.4022 39.2598 70.6636 35.1944 86.0326 33.8929V31.1284C86.0326 28.8517 84.8943 28.0391 81.7227 28.0391C77.0881 28.0391 71.8838 29.3401 67.0041 31.8612V22.1843H67.0047C72.5348 19.583 77.8199 18.4446 83.5934 18.4446ZM39.5195 0V57.9636C33.0955 59.1832 28.3791 59.6711 23.2566 59.6711C7.96884 59.6711 0 52.7598 0 39.5048C0 26.7382 8.45722 18.4446 21.5486 18.4446C23.5813 18.4446 25.1262 18.6067 26.9968 19.0946V0H39.5195ZM123.275 18.4446C129.699 18.4446 134.334 19.9077 137.1 22.754C139.702 25.4367 140.514 28.3638 140.514 34.6262V59.1827H127.991V35.1141C127.991 30.3168 126.365 28.527 121.893 28.527C120.186 28.527 118.641 28.6896 116.119 29.4214V59.1827H103.597V21.2899C110.996 19.3385 117.095 18.4446 123.275 18.4446ZM86.6018 42.1067C78.3072 42.9198 75.624 44.2213 75.624 47.4736C75.624 49.9129 77.1694 51.0513 80.5844 51.0513C82.455 51.0513 84.162 50.8892 86.6018 50.4826V42.1067ZM208.652 28.3644C203.691 28.3644 200.844 32.3496 200.844 39.2603C200.845 46.1727 203.691 50.1569 208.569 50.1569C213.367 50.1569 216.214 46.1722 216.214 39.2603C216.214 32.4304 213.449 28.3644 208.652 28.3644ZM22.7687 28.527C16.4261 28.527 12.7666 32.4304 12.7666 39.2603C12.7666 45.9288 16.2634 49.5877 22.6874 49.5877C24.0691 49.5877 25.208 49.5064 26.9968 49.263V29.1769C25.5332 28.6896 24.3136 28.527 22.7687 28.527ZM161.727 30.3966C158.719 32.1046 157.173 35.1949 157.173 39.5856C157.173 45.8475 160.264 49.4251 165.793 49.4251C167.5 49.4251 168.883 49.0993 170.509 48.612V44.3026C170.509 42.839 170.428 41.2118 170.428 39.5048L170.347 33.7318L170.265 29.5845V28.6083H168.964C166.525 28.527 163.679 29.1769 161.727 30.3966ZM59.4408 0.0666212V12.9145H46.9186V0.0666212H59.4408Z" fill="#3E64FF" />
                                </svg>

                            </div>
                            <h3 className='mb-4'>
                                DJANGO DEVELOPER
                            </h3>
                            <div className="line block h-0.5 rounded-lg w-10 bg-[#3e64ff] mb-8"></div>
                            <p className='text-[#999999]'>
                                A small river named Duden flows by their place and supplies it with the necessary regelialia.
                            </p>
                        </div>


                        <div className="card cursor-pointer ease-in-out duration-300 p-8 w-full flex flex-col justify-center items-center shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
                            <div className="icon mb-4">
                                <svg className='max-w-[160px] sm:max-w-none' width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M70.776 61.2293L70.7268 61.1985C70.422 60.9895 70.1621 60.7215 69.9625 60.4105C69.7628 60.0994 69.6275 59.7516 69.5644 59.3874C69.5013 59.0232 69.5118 58.6501 69.5951 58.29C69.6785 57.9299 69.8331 57.5902 70.0499 57.2908C74.2626 49.9698 75.6573 41.3625 73.972 33.0858C72.2868 24.809 67.6376 17.4324 60.8977 12.3414C54.1577 7.25049 45.7909 4.79556 37.3688 5.43777C28.9467 6.07998 21.0489 9.77514 15.1588 15.8292C9.26871 21.8832 5.79171 29.8795 5.38091 38.3161C4.97011 46.7526 7.65377 55.0489 12.9278 61.6465C18.2018 68.2442 25.7033 72.6892 34.0232 74.1466C42.3431 75.604 50.9088 73.9736 58.1114 69.5616C59.3422 68.8046 60.9422 69.1308 61.7853 70.3L61.7976 70.3062C61.9997 70.5865 62.143 70.9048 62.2188 71.2419C62.2946 71.579 62.3014 71.928 62.2387 72.2678C62.176 72.6077 62.0452 72.9313 61.8541 73.2192C61.663 73.5071 61.4156 73.7534 61.1268 73.9431L60.6099 74.2816C52.2479 79.3087 42.3368 81.1063 32.7419 79.3359C23.1471 77.5655 14.5301 72.3493 8.51284 64.6689C2.49557 56.9885 -0.507051 47.3737 0.0700838 37.6339C0.647218 27.8942 4.76431 18.7012 11.6465 11.7852C18.5287 4.86917 27.7014 0.707052 37.4382 0.0821699C47.175 -0.542712 56.8044 2.41273 64.5142 8.39228C72.224 14.3718 77.4824 22.9631 79.2998 32.5492C81.1173 42.1352 79.3683 52.055 74.3822 60.4416C74.2056 60.7394 73.9696 60.9977 73.6888 61.2003C73.4081 61.403 73.0887 61.5457 72.7504 61.6196C72.4121 61.6935 72.0623 61.697 71.7226 61.6298C71.3829 61.5627 71.0607 61.4263 70.776 61.2293ZM25.5453 27.6786C26.1484 27.0816 27.6253 26.8662 28.3453 27.6786C29.2376 28.6201 28.9484 30.1585 28.3453 30.8047L19.0346 39.8508L28.1176 48.4539C28.7207 49.0508 28.8007 50.7554 28.1176 51.4324C27.293 52.2508 25.6069 52.1216 25.0469 51.5616L14.4315 40.9831C14.1433 40.6927 13.9815 40.3 13.9815 39.8908C13.9815 39.4816 14.1433 39.089 14.4315 38.7985L25.5453 27.6847V27.6786ZM54.4438 27.6786L65.5576 38.7924C65.8458 39.0829 66.0076 39.4755 66.0076 39.8847C66.0076 40.2939 65.8458 40.6865 65.5576 40.977L54.9484 51.5677C54.3884 52.1216 52.7945 52.4724 51.8714 51.5677C51.0038 50.7062 51.2745 48.9339 51.8714 48.337L60.9914 39.8631L51.5761 30.7185C50.973 30.0724 50.7761 28.4786 51.5761 27.6847C52.3576 26.9155 53.8407 27.0878 54.4438 27.6847V27.6786ZM43.0345 25.4632C43.3361 24.6632 44.8315 24.1586 45.7853 24.5155C46.6961 24.8539 47.2315 26.1155 46.9853 26.9155L36.893 54.6693C36.5976 55.4693 35.1576 55.7893 34.3515 55.4877C33.4961 55.1924 32.5669 54.0108 32.8746 53.217L43.0284 25.4632H43.0345Z" fill="#3E64FF" />
                                </svg>
                            </div>
                            <h3 className='mb-4'>
                                FULL STACK DEVELOPER
                            </h3>
                            <div className="line block h-0.5 rounded-lg w-10 bg-[#3e64ff] mb-8"></div>
                            <p className='text-[#999999]'>
                                A small river named Duden flows by their place and supplies it with the necessary regelialia.
                            </p>
                        </div>

                        <div className="card cursor-pointer ease-in-out duration-300 p-8 w-full flex flex-col justify-center items-center shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
                            <div className="icon mb-4">
                                <svg className='max-w-[160px] sm:max-w-none' width="204" height="55" viewBox="0 0 204 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M93.9278 52.9491C93.9278 38.9801 93.9278 25.3035 93.9278 11.5048C97.2725 11.5048 100.286 11.5048 103.546 11.5048C103.546 13.2698 103.546 14.8975 103.546 16.7307C104.073 16.532 104.451 16.5092 104.535 16.3406C108.297 8.72997 120.908 9.33328 125.224 17.0372C129.555 24.767 129.513 32.7078 125.66 40.5093C122.275 47.3658 111.05 51.1371 103.726 41.3088C103.726 44.8496 103.726 47.8427 103.726 50.8358C103.726 53.7774 103.726 56.719 103.726 59.8325C100.422 59.8325 97.3347 59.8325 93.9277 59.8325C93.9277 57.5352 93.9277 55.3883 93.9278 52.9491ZM118.458 30.552C118.26 28.5102 118.25 26.428 117.822 24.4354C117.089 21.0171 114.666 18.9869 111.517 18.7929C108.145 18.5851 105.644 20.0484 104.457 23.4003C102.961 27.6219 103.005 31.9075 105.044 35.9916C106.191 38.2894 108.203 39.4712 110.768 39.5163C113.424 39.5629 115.633 38.5549 116.788 36.0697C117.522 34.4912 117.892 32.7434 118.458 30.552Z" fill="#3E64FF" />
                                    <path d="M140.815 59.9776C137.798 60 135.065 60 132.2 60C132.2 43.6547 132.2 27.6398 132.2 11.4925C135.361 11.4925 138.367 11.4925 141.673 11.4925C141.673 13.2568 141.673 14.9634 141.673 16.6699C144.468 12.9038 147.847 10.8455 152.47 10.9634C159.893 11.1527 165.308 16.481 166.082 25.3556C166.434 29.3901 166.027 33.679 165.009 37.6047C163.039 45.1998 154.725 49.3084 147.746 46.365C145.605 45.462 143.9 43.5256 141.741 41.8669C141.741 46.7415 141.779 51.701 141.712 56.6591C141.697 57.7603 141.313 58.8566 140.815 59.9776ZM146.678 19.094C141.109 20.4327 140.42 31.275 143.16 36.0592C144.527 38.4445 146.538 39.5876 149.23 39.5174C151.942 39.4466 154.32 38.2065 154.994 35.6658C155.833 32.5043 156.363 29.08 156.094 25.8467C155.654 20.5588 152.507 18.4453 146.678 19.094Z" fill="#3E64FF" />
                                    <path d="M57.2584 36.484C57.74 30.516 60.995 27.3058 67.4444 26.3154C70.1722 25.8964 72.9794 25.8409 75.6336 25.1626C76.9141 24.8354 78.9616 23.2711 78.8428 22.5793C78.587 21.0902 77.4481 19.2119 76.1392 18.5602C73.6152 17.3035 70.6649 17.7111 68.8336 19.9556C67.3419 21.7839 65.8899 22.0481 63.8388 21.6937C62.2103 21.4123 60.5302 21.4296 58.8665 21.3139C59.4185 16.3362 62.7114 12.8716 68.5719 11.4997C73.794 10.2773 78.9752 10.5099 83.7211 13.4181C86.6924 15.2388 88.543 17.9973 88.6207 21.423C88.8082 29.6949 88.6815 37.9739 88.6815 46.4542C85.66 46.4542 82.7585 46.4542 79.658 46.4542C79.5578 45.1496 79.4621 43.9034 79.3338 42.2339C74.483 47.7908 68.753 48.7024 62.5095 45.8746C58.738 44.1664 57.1419 40.8428 57.2584 36.484ZM67.2621 34.133C65.6523 37.5426 66.8524 39.9354 70.4781 40.5451C76.4545 41.55 80.4957 36.6814 78.5897 30.2011C74.9036 31.3918 71.2221 32.5809 67.2621 34.133Z" fill="#3E64FF" />
                                    <path d="M191.923 31.5234C187.694 31.5234 183.76 31.5234 179.86 31.5234C179.415 34.9428 180.696 37.6527 183.319 39.1243C186.071 40.6682 190.47 40.8452 192.175 38.5814C194.383 35.651 197.03 36.2575 199.783 36.3395C200.837 36.371 201.887 36.5518 202.946 36.6654C202.118 42.3531 197.09 46.5689 190.226 47.243C182.904 47.9622 176.163 46.4717 172.355 39.5406C168.305 32.1702 168.524 24.4772 173.324 17.42C177.141 11.8084 184.98 9.57514 191.893 11.5707C198.535 13.4879 202.693 18.6436 203.312 25.8004C203.464 27.5503 203.48 29.312 203.578 31.5234C199.622 31.5234 195.92 31.5234 191.923 31.5234ZM193.578 22.1336C191.57 19 188.541 17.6072 185.413 18.379C181.791 19.2726 179.99 21.3838 179.655 25.2903C184.482 25.2903 189.293 25.2903 194.453 25.2903C194.17 24.1872 193.96 23.3706 193.578 22.1336Z" fill="#3E64FF" />
                                    <path d="M52.7407 10.8453C55.3249 10.6249 56.4949 11.422 56.1918 14.0071C55.9773 15.8364 56.1503 17.7112 56.1503 19.728C54.6405 19.559 53.4846 19.347 52.3237 19.3142C47.504 19.1782 44.4303 22.067 44.3797 26.8563C44.3212 32.3849 44.3646 37.9147 44.3638 43.444C44.3637 44.4029 44.3638 45.3617 44.3638 46.4817C41.0179 46.4817 38.0072 46.4817 34.8296 46.4817C34.8296 34.7537 34.8296 23.1559 34.8296 11.4098C37.8626 11.4098 40.7787 11.4098 43.9186 11.4098C44.0147 13.0217 44.1062 14.5568 44.2592 17.1239C46.3598 13.3004 48.7031 10.9518 52.7407 10.8453Z" fill="#3E64FF" />
                                    <path d="M0 28.6896C0 26.0494 0 23.7041 0 21.1701C9.7247 21.1701 19.2143 21.1701 28.8997 21.1701C28.8997 23.7134 28.8997 26.2285 28.8997 29.0152C22.7858 29.0152 16.6255 29.0152 10.1346 29.0152C10.1346 34.9261 10.1346 40.5817 10.1346 46.4461C6.61804 46.4461 3.4311 46.4461 0 46.4461C0 40.5704 0 34.7774 0 28.6896Z" fill="#3E64FF" />
                                    <path d="M22.4618 6.78078e-06C25.4905 2.6313e-07 28.2233 0 31.05 0C31.05 2.85375 31.05 5.36554 31.05 8.01464C20.7343 8.01464 10.5953 8.01464 0.230957 8.01464C0.230957 5.41158 0.230957 2.82337 0.230957 1.13013e-05C7.59355 1.13013e-05 14.8798 1.15209e-05 22.4618 6.78078e-06Z" fill="#3E64FF" />
                                </svg>
                            </div>
                            <h3 className='mb-4'>
                                FRAPPE DEVELOPER
                            </h3>
                            <div className="line block h-0.5 rounded-lg w-10 bg-[#3e64ff] mb-8"></div>
                            <p className='text-[#999999]'>
                                A small river named Duden flows by their place and supplies it with the necessary regelialia.
                            </p>
                        </div>

                        <div className="card cursor-pointer ease-in-out duration-300 p-8 w-full flex flex-col justify-center items-center shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
                            <div className="icon mb-4">
                                <svg className='max-w-[160px] sm:max-w-none' width="298" height="40" viewBox="0 0 298 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 4.56099V9.03253H18.3333H36.6667V4.56099V0.0894412H18.3333H0V4.56099Z" fill="#3E64FF" />
                                    <path d="M43.8213 27.3658V54.6423H49.6343H55.4473V44.7154V34.878L59.6506 35.1463L63.9432 35.4146L69.1302 44.9837L74.4067 54.6423H80.6668H86.927L81.74 44.9837C78.9676 39.7073 76.2847 34.9675 75.8376 34.4309C75.301 33.7154 76.1058 32.7317 78.1628 31.5691C82.7237 28.8862 84.4229 24.9512 84.5124 17.439C84.5124 12.0732 84.1546 10.6423 82.0977 7.51219C77.9839 1.25202 74.2278 0.0894204 57.8619 0.0894204H43.8213V27.3658ZM68.3254 10.2845C73.6018 12.4309 74.675 20.9268 70.0245 23.9675C68.8619 24.7724 65.1058 25.5772 61.7075 25.8455L55.4473 26.2927V17.6179V9.03251H60.366C63.1384 9.03251 66.7156 9.5691 68.3254 10.2845Z" fill="#3E64FF" />
                                    <path d="M91.2197 27.3658V54.6423H97.0327H102.846V45.6992V36.7561H109.374C112.862 36.7561 117.244 36.3089 119.033 35.8618C127.26 33.5366 132.447 26.8293 132.269 18.4228C132.179 10.6423 129.586 5.90243 123.325 2.41462C119.569 0.178851 118.764 0.0894204 105.35 0.0894204H91.2197V27.3658ZM115.187 10.0163C118.943 11.2683 121.269 16.2764 120.195 20.4797C119.033 25.0406 115.545 27.187 108.659 27.6341L102.846 27.9919V18.5122V9.03251H107.675C110.269 9.03251 113.667 9.47967 115.187 10.0163Z" fill="#3E64FF" />
                                    <path d="M138.618 27.3659V54.7317L144.252 54.4634L149.797 54.1951L150.244 37.4716L150.691 20.8374L160.975 35.6829C166.61 43.8211 171.797 51.4228 172.423 52.5854C173.406 54.374 174.211 54.6423 178.862 54.6423H184.227V27.3659V0.0894365H178.414H172.601L172.423 17.2602L172.154 34.5203L160.528 17.5285L148.902 0.536591L143.715 0.268298L138.618 5.57303e-06V27.3659Z" fill="#3E64FF" />
                                    <path d="M278.13 8.58535C278.13 13.4146 278.13 13.5041 275.447 13.5041C272.854 13.5041 272.764 13.6829 272.764 17.439C272.764 21.1057 272.943 21.4634 275.268 21.7317L277.683 22L278.13 35.5935C278.577 49.0081 278.577 49.2764 280.992 51.6911C283.138 53.8374 284.39 54.1951 289.845 54.4634C293.333 54.7317 296.553 54.4634 297.089 53.9268C297.626 53.3902 297.626 51.8699 296.911 49.3659C296.106 46.1463 295.658 45.6992 293.333 45.6992C289.488 45.6992 288.772 43.5528 289.041 32.1057L289.309 22L293.154 21.7317L296.911 21.4634V17.439V13.5041H292.886H288.862V8.58535V3.66666H283.496H278.13V8.58535Z" fill="#3E64FF" />
                                    <path d="M203.097 13.9512C186.553 19.1382 184.943 45.252 200.683 53.4797C202.561 54.4634 205.78 54.9106 210.252 55C216.065 55 217.675 54.6423 221.162 52.4959C226.081 49.7236 229.927 43.5528 227.512 42.6585C224.114 41.3171 218.927 42.1219 216.244 44.3577C212.398 47.5772 207.301 47.3984 203.813 44C202.292 42.4797 201.219 40.4228 201.219 39.0813V36.7561H215.081H228.943V33.2683C228.943 23.7886 223.219 15.6504 215.081 13.5935C210.162 12.3415 208.016 12.4309 203.097 13.9512ZM215.618 24.1463C220.268 28.7967 219.374 29.6016 209.715 29.6016C200.057 29.6016 199.162 28.7967 203.813 24.1463C207.479 20.5691 211.951 20.5691 215.618 24.1463Z" fill="#3E64FF" />
                                    <path d="M233.235 16.3658C234.219 17.9756 236.902 22.626 239.227 26.6504L243.431 34.0732L237.528 43.8211C234.309 49.187 231.626 53.8374 231.626 54.1057C231.626 54.374 234.13 54.6423 237.26 54.6423H242.805L246.65 47.935C248.707 44.1789 250.853 41.4065 251.3 41.6748C251.748 41.9431 253.626 44.9837 255.504 48.3821L258.902 54.6423H264.536C267.577 54.6423 270.081 54.374 270.081 54.1057C270.081 53.8374 267.487 49.187 264.268 43.7317L258.455 33.8943L262.39 27.0081C264.536 23.252 267.219 18.6911 268.292 16.813L270.26 13.5041H264.357H258.455L255.861 18.6016C251.032 28.1707 251.211 28.0813 247.097 20.5691L243.609 13.9512L237.528 13.6829L231.447 13.4146L233.235 16.3658Z" fill="#3E64FF" />
                                    <path d="M0 38.5447V54.6423H18.3333H36.6667V49.7236V44.8049H24.1463H11.626V38.0976V31.3902H23.252H34.8781V26.9187V22.4471H17.439H0V38.5447Z" fill="#3E64FF" />
                                </svg>
                            </div>
                            <h3 className='mb-4'>
                                ERPNext DEVELOPER
                            </h3>
                            <div className="line block h-0.5 rounded-lg w-10 bg-[#3e64ff] mb-8"></div>
                            <p className='text-[#999999]'>
                                A small river named Duden flows by their place and supplies it with the necessary regelialia.
                            </p>
                        </div>

                        <div className="card cursor-pointer ease-in-out duration-300 p-8 w-full flex flex-col justify-center items-center shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
                            <div className="icon mb-4">
                                <svg className='max-w-[160px] sm:max-w-none' width="80" height="72" viewBox="0 0 80 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40.0186 28.7651C41.3923 28.7652 42.7352 29.1717 43.8783 29.9334C45.0214 30.695 45.9137 31.7779 46.4427 33.0456C46.9717 34.3133 47.1138 35.7092 46.8512 37.0575C46.5885 38.4058 45.9329 39.6462 44.9668 40.6227C44.0006 41.5992 42.7672 42.268 41.4218 42.5449C40.0763 42.8219 38.679 42.6946 37.4058 42.1791C36.1325 41.6636 35.0403 40.783 34.2665 39.648C33.4927 38.513 33.0719 37.1745 33.0572 35.801C33.0523 34.8819 33.2285 33.9709 33.5757 33.1199C33.9229 32.2689 34.4343 31.4946 35.0807 30.8413C35.7272 30.1879 36.4959 29.6683 37.3432 29.3121C38.1904 28.9559 39.0995 28.77 40.0186 28.7651ZM22.7827 65.5823C25.128 66.9969 30.228 64.8377 36.1843 59.2537C34.1935 56.9915 32.3174 54.6308 30.5631 52.1807C27.5604 51.8444 24.578 51.3473 21.6287 50.6916C19.7301 58.6581 20.4374 64.1304 22.7827 65.5823ZM25.4258 44.2142L24.3462 42.3156C23.9254 43.3612 23.5649 44.4302 23.2666 45.5171C24.2718 45.7405 25.3886 45.9266 26.5426 46.1127L25.4258 44.2142ZM49.772 41.385L52.7873 35.801L49.772 30.217C48.6552 28.244 47.4639 26.4943 46.3844 24.7447C44.3741 24.633 42.2522 24.633 40.0186 24.633C37.785 24.633 35.6631 24.633 33.6529 24.633C32.5733 26.3826 31.382 28.1323 30.2652 30.1053L27.2499 35.801L30.2652 41.385C31.382 43.358 32.5733 45.1076 33.6529 46.8573C35.6631 46.8573 37.785 46.8573 40.0186 46.8573C42.2522 46.8573 44.3741 46.8573 46.3844 46.8573C47.4639 45.1076 48.6552 43.358 49.772 41.385ZM40.0186 16.3687C39.3113 17.1877 38.5668 18.0439 37.8222 19.049H42.215C41.4705 18.0439 40.7259 17.1877 40.0186 16.3687ZM40.0186 55.2333C40.7259 54.4143 41.4705 53.5581 42.215 52.5529H37.8222C38.5668 53.5581 39.3113 54.4143 40.0186 55.2333ZM57.2173 6.01967C54.9093 4.60506 49.772 6.7642 43.853 12.3482C45.8437 14.6105 47.7198 16.9711 49.4742 19.4213C52.4741 19.7083 55.4565 20.1557 58.4086 20.7614C60.3071 12.7949 59.5998 7.3226 57.2173 5.87076M54.6114 27.2388L55.691 29.1374C56.1118 28.0918 56.4723 27.0229 56.7706 25.9359C55.7655 25.7126 54.6487 25.5264 53.4946 25.3403L54.6114 27.2388ZM60.0093 1.18021C65.4816 4.30724 66.0772 12.5343 63.732 22.1388C73.1875 24.9308 80 29.5841 80 35.8382C80 42.0923 73.1875 46.7456 63.732 49.5376C66.04 59.1421 65.4444 67.3691 60.0093 70.4962C54.5742 73.6232 47.1661 70.0495 40.0186 63.237C32.8711 70.0495 25.463 73.6232 19.9907 70.4962C14.5184 67.3691 13.96 59.3282 16.268 49.5376C6.81247 46.7456 0 42.0923 0 35.8382C0 29.5841 6.81247 24.8936 16.268 22.1016C13.96 12.4971 14.5556 4.27002 19.9907 1.14298C25.4258 -1.98406 32.8711 1.5897 40.0186 8.40217C47.1661 1.5897 54.5742 -1.98406 60.0093 1.14298M58.9297 35.801C60.2226 38.5414 61.3659 41.3499 62.3546 44.2142C70.1722 41.8689 74.5649 38.5185 74.5649 35.801C74.5649 33.0834 70.0605 29.733 62.3546 27.3877C61.3659 30.252 60.2226 33.0605 58.9297 35.801ZM21.1075 35.801C19.8146 33.0605 18.6713 30.252 17.6826 27.3877C9.86505 29.733 5.47231 33.0834 5.47231 35.801C5.47231 38.5185 9.97673 41.8689 17.6826 44.2142C18.6713 41.3499 19.8146 38.5414 21.1075 35.801ZM54.6114 44.2142L53.4946 46.1127C54.6487 46.1127 55.7655 45.7405 56.7706 45.5171C56.4723 44.4302 56.1118 43.3612 55.691 42.3156L54.6114 44.2142ZM43.7413 59.2537C49.6603 64.8377 54.9093 66.9969 57.1056 65.5823C59.302 64.1676 60.1954 58.807 58.2969 50.6916C55.3448 51.2973 52.3624 51.7447 49.3625 52.0318C47.6122 54.5327 45.7361 56.9431 43.7413 59.2537ZM25.4258 27.3877L26.5426 25.4892C25.3886 25.4892 24.2718 25.8615 23.2666 26.0848C23.5649 27.1718 23.9254 28.2407 24.3462 29.2863L25.4258 27.3877ZM36.296 12.3482C30.2652 6.7642 25.128 4.60506 22.7827 6.01967C20.4374 7.43428 19.7301 12.7949 21.6287 20.9103C24.5808 20.3046 27.5632 19.8572 30.5631 19.5702C32.3496 17.0666 34.2631 14.6562 36.296 12.3482Z" fill="#3E64FF" />
                                </svg>
                            </div>
                            <h3 className='mb-4'>
                                REACT DEVELOPER
                            </h3>
                            <div className="line block h-0.5 rounded-lg w-10 bg-[#3e64ff] mb-8"></div>
                            <p className='text-[#999999]'>
                                A small river named Duden flows by their place and supplies it with the necessary regelialia.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section id="freelancing" className='py-28 my-8 md:my-16'>
                <div className="container-1">
                    <div className="main w-full flex justify-center items-center flex-col text-center">

                        <h2 className="heading text-[40px] font-bold text-white">
                            I'm Available for freelancing
                        </h2>
                        <h6 className="sub-heading text-white font-medium max-w-[600px] my-5">
                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </h6>
                        <button className="mt-2.5 mb-8 md:my-0  sm:mt-5 bg-[#3e64ff] border border-[#3e64ff] hover:bg-white hover:text-[#3e64ff] transition-all duration-300 py-3 px-6 sm:py-4 sm:px-7 rounded-full text-white font-bold text-sm ">
                            HIRE ME
                        </button>

                    </div>
                </div>
            </section>



            <section id="contact" className='my-8 md:my-16'>

                <div className="container-1 ">

                    <div className="heading-div mb-16">
                        <h2 className="text-3xl sm:text-5xl font-bold lg:mb-5 text-center">
                            Contact Me
                        </h2>
                        <p className=" text-[#999999] text-lg text-center mt-3 lg:mt-8">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                        </p>
                    </div>

                    <div className="flex flex-col-reverse md:flex-row items-center bg-[#f8f9fa]">
                        <div className="1 w-full self-start">
                            <img className='object-cover w-[100%] ml-auto' src={AboutImage} alt="" />
                        </div>
                        <div className="2 w-full py-8">
                            <form action="" id="contact-me-form">
                                <div className="form-data px-4 sm:px-10 flex justify-center flex-col gap-3 lg:gap-5">
                                    <div className="name">
                                        <input type="text" className='border border-gray-400 rounded-md p-2 sm:p-1.5 lg:p-2  w-full' name="name" id="" placeholder='Your Name' />
                                    </div>
                                    <div className="email">
                                        <input type="text" className='border border-gray-400 rounded-md p-2 sm:p-1.5 lg:p-2  w-full' name="email" id="" placeholder='Your Email' />
                                    </div>
                                    <div className="subject">
                                        <input type="text" className='border border-gray-400 rounded-md p-2 sm:p-1.5 lg:p-2  w-full' name="subject" id="" placeholder='Subject' />
                                    </div>
                                    <div className="message">
                                        <textarea name="message" className='border border-gray-400 rounded-md p-2 sm:p-1.5 lg:p-2  w-full' id="" cols="30" rows="5" placeholder='Message'></textarea>
                                    </div>
                                    <button className="mt-2.5 mb-8 md:my-0 sm:w-fit sm:mt-5 bg-[#3e64ff] border border-[#3e64ff] hover:bg-white hover:text-[#3e64ff] transition-all duration-300 py-3 px-8 sm:py-4 sm:px-10 rounded-full text-white font-bold text-sm ">
                                        SEND MESSAGE
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>




            <section id="thankyou" className='my-8 sm:my-16'>
                <div className="container-1">
                    <h1 className="text-[#3e64ff] text-center font-bold text-xl sm:text-3xl  mt-8 md:mt-16 mb-5 sm:mb-10">
                        Thank you for visiting! Stay tuned for more details and updates coming soon to enhance your experience.
                    </h1>
                </div>
            </section>
        </section>

    )
}

export default Home
