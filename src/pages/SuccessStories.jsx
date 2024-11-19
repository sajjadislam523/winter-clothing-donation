const SuccessStories = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container px-4 mx-auto max-w-7xl">
                <h2 className="text-3xl font-bold text-center text-gray-800 sm:text-4xl">
                    Success Stories
                </h2>
                <p className="mt-4 text-center text-gray-600">
                    See how your contributions have transformed lives across
                    Bangladesh.
                </p>
                <div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="relative p-6 transition bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl">
                        <img
                            src="https://via.placeholder.com/300"
                            alt="Success Story"
                            className="object-cover w-full h-40 rounded-md"
                        />
                        <h3 className="mt-4 text-xl font-semibold text-gray-800">
                            A Warm Winter for Rahim
                        </h3>
                        <p className="mt-2 text-gray-600">
                            With your help, Rahim&apos;s family received winter
                            clothing that kept them safe and warm during the
                            harsh cold.
                        </p>
                    </div>
                    {/* Add more cards as needed */}
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
