import React, { useEffect, useState } from "react";

const Navbar = () => {

  // SCROLL NAVBAR CLASS
  const [NavClass, setNavClass] = useState(
    "bg-transparent absolute w-full z-[1000]"
  );


  // MAKE DYNAMIC SCROLLING EFFECT IN NAVBAR LINKS
  const [NavActiveSection, setNavActiveSection] = useState('');
  const ScreenScroll = () => {
    // DEFINE ALL THE SECTIONS IN LINKS
    const sections = ['home', 'about-me', 'resume', 'services', 'contact'];
    let CurrentSection = '';
    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section && section.getBoundingClientRect().top < window.innerHeight * 0.5) {
        CurrentSection = sectionId;
      }
    }
    // SCROLL NAVBAR AFTER 200PX
    if (window.scrollY >= 200) {
      setNavClass(
        "bg-white fixed w-full z-[1000] shadow-[0_3px_10px_rgb(0,0,0,0.1)] animate-[0.3s_navbar-animation_ease-in-out]"
      );
    } else {
      setNavClass(
        "bg-transparent absolute w-full z-[1000] animate-none"
      );
    }

    setNavActiveSection(CurrentSection);
  };

  // USEEFFECT
  useEffect(() => {
    window.addEventListener('scroll', ScreenScroll);
    return () => {
      window.removeEventListener('scroll', ScreenScroll);
    };
  }, []);

  // NAVBAR DROPDOWN MENU
  const DropDown = () => {
    const DropItems = document.querySelector(".dropdown-menu");
    const DropDownContainer = document.querySelector(".burger");
    if (DropItems.classList.contains("hidden")) {
      DropItems.classList.toggle("hidden");
      DropItems.style.animation = "0.3s dropdwon-animation ease-in-out";
      DropDownContainer.querySelector(".line-1").classList.add(
        "rotate-45",
        "top-1/2",
        "-translate-y-1/2",
        "bg-[#3e64ff_!important]"
      );
      DropDownContainer.querySelector(".line-2").classList.add(
        "translate-x-[200%]",
        "bg-[#3e64ff_!important]",
        "opacity-0"
      );
      DropDownContainer.querySelector(".line-3").classList.add(
        "-rotate-45",
        "top-1/2",
        "-translate-y-1/2",
        "bg-[#3e64ff_!important]"
      );
    } else {
      DropItems.style.animation = "0.5s dropup-animation ease-in-out";
      DropDownContainer.querySelector(".line-1").classList.remove(
        "rotate-45",
        "top-1/2",
        "-translate-y-1/2",
        "bg-[#3e64ff_!important]"
      );
      DropDownContainer.querySelector(".line-2").classList.remove(
        "translate-x-[200%]",
        "bg-[#3e64ff_!important]",
        "opacity-0"
      );
      DropDownContainer.querySelector(".line-3").classList.remove(
        "-rotate-45",
        "top-1/2",
        "-translate-y-1/2",
        "bg-[#3e64ff_!important]"
      );
      setTimeout(() => {
        DropItems.classList.toggle("hidden");
      }, 500);
    }
  };

  return (
    <>
      {/* NAVBAR SECTION */}
      <section id="navbar" className={NavClass}>
        <div className="navbar container-1  relative">
          <div className="nav-items flex justify-between items-center py-4 px-5 sm:px-0 overflow-hidden">

            {/* LOGO  */}
            <div className="1 logo cursor-pointer">
              <a
                href="#home"
                className="relative z-[1] font-bold text-[30px] ml-[10px]"
              >
                <span className="text-white">K</span>aran
                <span className="block h-10 w-10 bg-[#3e64ff] rounded-full absolute bottom-[-1.5px] left-[-8px] z-[-1]"></span>
              </a>
            </div>
            {/* END LOGO  */}

            {/* DROPDOWN ITEMS  */}
            <div className="2 flex items-center">
              <ul className="dropdown-menu  md:gap-5 lg:gap-8 xl:gap-10 flex-col md:flex-row absolute md:static md:bg-transparent left-0 shadow-inner md:shadow-none top-[76px] w-full bg-white z-[1000] px-5 py-2 md:p-0 hidden md:flex">
                <li>
                  <a href="#home" className={NavActiveSection === 'home' ? 'active py-2 home' : 'py-2 home'}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about-me" className={NavActiveSection === 'about-me' ? 'active py-2 about' : 'py-2 about'}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#resume" className={NavActiveSection === 'resume' ? 'active py-2 resume' : 'py-2 resume'}>
                    Resume
                  </a>
                </li>
                <li>
                  <a href="#services" className={NavActiveSection === 'services' ? 'active py-2 services' : 'py-2 services'}>
                    Services
                  </a>
                </li>
                <li className="hidden">
                  <a href="#projects" className="py-2 projects">
                    Projects
                  </a>
                </li>
                <li className="hidden">
                  <a href="#myblog" className="py-2 myblog">
                    My Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className={NavActiveSection === 'contact' ? 'active py-2 contact' : 'py-2 contact'}>
                    Contact
                  </a>
                </li>
              </ul>

              <button
                className="burger md:hidden w-6 relative h-5"
                onClick={(e) => {
                  DropDown();
                }}
              >
                <span className="block line-1 absolute z-[1000] top-0 rounded-3xl h-0.5 w-6 bg-black"></span>
                <span className="block line-2 absolute z-[1000] top-1/2 -translate-y-1/2 rounded-3xl h-0.5 w-6 bg-black"></span>
                <span className="block line-3 absolute z-[1000] bottom-0 rounded-3xl h-0.5 w-6 bg-black"></span>
              </button>
            </div>
            {/* END DROPDOWN ITEMS  */}

          </div>
        </div>
      </section>
      {/* END NAVBAR SECTION */}
    </>
  );
};

export default Navbar;
