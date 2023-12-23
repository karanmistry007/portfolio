import React, { useEffect, useRef, useState } from 'react'


const Navbar = () => {
  const myElementRef = useRef(null);
  const [NavClass, setNavClass] = useState("bg-transparent absolute w-full z-[1000]")

  useEffect(() => {
    const handleScroll = () => {
      const NavElement = document.getElementById("navbar");

      window.onscroll = function () {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        if ((scrollTop >= 450 && scrollTop < 1350) || (scrollTop >= 450 && scrollTop < 1350)) {
          setNavClass("bg-white fixed w-full z-[1000] shadow-[0_3px_10px_rgb(0,0,0,0.1)]")          
          NavElement.style.animation = "0.5s navbar-animation ease-in-out"

          NavElement.querySelector(".about").classList.add("active");

          NavElement.querySelector(".resume").classList.remove("active");
          NavElement.querySelector(".services").classList.remove("active");
          NavElement.querySelector(".projects").classList.remove("active");
          NavElement.querySelector(".myblog").classList.remove("active");
          NavElement.querySelector(".contact").classList.remove("active");

        } else if ((scrollTop >= 1350 && scrollTop < 3000) || (scrollTop >= 1350 && scrollTop < 3000)) {
          NavElement.querySelector(".resume").classList.add("active");

          NavElement.querySelector(".about").classList.remove("active");
          NavElement.querySelector(".services").classList.remove("active");
          NavElement.querySelector(".projects").classList.remove("active");
          NavElement.querySelector(".myblog").classList.remove("active");
          NavElement.querySelector(".contact").classList.remove("active");
        } else {
          setNavClass("bg-transparent absolute w-full z-[1000]");
          NavElement.style.animation = ""

          NavElement.querySelector(".about").classList.remove("active");
          NavElement.querySelector(".resume").classList.remove("active");
          NavElement.querySelector(".services").classList.remove("active");
          NavElement.querySelector(".projects").classList.remove("active");
          NavElement.querySelector(".myblog").classList.remove("active");
          NavElement.querySelector(".contact").classList.remove("active");

        }
      };


    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section id="navbar" className={NavClass}>
      <div className="navbar container-1  relative">
        <div className="nav-items flex justify-between items-center py-4 px-5 sm:px-0">
          <div className="1 logo cursor-pointer">
            <h2 className='relative z-[1] font-bold text-[30px]'>
              <span className='text-white'>K</span>aran
              <span className='block h-10 w-10 bg-[#3e64ff] rounded-full absolute bottom-[1.5px] left-[-8px] z-[-1]'></span>
            </h2>
          </div>
          <div className="2 flex items-center">
            <ul className="dropdown-menu  md:gap-5 lg:gap-8 xl:gap-10 flex-col md:flex-row absolute md:static md:bg-transparent left-0 top-[77px] w-full bg-white z-[1000] px-5 py-2 md:p-0 hidden md:flex">
              <li>
                <a href="#home" className='py-2 home'>
                  Home
                </a>
              </li>
              <li>
                <a href="#about-me" className='py-2 about'>
                  About
                </a>
              </li>
              <li>
                <a href="#resume" className='py-2 resume'>
                  Resume
                </a>
              </li>
              <li>
                <a href="#services" className='py-2 services'>
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className='py-2 projects'>
                  Projects
                </a>
              </li>
              <li>
                <a href="#myblog" className='py-2 myblog'>
                  My Blog
                </a>
              </li>
              <li>
                <a href="#contact" className='py-2 contact'>
                  Contact
                </a>
              </li>
            </ul>

            <button className="burger md:hidden w-fit">
              <span className="block rounded-3xl h-0.5 w-6 bg-black"></span>
              <span className="block rounded-3xl my-1.5 h-0.5 w-6 bg-black"></span>
              <span className="block rounded-3xl h-0.5 w-6 bg-black"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
