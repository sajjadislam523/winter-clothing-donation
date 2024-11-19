import Swal from "sweetalert2";

import firstImage from "../assets/event/first.jpg";
import secondImage from "../assets/event/second.jpg";
import thirdImage from "../assets/event/third.jpg";

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

const UpcomingEvents = () => {
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
        <section className="py-16 bg-gray-50">
            <div className="container px-4 mx-auto max-w-7xl">
                <h2 className="text-3xl font-bold text-center text-gray-800 sm:text-4xl">
                    Upcoming Events
                </h2>
                <p className="mt-4 text-center text-gray-600">
                    Join us in making a difference. Check out our upcoming
                    events and register to participate.
                </p>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {eventsData.map((event) => (
                        <div
                            key={event.id}
                            className="flex flex-col justify-between p-6 bg-white rounded-lg shadow-lg"
                        >
                            <div>
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="object-cover w-full h-48 rounded-lg"
                                />
                                <h4 className="mt-4 text-xl font-bold text-gray-800">
                                    {event.title}
                                </h4>
                                <p className="mt-2 text-gray-600">
                                    <strong>Date:</strong> {event.date}
                                </p>
                                <p className="mt-1 text-gray-600">
                                    <strong>Time:</strong> {event.time}
                                </p>
                                <p className="mt-1 text-gray-600">
                                    <strong>Location:</strong> {event.location}
                                </p>
                                <p className="mt-3 text-gray-600">
                                    {event.description}
                                </p>
                            </div>
                            <div className="mt-4">
                                <button
                                    onClick={() => handleRegister(event.title)}
                                    className="w-full px-4 py-2 text-white transition bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
