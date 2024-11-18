import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

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
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h2 className="mb-4 text-2xl font-bold text-center">
                    Update Profile
                </h2>
                <form onSubmit={handleUpdateProfile}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium">
                            Display Name
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            placeholder="Enter your display name"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            placeholder="Enter your photo URL"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white transition bg-blue-500 rounded hover:bg-blue-600"
                    >
                        Update Profile
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
