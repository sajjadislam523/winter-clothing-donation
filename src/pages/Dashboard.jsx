import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const { logOut } = useContext(AuthContext);
    return (
        <div>
            <h1>dashboard</h1>
            <button
                className="px-4 py-2 text-white bg-gray-700 rounded-xl"
                onClick={logOut}
            >
                Logout
            </button>
            <Link
                to="/dashboard/update-profile"
                className="px-4 py-2 text-white bg-gray-700 rounded-xl"
            >
                Update Profile
            </Link>
        </div>
    );
};

export default Dashboard;
