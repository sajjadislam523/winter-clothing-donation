import { Link } from "react-router-dom";
import "animate.css";

const HowToHelp = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-screen-lg mx-auto">
                <section className="relative bg-help-bg flex rounded-lg flex-col items-center justify-center min-h-[300px] text-center bg-cover bg-center text-white animate__animated animate__fadeIn">
                    <div className="absolute inset-0 rounded-lg bg-black/50"></div>
                    <div className="relative z-10 w-full max-w-4xl px-4">
                        <h1 className="text-4xl font-bold sm:text-5xl">
                            How to Help
                        </h1>
                        <p className="mt-4 text-lg sm:text-xl">
                            Your contribution can make a big difference. Here
                            are some ways you can help those in need.
                        </p>
                    </div>
                </section>

                <section className="grid gap-8 p-8 mb-12 sm:grid-cols-2 lg:grid-cols-3 animate__animated animate__fadeInUp animate__delay-1s">
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold text-blue-700 sm:text-xl">
                            Donate Clothing
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 sm:text-base">
                            Contribute your unused winter clothing to keep
                            someone warm this winter.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold text-blue-700 sm:text-xl">
                            Volunteer
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 sm:text-base">
                            Join us as a volunteer to help distribute clothes to
                            people in need.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold text-blue-700 sm:text-xl">
                            Spread the Word
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 sm:text-base">
                            Share our mission with your friends and family to
                            increase awareness.
                        </p>
                    </div>
                </section>

                <section className="mb-12 text-center animate__animated animate__fadeIn animate__delay-1s">
                    <h2 className="text-2xl font-bold text-blue-700 sm:text-3xl">
                        Get Involved
                    </h2>
                    <p className="mt-4 text-base text-gray-600 sm:text-lg">
                        Sign up as a donor or volunteer to make a direct impact.
                    </p>
                    <Link
                        to="/signup"
                        className="inline-block px-6 py-3 mt-6 text-sm font-medium text-white transition-colors duration-300 bg-blue-700 rounded-lg hover:bg-blue-600 sm:text-base animate__animated animate__pulse animate__infinite"
                    >
                        Sign Up Now
                    </Link>
                </section>

                <section className="px-4 mb-12 animate__animated animate__fadeInUp animate__delay-2s">
                    <h2 className="text-2xl font-bold text-blue-700 sm:text-3xl">
                        Frequently Asked Questions
                    </h2>
                    <div className="mt-6 space-y-4">
                        <details className="p-4 bg-white rounded-lg shadow-lg">
                            <summary className="font-semibold text-blue-700 cursor-pointer">
                                How do I donate clothing?
                            </summary>
                            <p className="mt-2 text-sm text-gray-600 sm:text-base">
                                You can donate clothing by dropping it off at
                                our collection centers or arranging a pickup.
                            </p>
                        </details>
                        <details className="p-4 bg-white rounded-lg shadow-lg">
                            <summary className="font-semibold text-blue-700 cursor-pointer">
                                How can I sign up as a volunteer?
                            </summary>
                            <p className="mt-2 text-sm text-gray-600 sm:text-base">
                                Visit our &quot;Get Involved&quot; section and
                                fill out the volunteer form to join our team.
                            </p>
                        </details>
                    </div>
                </section>

                <section className="p-8 text-center animate__animated animate__fadeInUp animate__delay-3s">
                    <h2 className="text-2xl font-bold text-blue-700 sm:text-3xl">
                        Contact Us
                    </h2>
                    <p className="mt-4 text-base text-gray-600 sm:text-lg">
                        Need more information? Reach out to us via email or
                        phone.
                    </p>
                    <p className="mt-2">
                        <span className="font-semibold">Email:</span>{" "}
                        <a
                            href="mailto:info@warmhearts.com"
                            className="text-blue-700"
                        >
                            info@warmhearts.com
                        </a>
                    </p>
                    <p className="mt-1">
                        <span className="font-semibold">Phone:</span>{" "}
                        +880-123-456-7890
                    </p>
                </section>
            </div>
        </div>
    );
};

export default HowToHelp;
