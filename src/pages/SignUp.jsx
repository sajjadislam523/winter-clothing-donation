import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { RiEyeCloseFill } from "react-icons/ri";
import { sendEmailVerification } from "firebase/auth";

const SignUp = () => {
    const { setUser, createNewUser, updateUserProfile } =
        useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const showAlert = () => {
        Swal.fire({
            title: "Congratulations!",
            text: "You have successfully signed up",
            icon: "success",
            confirmButtonText: "Close",
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const displayName = form.get("displayName");
        const photoURL = form.get("photoURL");
        const email = form.get("email");
        const password = form.get("password");

        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            return;
        }

        const passwordConfirmation = /^(?=.*[A-Z])(?=.*[a-z]).*$/;
        if (!passwordConfirmation.test(password)) {
            setError(
                "Password must contain at least one uppercase letter and one lowercase letter"
            );
            return;
        }

        createNewUser(email, password)
            .then((res) => {
                const user = res.user;

                sendEmailVerification(user)
                    .then(() => {
                        Swal.fire({
                            title: "Success!",
                            text: "Account created successfully! Please verify your email before logging in.",
                            icon: "success",
                            confirmButtonText: "Close",
                        });
                    })
                    .catch((err) => {
                        console.error(err);
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to send email verification.",
                            icon: "error",
                            confirmButtonText: "Close",
                        });
                    });

                return updateUserProfile({
                    displayName,
                    photoURL,
                }).then(() => {
                    const updatedUser = { ...user, displayName, photoURL };
                    setUser(updatedUser);
                    showAlert();
                    navigate("/");
                });
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    title: "Error!",
                    text: error.message,
                    icon: "error",
                    confirmButtonText: "Close",
                });
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-4 py-8">
            <div className="w-full max-w-sm p-6 bg-white border border-gray-300 shadow-xl sm:max-w-md sm:p-8 rounded-xl">
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-800 sm:text-3xl">
                    Register
                </h2>
                <form onSubmit={handleRegister}>
                    {/* Name Input */}
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your name"
                            name="displayName"
                            required
                        />
                    </div>

                    {/* Email Input */}
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
                        />
                    </div>

                    {/* Photo URL Input */}
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your photo URL"
                            name="photo-url"
                            required
                        />
                    </div>

                    {/* Password Input */}
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
                            className="absolute text-gray-600 transform -translate-y-1/2 right-4 bottom-2"
                        >
                            {showPass ? (
                                <RiEyeCloseFill size={20} />
                            ) : (
                                <FaEye size={20} />
                            )}
                        </button>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <p className="mb-4 text-sm text-red-500">{error}</p>
                    )}

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
                    >
                        Register
                    </button>
                </form>

                {/* Login Redirect */}
                <div className="mt-4 text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Login here
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
