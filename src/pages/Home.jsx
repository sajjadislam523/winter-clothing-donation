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

            <section className="p-8 text-center">
                <h2 className="text-3xl font-semibold text-gray-700">
                    About Us
                </h2>
                <p className="max-w-3xl mx-auto mt-4 text-gray-600">
                    Our mission is to connect donors with volunteers to provide
                    warm clothing to those in need across Bangladesh. Together,
                    we can make a difference this winter.
                </p>
            </section>

            <section className="p-8 bg-blue-100">
                <h2 className="text-3xl font-semibold text-center text-gray-700">
                    How It Works
                </h2>
                <div className="flex flex-col justify-center gap-8 mt-8 md:flex-row">
                    <div className="text-center">
                        <img
                            src="https://via.placeholder.com/100?text=Donate"
                            alt="Donate"
                            className="mx-auto"
                        />
                        <h3 className="mt-4 text-lg font-bold text-gray-700">
                            Donate
                        </h3>
                        <p className="text-gray-600">
                            Drop off your winter clothes at our collection
                            points.
                        </p>
                    </div>

                    <div className="text-center">
                        <img
                            src="https://via.placeholder.com/100?text=Volunteer"
                            alt="Volunteer"
                            className="mx-auto"
                        />
                        <h3 className="mt-4 text-lg font-bold text-gray-700">
                            Volunteer
                        </h3>
                        <p className="text-gray-600">
                            Help distribute donations to communities in need.
                        </p>
                    </div>

                    <div className="text-center">
                        <img
                            src="https://via.placeholder.com/100?text=Share"
                            alt="Share"
                            className="mx-auto"
                        />
                        <h3 className="mt-4 text-lg font-bold text-gray-700">
                            Share
                        </h3>
                        <p className="text-gray-600">
                            Spread the word to encourage more donations.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
