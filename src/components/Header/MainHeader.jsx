import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

import "./mainHeader.css";
import PrimaryBtn from "../Buttons/PrimaryBtn";

function MainHeader({ onFeatureClick }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className="bg-[rgb(255,255,255,0.1)] 
        backdrop-blur-[10px] border-b-[1px] border-b-[white]
        fixed w-full top-0 left-0 z-100
        custom-main-header"
      >
        <div
          className="max-w-[1200px] mx-auto py-[20px]
        custom-container"
        >
          <nav className="flex justify-between items-center px-4 custom-navbar">
            <NavLink to="/" className="text-2xl font-bold">
              ResumeForge {/* Logo | Home Btn*/}
            </NavLink>

            <ul
              className={`
                 ${
                   isMenuOpen
                     ? "flex flex-col gap-8 absolute top-[10vh] right-0 w-fit bg-black shadow-md py-4 px-[16vw]"
                     : "hidden"
                 }
                  md:flex md:flex-row md:items-center md:gap-12 md:static md:bg-transparent md:shadow-none
                  custom-nav-links
                `}
            >
              <li>
                {" "}
                <NavLink to="/template">Templates</NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="/" onClick={onFeatureClick}>
                  Features
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="/pricing">Pricing</NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="/contact">Contact</NavLink>{" "}
              </li>
            </ul>

            <PrimaryBtn
              btnLabel="Get Started"
              btnGradient="from-orange-400 to-amber-700"
              btnStyle="hidden md:inline-block"
              navigationPath="/login"
            />

            {/* Menu Icon Handler */}
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <IoMdClose size={24} />
              ) : (
                <GiHamburgerMenu size={24} />
              )}
            </button>
            {/* <GiHamburgerMenu className="h-6 w-auto md:hidden" /> */}
          </nav>
        </div>
      </header>
    </>
  );
}

export default MainHeader;
