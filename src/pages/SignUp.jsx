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
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h2 className="mb-4 text-2xl font-bold text-center">
                    Register
                </h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            placeholder="Enter your name"
                            name="displayName"
                            required
                        />
                    </div>
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
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium">
                            Photo-URL
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            placeholder="Enter your email"
                            name="photo-url"
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
                    {error && (
                        <p className="mb-4 text-sm text-red-500">{error}</p>
                    )}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white transition bg-blue-500 rounded hover:bg-blue-600"
                    >
                        Register
                    </button>
                </form>
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
