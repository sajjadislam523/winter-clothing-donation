import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ResetPassword = () => {
    const { resetPassword, email } = useContext(AuthContext);

    const handlePasswordReset = (e) => {
        e.preventDefault();
        if (!email) {
            Swal.fire({
                title: "Error!",
                text: "Please enter your email.",
                icon: "error",
                confirmButtonText: "Close",
            });
            return;
        }

        resetPassword(email)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "Password reset email sent successfully. Please check your inbox.",
                    icon: "success",
                    confirmButtonText: "Close",
                });
                window.open("https://mail.google.com", "_blank");
            })
            .catch((err) => {
                console.error(err);
                Swal.fire({
                    title: "Error!",
                    text: err.message,
                    icon: "error",
                    confirmButtonText: "Close",
                });
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen py-8 bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white border border-gray-300 shadow-lg rounded-xl">
                <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
                    Reset Password
                </h2>
                <form onSubmit={handlePasswordReset}>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your email"
                            value={email}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
                    >
                        Send Reset Email
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
