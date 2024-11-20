import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaGoogle } from "react-icons/fa";
import { RiEyeCloseFill } from "react-icons/ri";

const Login = () => {
    const { logIn, setUser, handleGoogleLogIn, setEmail } =
        useContext(AuthContext);
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false);

    const emailRef = useRef();

    const handleLogin = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        logIn(email, password)
            .then((res) => {
                setUser(res.data);
                Swal.fire("Success", "Logged in successfully", "success");
                navigate("/");
            })
            .catch((err) => {
                Swal.fire("Error", err.message, "error");
            });
    };

    const handleClick = () => {
        handleGoogleLogIn()
            .then((res) => {
                setUser(res.user);
                Swal.fire("Success", "Logged in successfully", "success");
                navigate("/");
            })
            .catch((err) => {
                Swal.fire("Error", err.message, "error");
            });
    };

    const handleForgotPassword = () => {
        const emailValue = emailRef.current.value;

        if (!emailValue) {
            Swal.fire({
                title: "Error!",
                text: "Please enter your email before resetting your password.",
                icon: "error",
                confirmButtonText: "Close",
            });
            return;
        }
        setEmail(emailValue);
        navigate("/forgot-password");
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 bg-white border border-gray-300 shadow-2xl rounded-xl">
                <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
                    Login
                </h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your email"
                            name="email"
                            required
                            ref={emailRef}
                        />
                    </div>
                    <div className="relative mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type={showPass ? "text" : "password"}
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your password"
                            name="password"
                            required
                        />
                        <button
                            onClick={() => setShowPass(!showPass)}
                            className="absolute text-gray-600 transform -translate-y-1/2 right-4 bottom-1"
                        >
                            {showPass ? (
                                <RiEyeCloseFill size={20} />
                            ) : (
                                <FaEye size={20} />
                            )}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
                    >
                        Login
                    </button>
                </form>
                <button
                    className="flex items-center justify-center w-full px-4 py-2 mt-4 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none"
                    onClick={handleClick}
                >
                    <FaGoogle className="mr-3" size={20} /> Login with Google
                </button>
                <div className="mt-4 text-center">
                    <button
                        onClick={handleForgotPassword}
                        className="text-blue-500 hover:underline"
                    >
                        Forgot Password?
                    </button>
                </div>
                <div className="mt-4 text-center">
                    Don&apos;t have an account?
                    <Link
                        to="/signup"
                        className="text-blue-500 hover:underline"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
