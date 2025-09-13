import { Link, Outlet } from "react-router-dom";
import MainFooter from "../components/Footer/MainFooter";
import MainHeader from "../components/Header/MainHeader";
function MainLayout() {
    return (
        <>
            <MainHeader />
            <Outlet />
            <MainFooter />
        </>
    )
}

export default MainLayout