import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [openMenu, setOpenMenu] = useState(false);

    const linkClass = ({ isActive }) =>
        `hover:underline transition-colors duration-300 ${
            isActive ? "text-blue-700 underline" : "text-gray-600"
        }`;

    const links = (
        <div className="flex flex-col items-center gap-4 text-sm md:flex-row">
            <NavLink className={linkClass} to="/">
                Home
            </NavLink>
            <NavLink className={linkClass} to="/donation-campaign">
                Donation Campaigns
            </NavLink>
            <NavLink className={linkClass} to="/how-to-help">
                How to Help
            </NavLink>
            <NavLink className={linkClass} to="/dashboard">
                Dashboard
            </NavLink>
        </div>
    );
    return (
        <div className="relative bg-gray-100 shadow-md">
            <div className="flex items-center justify-between max-w-screen-xl p-4 mx-auto">
                <div className="flex items-center gap-2">
                    <img src="/favicon.png" className="w-10 h-10" alt="Logo" />
                    <h1 className="text-xl font-bold text-blue-700">
                        Warm Hearts
                    </h1>
                </div>

                <div className="items-center hidden gap-6 md:flex">{links}</div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        {user ? (
                            <img
                                className="w-10 h-10 rounded-full"
                                src={user.photoURL}
                                alt="User Profile"
                            />
                        ) : (
                            <Link
                                className="px-4 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-600"
                                to="/login"
                            >
                                Login
                            </Link>
                        )}
                    </div>

                    <button
                        onClick={() => setOpenMenu(!openMenu)}
                        className="text-xl text-gray-700 md:hidden"
                    >
                        {openMenu ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {openMenu && (
                <div
                    className="absolute right-0 z-10 w-full max-w-xs p-4 mt-2 transform bg-white rounded-lg shadow-lg animate__animated animate__fadeIn"
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    {links}
                </div>
            )}
        </div>
    );
};

export default Navbar;
