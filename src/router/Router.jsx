import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import BuildLayout from "../layouts/BuildLayout";
import About from "../pages/AboutUs/About";
import Home from "../pages/Home/Home";
import NotFound from "../components/404NotFound/NotFound";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Login from "../pages/Login/Login";
import FormBuilding from "../pages/DataInput/FormBuilding";

function Router() {
  return (
    <>
      {/* <div>Router rendering in the App</div> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />

          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/builder" element={<BuildLayout />}>
          <Route index element={<FormBuilding />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
