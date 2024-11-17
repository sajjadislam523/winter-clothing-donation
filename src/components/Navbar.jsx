import { Link } from "react-router-dom";

const Navbar = () => {
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
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;
