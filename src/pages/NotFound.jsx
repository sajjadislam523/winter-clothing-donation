import { Link } from "react-router-dom";
import errorImg from "../assets/error-404.png";
import "animate.css";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center max-h-screen gap-4 my-12">
            <img className="w-80" src={errorImg} alt="" />
            <h1 className="text-3xl animate__animated animate__shakeX animate__delay-2s animate__faster text-[#351c75]">
                Page Not Found!
            </h1>
            <p>The page you are looking for is not available right now!</p>
            <Link
                className="px-4 py-2 font-semibold text-white transition-colors duration-300 ease-in-out bg-blue-500 rounded-lg hover:bg-blue-600"
                to="/"
            >
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;
