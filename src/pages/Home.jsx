import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import sliderImg1 from "../assets/winter-image_1.webp";
import sliderImg2 from "../assets/winter-image_2.webp";
import sliderImg3 from "../assets/winter-image_3.webp";
import sliderImg4 from "../assets/winter-image_4.webp";
import sliderImg5 from "../assets/winter-image_5.webp";
import sliderImg6 from "../assets/winter-image_6.jpg";
import { Link } from "react-router-dom";
import donation from "../assets/donation.png";
import share from "../assets/share.png";
import volunteer from "../assets/volunteer.png";

import aboutImg from "../assets/about.jpg";

const Home = () => {
    return (
        <div className="min-h-screen bg-blue-50">
            {/* Banner/Slider Section */}
            <section className="relative">
                <Swiper
                    navigation
                    loop
                    pagination={{ clickable: true }}
                    className="h-[500px]"
                    autoplay={{ delay: 5000 }}
                    modules={[Navigation, Pagination, Autoplay]}
                >
                    <SwiperSlide>
                        <div className="flex items-center h-full p-4">
                            <img
                                src={sliderImg1}
                                alt="Campaign 1"
                                className="object-cover w-1/2 h-full rounded-lg"
                            />
                            <div className="w-1/2 p-8 text-left">
                                <h2 className="text-3xl font-bold text-gray-800">
                                    Campaign 1: Warm Smiles for Winter
                                </h2>
                                <p className="mt-4 text-lg text-gray-600">
                                    Help us deliver warm clothing and
                                    accessories to families in need. Every small
                                    act of kindness can spread a warm smile this
                                    winter.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center h-full p-4">
                            <img
                                src={sliderImg2}
                                alt="Campaign 2"
                                className="object-cover w-1/2 h-full rounded-lg"
                            />
                            <div className="w-1/2 p-8 text-left">
                                <h2 className="text-3xl font-bold text-gray-800">
                                    Campaign 2: Spread Warmth
                                </h2>
                                <p className="mt-4 text-lg text-gray-600">
                                    Join our effort to collect and distribute
                                    warm winter clothing to underserved
                                    communities across the country.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center h-full p-4">
                            <img
                                src={sliderImg3}
                                alt="Campaign 3"
                                className="object-cover w-1/2 h-full rounded-lg"
                            />
                            <div className="w-1/2 p-8 text-left">
                                <h2 className="text-3xl font-bold text-gray-800">
                                    Campaign 3: Blanket the Nation
                                </h2>
                                <p className="mt-4 text-lg text-gray-600">
                                    Let’s come together to provide blankets and
                                    jackets to help individuals brave the cold
                                    this winter season.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center h-full p-4">
                            <img
                                src={sliderImg4}
                                alt="Campaign 4"
                                className="object-cover w-1/2 h-full rounded-lg"
                            />
                            <div className="w-1/2 p-8 text-left">
                                <h2 className="text-3xl font-bold text-gray-800">
                                    Campaign 4: Winter Essentials Drive
                                </h2>
                                <p className="mt-4 text-lg text-gray-600">
                                    Contribute winter essentials like gloves,
                                    scarves, and socks to support vulnerable
                                    communities during harsh weather conditions.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center h-full p-4">
                            <img
                                src={sliderImg5}
                                alt="Campaign 5"
                                className="object-cover w-1/2 h-full rounded-lg"
                            />
                            <div className="w-1/2 p-8 text-left">
                                <h2 className="text-3xl font-bold text-gray-800">
                                    Campaign 5: Warm Hearts Initiative
                                </h2>
                                <p className="mt-4 text-lg text-gray-600">
                                    Join us in spreading warmth to children and
                                    elderly individuals by donating new or
                                    gently used winter clothing.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center h-full p-4">
                            <img
                                src={sliderImg6}
                                alt="Campaign 6"
                                className="object-cover w-1/2 h-full rounded-lg"
                            />
                            <div className="w-1/2 p-8 text-left">
                                <h2 className="text-3xl font-bold text-gray-800">
                                    Campaign 6: Community Warmth Network
                                </h2>
                                <p className="mt-4 text-lg text-gray-600">
                                    Build a network of support by donating and
                                    volunteering to help distribute winter
                                    clothes to families in need.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <section
                className="relative p-8 text-center bg-white"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                        src={aboutImg}
                        alt="Winter Clothing Campaign"
                        className="object-cover w-full h-96"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="text-white">
                            <h2 className="text-4xl font-semibold">About Us</h2>
                            <p className="max-w-3xl mx-auto mt-4 text-lg">
                                We are a nonprofit organization committed to
                                making winters warmer for those in need. Our
                                mission is to bridge the gap between donors and
                                volunteers to ensure essential winter clothing
                                reaches the underprivileged across Bangladesh.
                            </p>
                            <p className="max-w-3xl mx-auto mt-4 text-lg">
                                Join us on this journey to spread warmth and
                                kindness this winter. Whether you&apos;re
                                donating, volunteering, or sharing our cause,
                                your contribution goes a long way in creating a
                                more compassionate community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-8 bg-blue-100">
                <h2 className="text-4xl font-semibold text-center text-gray-700">
                    How It Works
                </h2>
                <p className="max-w-3xl mx-auto mt-4 text-lg text-center text-gray-600">
                    Our process is simple and effective, ensuring that every
                    donation reaches the people who need it the most.
                    Here&apos;s how you can get involved:
                </p>
                <div className="grid gap-12 mt-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="text-center">
                        <img
                            src={donation}
                            alt="Donate"
                            className="w-20 mx-auto mb-4"
                        />
                        <h3 className="text-2xl font-bold text-gray-700">
                            Donate
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Bring your gently used or new winter clothes to our
                            designated collection points. Every item counts in
                            helping those in need.
                        </p>
                    </div>

                    <div className="text-center">
                        <img
                            src={volunteer}
                            alt="Volunteer"
                            className="w-20 mx-auto mb-4"
                        />
                        <h3 className="text-2xl font-bold text-gray-700">
                            Volunteer
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Join our network of volunteers to help sort,
                            package, and distribute donations. Your time and
                            effort make a huge impact.
                        </p>
                    </div>

                    <div className="text-center">
                        <img
                            src={share}
                            alt="Share"
                            className="w-20 mx-auto mb-4"
                        />
                        <h3 className="text-2xl font-bold text-gray-700">
                            Share
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Spread the word about our mission on social media
                            and encourage your friends and family to
                            participate. Together, we can achieve more.
                        </p>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <Link
                        to="/donation-campaign"
                        className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                        Get Involved
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
