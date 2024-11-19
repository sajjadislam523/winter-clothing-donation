import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="py-10 text-white bg-gradient-to-br from-blue-700 via-blue-500 to-cyan-400">
            <div className="max-w-6xl px-6 mx-auto">
                <div className="flex flex-col gap-8 mb-8 md:flex-row md:justify-between md:items-center">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold sm:text-2xl lg:text-3xl">
                            Contact Us
                        </h2>
                        <ul className="space-y-2">
                            <li className="text-base transition sm:text-lg hover:text-blue-300">
                                Email:{" "}
                                <a
                                    href="mailto:contact@winterdonate.org"
                                    className="underline"
                                >
                                    contact@winterdonate.org
                                </a>
                            </li>
                            <li className="text-base transition sm:text-lg hover:text-blue-300">
                                Phone:{" "}
                                <a
                                    href="tel:+880123456789"
                                    className="underline"
                                >
                                    +880 123 456 789
                                </a>
                            </li>
                            <li className="text-base transition sm:text-lg hover:text-blue-300">
                                Address: Dhaka, Bangladesh
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold sm:text-2xl lg:text-3xl">
                            Follow Us
                        </h2>
                        <div className="flex justify-center gap-6 md:justify-start">
                            <Link
                                to="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl transition transform hover:scale-110 hover:text-blue-300"
                            >
                                <FaFacebookF />
                            </Link>
                            <Link
                                to="https://www.twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl transition transform hover:scale-110 hover:text-blue-300"
                            >
                                <FaTwitter />
                            </Link>
                            <Link
                                to="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl transition transform hover:scale-110 hover:text-pink-300"
                            >
                                <FaInstagram />
                            </Link>
                            <Link
                                to="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl transition transform hover:scale-110 hover:text-blue-300"
                            >
                                <FaLinkedin />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-6 mt-8 text-sm text-center border-t border-blue-200">
                    <p className="text-xs sm:text-sm lg:text-base">
                        &copy; {new Date().getFullYear()} Winter Clothing
                        Donation. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
