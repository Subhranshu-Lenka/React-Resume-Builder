import { Routes, Route } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import About from "../pages/AboutUs/About"
import Home from "../pages/Home/home"
import NotPound from "../components/404NotFound/NotPound"
// import Home from "../pages/Home/Home"

Route
function Router() {
    return (
        <>
            {/* <div>Router rendering in the App</div> */}
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>

                <Route path="*" element={<NotPound/>} />
            </Routes>
        </>
    )
}

export default Router