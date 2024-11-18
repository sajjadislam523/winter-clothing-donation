import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className="font-poppins">
            <Navbar />
            <div className="px-8 pb-8">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
