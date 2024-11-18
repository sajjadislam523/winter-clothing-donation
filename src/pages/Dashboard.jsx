import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h1 className="mb-4 text-2xl font-bold text-center">
                    Welcome, {user?.displayName || "User"}!
                </h1>

                <div className="flex flex-col items-center gap-4 mb-6">
                    {user?.photoURL && (
                        <img
                            src={user.photoURL}
                            alt="User Profile"
                            className="w-24 h-24 rounded-full shadow-md"
                        />
                    )}
                    <p className="text-lg font-medium text-gray-700">
                        Name: {user?.displayName || "N/A"}
                    </p>
                    <p className="text-lg font-medium text-gray-700">
                        Email: {user?.email || "N/A"}
                    </p>
                </div>

                <Link
                    to="/dashboard/update-profile"
                    className="block px-4 py-2 mb-4 text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                    Update Profile
                </Link>

                <button
                    className="block w-full px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
                    onClick={logOut}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
