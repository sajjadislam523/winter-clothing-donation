import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { RiEyeCloseFill } from "react-icons/ri";

const Login = () => {
    const { logIn, setUser, handleGoogleLogIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false);

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

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h2 className="mb-4 text-2xl font-bold text-center">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded"
                            placeholder="Enter your email"
                            name="email"
                            required
                        />
                    </div>
                    <div className="relative mb-4">
                        <label className="block mb-2 text-sm font-medium">
                            Password
                        </label>
                        <input
                            type={showPass ? "text" : "password"}
                            className="w-full p-2 border rounded"
                            placeholder="Enter your password"
                            name="password"
                            required
                        />
                        <button
                            onClick={() => setShowPass(!showPass)}
                            className="absolute right-4 top-10"
                        >
                            {showPass ? <RiEyeCloseFill /> : <FaEye />}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white transition bg-blue-500 rounded hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
                <button
                    className="w-full px-4 py-2 mt-4 text-white transition bg-red-500 rounded hover:bg-red-600"
                    onClick={handleClick}
                >
                    Login with Google
                </button>
                <div className="mt-4 text-center">
                    <Link
                        to="/forgot-password"
                        className="text-blue-500 hover:underline"
                    >
                        Forgot Password?
                    </Link>
                </div>
                <div className="mt-4 text-center">
                    Don&apos;t have an account?
                    <button
                        onClick=""
                        className="text-blue-500 hover:underline"
                    >
                        SignUp
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
