import { Link } from "react-router-dom";
import errorImg from "../assets/error-404.png";
import "animate.css";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gradient-to-br from-gray-100 to-blue-50">
            <div className="relative animate__animated animate__fadeInDown">
                <img className="w-80" src={errorImg} alt="Error 404" />
                <div className="absolute inset-0 w-full h-full border-[6px] border-dotted border-blue-300 rounded-xl animate-pulse"></div>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-wide text-gray-800 md:text-5xl">
                Oops! Page Not Found.
            </h1>

            <p className="mt-4 text-lg text-gray-600 md:text-xl">
                Sorry, the page you’re looking for doesn’t exist or has been
                moved.
            </p>

            <Link
                to="/"
                className="relative px-6 py-3 mt-6 overflow-hidden text-lg font-medium text-white transition-all duration-300 rounded-lg shadow-lg bg-gradient-to-r from-blue-400 to-blue-600 hover:shadow-xl group"
            >
                <span className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-500 to-blue-700 group-hover:opacity-100"></span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-y-1">
                    Return to Home
                </span>
            </Link>
        </div>
    );
};

export default NotFound;
