import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const UpdateProfile = () => {
    const { user, setUser, updateUserProfile } = useContext(AuthContext);

    const [displayName, setDisplayName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        updateUserProfile({ displayName, photoURL })
            .then(() => {
                Swal.fire({
                    title: "Congratulations!",
                    text: "Profile Updated!",
                    icon: "success",
                    confirmButtonText: "Close",
                });
                setUser((prevUser) => ({ ...prevUser, displayName, photoURL }));
            })
            .catch((error) => {
                Swal.fire({
                    title: "Error!",
                    text: error.message,
                    icon: "error",
                    confirmButtonText: "Close",
                });
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-r from-blue-50 to-blue-100">
            <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-xl">
                <h2 className="mb-6 text-3xl font-bold text-center text-blue-600">
                    Update Profile
                </h2>
                <form onSubmit={handleUpdateProfile}>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-semibold text-gray-700">
                            Display Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 text-gray-800 transition duration-300 border border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your display name"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-semibold text-gray-700">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 text-gray-800 transition duration-300 border border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your photo URL"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-6 py-3 text-lg font-medium text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 hover:-translate-y-1"
                    >
                        Update Profile
                    </button>
                    <div className="w-1/3 mx-auto">
                        <Link
                            to="/dashboard"
                            className="inline-block px-5 py-2 mt-4 text-lg font-medium text-blue-500 transition-all duration-300 transform bg-white border-2 border-blue-500 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white hover:-translate-y-1"
                        >
                            Dashboard
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
