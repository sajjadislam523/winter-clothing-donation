import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import dhakaImg from "../assets/annual-report/dhaka.jpg";
import ctgImg from "../assets/annual-report/chittagong.jpg";
import rajshahiImg from "../assets/annual-report/rajshahi.jpg";

const AnnualReport = () => {
    const data = [
        { month: "Jan", donations: 400 },
        { month: "Feb", donations: 300 },
        { month: "Mar", donations: 500 },
        { month: "Apr", donations: 600 },
        { month: "May", donations: 700 },
        { month: "Jun", donations: 400 },
        { month: "Jul", donations: 500 },
        { month: "Aug", donations: 600 },
        { month: "Sep", donations: 700 },
        { month: "Oct", donations: 800 },
        { month: "Nov", donations: 900 },
        { month: "Dec", donations: 1000 },
    ];

    return (
        <section className="min-h-screen py-16 bg-gray-50">
            <div className="container px-4 mx-auto max-w-7xl">
                <h2 className="text-4xl font-bold text-center text-gray-800 sm:text-5xl">
                    Annual Report 2024
                </h2>
                <p className="mt-4 text-center text-gray-600">
                    A glimpse of the incredible journey we’ve had this year in
                    making a difference.
                </p>

                <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="p-6 text-center bg-white rounded-lg shadow-lg">
                        <h3 className="text-3xl font-bold text-blue-500">
                            1200+
                        </h3>
                        <p className="mt-2 text-lg text-gray-700">Donors</p>
                    </div>
                    <div className="p-6 text-center bg-white rounded-lg shadow-lg">
                        <h3 className="text-3xl font-bold text-cyan-500">
                            8000+
                        </h3>
                        <p className="mt-2 text-lg text-gray-700">
                            People Helped
                        </p>
                    </div>
                    <div className="p-6 text-center bg-white rounded-lg shadow-lg">
                        <h3 className="text-3xl font-bold text-teal-500">
                            50+
                        </h3>
                        <p className="mt-2 text-lg text-gray-700">Campaigns</p>
                    </div>
                    <div className="p-6 text-center bg-white rounded-lg shadow-lg">
                        <h3 className="text-3xl font-bold text-indigo-500">
                            300+
                        </h3>
                        <p className="mt-2 text-lg text-gray-700">Volunteers</p>
                    </div>
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-center text-gray-800 sm:text-3xl">
                        Success Highlights
                    </h3>
                    <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <img
                                src={dhakaImg}
                                alt="Success Story"
                                className="object-cover w-full h-48 rounded-lg"
                            />
                            <h4 className="mt-4 text-xl font-bold text-gray-800">
                                Helping Communities
                            </h4>
                            <p className="mt-2 text-gray-600">
                                This year, we distributed over 5,000 warm
                                clothes in Dhaka, transforming lives during the
                                harsh winter.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <img
                                src={ctgImg}
                                alt="Success Story"
                                className="object-cover w-full h-48 rounded-lg"
                            />
                            <h4 className="mt-4 text-xl font-bold text-gray-800">
                                Spreading Warmth
                            </h4>
                            <p className="mt-2 text-gray-600">
                                Volunteers worked tirelessly to deliver 3,000
                                clothing packages to families in need, ensuring
                                a warmer winter in Chattogram.
                            </p>
                        </div>

                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <img
                                src={rajshahiImg}
                                alt="Success Story"
                                className="object-cover w-full h-48 rounded-lg"
                            />
                            <h4 className="mt-4 text-xl font-bold text-gray-800">
                                Empowering the Youth
                            </h4>
                            <p className="mt-2 text-gray-600">
                                Over 2,000 students received winter clothing and
                                essentials, enabling them to focus on their
                                education without the burden of cold weather.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-center text-gray-800 sm:text-3xl">
                        Yearly Progress
                    </h3>
                    <div className="mt-8">
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="donations" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-center text-gray-800 sm:text-3xl">
                        Goals for 2025
                    </h3>
                    <p className="mt-4 text-center text-gray-600">
                        We aim to reach more communities and make an even bigger
                        impact in the coming year.
                    </p>
                    <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-gray-800">
                                Expand Coverage
                            </h4>
                            <p className="mt-2 text-gray-600">
                                Reach more remote areas to ensure no one is left
                                out.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-gray-800">
                                Increase Volunteers
                            </h4>
                            <p className="mt-2 text-gray-600">
                                Grow our volunteer base to strengthen our
                                impact.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-gray-800">
                                Raise Awareness
                            </h4>
                            <p className="mt-2 text-gray-600">
                                Conduct campaigns to educate the public about
                                our cause.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AnnualReport;
