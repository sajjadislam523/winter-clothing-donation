import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
    const { user } = useContext(AuthContext);

    const links = (
        <div className="flex items-center gap-4">
            <Link to="/">Home</Link>
            <Link to="/donation-campaign">Donation Campaigns</Link>
            <Link to="/how-to-help">How to Help</Link>
            <Link to="/dashboard">Dashboard</Link>
        </div>
    );
    return (
        <div className="flex items-center justify-between py-4">
            <h1>LOGO</h1>
            {links}
            <div>
                {user ? (
                    <div>
                        <img
                            className="w-10 rounded-full"
                            src={user.photoURL}
                            alt=""
                        />
                        <p>{user.displayName}</p>
                    </div>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
