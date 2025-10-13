import { Outlet } from "react-router-dom";
import BuildHeader from "../components/Header/BuildHeader";
function BuildLayout() {
  return (
    <>
      <BuildHeader />
      <div className="min-h-[90vh]">
        <Outlet />
      </div>
    </>
  );
}

export default BuildLayout;
