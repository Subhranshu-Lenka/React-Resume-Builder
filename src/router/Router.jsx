import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/AboutUs/About";
import Home from "../pages/Home/Home";
import NotFound from "../components/404NotFound/NotFound";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

function Router() {
  return (
    <>
      {/* <div>Router rendering in the App</div> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
