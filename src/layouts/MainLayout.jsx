import { Outlet } from "react-router-dom";
import MainFooter from "../components/Footer/MainFooter";
import MainHeader from "../components/Header/MainHeader";
import useScrollToView from "../hooks/useScrollToView";
function MainLayout() {

  const [featureRef, scrollToFeatureRef] = useScrollToView();

  return (
    <>
      <MainHeader onFeatureClick={scrollToFeatureRef} />
      <div id="outlet" className="min-h-[80vh]">
        <Outlet context={{ featureRef }} />
      </div>
      <MainFooter />
    </>
  );
}

export default MainLayout;
