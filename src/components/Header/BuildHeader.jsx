import { NavLink } from "react-router-dom";
import SimpleBtn from "../Buttons/SimpleBtn";
function BuildHeader() {
  return (
    <>
      <header
        className="bg-[rgb(255,255,255,0.1)] 
        backdrop-blur-[10px] border-b-[1px] border-b-[white]
        fixed w-full top-0 left-0 z-100"
      >
        <div className="max-w-[1200px] mx-auto py-[20px]">
          <nav className="flex justify-around items-center px-4">
            <NavLink to="/">Go Back To Home</NavLink>
            <NavLink to="/template">Change Template</NavLink>
            <SimpleBtn
              btnLabel="Just Checking"
              btnStyle="bg-[#E0D9D9]"
            />
          </nav>
        </div>
      </header>
    </>
  );
}

export default BuildHeader;
