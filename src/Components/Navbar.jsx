import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const myElementRef = useRef(null);
  const [NavClass, setNavClass] = useState(
    "bg-transparent absolute w-full z-[1000]"
  );

  useEffect(() => {
    const handleScroll = () => {
      const NavElement = document.getElementById("navbar");

      window.onscroll = function () {
        var scrollTop =
          document.body.scrollTop || document.documentElement.scrollTop;

        console.log(scrollTop);
        if (
          (scrollTop >= 450 && scrollTop < 1350) ||
          (scrollTop >= 450 && scrollTop < 1350)
        ) {
          setNavClass(
            "bg-white fixed w-full z-[1000] shadow-[0_3px_10px_rgb(0,0,0,0.1)]"
          );
          NavElement.style.animation = "0.3s navbar-animation ease-in-out";
          NavElement.querySelector(".about").classList.add("active");
          NavElement.querySelector(".resume").classList.remove("active");
          NavElement.querySelector(".services").classList.remove("active");
          NavElement.querySelector(".projects").classList.remove("active");
          NavElement.querySelector(".myblog").classList.remove("active");
          NavElement.querySelector(".contact").classList.remove("active");
        } else if (
          (scrollTop >= 1350 && scrollTop < 3800) ||
          (scrollTop >= 1350 && scrollTop < 3800)
        ) {
          NavElement.querySelector(".resume").classList.add("active");
          NavElement.querySelector(".about").classList.remove("active");
          NavElement.querySelector(".services").classList.remove("active");
          NavElement.querySelector(".projects").classList.remove("active");
          NavElement.querySelector(".myblog").classList.remove("active");
          NavElement.querySelector(".contact").classList.remove("active");
        } else if (
          (scrollTop >= 3800 && scrollTop < 5100) ||
          (scrollTop >= 3800 && scrollTop < 5100)
        ) {
          NavElement.querySelector(".resume").classList.remove("active");
          NavElement.querySelector(".about").classList.remove("active");
          NavElement.querySelector(".services").classList.add("active");
          NavElement.querySelector(".projects").classList.remove("active");
          NavElement.querySelector(".myblog").classList.remove("active");
          NavElement.querySelector(".contact").classList.remove("active");
        } else if (
          (scrollTop >= 5100 && scrollTop < 10000) ||
          (scrollTop >= 5100 && scrollTop < 10000)
        ) {
          NavElement.querySelector(".resume").classList.remove("active");
          NavElement.querySelector(".about").classList.remove("active");
          NavElement.querySelector(".services").classList.remove("active");
          NavElement.querySelector(".projects").classList.remove("active");
          NavElement.querySelector(".myblog").classList.remove("active");
          NavElement.querySelector(".contact").classList.add("active");
        } else {
          setNavClass("bg-transparent absolute w-full z-[1000]");
          NavElement.style.animation = "";
          NavElement.querySelector(".about").classList.remove("active");
          NavElement.querySelector(".resume").classList.remove("active");
          NavElement.querySelector(".services").classList.remove("active");
          NavElement.querySelector(".projects").classList.remove("active");
          NavElement.querySelector(".myblog").classList.remove("active");
          NavElement.querySelector(".contact").classList.remove("active");
        }
      };
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const DropDown = () => {
    const DropItems = document.querySelector(".dropdown-menu");
    const Burger = document.querySelector(".burger");

    if (DropItems.classList.contains("hidden")) {
      DropItems.classList.toggle("hidden");
      DropItems.style.animation = "0.3s dropdwon-animation ease-in-out";

      Burger.querySelector(".line-1").classList.add(
        "rotate-45",
        "top-1/2",
        "-translate-y-1/2",
        "bg-[#3e64ff_!important]"
      );
      Burger.querySelector(".line-2").classList.add(
        "translate-x-[200%]",
        "bg-[#3e64ff_!important]",
        "opacity-0"
      );
      Burger.querySelector(".line-3").classList.add(
        "-rotate-45",
        "top-1/2",
        "-translate-y-1/2",
        "bg-[#3e64ff_!important]"
      );
    } else {
      DropItems.style.animation = "0.5s dropup-animation ease-in-out";

      Burger.querySelector(".line-1").classList.remove(
        "rotate-45",
        "top-1/2",
        "-translate-y-1/2",
        "bg-[#3e64ff_!important]"
      );
      Burger.querySelector(".line-2").classList.remove(
        "translate-x-[200%]",
        "bg-[#3e64ff_!important]",
        "opacity-0"
      );
      Burger.querySelector(".line-3").classList.remove(
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
      <section id="navbar" className={NavClass}>
        <div className="navbar container-1  relative">
          <div className="nav-items flex justify-between items-center py-4 px-5 sm:px-0 overflow-hidden">
            <div className="1 logo cursor-pointer">
              <a
                href="#home"
                className="relative z-[1] font-bold text-[30px] ml-[10px]"
              >
                <span className="text-white">K</span>aran
                <span className="block h-10 w-10 bg-[#3e64ff] rounded-full absolute bottom-[-1.5px] left-[-8px] z-[-1]"></span>
              </a>
            </div>
            <div className="2 flex items-center">
              <ul className="dropdown-menu  md:gap-5 lg:gap-8 xl:gap-10 flex-col md:flex-row absolute md:static md:bg-transparent left-0 shadow-inner md:shadow-none top-[76px] w-full bg-white z-[1000] px-5 py-2 md:p-0 hidden md:flex">
                <li>
                  <a href="#home" className="py-2 home">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about-me" className="py-2 about">
                    About
                  </a>
                </li>
                <li>
                  <a href="#resume" className="py-2 resume">
                    Resume
                  </a>
                </li>
                <li>
                  <a href="#services" className="py-2 services">
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
                  <a href="#contact" className="py-2 contact">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
