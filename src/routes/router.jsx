import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import DonationCampaigns from "../pages/Donationcampaigns";
import PrivateRoute from "./PrivateRoute";
import DonationDetails from "../pages/DonationDetails";
import HowToHelp from "../pages/HowToHelp";
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/ForgotPassword";
import UpdateProfile from "../pages/UpdateProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/donation-campaign",
                element: <DonationCampaigns />,
            },
            {
                path: "/donation-campaign/:id",
                element: (
                    <PrivateRoute>
                        <DonationDetails />
                    </PrivateRoute>
                ),
            },
            {
                path: "/how-to-help",
                element: <HowToHelp />,
            },
            {
                path: "/dashboard",
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                ),
            },

            {
                path: "/dashboard/update-profile",
                element: (
                    <PrivateRoute>
                        <UpdateProfile />,
                    </PrivateRoute>
                ),
            },

            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/forgot-password",
                element: <ForgotPassword />,
            },
            {
                path: "/update-profile",
                element: (
                    <PrivateRoute>
                        <UpdateProfile />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default router;
