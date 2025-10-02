import { Link, NavLink } from "react-router-dom";
import "./mainHeader.css";
import PrimaryBtn from "../Buttons/PrimaryBtn";

function MainHeader({ onFeatureClick }) {
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
          <nav className="flex justify-between items-center custom-navbar">
            <NavLink to="/" className="text-2xl font-bold">
              ResumeForge {/* Logo | Home Btn*/}
            </NavLink>

            <ul className="flex place-content-around gap-12 custom-nav-links">
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
              navigationPath="/login"
            />
          </nav>
        </div>
      </header>
    </>
  );
}

export default MainHeader;
