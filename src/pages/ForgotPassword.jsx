import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const ResetPassword = () => {
    const { resetPassword } = useContext(AuthContext);
    const [email, setEmail] = useState("");

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
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h2 className="mb-4 text-2xl font-bold text-center">
                    Reset Password
                </h2>
                <form onSubmit={handlePasswordReset}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white transition bg-blue-500 rounded hover:bg-blue-600"
                    >
                        Send Reset Email
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
