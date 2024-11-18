import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const { resetPassword, loading } = useContext(AuthContext);
    const location = useLocation();

    useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    }, [location]);

    const handleReset = async (e) => {
        e.preventDefault();

        try {
            await resetPassword(email);
            Swal.fire(
                "Success",
                "Password reset email sent successfully.",
                "success"
            );
            setEmail("");

            setTimeout(() => {
                window.location.href = "https://mail.google.com";
            }, 2000);
        } catch (err) {
            if (err.code === "auth/user-not-found") {
                Swal.fire(
                    "Error",
                    "No user found with this email address.",
                    "error"
                );
            } else if (err.code === "auth/invalid-email") {
                Swal.fire("Error", "Invalid email address format.", "error");
            } else {
                Swal.fire(
                    "Error",
                    "Something went wrong. Please try again.",
                    "error"
                );
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
                <h2 className="mb-6 text-2xl font-semibold text-center">
                    Forgot Password
                </h2>
                <form onSubmit={handleReset}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full p-2 text-white bg-blue-500 rounded ${
                            loading
                                ? "cursor-not-allowed opacity-75"
                                : "hover:bg-blue-600"
                        }`}
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Password Reset Email"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
