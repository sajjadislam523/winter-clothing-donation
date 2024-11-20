import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import donation from "../assets/donation.png";
import share from "../assets/share.png";
import volunteer from "../assets/volunteer.png";
import aboutImg from "../assets/about.jpg";
import sliderImg1 from "../assets/winter-image_1.webp";
import sliderImg2 from "../assets/winter-image_2.webp";
import sliderImg3 from "../assets/winter-image_3.webp";
import sliderImg4 from "../assets/winter-image_4.webp";
import sliderImg5 from "../assets/winter-image_5.webp";
import sliderImg6 from "../assets/winter-image_6.jpg";

import firstImage from "../assets/event/first.jpg";
import secondImage from "../assets/event/second.jpg";
import thirdImage from "../assets/event/third.jpg";

import Swal from "sweetalert2";

import dhakaImg from "../assets/annual-report/dhaka.jpg";
import ctgImg from "../assets/annual-report/chittagong.jpg";
import rajshahiImg from "../assets/annual-report/rajshahi.jpg";

const sliderData = [
    {
        image: sliderImg1,
        title: "Campaign 1: Warm Smiles for Winter",
        description:
            "Help us deliver warm clothing and accessories to families in need. Every small act of kindness can spread a warm smile this winter.",
    },
    {
        image: sliderImg2,
        title: "Campaign 2: Spread Warmth",
        description:
            "Join our effort to collect and distribute warm winter clothing to underserved communities across the country.",
    },
    {
        image: sliderImg3,
        title: "Campaign 3: Blanket the Nation",
        description:
            "Let’s come together to provide blankets and jackets to help individuals brave the cold this winter season.",
    },
    {
        image: sliderImg4,
        title: "Campaign 4: Winter Essentials Drive",
        description:
            "Contribute winter essentials like gloves, scarves, and socks to support vulnerable communities during harsh weather conditions.",
    },
    {
        image: sliderImg5,
        title: "Campaign 5: Warm Hearts Initiative",
        description:
            "Join us in spreading warmth to children and elderly individuals by donating new or gently used winter clothing.",
    },
    {
        image: sliderImg6,
        title: "Campaign 6: Community Warmth Network",
        description:
            "Build a network of support by donating and volunteering to help distribute winter clothes to families in need.",
    },
];

// events data
const eventsData = [
    {
        id: 1,
        title: "Warmth for All: Distribution Event",
        date: "December 12, 2024",
        time: "9:00 AM",
        location: "Barisal Riverfront Park",
        description:
            "Join us as we distribute donated winter clothing to families in need. Volunteers are welcome to assist with the distribution process.",
        image: firstImage,
    },
    {
        id: 2,
        title: "Community Donation Drive",
        date: "December 18, 2024",
        time: "11:00 AM",
        location: "Rangpur City Square",
        description:
            "A community event where donors can drop off winter clothing and enjoy a day of food stalls, music, and fun activities.",
        image: secondImage,
    },
    {
        id: 3,
        title: "Holiday Hope: Fundraising Concert",
        date: "December 24, 2024",
        time: "7:00 PM",
        location: "Khulna Cultural Center",
        description:
            "An evening of music and performances to raise funds for our winter clothing campaign. Tickets available online and at the venue.",
        image: thirdImage,
    },
];

const Home = () => {
    const handleRegister = (title) => {
        Swal.fire({
            title: "Registration Successful!",
            text: `You have successfully registered for "${title}".`,
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#3085d6",
        });
    };

    return (
        <div className="min-h-screen bg-blue-50">
            <section
                className="relative"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
            >
                <Swiper
                    navigation
                    loop
                    pagination={{ clickable: true }}
                    className="h-[500px]"
                    autoplay={{ delay: 5000 }}
                    modules={[Navigation, Pagination, Autoplay]}
                >
                    {sliderData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-wrap items-center justify-center h-full p-4 lg:flex-nowrap">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="object-cover w-full h-48 rounded-lg lg:w-1/2 lg:h-full"
                                />
                                <div className="w-full p-8 text-center lg:w-1/2 lg:text-left">
                                    <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                                        {slide.title}
                                    </h2>
                                    <p className="mt-4 text-sm text-gray-600 md:text-lg">
                                        {slide.description}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section
                className="relative p-8 text-center bg-white"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div
                    className="relative overflow-hidden rounded-lg shadow-lg"
                    data-aos="zoom-in"
                    data-aos-duration="1200"
                >
                    <img
                        src={aboutImg}
                        alt="Winter Clothing Campaign"
                        className="object-cover w-full h-96"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="text-white">
                            <h2 className="text-4xl font-semibold">About Us</h2>
                            <p className="max-w-3xl mx-auto mt-4 text-sm md:text-lg">
                                We are a nonprofit organization committed to
                                making winters warmer for those in need. Our
                                mission is to bridge the gap between donors and
                                volunteers to ensure essential winter clothing
                                reaches the underprivileged across Bangladesh.
                            </p>
                            <p className="max-w-3xl mx-auto mt-4 text-sm md:text-lg">
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

            <section
                className="p-8 bg-blue-100"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <h2
                    className="text-4xl font-semibold text-center text-gray-700"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    How It Works
                </h2>
                <p
                    className="max-w-3xl mx-auto mt-4 text-lg text-center text-gray-600"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    Our process is simple and effective, ensuring that every
                    donation reaches the people who need it the most.
                    Here&apos;s how you can get involved:
                </p>
                <div
                    className="grid gap-12 mt-12 sm:grid-cols-2 lg:grid-cols-3"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    <div
                        className="text-center"
                        data-aos="zoom-in"
                        data-aos-delay="800"
                    >
                        <img
                            src={donation}
                            alt="Donate"
                            className="w-20 mx-auto mb-4"
                            data-aos="flip-left"
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

                    <div
                        className="text-center"
                        data-aos="zoom-in"
                        data-aos-duration="800"
                        data-aos-delay="200"
                    >
                        <img
                            src={volunteer}
                            alt="Volunteer"
                            className="w-20 mx-auto mb-4"
                            data-aos="flip-up"
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

                    <div
                        className="text-center"
                        data-aos="zoom-in"
                        data-aos-duration="800"
                        data-aos-delay="400"
                    >
                        <img
                            src={share}
                            alt="Share"
                            className="w-20 mx-auto mb-4"
                            data-aos="flip-right"
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
                <div
                    className="mt-12 text-center"
                    data-aos="zoom-in"
                    data-aos-duration="1200"
                >
                    <Link
                        to="/donation-campaign"
                        className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                        Get Involved
                    </Link>
                </div>
            </section>

            {/* Upcoming events */}
            <section
                className="py-16 bg-gray-50"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="container px-4 mx-auto max-w-7xl">
                    <h2
                        className="text-3xl font-bold text-center text-gray-800 sm:text-4xl"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        Upcoming Events
                    </h2>
                    <p
                        className="my-8 text-center text-gray-600"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        Join us in making a difference. Check out our upcoming
                        events and register to participate.
                    </p>
                    <div
                        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="400"
                    >
                        {eventsData.map((event) => (
                            <div
                                key={event.id}
                                className="flex flex-col justify-between p-6 bg-white rounded-lg shadow-lg"
                                data-aos="zoom-in"
                                data-aos-duration="800"
                                data-aos-delay="600"
                            >
                                <div>
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="object-cover w-full h-48 rounded-lg"
                                        data-aos="flip-left"
                                        data-aos-duration="1000"
                                    />
                                    <h4
                                        className="mt-4 text-xl font-bold text-gray-800"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-delay="200"
                                    >
                                        {event.title}
                                    </h4>
                                    <p
                                        className="mt-2 text-gray-600"
                                        data-aos="fade-up"
                                    >
                                        <strong>Date:</strong> {event.date}
                                    </p>
                                    <p
                                        className="mt-1 text-gray-600"
                                        data-aos="fade-up"
                                    >
                                        <strong>Time:</strong> {event.time}
                                    </p>
                                    <p
                                        className="mt-1 text-gray-600"
                                        data-aos="fade-up"
                                    >
                                        <strong>Location:</strong>{" "}
                                        {event.location}
                                    </p>
                                    <p
                                        className="mt-3 text-gray-600"
                                        data-aos="fade-up"
                                    >
                                        {event.description}
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <button
                                        onClick={() =>
                                            handleRegister(event.title)
                                        }
                                        className="w-full px-4 py-2 text-white transition bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        data-aos="zoom-in"
                                        data-aos-delay="400"
                                    >
                                        Register
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Annual report */}
            <section
                className="min-h-screen py-16 bg-gray-50"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="container px-4 mx-auto max-w-7xl">
                    <h2
                        className="max-w-full overflow-hidden text-3xl font-bold text-center text-gray-800 sm:text-4xl"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        Annual Report 2024
                    </h2>
                    <p
                        className="max-w-full mt-4 overflow-hidden text-center text-gray-600"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        A glimpse of the incredible journey we&apos;ve had this
                        year in making a difference.
                    </p>

                    <div
                        className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-delay="400"
                    >
                        <div
                            className="p-6 text-center bg-white rounded-lg shadow-lg"
                            data-aos="flip-right"
                        >
                            <h3 className="text-3xl font-bold text-blue-500">
                                1200+
                            </h3>
                            <p className="mt-2 text-lg text-gray-700">Donors</p>
                        </div>
                        <div
                            className="p-6 text-center bg-white rounded-lg shadow-lg"
                            data-aos="flip-left"
                        >
                            <h3 className="text-3xl font-bold text-cyan-500">
                                8000+
                            </h3>
                            <p className="mt-2 text-lg text-gray-700">
                                People Helped
                            </p>
                        </div>
                        <div
                            className="p-6 text-center bg-white rounded-lg shadow-lg"
                            data-aos="flip-up"
                        >
                            <h3 className="text-3xl font-bold text-teal-500">
                                50+
                            </h3>
                            <p className="mt-2 text-lg text-gray-700">
                                Campaigns
                            </p>
                        </div>
                        <div
                            className="p-6 text-center bg-white rounded-lg shadow-lg"
                            data-aos="flip-down"
                        >
                            <h3 className="text-3xl font-bold text-indigo-500">
                                300+
                            </h3>
                            <p className="mt-2 text-lg text-gray-700">
                                Volunteers
                            </p>
                        </div>
                    </div>

                    <div
                        className="mt-16"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="600"
                    >
                        <h3 className="text-2xl font-bold text-center text-gray-800 sm:text-3xl">
                            Success Highlights
                        </h3>
                        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div
                                className="p-6 bg-white rounded-lg shadow-lg"
                                data-aos="zoom-in"
                                data-aos-delay="400"
                            >
                                <img
                                    src={dhakaImg}
                                    alt="Success Story"
                                    className="object-cover w-full h-48 rounded-lg"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                />
                                <h4 className="mt-4 text-xl font-bold text-gray-800">
                                    Helping Communities
                                </h4>
                                <p className="mt-2 text-gray-600">
                                    This year, we distributed over 5,000 warm
                                    clothes in Dhaka, transforming lives during
                                    the harsh winter.
                                </p>
                            </div>
                            <div
                                className="p-6 bg-white rounded-lg shadow-lg"
                                data-aos="zoom-in"
                                data-aos-delay="600"
                            >
                                <img
                                    src={ctgImg}
                                    alt="Success Story"
                                    className="object-cover w-full h-48 rounded-lg"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                />
                                <h4 className="mt-4 text-xl font-bold text-gray-800">
                                    Spreading Warmth
                                </h4>
                                <p className="mt-2 text-gray-600">
                                    Volunteers worked tirelessly to deliver
                                    3,000 clothing packages to families in need,
                                    ensuring a warmer winter in Chattogram.
                                </p>
                            </div>

                            <div
                                className="p-6 bg-white rounded-lg shadow-lg"
                                data-aos="zoom-in"
                                data-aos-delay="800"
                            >
                                <img
                                    src={rajshahiImg}
                                    alt="Success Story"
                                    className="object-cover w-full h-48 rounded-lg"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                />
                                <h4 className="mt-4 text-xl font-bold text-gray-800">
                                    Empowering the Youth
                                </h4>
                                <p className="mt-2 text-gray-600">
                                    Over 2,000 students received winter clothing
                                    and essentials, enabling them to focus on
                                    their education without the burden of cold
                                    weather.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
