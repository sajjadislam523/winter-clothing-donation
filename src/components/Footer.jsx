import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="py-8 text-white bg-gradient-to-r from-blue-500 to-cyan-600">
            <div className="max-w-6xl px-4 mx-auto">
                {/* Contact Information */}
                <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-3">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">Contact Us</h2>
                        <p className="text-lg">
                            Email: contact@winterdonate.org
                        </p>
                        <p className="text-lg">Phone: +880 123 456 789</p>
                        <p className="text-lg">Address: Dhaka, Bangladesh</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="space-y-4 text-center md:text-left">
                        <h2 className="text-2xl font-semibold">Follow Us</h2>
                        <div className="flex justify-center gap-6 md:justify-start">
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl hover:text-blue-500"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://www.twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl hover:text-blue-400"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl hover:text-pink-500"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl hover:text-blue-700"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Newsletter or Extra Section (Optional) */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">Stay Updated</h2>
                        <p className="text-lg">
                            Subscribe to our newsletter to get the latest
                            updates on donations and events.
                        </p>
                        <div className="flex items-center gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 text-black border border-gray-400 rounded-lg"
                            />
                            <button className="px-4 py-2 text-white transition duration-300 bg-green-500 rounded-lg hover:bg-green-600">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright Notice */}
                <div className="pt-4 mt-8 text-sm text-center border-t border-gray-700">
                    <p>
                        &copy; 2024 Winter Clothing Donation. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
