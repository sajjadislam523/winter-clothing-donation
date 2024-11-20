import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className="min-h-screen bg-center bg-cover bg-gradient-to-b from-blue-100 to-white">
            <div className="w-full px-4 py-8">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
                    <div className="relative flex flex-col items-center justify-center p-8 rounded-t-lg bg-gradient-to-r from-blue-300 to-blue-200">
                        {user?.photoURL ? (
                            <img
                                src={user.photoURL}
                                alt="User Profile"
                                className="w-32 h-32 border-4 border-white rounded-full shadow-md"
                            />
                        ) : (
                            <div className="flex items-center justify-center w-32 h-32 bg-gray-200 rounded-full shadow-md">
                                <span className="text-xl font-semibold text-gray-600">
                                    No Photo
                                </span>
                            </div>
                        )}
                        <h1 className="mt-4 text-4xl font-bold text-white drop-shadow-md">
                            Welcome, {user?.displayName || "User"}!
                        </h1>
                        <p className="mt-2 text-lg text-white">
                            Manage your profile and account settings here.
                        </p>
                    </div>

                    <div className="p-6 space-y-6">
                        <div className="flex items-center justify-between p-4 rounded-lg shadow-inner bg-blue-50">
                            <p className="text-lg font-medium text-gray-800">
                                <span className="font-semibold text-blue-600">
                                    Name:
                                </span>{" "}
                                {user?.displayName || "N/A"}
                            </p>
                        </div>
                        <div className="flex items-center justify-between p-4 rounded-lg shadow-inner bg-blue-50">
                            <p className="text-lg font-medium text-gray-800">
                                <span className="font-semibold text-blue-600">
                                    Email:
                                </span>{" "}
                                {user?.email || "N/A"}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-6">
                        <Link
                            to="/dashboard/update-profile"
                            className="block w-full max-w-sm px-4 py-2 text-base font-medium text-center text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500 hover:-translate-y-1"
                        >
                            Update Profile
                        </Link>
                        <button
                            className="block w-full max-w-sm px-4 py-2 text-base font-medium text-center text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-400 to-indigo-400 hover:from-blue-500 hover:to-indigo-500 hover:-translate-y-1"
                            onClick={logOut}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
